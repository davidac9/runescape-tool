import React, {Component} from 'react';
import './Dashboard.css';
import Search from '../Search/Search'
import axios from 'axios'

class Dashboard extends Component {
  state = {
    itemNames: [],
    loadoutNames: [],
    currentItemImage: '',
    currentItemID: 0
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

  render() {

    return (
      <div className="Dashboard">
      <Search/>
    </div>
  );
}
}

export default Dashboard;
