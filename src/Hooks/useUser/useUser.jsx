import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

function useUser (userName,userEmail){
    const {user} = useContext(AuthContext)
    if(user && user.email){
        const userDetails = {  name : userName , email : userEmail }
        fetch('http://localhost:7000/',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(userDetails)
        })
        .then(res => res.json())
        .the(data => {
            console.log(data)
        })
    }
}
export default useUser;