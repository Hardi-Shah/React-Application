import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const AddTodo= () => {
    let history = useHistory();
    const [user, setUser] = useState({
        title: ""
    });
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3002/todos", user);
        history.push("/");
    }
    const { title } = user;
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5" style={{ marginTop: "35px" }}>
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Title"
                            name="title"
                            value={title}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    )
};
export default AddTodo;