import { Link } from "react-router-dom";
// import gidex from "../img/gidex_dp.jpg";
import location from "../img/svg/location-pin.svg";
import email from "../img/svg/email.svg";
import home from "../img/svg/home.svg";
import follow from "../img/svg/4-icon.svg";

const GitHubProfile = ({ user }) => {
  console.log(user);
  const data = new Date(user?.created_at);
  const formatDate = data.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="profile-box">
      <div className="profile__img-box">
        <img src={user?.avatar_url} alt="profile pic" className="profile-img"/>
        <div className="user-location">
          <img src={location} alt="location icon" />
          <span>{user?.location}</span>
        </div>
      </div>
      <div className="profile__info-box">
        <h3 className="profile-heading">{user?.name}</h3>
        <div className="profile__info">
          <span className="profile__username">{user?.bio}</span>
        </div>
        <div className="profile__info">
          <p>Repos: {user?.public_repos}</p>
          <p>Followers: {user?.followers}</p>
          <p>following: {user?.following}</p>
        </div>
        <div className="profile__info">
          <p>Joined: {formatDate}</p>
          <p>Twitter: {user?.twitter_username}</p>
          <p>Gists: {user?.public_gists}</p>
        </div>
        <div className="profile__info">
          <a href={user?.html_url} target="_blank" className="profile-btn">
            View Profile on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHubProfile;
