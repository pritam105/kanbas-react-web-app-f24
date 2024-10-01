import Profile from "./profile";
import Signin from "./signin";
import AccountNavigation from "./navigation";
import { Routes, Route, Navigate } from "react-router";
import Signup from "./Signup";


export default function Account() {
  return (
    <div id="wd-account-screen">
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
          </td>
        </tr>
      </table>    
    </div>
  );
}