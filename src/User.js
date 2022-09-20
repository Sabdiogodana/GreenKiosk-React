import React,{useEffect,useState} from "react";

const User= () =>{
     const[user,setUser] = useState();
     const [loading,setLoading] = useState(false);

    useEffect(()=>{
        
        userData()

    },[]);
const userData = ()=>{
    fetch('https://dummyjson.com/users')
    .then(res=>res.json())
    .then(data=>{
        setUser(data.users)
        setLoading(true);
        console.log("data fetched ------>", user );})
    .catch(error=>console.log(error))
};
if (!loading){
    return<div>loading ...</div>;
}
    return (
        
        <div >
            {user.map((item)=>(
                <div>
                    <img src={item.image} alt="user.image"/>
                    <p>{item.firstName} {item.lastName} {item.maidenName}</p>
                    <h4>Fruit</h4>
                    <p>Mangoes</p>
                    <p>Bananas</p>
                    <p>Water melon</p>
                    <p>Grapes</p>

                    <img src={item.image} alt="user.image"/>
                    <p>{item.firstName} {item.lastName} {item.maidenName}</p>
                    <h4>Vegetables</h4>
                    <p>Onions</p>
                    <p>Tomatoes</p>
                    <p>Kales</p>
                    <p>Cabbage</p>
                </div>
                

            
           ) )}
        </div>
       );
    
        // <>
        // <p>my email adress is: {email?email:"loading..."}</p>
        // </>
    
};

export default User;