import { useState, useEffect } from "react";
import axios from "axios";

const index = () => {
    const [username,setUsername] = useState('jeelvekaria')
    const [showData,setShowData] = useState('')
    const [loading, setLoading] = useState(false)

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
        }
        
        )
        .catch(res => console.log(res))
    }, [showData])

    if (loading){
        return <h1> Loading Data... Please Wait</h1>
    }


    return (
         <div>
            <div>
                <input
                name="search-by-username"
                type="text"
                placeholder="Search Github Username..."
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />
                <button onClick={handleSubmit}> Search </button>
            </div>
            <div>
                {showData}
            </div>


        </div>
    )
}

export default index