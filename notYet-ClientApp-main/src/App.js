import React from "react";
import SignUp from "./login & signup/SignUp";
import Login from "./login & signup/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import ForgetPwd from "./login & signup/ForgetPwd";
import Problems from "./pages/Problems/Problems";
import Content from "./pages/Content/Content";
import Team from "./pages/Team/Team";
import About from "./pages/About/About";
import ContactUs from "./pages/Contact Us/ContactUs";
import FAQ from "./pages/FAQ/FAQ";
import Feedback from "./pages/Feedback/Feedback";
import PP from "./pages/Privacy and Policy/PP";
import AccountOverview from "./pages/Profile/Pages/AccountOverview";

import Submissions from "./pages/Profile/Pages/Submissions";
import EnrolledTeams from "./pages/Profile/Pages/EnrolledTeams";
import Profile from "./pages/Profile/Profile";
import AdminProfile from "./pages/Admin/AdminProfile";
import Compiler from "./pages/Compiler/Compiler";
import AddProblems from "./pages/Admin/Pages/Add Problems/AddProblems";
import ManageTeam from "./pages/Admin/Pages/ManageTeam";
import ManageUsers from "./pages/Admin/Pages/ManageUsers";
import Levels from "./pages/Levels/Levels";
import Assessment from "./pages/Assessment/Assessment";

function App() {
  function Test(data) {
    console.log("In App TEST.js");
    console.log(data); //EL DATA EL 3AMALTLO SAVE
  }
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp OnSubmitTest={Test} />} />
        <Route path="/login" element={<Login OnSubmitTest={Test} />} />
        <Route path="/login/forgetPwd" element={<ForgetPwd />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route exact path="/problems" element={<Problems />} />
        <Route exact path="/content" element={<Content />} />
        <Route exact path="/content/levels" element={<Levels />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/Contact US"
          element={<ContactUs OnSubmitTest={Test} />}
        />
        <Route exact path="/FAQ" element={<FAQ />} />
        <Route exact path="/Feedback" element={<Feedback />} />
        <Route exact path="/Privacy and Policy" element={<PP />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/problems/compiler" element={<Compiler />} />
        <Route
          exact
          path="/profile/Account Overview"
          element={<AccountOverview />}
        />

        <Route
          exact
          path="/profile/Enrolled Teams"
          element={<EnrolledTeams />}
        />
        <Route exact path="/profile/Submissions" element={<Submissions />} />
        <Route exact path="/Admin" element={<AdminProfile />} />
        <Route exact path="/Admin/Add Problems" element={<AddProblems />} />
        <Route exact path="/Admin/manage Teams" element={<ManageTeam />} />
        <Route exact path="/Admin/manage users" element={<ManageUsers />} />
      </Routes>
    </div>
  );
}

export default App;
