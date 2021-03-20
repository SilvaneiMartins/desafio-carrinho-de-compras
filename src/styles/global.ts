/*
 *   Nome: Silvanei de Almeida Martins;
 *   E-mail: silvaneimartins_rcc@hotmail.com;
 *   Contato Telegram: (69) 9.8405-2620;
 *   Frase: Estamos em constante mudança no aprendizado;
 *   Assinatura: Silvanei Martins;
 */
import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
    :root {
        --red: #E52E4D;
        --blue: #5429CC;
        --blue: #202024;
        --green: #33CC95;

        --blue-light: #1A1A1D;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --backgroundShape: #29292E;
        --backgroundBlack: #121214;
        --background: #F0F2F5;
        --background-dark: #222222;
        --shape: #FFFFFF;

        --input-background: #E7E9EE;
        --input-border: #D7D7D7;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #191920 url(${background}) no-repeat center top;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
    }

    #root {
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    button {
        cursor: pointer;
    }

    body::-webkit-scrollbar {
        width: 12px;
    }

    body::-webkit-scrollbar-track {
        background: var(--backgroundShape);
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--backgroundBlack);
        border-radius: 20px;
        border: 3px solid var(--blue-light);
    }
`;
