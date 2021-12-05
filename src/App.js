
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from './components/Navbar';
import AuthProvider from './context/auth';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
import Friends from './pages/Friends';
import Spots from './pages/Spots';
import Parks from './pages/Parks';
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/profile" component={Profile}/>
          <PrivateRoute exact path="/Friends" component={Friends}/>
          <PrivateRoute exact path="/Spots" component={Spots}/>
          <PrivateRoute exact path="/Parks" component={Parks}/>
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
