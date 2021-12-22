import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MI PAGINA WEB
          </a>
        </div>
      </nav>

      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Navbar</span>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-6">Texto</div>
          <div className="col-md-6">Swap</div>
        </div>
      </div>
    </>
  );
}

export default App;
