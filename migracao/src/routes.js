import React from "react"
import { Switch, Route} from "react-router-dom"

import Index from './pages/Index/Index'
import Cards from './pages/Cards/Cards'
import Pricing from './pages/Pricing/Pricing'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Index} exact/>
            <Route path="/cards" component={Cards}/>
            <Route path="/pricing" component={Pricing}/>
        </Switch>
    )
}