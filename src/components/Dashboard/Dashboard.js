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
        newItemImage: '',
        currentLoadoutID: 0,
        currentLoadoutName: ''
    }
    componentDidMount() {
        this.getItemNames()
        this.getLoadoutNames()
    }

    getItemNames() {
        axios.get('/api/items/names').then(res => {
            this.setState({
                itemNames: res.data
            })
        })
    }

    getLoadoutNames() {
        axios.get('/api/loadouts/names').then(res => {
            this.setState({
                loadoutNames: res.data
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

    getLoadout = (ID) => {
        axios.get(`/api/loadouts/names?loadout_id=${ID}`).then(res => {
            this.setState({
                currentLoadoutName: res.data[0].loadout_name,
                currentLoadoutID: res.data[0].loadout_id
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
            axios.post('/api/items', { item_name, item_image }).then(res => {
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
                    idKey={'item_id'}
                    placeholder={'filter items'}
                    function={this.getItem}
                />
                <Search
                    names={this.state.loadoutNames}
                    nameKey={'loadout_name'}
                    idKey={'loadout_id'}
                    placeholder={'filter loadouts'}
                    function={this.getLoadout}
                />
                <div className="new-item-container">
                    <input className="new-item-name" onChange={e => { this.handleChange(e, 'newItem') }} placeholder='new item name' />
                    <input className="new-item-url" onChange={e => { this.handleChange(e, 'newItemImage') }} placeholder='new item url' />
                    <button onClick={() => { this.newItem() }}>add item</button>
                </div>
                <img src={this.state.currentItemImage} alt="" />
                <h1>{this.state.currentLoadoutName}</h1>
            </div>
        );
    }
}

export default Dashboard;
