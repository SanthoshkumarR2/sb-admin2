import { Link } from "react-router-dom"

import React from "react";


function User() {
    const users = [
        {
            id: 1,
            name: "Santhosh",
            position: " Full Stack Developer",
            office: "Santo",
            age: "21",
            startdate: "28/02/2024",
            salary: "50,000"
        },
        {
            id: 2,
            name: "Sabari",
            position: "Senior Developer", 
            office: "Santo",
            age: "24",
            startdate: "15/01/2024",
            salary: "50,000"
        },
        {
            id: 3,
            name: "Rajesh",
            position: "QA & Tester",
            office: "Santo",
            age: "23",
            startdate: "19/04/2024",
            salary: "50,000"
        },
        {
            id: 4,
            name: "Mani",
            position: "HR Manager",
            office: "Santo",
            age: "22",
            startdate: "10/08/2024",
            salary: "50,000"
        }
    ]


    return (
        <div class="container-fluid">

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Users</h1>
                <Link to="/portal/createuser" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i>Create user</Link>
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>#Sl</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>

                            <tbody>


                                {users.map((user, index) => {
                                    
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.position}</td>
                                        <td>{user.office}</td>
                                        <td>{user.age}</td>
                                        <td>{user.startdate}</td>
                                        <td>{user.salary}</td>


                                    </tr>
                                })}


                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default User;