import {Routes , Route , Navigate} from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Users from './users/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './users/pages/Auth';
import { AuthContext } from './shared/context/auth-context';
import React, { useState , useCallback } from 'react';

const App =()=> {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(()=>{
    setIsLoggedIn(true);
  },[]);

  const logout = useCallback(()=>{
    setIsLoggedIn(false);
  },[]);

  let routes;
  if(isLoggedIn){
    routes=(
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/:userId/places" element={<UserPlaces />} />
        <Route exact path="/places/new" element={<NewPlace />} />
        <Route exact path="/places/:placeId" element={<UpdatePlace />} />
        <Route exact path="*" element={<Navigate to="/" />} />
      </Routes>
  
    );
  }
  else{
    routes=(
    <Routes>
      <Route exact path="/" element={<Users />} />
      <Route exact path="/:userId/places" element={<UserPlaces />} />
      <Route exact path="/auth" element={<Auth />} />
      <Route exact path="*" element={<Navigate to="/auth" />} />
    </Routes>
    );
  }

  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn , login:login , logout:logout}}>
    <>
    <MainNavigation />
    <main>
       {routes}
    </main>
    </>
    </AuthContext.Provider>
  );
}
export default App;
