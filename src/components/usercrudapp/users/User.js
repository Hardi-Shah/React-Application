import React, { useState, useEffect, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getUserServiceById } from "../../../services/UserService";

const User = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        address: "",
        phone: ""
    });
    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await getUserServiceById(id);
        setUser(res.data);
    };

    return (
        <div className="container py-4">
            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">Name: {user.name}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">Address: {user.address}</li>
                <li className="list-group-item">PhoneNo.: {user.phone}</li>
            </ul>
        </div>
    );
};

export default User;