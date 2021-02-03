import Header from "./Header.js";
import './ShowSubscribers.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ShowSubscriber extends Component {
  // let subscribers = [
  //   {id : 1, name : 'Abc', phone : '1111111111'}, 
  //   {
  //     id : 2, name : 'qwc', phone : '2222222222'
  //   }
  // ]
  constructor() {
    super();
    this.state = {subscribersListToShow : []};
  }
  render() {
  const deleteHandler = function (message) {
    alert(message);
  }
  return (
    
    <div>
      <Header heading = "phone directory"/>
    <Link to = "/add"><button id = "btng">Add</button></Link>
    <div>
    <span id = "name">Name</span>
    <span id = "phone">Phone</span>
    {
      this.props.subscribersList.map(sub => {return <div key = {sub.id}>
       <span id = "name">{sub.name}</span>
       <span id = "phone">{sub.phone}</span>
       <button id = "btnd" onClick = {deleteHandler.bind(this, 'Delete is clicked')}>Delete</button>
       </div> 
        })
    }
    </div> 
   </div>
    );
  
}
}
export default ShowSubscriber;
