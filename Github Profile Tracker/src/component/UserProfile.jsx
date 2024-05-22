import { useState, useEffect } from "react";

const index = () => {
    const [username,setUsername] = useState('')
    const [showData,setShowData] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowData(`The user you are looking for is ${username} `)
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