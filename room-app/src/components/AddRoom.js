import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import roomService from "../services/room.service";

const AddRoom = () => {

    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const history = useNavigate();
    const { id } = useParams();


    const saveRoom = (e) => {
        e.preventDefault();

        const room = { type, description, location, id };
        if (id) {
            roomService.update(room)
                .then(response => {
                    console.log("Room data updated succfesfully", response.data);
                    history('/');
                })
                .catch(error => {
                    console.log("Something went wrong!", error);
                });
        } else {
            roomService.create(room)
                .then(response => {
                    console.log("Room data added succesfully", response.data);
                })
                .catch(error => {
                    console.log("Something went wrong!", error);
                });
        }
    }

    useEffect(() => {
        if (id) {
            roomService.get(id)
                .then(room => {
                    setType(room.data.type);
                    setDescription(room.data.description);
                    setLocation(room.data.location);
                })
                .catch(error => {
                    console.log("Something went wrong!", error);
                })
        }
    }, [])

    return (
        <div className="container" style={{backgroundColor: "#cce6ff"}}>
            <h3>Add new room</h3>
            <hr />
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        placeholder="Enter type"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location"
                    />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(e) => saveRoom(e)}>Save</button>
                </div>
            </form>
            <hr />
            <Link to="/">Back to List</Link>
        </div>
    );
}

export default AddRoom;