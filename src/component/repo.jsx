import { Link } from "react-router-dom";
import GitHubProfile from "./profile";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Helmet } from "react-helmet-async";


const Repo = () => {

  const [userInfo, setUserInfo] = useState("");
  const [repos, setRepos] = useState("");
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  // Pagination 
  const per_page = 3;
  const pages = 3;
  // const pags = repos?.length;
  const skip = (page * per_page) - per_page;


  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await Promise.all([
          Axios.get("https://api.github.com/users/gidex4real"),
          Axios.get("https://api.github.com/users/gidex4real/repos"),
        ]);
        setUserInfo(response[0].data); 
        setRepos(response[1].data);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }
    fetchUserInfo();  
  }, []);
  
  if (!userInfo && error) {
    return (
      <div className="repo-container">
        <h1 className="profile-heading">Error loading page...</h1>
      </div>
    )
  }
  if (!userInfo) {
    return (
      <div className="repo-container">
        <h1 className="profile-heading">Loading...</h1>
      </div>
    )
  }
  return(
  <>
    <Helmet prioritizeSeoTags>
      <title>GitHub Repository App | All Repos</title>
      <link rel="icon" type="image/svg+xml" href="../../favicon.ico" />
      <link rel="canonical" href="/repo" />
      <meta name="description" value="All Simon Gideon repositories on Github" />
    </Helmet>
    <div className="link-container">
      <Link className="back-btn" to={-1}>Back</Link>
      <Link className="back-btn" to='/error'>Error page</Link>
    </div>
    <div className="repo-container">
      <GitHubProfile user={userInfo} />
      <div className="repo-list-box">
        <h3 className="profile-heading repo-list-heading" >List of Repositories</h3>
        {
        repos.slice(skip, skip + per_page).map((repo)=>{
          const data = [repo, userInfo]
          console.log(data);
          return(
            <div className="repo-box" key={repo.id}>
              <h3 className="repo-title">{repo.name}</h3>
              {repo.language && <small className="repo-lang">Language: {repo.language}</small>}
              <Link to={`/repo/${repo.id}`} state={data} className='repo-link'>See more ???</Link>
            </div>
          )
        })
      }</div>
      <h4 className="pages">{`Pages: ${page} of ${pages}`}</h4>
      <div className="pagination-btn__container">
        <button 
         className="back-btn"
         disabled={page <= 1}
         onClick={() => setPage(prev => prev - 1) }
        >Prev
        </button>
        <button 
        className="back-btn"
        disabled={page >= pages}
        onClick={() => setPage(prev => prev + 1) }
          >Next
        </button>
        
      </div>
    </div>
    <div className="footer">
      <h3 className='footer__heading'>AltSchool Africa</h3>
      <p>Copyright &copy; 2022 Developed by Simon Gideon</p>
    </div>
  </>  
  )
}

export default Repo;

  
