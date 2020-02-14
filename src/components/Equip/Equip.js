import React, {Component} from 'react';
import axios from 'axios';

export default class  Equip extends Component {
    state = {
        img: ''
    }


    render() {
        return (
            <div onClick={this.getImg}>
                equip is me
            </div>
        )
    }
}