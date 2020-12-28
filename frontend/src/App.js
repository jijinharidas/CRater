import Home from "./components/Accounts/AccountsPage";
import HomePage from "./components/Home/HomePage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { loadLoggedin } from "./localStorage";
// optional cofiguration
import { positions, Provider as AlertProvider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";

const options = {
  position: positions.MIDDLE,
};

function App() {
  const loggedIn = loadLoggedin();
  return (
    <AlertProvider template={AlertMUITemplate} {...options}>
      <div className="App" style={{ backgroundColor: "#100E17" }}>
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/account"
            component={loggedIn === "loggedIn" ? HomePage : Home}
          />
        </Router>
      </div>
    </AlertProvider>
  );
}

export default App;
