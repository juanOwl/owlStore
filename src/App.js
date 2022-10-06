import { Routes, Route } from "react-router-dom";
import Home from "./routes//home/home.jsx";
import Navigation from "./routes/navigation/navigation.jsx";
import Authentication from "./routes/authentication/authentication.jsx";


const Shop = () => {
  return(<h1>AINNNNN</h1>)
}


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="sign" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};


export default App;
