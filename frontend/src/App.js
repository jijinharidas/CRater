import Home from "./components/Accounts/AccountsPage";
import HomePage from "./components/Home/HomePage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { loadLoggedin } from './localStorage';
function App() {
  const loggedIn = loadLoggedin()
  return (
    <div
      className="App"
      style={{ backgroundColor: "#100E17" }}>
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/account" component={(loggedIn === 'loggedIn') ? HomePage : Home} />
      </Router>
    </div>
  );
}

export default App;
