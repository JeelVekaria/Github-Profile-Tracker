import { useState } from "react";
import "./UserProfile.css"
const UserProfile = ({user}) => {
    const {avatar_url, bio, website, followers, following, login} = user

    return (
        
         <div>
            {/* {avatar_url} */}
            <div class="card">
                <div class="card__content">
                    <img src={avatar_url}></img>
                </div>
            </div>
        </div>
    )
}


export default UserProfile