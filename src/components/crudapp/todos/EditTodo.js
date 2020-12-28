import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
const EditTodo = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
       title:""
    });
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3002/todos/${id}`, user);
        history.push("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3002/todos/${id}`);
        setUser(result.data);
    };

    const { title } = user;
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5" style={{ marginTop: "35px" }}>
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="title"
                            value={title}
                            onChange={e => onInputChange(e)}
                        />
                    </div>              
                    <button className="btn btn-warning btn-block">Edit User</button>
                </form>
            </div>
        </div>
    )
};

export default EditTodo;