import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Todo = () => {
    const [user, setUser] = useState({
       title:""
    });
    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3002/todos/${id}`);
        setUser(res.data);
    };
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                back to Home
      </Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">title: {user.title}</li>
            </ul>
        </div>
    );
};

export default Todo;