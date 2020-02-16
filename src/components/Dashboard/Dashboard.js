import React, { Component } from 'react';
import './Dashboard.css';
import Search from '../Search/Search'
import axios from 'axios'

class Dashboard extends Component {
    state = {
        itemNames: [],
        loadoutNames: [],
        currentItemImage: '',
        currentItemID: 0,
        newItem: '',
        newItemImage: ''
    }
    componentDidMount() {
        this.getItemNames()
    }

    getItemNames() {
        axios.get('/api/items/names').then(res => {
            this.setState({
                itemNames: res.data
            })
        })
    }

    getItem = (ID) => {
        axios.get(`/api/items?item_id=${ID}`).then(res => {
            this.setState({
                currentItemImage: res.data[0].item_image,
                currentItemID: res.data[0].item_id
            })
        })
    }
    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }

    newItem = () => {
        const {
            newItem: item_name,
            newItemImage: item_image
        } = this.state
        if (item_name !== '' && item_image !== '') {
            axios.post('/api/items', {item_name, item_image}).then(res => {
                this.getItemNames()
            })
        } else {
            alert('make sure you git the new item a name and an image url')
        }
    }

    deleteItem = () => {
        //not too sure if i want to delete items yet
    }

    render() {

        return (
            <div className="Dashboard">
                <Search
                    names={this.state.itemNames}
                    nameKey={'item_name'}
                    placeholder={'filter items'}
                    function={this.getItem}
                />
                <div className="new-item-container">
                    <input className="new-item-name" onChange={e => {this.handleChange(e, 'newItem')}} />
                    <input className="new-item-url" onChange={e => {this.handleChange(e, 'newItemImage')}}/>
                    <button onClick={() => {this.newItem()}}>add item</button>
                </div>
                <img src={this.state.currentItemImage} alt="" />
            </div>
        );
    }
}

export default Dashboard;
