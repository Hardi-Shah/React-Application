import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserService, deleteUserServiceById } from "../../../services/UserService";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await getUserService()
        setUsers(result.data.reverse());

    };
    const deleteUser = async id => {
        await deleteUserServiceById(id)
        loadUsers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>User List</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link className="btn fa fa-eye  btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}> Edit</Link>
                                    <Link className="btn  btn-danger mr-2" to="" onClick={() => deleteUser(user.id)}> Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Home;
