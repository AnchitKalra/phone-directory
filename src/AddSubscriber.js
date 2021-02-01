import React, {Component} from 'react';
import Header from './Header.js';
import './AddSubscriber.css';
import './common/common.css';
class AddSubscriber extends Component {
    constructor() {
        super();
       this.state = {id:0,name : "", phone : ""};
        
    }
    inputChangedHandler = (e) => {
        const state = this.state;
        this.state[e.target.name] = e.target.value;
       this.setState(state);
        console.log(this.state);
    }
    render() {
        
        return(
            <div>
                <Header heading = "Add Subscriber" />
                <div className = "component-body-container">
                    <button className = "custom-btn">Back</button>
                    <form className = "subscriber-form">
                        <label htmlFor = "nameSubscriber" className = "label-control">Name:</label><br/>
                        <input type = "text" id = "nameSubscriber" className = "input-control" name = "name" onChange = {this.inputChangedHandler}/><br/><br/>
                        <label htmlFor = "phoneNumber" className = "label-control">Phone:</label><br/>
                        <input type = "text" id = "phoneNumber" className = "input-control" name = "phone" onChange = {this.inputChangedHandler}/><br/><br/>
                        <div className = "subscriber-info-container">
                            <span className = "subscriber-to-add-heading"> Subscriber to be added: </span><br/>
                            <span className = "subscriber-info">Name: {this.state.name}</span><br/>
                            <span className = "subscriber-info">Phone: {this.state.phone}</span><br/>
                        </div>
                        <button type = "submit" id = "btng"className = "custom-btn">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddSubscriber;