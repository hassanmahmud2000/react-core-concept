export default function FriendUser ( {userData}) {
    console.log(userData);
    return (
         <div className="userBox">
            <h1>ID Number : {userData.id}</h1>
            <h2>Name : {userData.name}</h2>
            <p>Email : {userData.email}</p>
            <p>User Name :  {userData.username}</p>
            <p>Phone Number : {userData.phone}</p>
            <p>Website : {userData.website}</p>
         </div>
    )
}