import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import LoginForm from "./Components/auth/LoginForm";
import SignUpForm from "./Components/auth/SignUpForm";
import ProtectedRoute from "./Components/auth/ProtectedRoute"
import NavBar from "./Components/NavBar/NavBar"
import TodoPage  from "./Components/Pages/TodoPage"
import { authenticate } from "./Components/services/auth";
import Homepage from "./Components/Pages/HomePage";
import Profilepage from "./Components/Pages/Profilepage";
import CreateCommissionPage from "./Components/Pages/CreateCommissionPage";
import SplashPage from "./Components/Pages/SplashPage";
import RequestCommissionPage from "./Components/Pages/RequestCommissionPage";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>
      <NavBar setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/request" exact={true}>
          <RequestCommissionPage />
        </Route>
        <Route path="/create-a-commission" exact={true}>
          <CreateCommissionPage />
        </Route>
        <Route path="/profile" exact={true}>
          <Profilepage />
        </Route>
        <Route path="/login" exact={true}>
          <SplashPage
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm 
            authenticated={authenticated}
            setAuthenticated={setAuthenticated} />
        </Route>
        <Route>
          <Homepage path="/" exact={true} authenticated={authenticated} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
