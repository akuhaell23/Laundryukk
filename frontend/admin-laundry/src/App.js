import React from "react"
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login"
import Member from "./pages/member"
import User from "./pages/user"
import Paket from './pages/paket'
import Transaksi from "./pages/transaksi"
import Home from "./pages/home"

export default class App extends React.Component{
  render(){
    return(
      <switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/member" component={Member} />
        <Route path="/user" component={User} />
        <Route path="/transaksi" component={Transaksi} />
        <Route path="/paket" component={Paket} />
      </switch>
    )
  }
}