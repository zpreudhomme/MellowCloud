import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as sessionActions from "../../store/session"

function User () {
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState({});

    const { userId } = useParams();

    useEffect(() => {
        async function getData(){
            let data = sessionActions.getUser(userId);
            setUser(data)
        }
        getData();
    }, [])

    useEffect(() => {
        if (user.Track){
            setIsLoaded(true);
        }
    }, [user])

    return (
        <div className = "user page">
            <h1>User Page</h1>
            {isLoaded &&
                <div className="user-container">
                    <h1>{user.username}</h1>
                </div>}
        </div>
    )
}

export default User;