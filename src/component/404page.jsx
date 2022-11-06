import { Helmet } from "react-helmet-async";

export default function ErrorPage() {
  return(
    <div className="repo-box">
      <Helmet>
        <title>Repositories</title>
        <meta name="description" content="error page" />
        <link rel="canonical" href="/error" />
      </Helmet>
      <h1>404 page</h1>
      <p>Page not found</p>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}