import Header from "./Header.js";
import './App.css';
function App() {
  let subscribers = [
    {id : 1, name : 'Abc', phone : '1111111111'}, 
    {
      id : 2, name : 'qwc', phone : '2222222222'
    }
  ]
  return (
    <div>
      <Header />
    <button id = "btng">Add</button>
    <div>
    <span id = "name">Name</span>
    <span id = "phone">Phone</span>
    {
      subscribers.map(sub => {return <div key = {sub.id}>
       <span id = "name">{sub.name}</span>
       <span id = "phone">{sub.phone}</span>
       </div> 
        })
    }
    </div> 
   </div>
  );
}

export default App;
