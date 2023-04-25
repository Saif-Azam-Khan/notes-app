import FormContainer from "./components/FormContainer/FormContainer";
import ViewComments from "./components/ViewComments/ViewComments";

import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          {/* <FormContainer/> */}
          <ViewComments />
        </Container>
      </header>
    </div>
  );
}

export default App;
