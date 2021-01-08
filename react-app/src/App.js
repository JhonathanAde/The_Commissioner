import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import LoginForm from "./Components/auth/LoginForm";
import SignUpForm from "./Components/auth/SignUpForm";
import ProtectedRoute from "./Components/auth/ProtectedRoute"
// import NavBar from "./components/NavBar";
import TodoPage  from "./Components/Pages/TodoPage"
import { authenticate } from "./Components/services/auth";

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
      {/* <NavBar setAuthenticated={setAuthenticated} /> */}
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm 
            authenticated={authenticated}
            setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <h1>My Homepage</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
