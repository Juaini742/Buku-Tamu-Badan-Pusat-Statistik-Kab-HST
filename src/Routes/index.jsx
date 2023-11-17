import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "../Components/Pages/user/HomePages";
import AboutUs from "../Components/Pages/user/AboutUs";
import Profile from "../Components/Pages/user/Profile";
import FormAdd2 from "../Components/Pages/user/FormAdd2";
import FormAdd1 from "../Components/Pages/user/FormAdd1";
import DetailsPage from "../Components/Pages/user/Details";
import HomePageAdmin from "../Components/Pages/admin/HomePageAdmin";
import TablePageAdmin from "../Components/Pages/admin/TablePageAdmin";
import AboutPageAdmin from "../Components/Pages/admin/About";
import FormAddAdmin1 from "../Components/Pages/admin/FormAddAdmin1";
import FormAddAdmin2 from "../Components/Pages/admin/FormAddAdmin2";
import ReportPageAdmin from "../Components/Pages/admin/ReportPageAdmin";
import SettingPageAdmin from "../Components/Pages/admin/SettingPageAdmin";
import ProfilePageAdmin from "../Components/Pages/admin/ProfilePageAdmin";
import DetailsFormAdmin from "../Components/Pages/admin/DetailsFormAdmin";
import UpdateFormAdmin from "../Components/Pages/admin/UpdateFormAdmin";
import Critics from "../Components/Pages/user/Critics";
import FromAdd12 from "../Components/Pages/user/FromAdd12";

function RootRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/formAdd1" element={<FormAdd1 />} />
          <Route path="/formAdd1/FromAdd12" element={<FromAdd12 />} />
          <Route path="/formAdd1/formAdd2" element={<FormAdd2 />} />

          <Route path="/details" element={<DetailsPage />} />
          <Route path="/critics" element={<Critics />} />

          <Route path="/admin" element={<HomePageAdmin />} />
          <Route path="/aboutAdmin" element={<AboutPageAdmin />} />

          <Route path="/addAdmin1" element={<FormAddAdmin1 />} />
          <Route path="/addAdmin1/addAdmin2" element={<FormAddAdmin2 />} />

          <Route path="/table" element={<TablePageAdmin />} />
          <Route path="/report" element={<ReportPageAdmin />} />
          <Route path="/profileAdmin" element={<ProfilePageAdmin />} />
          <Route path="/setting" element={<SettingPageAdmin />} />
          <Route path="/detailsAdmin" element={<DetailsFormAdmin />} />
          <Route path="/updateAdmin" element={<UpdateFormAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RootRoutes;
