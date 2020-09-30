import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    render(){
        let i = 0
        let arr = []
        while (i < 500) {
            arr.push(<Spam />)
            i ++
        }
        return <div>{arr}</div>
    }
}
export default Spamalot

