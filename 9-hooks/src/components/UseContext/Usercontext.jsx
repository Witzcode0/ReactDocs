import { createContext, useState } from "react";
import UserProfile from "./UserProfile";

export  const UserContext = createContext();

export const UserContextProvider = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <UserProfile />
        </UserContext.Provider>
    );
};
