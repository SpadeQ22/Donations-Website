import Nav from '../Home_page/navbar/nav';
import './users.css';

import React from 'react';
import * as receiptController from '../../middleware/receipt.service';

import {useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';


function Receipts() {
        const [cookies, setCookie] = useCookies(['user']);
        const [receipts, setReceipts] = useState([]);
        const [receipt, setReceipt] = useState(
            {
                "_id": "63a61bd736b59ddddd2700cc",
                "amount": 200,
                "userId": {
                    "_id": "63a10209cbfeb81a426f9842",
                    "email": "osn1111@gmail.cm",
                    "firstName": "Omar",
                    "lastName": "Ashraf",
                    "userName": "omarco2211",
                    "password": "$2b$10$qsb.kPaSx2YQKNguQqOInOCZtu7n5HF7qub6S3EFQa3XqOlswlGE2",
                    "__v": 0
                },
                "campaignId": {
                    "_id": "63a60eb9c397956750bbe9e0",
                    "totalDonations": 5300,
                    "campaignTitle": "Hunger",
                    "campaignDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "targetFund": 100000,
                    "__v": 0
                },
                "createdAt": "2022-12-23T21:21:27.128Z",
                "updatedAt": "2022-12-23T21:21:27.128Z",
                "__v": 0
            }
        );

        useEffect(()=>{
            receiptController.getAllReceipts(cookies.user.token).then(response => {
                setReceipts(response.data);
            });
        }, [])

        let box =
        [['Receipt ID:','_id', receipt._id], 
        ['Campaign ID:','CampaignId', receipt.campaignId._id], 
        ['Campaign Title:','campaignTitle', receipt.campaignId.campaignTitle], 
        ['Client Name:', 'clientName', receipt.userId.firstName + ' ' + receipt.userId.lastName], 
        ['Amount:', 'amount', receipt.amount], 
        ['Timestamp:', 'timeStamp', receipt.createdAt]];
      

        const setData = async (index)=>{
            receiptController.getReceiptData(receipts[index]._id, cookies.user.token).then(response =>{
                if(response.status === "success"){
                    console.log(response.data);
                    setReceipt(response.data[0]);
                } else {
                    window.alert("Error: " + response.errMsg);
                }
            });
        }
    
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
                        {receipts.map((row,index) => <tr>
                            <td>{row.userId}</td>
                            <td>{row.amount}</td>
                            <td>{row.campaignId}</td>
                            <td>{row.createdAt}</td>
                            <td><a id={`edit_${index}`} name={index} class='edit' data-target="#modal" data-toggle="modal" onClick={()=>setData(index)}>View Details</a></td>

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
                                        <input id={`input_${ele[1]}`} class="form-control" type="text" value={ele[2]} readOnly/>
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
