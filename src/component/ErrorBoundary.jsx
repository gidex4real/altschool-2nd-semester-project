import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <>
      <Helmet>
        <title>Repositories</title>
        <meta name="description"content="error page " />
        <link rel="canonical" href="/error" />
      </Helmet>

      <div role="alert" className="error-message">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <Link to='/' className="repo-link error-btn" onClick={resetErrorBoundary}>Try again</Link>
        {/* <Link to='/'>Back to Home</Link> */}
      </div>
    </>
  )
}

export default ErrorFallback;