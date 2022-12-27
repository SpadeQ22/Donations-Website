import './AdminDash.css';
import {Routes, Route, useNavigate} from 'react-router-dom';


function AdminDash() {

    const navigate = useNavigate();
    const navigateUsers = () => {

        navigate('/users');
      };

    const navigateReceipts = () => {

        navigate('/receipts');
      };

    return (
        <div id="adminDiv">
            <h1>Welcome to Admin Dashboard</h1><br />
            <button class="admin_btn" onClick={navigateUsers}>View Users</button> <br />
            <button class="admin_btn" onClick={navigateReceipts}>View Receipts</button>
        </div>
    );
}

export default AdminDash;
