import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './user.css';
import { addUserService } from "../../../services/UserService";

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        email:"",
        address:"",
        phone:""
    });
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };
    const onSubmit = async e => {
        e.preventDefault();
        await addUserService(user)
        history.push("/");
    }
    const { name,email,address,phone } = user;
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5 AddStyle" >
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter UserName"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    )
};
export default AddUser;