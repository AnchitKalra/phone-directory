import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber.js';

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {subscribersListToShow : []};
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersListToShow = this.state.subscribersListToShow;
        if(subscribersListToShow.length > 0) {
            newSubscriber.id = subscribersListToShow[subscribersListToShow.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }
        subscribersListToShow.push(newSubscriber);
        console.log(subscribersListToShow, "   id: ", newSubscriber.id);
        this.setState({subscribersListToShow : subscribersListToShow});
        
    }
    render() {

        return(
                <AddSubscriber addSubscriberHandler = {this.addSubscriberHandler} />
        )
    }
}
export default PhoneDirectory;