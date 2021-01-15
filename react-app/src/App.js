import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import LoginForm from "./Components/auth/LoginForm";
import SignUpForm from "./Components/auth/SignUpForm";
import ProtectedRoute from "./Components/auth/ProtectedRoute"
import NavBar from "./Components/NavBar/NavBar"
import TodoPage  from "./Components/Pages/TodoPage"
import { authenticate } from "./Components/services/auth";

// Imported Pages
import Homepage from "./Components/Pages/HomePage";
import Profilepage from "./Components/Pages/Profile/Profilepage";
import CreateCommissionPage from "./Components/Pages/CreateCommissionPage";
import SplashPage from "./Components/Pages/SplashPage";
import RequestCommissionPage from "./Components/Pages/RequestCommissionPage";
import ProductPage from "./Components/Pages/Product/ProductPage"

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({})
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const data = await authenticate();
      if (!data.errors) {
        setAuthenticated(true);
        setUser(data)
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>
      <NavBar setAuthenticated={setAuthenticated} authenticated={authenticated} setUser={setUser} user={user} />
      <Switch>
        <Route path="/login" exact={true}>
          <SplashPage
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            setUser={setUser}
            user={user}
            />
        </Route>
        <Route path="/request/:commissionId" exact={true}>
          <RequestCommissionPage user={user}/>
        </Route>
        <Route path="/create-a-commission" exact={true}>
          <CreateCommissionPage authenticated={authenticated} user={user}/>
        </Route>
        <Route path="/product/:commissionId" exact={true}>
          <ProductPage authenticated={authenticated} user={user}/>
        </Route>
        <Route path="/profile" exact={true}>
          <Profilepage authenticated={authenticated} user={user}/>
        </Route>
        {/* <Route path="/sign-up" exact={true}>
          <SignUpForm 
            authenticated={authenticated}
            setAuthenticated={setAuthenticated} />
        </Route> */}
        <Route>
          <Homepage path="/" exact={true} authenticated={authenticated} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
