
import { Route, Routes } from 'react-router-dom';
import UserList from './page/UserList';
import AddUser from './page/AddUser';
import UpdateUser from './page/UpdateUser'

function App() {
  return (
    <>
      
      <Routes>
        <Route index="/" element={<UserList/>}/>
        <Route path='/userlist' element={<UserList />} />
        <Route path='/addUser' element={<AddUser />} />
        <Route path='/updateUser/:id' element={<UpdateUser/>}/>        
      </Routes>

    </>
  );
}

export default App;
