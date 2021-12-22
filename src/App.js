import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const styles = {
  wrapper: {
    width: "70%",
    height:"550px",
    paddingTop: "56.25",
  },
  responsiveIframe: {
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    width: "100%",
    height: "100%",
  },
};

const Iframe = ({children}) => {
  return (
    <div style={styles.wrapper}>
      <label style={{fontWeight: "700"}}>{children}</label>
      <iframe title="swap"
        style={styles.responsiveIframe}
        src="https://pancakeswapembed.vercel.app/"
      ></iframe>
    </div>
  );
};

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MI PAGINA WEB
          </a>
        </div>
      </nav>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6">Texto</div>
          <div className="col-md-6">
            <Iframe>Intercambia tokens</Iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
