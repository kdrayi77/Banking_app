 import { memo } from 'react';
 import Form from './form.jsx';
 import Account from './Account.jsx';

 const App = () => {
   return (
     <div>
        <h1>Welcome to the Bank App</h1>
        <Form />
        <Account /> 
     </div>
   );
 };
 
 export default memo(App);