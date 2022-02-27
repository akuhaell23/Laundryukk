import React from "react"
import Navbar from "../component/navbar"
export default class Home extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div> 
                <Navbar />
                <h1>Ini Halaman User</h1>
            </div>
        )
    }
}