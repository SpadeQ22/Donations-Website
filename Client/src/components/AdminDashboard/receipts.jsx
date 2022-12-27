import Nav from '../Home_page/navbar/nav';
import './users.css';

import React, { Component } from 'react';


function Receipts() {

        var box =
        [['First Name','first_name'], ['Last Name','last_name'], ['Email','email']];
      

        var body =
            [['1', '100', '6', '12'],
            ['2', '2010230', '6', '12'],
            ['3', '1233', '6', '12'],
            ['4', '92445', '6', '12']];
    
        return (
            <div>
                 <Nav />
                <table id="receipt-table" class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Campaign Id</th>
                            <th scope="col">Timestamp</th>
                            <th scope="col">View Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        {body.map((row,index) => <tr>
                            <td>{row[0]}</td>
                            <td>{row[1]}</td>
                            <td>{row[2]}</td>
                            <td>{row[3]}</td>
                            <td><a id={`edit_${row[0]}`} class='edit' data-target="#modal" data-toggle="modal">View Details</a></td>

                        </tr>)}
    
                    </tbody>
                </table>
    
                <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Details</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            <form>
    
                            {box.map((ele,i) =>  
                                    <div id={`form-${ele[1]}`} class="form-group">
                                        <label class="col-form-label">{ele[0]}</label>
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

export default Receipts;
