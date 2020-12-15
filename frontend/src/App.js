import Home from "./components/Accounts/AccountsPage";
import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App" style={{ backgroundImage: "url('https://cdn.wallpapersafari.com/32/44/U9WNQj.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
      <Navbar />
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/account" component={Home} />
      </Router>
    </div>
  );
}

export default App;
