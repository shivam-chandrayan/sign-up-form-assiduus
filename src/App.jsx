import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 p-0">
          <Form />
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default App;
