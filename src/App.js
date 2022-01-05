import { BrowserRouter as Router,Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={Home} />
    </Router>
  );
}

export default App;
