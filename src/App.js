import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import SingleTour from './components/SingleTour/SingleTour';
import AddDestination from './components/AddDestination/AddDestination';
import MyPlace from './components/MyPlace/MyPlace';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllBookins from './components/AllBookings/AllBookings';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <PrivateRoute exact path="/myPlace">
              <MyPlace></MyPlace>
            </PrivateRoute>
            <PrivateRoute exact path="/allBooking">
              <AllBookins></AllBookins>
            </PrivateRoute>
            <Route exact path="/addDestination">
              <AddDestination></AddDestination>
            </Route>
            <PrivateRoute exact path="/tour/:tourId">
              <SingleTour></SingleTour>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
