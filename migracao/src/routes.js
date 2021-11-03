import React from "react"
import { Switch, Route} from "react-router-dom"

import Index from './pages/Index/Index'
import Cards from './pages/Cards/Cards'
import Pricing from './pages/Pricing/Pricing'
import Blocks from './pages/Blocks/Blocks'
import Forms from './pages/Forms/Forms'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/index" component={Index} exact/>
            <Route path="/cards" component={Cards}/>
            <Route path="/pricing" component={Pricing}/>
            <Route path="/blocks" component={Blocks}/>
            <Route path="/forms" component={Forms}/>
        </Switch>
    )
}