function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert" className="error-message">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button className="btn" onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default ErrorFallback;