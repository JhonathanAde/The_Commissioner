import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar"
import { authenticate } from "./Components/services/auth";
import {UserContext} from "./Components/context/UserContext"

// Imported Pages
import Homepage from "./Components/Pages/HomePage";
import Profilepage from "./Components/Pages/Profile/Profilepage";
import CreateCommissionPage from "./Components/Pages/CreateCommissionPage";
import SplashPage from "./Components/Pages/SplashPage";
import RequestCommissionPage from "./Components/Pages/RequestCommissionPage";
import ProductPage from "./Components/Pages/Product/ProductPage"
import SettingsPage from "./Components/Pages/Profile/SettingsPage";
import ReqeustsPage from "./Components/Pages/Request/RequestPage";
import Footer from "./Components/Footer/Footer";
import "./app.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({})
  const [loaded, setLoaded] = useState(false);
  const [ratingAverage, setRatingAverage] = useState(0);

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
    <>
    <div className="page-container">
    <BrowserRouter>
    <UserContext.Provider value={{ratingAverage, setRatingAverage}}>
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
        <Route path="/signup" exact={true}>
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

        <Route path="/:username/settings">
          <SettingsPage user={user}/>
        </Route>
        <Route path="/:username/requests">
          <ReqeustsPage user={user}/>
        </Route>
        <Route path="/:username/profile" exact={true}>
          <Profilepage authenticated={authenticated} user={user}/>
        </Route>
        <Route path="/profile/:userId" exact={true}>
          <Profilepage authenticated={authenticated} user={user}/>
        </Route>
        <Route>
          <Homepage path="/" exact={true} authenticated={authenticated} />
        </Route>
      </Switch>
        </UserContext.Provider>
    </BrowserRouter>
    </div>
    <Footer />
    </>
  );
}

export default App;
