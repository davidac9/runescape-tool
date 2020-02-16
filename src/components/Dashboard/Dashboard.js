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

  getItem = (ID) => {
      axios.get(`/api/items?item_id=${ID}`).then(res => {
          this.setState({
              currentItemImage: res.data[0].item_image,
              currentItemID: res.data[0].item_id
          })
      })
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
      <img src={this.state.currentItemImage} alt=""/>
    </div>
  );
}
}

export default Dashboard;
