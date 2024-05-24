import { useState, useEffect } from "react";
import axios from "axios";
import UserProfile from "./UserProfile";
import "./Index.css";

const index = () => {
    const [username,setUsername] = useState('jeelvekaria')
    const [showData,setShowData] = useState('')
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState(null)

    // 
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowData(`The user you are looking for is ${username} `)
    }

    useEffect(() => {
        setLoading(true)
        axios.get(`https://api.github.com/users/${username}`)
        .then(res => {
            console.log(res)
            setLoading(false)
            setUserData(res.data)
        })
        .catch(res => {
            console.log(res) 
            setLoading(false)
            setUserData(null)
        })
    }, [showData])

    if (loading){
        return <h1> Loading...</h1>
    }


    return (
         <div>
            <div class="container">
                <input
                name="search-by-username"
                type="text"
                placeholder="Search Github Username..."
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                class="input"
                />
                <button onClick={handleSubmit}> Search </button>
            </div>
            {userData !== null ? <UserProfile user={userData}/> : "User not Found" }
            

        </div>
    )
}

export default index