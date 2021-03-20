/*
 *   Nome: Silvanei de Almeida Martins;
 *   E-mail: silvaneimartins_rcc@hotmail.com;
 *   Contato Telegram: (69) 9.8405-2620;
 *   Frase: Estamos em constante mudança no aprendizado;
 *   Assinatura: Silvanei Martins;
 */
import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { Product, Stock } from "../types";

interface CartProviderProps {
    children: ReactNode;
}

interface UpdateProductAmount {
    productId: number;
    amount: number;
}

interface CartContextData {
    cart: Product[];
    addProduct: (productId: number) => Promise<void>;
    removeProduct: (productId: number) => void;
    updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState<Product[]>(() => {
        const storagedCart = localStorage.getItem("@RocktShoes:cart");

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

    const addProduct = async (productId: number) => {
        try {
            const productAlreadyInCart = cart.find(
                (product) => product.id === productId
            );

            if (!productAlreadyInCart) {
                const { data: product } = await api.get<Product>(
                    `products/${productId}`
                );
                const { data: stock } = await api.get<Stock>(
                    `stock/${productId}`
                );

                if (stock.amount > 0) {
                    setCart([...cart, { ...product, amount: 1 }]);
                    localStorage.setItem(
                        "@RocktShoes:cart",
                        JSON.stringify([...cart, { ...product, amount: 1 }])
                    );
                    toast("Adicionado ao carrinho!");
                    return;
                }
            }

            if (productAlreadyInCart) {
                const { data: stock } = await api.get(`stock/${productId}`);

                if (stock.amount > productAlreadyInCart.amount) {
                    const updateCart = cart.map((cartItem) =>
                        cartItem.id === productId
                            ? {
                                  ...cartItem,
                                  amount: Number(cartItem.amount) + 1,
                              }
                            : cartItem
                    );

                    setCart(updateCart);
                    localStorage.setItem(
                        "@RocktShoes:cart",
                        JSON.stringify(updateCart)
                    );
                    return;
                } else {
                    toast.error("Quantidade solicítada está fora de estoque!");
                }
            }
        } catch {
            toast.error("Erro ao adicionar um produto!");
        }
    };

    const removeProduct = (productId: number) => {
        try {
            const productExists = cart.some(
                (cartProduct) => cartProduct.id === productId
            );

            if (!productExists) {
                toast.error("Erro ao excluir um produto!");
                return;
            }

            const updateCart = cart.filter(
                (cartItem) => cartItem.id !== productId
            );
            setCart(updateCart);
            localStorage.setItem(
                "@RocktShoes:cart",
                JSON.stringify(updateCart)
            );
        } catch {
            toast.error("Erro ao remover um produto!");
        }
    };

    const updateProductAmount = async ({
        productId,
        amount,
    }: UpdateProductAmount) => {
        try {
            if (amount < 1) {
                toast.error("Erro ao alterar a quantidade de um produto!");
                return;
            }

            const response = await api.get(`stock/${productId}`);
            const productAmount = response.data.amount;
            const stockFree = amount > productAmount;

            if (stockFree) {
                toast.error("A quantidade solicítada está fora do estoque!");
                return;
            }

            const productExists = cart.some(
                (cartProduct) => cartProduct.id === productId
            );
            if (!productExists) {
                toast.error("Erro ao alterar a quantidade de produto!");
                return;
            }

            const updateCart = cart.map((cartItem) =>
                cartItem.id === productId
                    ? {
                          ...cartItem,
                          amount: amount,
                      }
                    : cartItem
            );
            setCart(updateCart);
            localStorage.setItem(
                "@RocktShoes:cart",
                JSON.stringify(updateCart)
            );
        } catch {
            toast.error("Erro ao alterar a quantidade de um produto!");
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, addProduct, removeProduct, updateProductAmount }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart(): CartContextData {
    const context = useContext(CartContext);

    return context;
}
