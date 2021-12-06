
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
import Chat from './pages/Chat';
import AddPlaces from './pages/AddPlaces';
import Favorites from './pages/Favorites';
import { View_park } from './pages/View_park';
import { View_Spots } from './pages/View_Spots';
import { FriendsSearch } from './pages/FriendsSearch';
import { View_Friends } from './pages/View_Friends';
import { ParkSearch } from './pages/ParkSearch';
import { SpotsSearch } from './pages/SpotsSearch';
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
          <PrivateRoute exact path="/Chat" component={Chat}/>
          <PrivateRoute exact path="/AddPlaces" component={AddPlaces}/>
          <PrivateRoute exact path="/Favorites" component={Favorites}/>
          <PrivateRoute exact path="/View_Park" component={View_park}/>
          <PrivateRoute exact path="/View_Spots" component={View_Spots}/>
          <PrivateRoute exact path="/View_Friends" component={View_Friends}/>
          <PrivateRoute exact path="/FriendsSearch" component={FriendsSearch}/>
          <PrivateRoute exact path="/SpotsSearch" component={SpotsSearch}/>
          <PrivateRoute exact path="/ParkSearch" component={ParkSearch}/>
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
