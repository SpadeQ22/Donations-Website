import './users.css';
import Nav from '../Home_page/navbar/nav';
import React, { Component } from 'react';

function Users() {

    var box =
    [['First Name','first_name'], ['Last Name','last_name'], ['Email','email']];

    var data=['1', 'Omar', 'Ashraf', 'msh', 'ragel', ':)']   
    function set_data(i)
    {
        data=body[i]
    }

    var body =
        [['1', 'Omar', 'Ashraf', 'msh', 'ragel', ':)'],
        ['2', 'Aakash', 'Hisar', 'Btech', 'MCA', 'MCA'],
        ['3', 'Mani', 'Ranchi', 'MSc', 'MCA', 'MCA'],
        ['4', 'Yash', 'Udaipur', 'Mtech', 'MCA', 'MCA']];

    return (
        <div>
             <Nav />
            <table id="users-table" class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {body.map((row,index) => <tr><th scope="row">{row[0]}</th>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                        <td>{row[3]}</td>
                        <td>{row[4]}</td>
                        <td><a id={`edit_${row[0]}`} class='edit' data-target="#modal" data-toggle="modal"  onClick={set_data(index)}>Edit</a></td>
                    </tr>)}

                </tbody>
            </table>

            <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit user info</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <form>

                        {box.map((ele,i) =>  
                                <div id={`form-${ele[1]}`} class="form-group">
                                    <label class="col-form-label">{ele[0]}</label>
                                    <input type="text" class="form-control" id={`input_${ele[1]}`}/>
                                </div>)}
                        </form>
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;




{/* <tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>@mdo</td>
<td><a class='edit'>Edit</a></td>
</tr>
<tr>
<th scope="row">2</th>
<td>Jacob</td>
<td>Thornton</td>
<td>@fat</td>
<td>@fat</td>
<td><a class='edit'>Edit</a></td>
</tr>
<tr>
<th scope="row">3</th>
<td>Larry</td>
<td>the Bird</td>
<td>@twitter</td>
<td>@twitter</td>
<td><a class='edit'>Edit</a></td>
</tr> */}




{/* <form>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label${}">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name"/>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name"/>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name"/>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name"/>
                                </div>
                            </form> */}