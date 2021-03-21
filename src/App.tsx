/*
 *   Nome: Silvanei de Almeida Martins;
 *   E-mail: silvaneimartins_rcc@hotmail.com;
 *   Contato Telegram: (69) 9.8405-2620;
 *   Frase: Estamos em constante mudança no aprendizado;
 *   Assinatura: Silvanei Martins;
 */
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import GlobalStyles from "./styles/global";
import Header from "../src/components/Header";
import { CartProvider } from "./hooks/useCart";

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <CartProvider>
                <GlobalStyles />
                <Header />
                <Routes />
                <ToastContainer autoClose={3000} />
            </CartProvider>
        </BrowserRouter>
    );
};

export default App;
