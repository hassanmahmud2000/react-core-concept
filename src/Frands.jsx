import { useEffect, useState } from "react"
import './Friends.css'
import FriendUser from "./Friend"
export default function Friends () {
    const [friend,setFriend] = useState ([])
    useEffect ( () => {
        fetch ('https://jsonplaceholder.typicode.com/users')
            .then (res => res.json ())
            .then (data => setFriend(data))
    },[])
    return (
         < >
            <h2 className="friendStyle">Friend : {friend.length}</h2>
             {
                friend.map (user =>  <FriendUser userData={user}></FriendUser>)
             }
         </>
    )
}