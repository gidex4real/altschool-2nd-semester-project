import { Link } from "react-router-dom";
// import gidex from "../img/gidex_dp.jpg";
import location from "../img/svg/location-pin.svg";
import email from "../img/svg/email.svg";
import home from "../img/svg/home.svg";
import follow from "../img/svg/4-icon.svg";

const GitHubProfile = ({ user }) => {
  // console.log(user);
  const data = new Date(user?.created_at)
    const formatDate = data.toLocaleDateString("en-GB", {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  
  return(
    <div className="profile-box">
      <div className="profile__img-box">
        <img src={user?.avatar_url} alt="profile pic" />
      </div>
      <div className="profile__info-box">
        <h3 className="profile-heading">GitHub Profile</h3>
        <div className="profile__info-box--name">
          <p className="profile__username">Full Name:  <span>{user?.name}</span></p>
          <p className="profile__username">Username:  <span>{user?.login}</span></p>
        </div>
        <div className="profile__info-box--bio">
          <h3>Bio: </h3>
          <p className="profile__username">{user?.bio}</p>
        </div>
        <div className="profile__info">
          <div className="profile__info-item">
            <p>Joined: {formatDate}</p>
          </div>
          <div className="profile__info-item">
            <p>{user?.location}</p>
          </div>
          <div className="profile__info-item">
            <p>Followers: {user?.twitter_username}</p>
          </div>
          <div className="profile__info-item">
            <p>following: {user?.twitter_username}</p>
          </div>
          <div className="profile__info-item">
            <p>Public Repos: {user?.twitter_username}</p>
          </div>
          
          <div className="profile__info-item">
            <p>Public Gists: {user?.twitter_username}</p>
          </div>
        </div>
        <div className="profile__info-box--des">
          <a href={user?.html_url} target="_blank" className="repo-link">View Profile on GitHub</a>
        </div>
      </div>
    </div>
  )
  }

export default GitHubProfile;