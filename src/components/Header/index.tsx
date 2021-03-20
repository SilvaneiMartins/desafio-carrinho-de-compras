/*
 *   Nome: Silvanei de Almeida Martins;
 *   E-mail: silvaneimartins_rcc@hotmail.com;
 *   Contato Telegram: (69) 9.8405-2620;
 *   Frase: Estamos em constante mudança no aprendizado;
 *   Assinatura: Silvanei Martins;
 */
import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

import logo from "../../assets/images/logo.svg";
import { Container, Cart } from "./styles";
import { useCart } from "../../hooks/useCart";

const Header = (): JSX.Element => {
    const { cart } = useCart();
    const cartSize = cart.length;

    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Rocketshoes" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span data-testid="cart-size">
                        {cartSize === 1
                            ? `${cartSize} item`
                            : `${cartSize} itens`}
                    </span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );
};

export default Header;
