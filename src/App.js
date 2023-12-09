import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Moviedetails from "./pages/Moviedetails";
import ReserveSeat from "./pages/ReserveSeat";
import Header from "./pages/components/Header";
import AdminHeader from "./pages/components/AdminHeader"; 
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/components/Profile/Profile";
import Userreserveseat from "./pages/components/Profile/Userreserveseat";
import Details from "./pages/components/Profile/Details";
import Admin from "./pages/admin/Admin";
import Addmovie from "./pages/admin/Addmovie";
import Viewseat from "./pages/admin/Viewseat";
import Addshow from "./pages/admin/Addshow";
import Auth from "./Auth";

function App() {
  const location = useLocation();

  const isAdminRoute = () => {
    return location.pathname.startsWith("/admin");
  };

  return (
    <div>
      {isAdminRoute() ? <AdminHeader /> : <Header />}{" "}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<Moviedetails />} />
        <Route path="/reserve/:id" element={
        <Auth>

        <ReserveSeat />
        </Auth>
        
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={
        <Auth>

        <Profile />
        </Auth>
        
        }>
          <Route path="details" element={<Details />} />
          <Route path="seat" element={<Userreserveseat />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="addmovie" element={<Addmovie />} />
          <Route path="addtime" element={<Addshow />} />
          <Route path="seats" element={<Viewseat />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
