import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <span className="badge bg-primary-subtle text-primary-emphasis mb-3">OctoFit Tracker</span>
          <h1 className="display-4 fw-bold">Modern fitness tracking for every team.</h1>
          <p className="lead text-muted">
            Log workouts, manage squads, and stay motivated with a multi-tier experience built for growth.
          </p>
          <div className="d-flex gap-3 flex-wrap mt-4">
            <a className="btn btn-primary btn-lg" href="http://localhost:8000/api/health">Check API</a>
            <a className="btn btn-outline-secondary btn-lg" href="http://localhost:5173">Open frontend</a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="h4 mb-3">What’s ready</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-0">React 19 + Vite frontend</li>
                <li className="list-group-item px-0">Node + Express + TypeScript backend</li>
                <li className="list-group-item px-0">MongoDB connection via Mongoose</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
