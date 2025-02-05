import React from 'react'
import { UserContext } from './Usercontext'


function UserProfile() {
    const { user, setUser } = React.useContext(UserContext)

    // Log out the user
    // setUser(null);

    return (
        <div>
            <h2>User Profile</h2>
            {user ? (
                <p>Welcome, {user.name}! Your email is {user.email}.</p>
            ) : (
                <p>No user logged in.</p>
            )}
        </div>
    )
}

export default UserProfile