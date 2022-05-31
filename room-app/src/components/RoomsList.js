import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import roomService from "../services/room.service";
import { Link } from "react-router-dom";


const RoomsList = () => {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    init();
  }, [])

  const init = () => {
    roomService.getAll()
      .then(respose => {
        console.log('Printing the rooms data', respose.data);
        setRooms(respose.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  const handleDelete = id => {
    roomService.remove(id)
      .then(response => {
        console.log("Room deleted succesfully", response.data);
        init();
      })
      .catch(error => {
        console.log("Something went wrong", error);
      })
  }

  return (
    <div className="container" style={{backgroundColor: "#cce6ff"}}>
      <h3 style = {{color:"blue"}}>List of Rooms</h3>
      <hr />
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Room</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              rooms.map(room => (
                <tr key={room.id}>
                  <td>{room.type}</td>
                  <td>{room.description}</td>
                  <td>{room.location}</td>
                  <td>
                    <Link className="btn btn-info" to={`/rooms/edit/${room.id}`}>Update</Link>
                    <button className="btn btn-danger ml-2" onClick={(e) => {
                      handleDelete(room.id)
                    }}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RoomsList;
