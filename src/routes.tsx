/*
 *   Nome: Silvanei de Almeida Martins;
 *   E-mail: silvaneimartins_rcc@hotmail.com;
 *   Contato Telegram: (69) 9.8405-2620;
 *   Frase: Estamos em constante mudança no aprendizado;
 *   Assinatura: Silvanei Martins;
 */
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

const Routes = (): JSX.Element => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
        </Switch>
    );
};

export default Routes;
