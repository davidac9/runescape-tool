import React, { Component } from 'react';
import './Search.css'

export default class Search extends Component {
    state = {
    }


    render() {
        return (
            <div className="Search">
                <input className="search-input" placeholder="filter items"/>
                <div className="result-container">
                    <li className="search-result">crab</li>
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
                    <li className="search-result">crab</li>
                </div>
            </div>
        )
    }
}