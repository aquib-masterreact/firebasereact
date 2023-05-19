import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Service from "./pages/Service";
import Error from "./pages/Error";
function App() {
  return (
    <>
   <Routes>
    <Route exact path="/" Component={Home}></Route>
    <Route path="/about" Component={About}></Route>
    <Route path="/contacts" Component={Contacts}></Route>
    <Route path="/service" Component={Service}></Route>
    <Route path="/error" Component={Error}></Route>
   </Routes>
    </>
  );
}

export default App;
