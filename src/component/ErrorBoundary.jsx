import { Link } from "react-router-dom";

function ErrorFallback({error}) {
  return (
    <div role="alert" className="error-message">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <Link className="btn" to='/'>Back Home</Link>
    </div>
  )
}

export default ErrorFallback;