import { useState } from "react";
import "./UserProfile.css"
const UserProfile = ({user}) => {
    const {avatar_url, bio, blog, followers, following, login, created_at, name} = user
    const createdDate = new Date(created_at);
    const fullDate = 
    createdDate.toLocaleString("en-us", { month: "short"}) +" " +
    createdDate.getDate() + ", " + 
    createdDate.getFullYear()

    return (
        
         <div class="container">
            {/* {avatar_url} */}
                <div id="img">
                    <img src={avatar_url}></img>
                </div>
                
                <div id="info">
                    <section>
                        <p class="title"> Name</p>
                        <p>{name}</p>
                    </section>

                    <section>
                        <p class="title"> Bio</p>
                        <p>{bio == null ? "No bio exists" : bio}</p>
                    </section>

                    <section>
                        <p class="title"> Portfolio</p>
                        <p>{blog == ""? "No portfolio exists" : `${blog}`}</p>
                    </section>
                    <section>
                        <p class="title"> Number of Followers </p>
                        <p>{followers}</p>
                    </section>
                    
                    <section>
                        <p class="title"> Number of Followings </p>
                        <p>{following}</p>
                    </section>

                    <section>
                        <p class="title"> Github URL </p>
                        <p>{`https://api.github.com/users/${login}`}</p>
                    </section>
                </div>
                {/* <p>asdas</p> */}
        </div>
    )
}


export default UserProfile