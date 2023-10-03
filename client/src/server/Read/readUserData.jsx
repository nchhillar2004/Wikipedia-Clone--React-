import React, { useEffect, useState } from "react";
import { database } from "../server";
import {collection, getDocs} from 'firebase/firestore';

export default function ReadUserData(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetchData()
  }, [])
  useEffect(() => {
      console.log(users.data.username);
  }, [users]);

  function fetchData(){
    const usersCollectionRef = collection(database, 'users')
    getDocs(usersCollectionRef).then(response => {
      const users = response.docs.map(doc => ({data: doc.data(), id: doc.id}))
      setUsers(users)
    }).catch(error => console.log(error.message))
  }

  return(
    <div className="readUserData">
            {users.map((user) => (
                <Route key={user.id} path={`/${user.data.username}`} exact>
                    <RouteView title={user.data.username} content={user.data.email} />
                </Route>
            ))}
            
        </div>
  )
}
