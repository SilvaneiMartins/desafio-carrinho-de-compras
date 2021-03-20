/*
 *   Nome: Silvanei de Almeida Martins;
 *   E-mail: silvaneimartins_rcc@hotmail.com;
 *   Contato Telegram: (69) 9.8405-2620;
 *   Frase: Estamos em constante mudança no aprendizado;
 *   Assinatura: Silvanei Martins;
 */
export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
}

export interface Stock {
    id: number;
    amount: number;
}
