import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Doctors from './Pages/Doctors/Doctors/Doctors';
import Appoinments from './Pages/Appoinments/Appoinments';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login'
import HealthDetails from './Pages/Home/Health/HealthDetails/HealthDetails';
import AuthProvider from './contexts/AuthProvider';
import ServiceDetails from './Pages/Booking/ServiceDetails/ServiceDetails';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/appoinments">
              <Appoinments></Appoinments>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/helathDetails">
              <HealthDetails></HealthDetails>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/servicedetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
