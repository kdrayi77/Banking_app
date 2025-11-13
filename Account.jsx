import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { store } from './store.jsx';

const Account = () => {
    const balance = useSelector((state) => state.balance);  
    const username = useSelector((state) => state.username);  
    const mobile = useSelector((state) => state.mobile);  
    const dispatch = useDispatch();
  return (
    <div>
      <h2>Account Details</h2>
        <div>
        <p>Mobile: {mobile}</p>
        </div>
        <div>
        <p>Username: {username}</p>
        </div>
        <div>
        <p>Balance: ${balance}</p>
        </div>   

    </div>
  );
};

export default memo(Account);