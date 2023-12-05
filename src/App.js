import { Routes,Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Moviedetails from "./pages/Moviedetails";
import ReserveSeat from "./pages/ReserveSeat";
import Header from "./pages/components.jsx/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  
  return (
    <div>
     <Header/>
     <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/details" element={<Moviedetails/>} />
      <Route path="/reserve" element={<ReserveSeat/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      {/* <Route path="*" element={<Login/>} /> */}
     </Routes>
    </div>
  );
}

export default App;
