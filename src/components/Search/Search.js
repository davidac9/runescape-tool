import React, { Component } from 'react';
import './Search.css'

export default class Search extends Component {
    state = {
    }


    render() {
        const names = this.props.names.map(el => (
            <li className='search-result' onClick={() => {this.props.function(el[this.props.idKey])}} >
                {el[this.props.nameKey]}
            </li>
        ))
        return (
            <div className="Search">
                <input className="search-input" placeholder={this.props.placeholder}/>
                <div className="result-container">
                    {names}

                </div>
            </div>
        )
    }
}