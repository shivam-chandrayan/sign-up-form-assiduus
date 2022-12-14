import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Form />
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default App;
