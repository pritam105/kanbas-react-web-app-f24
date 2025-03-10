import { BsGripVertical, BsPlus } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { CiSearch } from "react-icons/ci";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment }from "./reducer";
import { Link } from "react-router-dom";
import ProtectedFacultyRoute from "../../Account/ProtectedFacultyRoute";
import { FaPencil, FaTrash } from "react-icons/fa6";
import AssignmentDeleteButton from "./AssignmentDeleteButton";
import { useEffect, useState } from "react";
import * as courseClient from "../client";
import * as assignmentClient from "./client";

export default function Assignments() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const {cid} = useParams();
  const [ assignments, setAssignments ] = useState<any>([]);

  const fetchAssignments = async () => {
    const assignments = await courseClient.getAssignmentsForCourse(cid as string);
    setAssignments(assignments);
  }

  const deleteAssignment = async (payload: any) => {
    await assignmentClient.deleteAssignment(payload._id);
    setAssignments(assignments.filter((a: any) => a._id !== payload._id));
  };

  useEffect( () => {
    fetchAssignments();
  }, []);

    return (
      <div id="wd-assignments">
        <div className="d-inline-flex align-items-stretch">
          <span className="input-group-text border border-end-0 rounded-0 bg-white"><CiSearch className="fs-4"/></span>
          <input
            id="wd-search-assignment"
            type="search"
            className="form-control ml-3 border-start-0 border rounded-0 rounded-left"
            placeholder="Search..."/>
        </div>
        <ProtectedFacultyRoute>
          <Link to={`/Kanbas/Courses/${cid}/Assignments/New`}>
            <button id="wd-add-assignment"
                  className="btn btn-md btn-danger me-1 float-end"
                  >+ Assignment
            </button>
          </Link>
          <button id="wd-add-assignment-group" className="btn btn-md me-1 bg-secondary float-end">+ Group</button>
        </ProtectedFacultyRoute>
        <br/>
        <br/>

        <ul className="list-group rounded-0">
          <li className="list-group-item p-0 mb-5 fs-5 border-gray">
              <div id = "wd-assignments-title" className="p-3 ps-2 pb-4 bg-secondary"> 
                <BsGripVertical className="me-2 fs-3" />ASSIGNMENTS
                <IoEllipsisVertical className="fs-3 pt-1 float-end" />
                <BsPlus className="fs-2 pt-2 float-end"/>
                <span className="float-end border border-black p-1 rounded-5">40% of Total</span>
              </div>
              <ul id="wd-assignment-list" className="list-group rounded-0">
              {assignments
                .filter((assignment:any) =>  assignment.course == cid)
                .map((assignment:any) =>
                  <li className="wd-assignment-list-item wd-lesson list-group-item p-3 ms-0 ps-1">
                    <div className="d-inline-flex">
                      <div className="align-self-center">
                        <BsGripVertical className="me-3 fs-3" />
                        <TfiWrite className="me-4 fs-3 "/>
                      </div>
                      <div>
                      {currentUser.role === "STUDENT" ? (
                        <span>{assignment.title}</span> // Render as text if the role is STUDENT
                      ) : (
                        <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                          {assignment.title}
                        </a> // Render as a link for other roles
                      )} <br/>
                        <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {assignment.availableDate} |
                        <br/><b>Due</b> {assignment.dueDate} | {assignment.points}
                      </div>
                    </div>
                    <LessonControlButtons/>
                    <ProtectedFacultyRoute>
                      <AssignmentDeleteButton
                          aid= {assignment._id}
                          deleteAssignment = {(id: any) => {
                            console.log("inside function" + id)
                            const confirmed = window.confirm("Are you sure you want to delete this assignment?");
                            if (confirmed) {
                              deleteAssignment({_id: id});
                            }
                          }}/>
                    </ProtectedFacultyRoute>
                  </li> 
                )}
              </ul>
          </li>
        </ul>
      </div>
  );}