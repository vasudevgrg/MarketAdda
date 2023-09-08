import {BrowserRouter as  Router, Route , Routes} from "react-router-dom";
import { LoginPage } from "./Components/LoginPage";
import { Movies } from "./Components/Movies";
import { Auth } from "./Components/Auth";
import { Register } from "./Components/Register";
import { createContext, useState } from "react";
import { Navbar1 } from "./Components/Navbar";

export const ThemeContext= createContext();
function App() {

  const [theme, changeTheme]= useState("light");

  return (
   <div>
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <Navbar1/>
<Router>
  <Routes>
    <Route path="/nav" element={<Navbar1/>}/>
  <Route exact path='/' element={<Auth><LoginPage/></Auth>} />
  <Route path="/movies" element={<Movies/>} />
  <Route path="/register" element={<Register/>}/>
  </Routes>
</Router>
</ThemeContext.Provider>

    </div>
  );
}

export default App;
