import './users.css';
import Nav from '../Home_page/navbar/nav';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import * as userController from '../../middleware/user.service';

function Users() {

    const [cookies, setCookie] = useCookies(['user']);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        'firstName':'',
        'lastName':'',
        'email':'',
        'userName':'',
        '_id': '',
        'password':'',
    });

    useEffect(()=>{
        userController.getAllUsers(cookies.user.token).then(response =>{
            setUsers(response.data);
        })
    }, [cookies]);

    const onChange = (e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const onSave = (e) =>{
        userController.editUserData(user, user._id, cookies.user.token).then(response => {
            if(response.status === "success"){
                window.alert("Saved Successfully!!");
            } else {
                window.alert('Error Happened During Save:\n' + response.errMsg)
            }
        })
    }

    let box =
    [['First Name','firstName', user.firstName], ['Last Name','lastName', user.lastName], ['Email','email', user.email], ['Username', 'userName', user.userName]];
    
    function set_data(index)
    {
        setUser(users[index]);
    }
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
                        <th scope="col">Username</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((row,index) => <tr><th scope="row">{index}</th>
                        <td>{row.firstName}</td>
                        <td>{row.lastName}</td>
                        <td>{row.email}</td>
                        <td>{row.userName}</td>
                        <td><a id={`edit_${index}`} class='edit' data-target="#modal" data-toggle="modal"  onClick={()=>set_data(index)}>Edit</a></td>
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
                                    <input type="text" name={ele[1]} class="form-control" onChange={onChange} id={`input_${ele[1]}`} value={ele[2]}/>
                                </div>)}
                        </form>
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={onSave}>Save</button>
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