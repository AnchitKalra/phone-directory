import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber.js';
import ShowSubscribers from './ShowSubscribers.js';

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {subscribersList : [
            {id : 1, name : "Abc", phone : "123321"}, 
        {id : 2, name : "pqr", phone : "098890"}
    ]};
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        //console.log(subscribersListToShow, "   id: ", newSubscriber.id);
        this.setState({subscribersList : subscribersList});
        
    }
    render() {

        return(
                //<AddSubscriber addSubscriberHandler = {this.addSubscriberHandler} />
                <ShowSubscribers subscribersList = {this.state.subscribersList}/>
        )
    }
}
export default PhoneDirectory;