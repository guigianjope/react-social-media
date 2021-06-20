import React, { Component } from 'react'
import Home from './pages/Home'
import Details from './pages/Details'
import {Route} from "react-router-dom"


export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Home} exact />
                    <Route path="/Details/:id" component={Details} exact />
            </section>
        )
    }
}

export default Section