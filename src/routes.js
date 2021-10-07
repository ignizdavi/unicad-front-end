import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from "./pages/admin/dashboard";
import EntregasEditar from "./pages/admin/entregas/entragas.editar";
import Entregas from "./pages/admin/entregas";
import EntregaCadastrar from "./pages/admin/entregas/entregas.cadastrar";


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/admin" exact component={Dashboard} />
                <Route path="/admin/entregas" exact component={Entregas}/>
                <Route path="/admin/entregas/cadastrar" exact component={EntregaCadastrar}/>
                <Route path="/admin/entregas/editar/:idEntregas" exact component={EntregasEditar}/>
            </Switch>
        </BrowserRouter>
    )
}