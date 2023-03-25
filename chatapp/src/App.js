
import './App.css';
import Join from "./component/Join/Join.js";
import Chat from "./component/chat/Chat.js"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
 
  return (
    <div className="App">
    
   
       <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<Join/>} />
       <Route path="/chat" element={<Chat/>}/>
       </Routes>
       </BrowserRouter>
     
    </div>
  );
}

export default App;
