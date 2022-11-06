import { Link, useLocation } from "react-router-dom";
import GitHubProfile from "./profile";
import { Helmet } from "react-helmet-async";

const NewRepo = () => {
  const location = useLocation();
  const datas = location.state;

  const [data, user_info] = datas;

  // Converting API date to DD/MM/YEAR format
  const dates = [data.created_at, data.updated_at]
  const formattedDate = dates.map(date => {
    const data = new Date(date)
    const formatDate = data.toLocaleDateString("en-GB", {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    return formatDate;
  })
  const [created_at, updated_at] = formattedDate;
    
  return(
    <>
      <Helmet prioritizeSeoTags>
        <title>GitHub Repository App | Repo</title>      
        <link rel="icon" type="image/svg+xml" href="../../public/favicon.ico" />
        <meta name="description" value={data.description} />
      </Helmet>
      <div className="link-container">
        <Link className="back-btn" to={-1}>Back</Link>
        <Link className="back-btn" to='/error'>Error page</Link>
      </div>
      <div className="repo-container">
        <GitHubProfile user={user_info} />
        <div className="repoInfo-box">
          <h2 className="repo-title">{data.name}</h2>
          {data.description && <p className="repo-description">Description: {data.description}</p>}
          <div className="profile__info repoInfo-box">
            <p>forks: {data.forks_count}</p>
            <p>Issues: {data.open_issues}</p>
            <p>Watchers: {data.watchers_count}</p>
          </div>
          <div className="profile__info repoInfo-box">
            <p>Visibilty: {data.visibility}</p>
            <p>Date Created: {created_at}</p>
            <p>Last updated: {updated_at}</p>
          </div>
          <small className="repo-lang">Language used: {data.language}</small>
          <a href={data?.html_url} target="_blank" className='repo-link' id="repo-link">View Repository on GitHub</a>
        </div>
      </div>
      <div className="footer">
        <h3 className='footer__heading'>AltSchool</h3>
        <p>&copy; Developed by Simon Gideon 2022</p>
      </div>
    </>
  )
}

export default NewRepo;
