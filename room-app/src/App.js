import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRoom from "./components/AddRoom";
import NotFound from "./components/NotFound";
import RoomsList from "./components/RoomsList";

function App() {


  // style={{backgroundColor: "#b3b3ff"}}
  return (
    <BrowserRouter>
      <img src="room.jpg" width="1600" height = "250"></img>
      <div style={{backgroundColor: "#99ddff"}}>
        <Routes>
          <Route path="/" element={<RoomsList/>} />
          <Route path="/add" element={<AddRoom/>} />
          <Route path="/rooms/edit/:id" element={<AddRoom/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;