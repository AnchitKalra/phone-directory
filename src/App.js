import Header from "./Header.js";
import './App.css';

function App() {
  let subscribers = [
    {id : 1, name : 'Abc', phone : '1111111111'}, 
    {
      id : 2, name : 'qwc', phone : '2222222222'
    }
  ]
  const deleteHandler = function (message) {
    alert(message);
  }
  return (
    <div>
      <Header heading = "phone directory"/>
    <button id = "btng">Add</button>
    <div>
    <span id = "name">Name</span>
    <span id = "phone">Phone</span>
    {
      subscribers.map(sub => {return <div key = {sub.id}>
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

export default App;
