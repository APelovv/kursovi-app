import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import ContactPage from "./pages/Contact/ContactPage";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/services" component={Services} />
      </Switch>
    </Router>
  );
}

export default App;
