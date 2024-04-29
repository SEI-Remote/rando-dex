import UserCard from "./UserCard"
import { Link } from "react-router-dom"
import { getRandomUserData } from "./data/userData"


const Users = () => {
  const userData = getRandomUserData()
  
  return (
    <div className="users">
      {userData.map(user =>
        <Link key={user._id} to={`/users/${user._id}`} state={{pic: user.personal.profilePic}}>
          <UserCard user={user} />
        </Link>
      )}
    </div>
  )
}
 
export default Users