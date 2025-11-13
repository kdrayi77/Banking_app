import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Form = () => {
const balance = useSelector((state) => state.balance);  
const username = useSelector((state) => state.username);  
const mobile = useSelector((state) => state.mobile);
const dispatch = useDispatch();
const [inputUsername, setInputUsername] = useState(username);
const [inputMobile, setInputMobile] = useState(mobile);
const [inputBalance, setInputBalance] = useState('');  
  return (
    <div>
        <h2>Update Account Info</h2>
         <table>
            <tr>
                <td>Username:</td>
                <td><input type="text" placeholder='Enter username' value={inputUsername} onChange={(e) => setInputUsername(e.target.value)}></input></td>
                <td><button onClick={() => {
                  dispatch({type: 'SET_USERNAME', payload: inputUsername});
                  setInputUsername('');
                }}>Set Username</button></td>
            </tr>   
            <tr>
                <td>Mobile:</td>
                <td><input type="text" placeholder='Enter mobile number' value={inputMobile} onChange={(e) => setInputMobile(e.target.value)}></input></td>
                <td><button onClick={() => dispatch({type: 'SET_MOBILE', payload: inputMobile})}>Set Mobile</button></td>
            </tr>   
            <tr>
                <td>Balance:</td>
                <td><input type="number" placeholder='Enter amount' value={inputBalance} onChange={(e) => setInputBalance(e.target.value)}></input></td>
                <td>
                    <button onClick={() => dispatch({type: 'DEPOSIT', payload: Number(inputBalance)})}>Deposit</button>
                    <button onClick={() => dispatch({type: 'WITHDRAW', payload: Number(inputBalance)})}>Withdraw</button>
                </td>
            </tr>
         </table>
        </div>
        
)};

export default memo(Form);