import React, { Component } from 'react';
import './Search.css'

export default class Search extends Component {
    state = {
    }


    render() {
        const names = this.props.names.map(el => (
            <li className='search-result' >
                {el[this.props.nameKey]}
            </li>
        ))
        return (
            <div className="Search">
                <input className="search-input" placeholder="filter items"/>
                <div className="result-container">
                    {names}
                    {/* <li className="search-result">crab</li>
                    <li className="search-result">Abyssal whip</li>
                    <li className="search-result">Ruby ring</li>
                    <li className="search-result">dragon spear</li>
                    <li className="search-result">crabacrabacrabacrabacrabacra bacrabacrabacrabacraba</li>
                    <li className="search-result">crab</li>
                    <li className="search-result">crab</li>
                    <li className="search-result">crab</li>
                    <li className="search-result">crab</li>
                    <li className="search-result">crab</li>
                    <li className="search-result">crab</li>
                    <li className="search-result">crab</li>
                    <li className="search-result">crab</li>
                    <li className="search-result">crab</li>
                    <li className="search-result">crab</li> */}
                </div>
            </div>
        )
    }
}