import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar"
import { authenticate } from "./services/auth";
import {UserContext} from "./context/UserContext"

// Imported Pages
import Homepage from "./Pages/HomePage";
import Profilepage from "./Pages/Profile/Profilepage";
import CreateCommissionPage from "./Pages/CreateCommissionPage";
import SplashPage from "./Pages/SplashPage";
import RequestCommissionPage from "./Pages/RequestCommissionPage";
import ProductPage from "./Pages/Product/ProductPage"
import SettingsPage from "./Pages/Profile/SettingsPage";
import ReqeustsPage from "./Pages/Request/RequestPage";
import Footer from "./Components/Footer/Footer";
import "./app.css";
import "./Utility/anim_util.css";


// Utility Files //
import { useMediaQuery } from "./Utility/mediaQuery";

function App() {

  // States //
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [ratingAverage, setRatingAverage] = useState(0);
  const [user, setUser] = useState({})
  const [isActive, setActive] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Global Functions //

  const isClicked = (e) => {
    e.preventDefault();

    if(!clicked){
      setClicked(true);
      setActive(true);
      console.log("clicked", clicked);
    } else {
      setClicked(false);
      setActive(false);
      console.log("clicked", clicked);
    }
  }


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
    <div className="app">
    <BrowserRouter>
    <UserContext.Provider value={{ratingAverage, setRatingAverage}}>
      <NavBar 
        setAuthenticated={setAuthenticated} 
        authenticated={authenticated} 
        setUser={setUser} 
        user={user} 
        isClicked={isClicked}
        active={isActive} 
        />
      <div className="app-content">
        <Routes>
          <Route path="/login" exact={true} element={
            <SplashPage
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
              setUser={setUser}
              user={user}
              />}>
          </Route>
          <Route path="/signup" exact={true} element={
            <SplashPage
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
              setUser={setUser}
              user={user}
              />
          } />
          <Route path="/request/:commissionId" exact={true} element={
            <RequestCommissionPage user={user}/>
          }/>
          <Route path="/create-a-commission" exact={true} element={
            <CreateCommissionPage authenticated={authenticated} user={user}/>
          } />
          <Route path="/product/:commissionId" exact={true} element={
            <ProductPage authenticated={authenticated} user={user}/>
          } />

          <Route path="/:username/settings" element={
            <SettingsPage user={user}/>
          } />
          <Route path="/:username/requests" element={
            <ReqeustsPage user={user}/>
          }/>
          <Route path="/:username/profile" exact={true} element={
            <Profilepage authenticated={authenticated} user={user}/>
          } />
          <Route path="/profile/:userId" exact={true} element={
            <Profilepage authenticated={authenticated} user={user}/>
          }/>
          <Route path="/" exact={true} element={
            <Homepage authenticated={authenticated} />
          } />
        </Routes>
      </div>
        </UserContext.Provider>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
