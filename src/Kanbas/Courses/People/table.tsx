import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PeopleTable({users = []} : {users? : any[] }) {
  const { uid} = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-people-table" className="table-responsive">
          { uid && <PeopleDetails />}
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
        {users
          .map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
              {currentUser.role === "ADMIN" && <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>
                  <span className="wd-last-name">{user.lastName}</span>
                </Link>}
              {currentUser.role !== "ADMIN" &&
              <>
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.firstName}</span>
                    <span className="wd-last-name">{user.lastName}</span>
                 </>
              }
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </div> 
    );
  }