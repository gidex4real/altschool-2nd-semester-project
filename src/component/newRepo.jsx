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
      <Link className="back-btn" to={-1}>Back</Link>
      <div className="repoInfo-container">
        <GitHubProfile user={user_info} />
        <div className="repoInfo-box">
          <h2 className="repo-title">{data.name}</h2>
          {data.description && <p className="repo-description">Description: {data.description}</p>}
          <div className="repoInfo-box--small">
            <div className="repoInfo-small">
              <p>forks: {data.forks_count}</p>
            </div>
            <div className="repoInfo-small">
              <p>Issues: {data.open_issues}</p>
            </div>
            <div className="repoInfo-small">
              <p>Watchers: {data.watchers_count}</p>
            </div>
            <div className="repoInfo-small">
              <p>Visibilty: {data.visibility}</p>
            </div>
            <div className="repoInfo-small">
              <p>Size: {data.size}</p>
            </div>
          </div>
          <div className="repoInfo-box--small">
            <div className="repoInfo-small">
              <p>Date Created: {created_at}</p>
            </div>
            <div className="repoInfo-small">
              <p>Last updated: {updated_at}</p>
            </div>
          </div>
          <small className="repo-lang">Language used: {data.language}</small>
          <a href={data?.html_url} target="_blank" className='repo-link'>View Repository on GitHub</a>
        </div>
      </div>
    </>
  )
}

export default NewRepo;
