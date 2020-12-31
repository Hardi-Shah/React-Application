import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import './user.css';
import { editUserService, getUserServiceById } from "../../../services/UserService";

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        email:"",
        address:"",
        phone:""

    });
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await editUserService(id, user)
        history.push("/");
    };

    const loadUser = async () => {
        await getUserServiceById(id)
            .then(res => setUser(res.data))
            .catch(err => {
                history.push("/NotFound");
            })
    };

    const { name,email,address,phone } = user;
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5 EditStyle" >
                <h2 className="text-center mb-4">Edit A User</h2>
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
                    <button className="btn btn-warning btn-block">Edit User</button>
                </form>
            </div>
        </div>
    )
};

export default EditUser