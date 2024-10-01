import { Link } from "react-router-dom";
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={40} rows={8}>
          The assignment is available online Submit a link to the landing page to the web application
          running on Netlify. the landing page should include the following: 
          The landing page should include the following:
            Your full name and section
            Links to each of the lab assignments
            Link to the Kanbas application
            Links to all relevant source code repositories
            The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignments</label>
            </td>
            <td>
                <select id="wd-group">
                    <option value="Quiz">Quiz</option>
                    <option value="Tests">Test</option>
                    <option selected value="Assignments">
                        Assignments
                    </option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option value="RawScore">Raw Score</option>
                    <option value="Class">Class</option>
                    <option selected value="Percentage">
                        Percentage
                    </option>
                </select>
            </td>
          </tr>
          <br />                   
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option value="Offline">Offline</option>
                    <option selected value="Online">
                        Online
                    </option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
                <label>Online Entry Options</label>
                <br />
                <input type="checkbox" name="check-genre" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />
                <input type="checkbox" name="check-genre" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />      
                <input type="checkbox" name="check-genre" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />
                <input type="checkbox" name="check-genre" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotations</label>                            
                <br />
                <input type="checkbox" name="check-genre" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label>                            
            </td>
         </tr>
         <br />                   
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign to</label>
                <br/>
                <input id="wd-assign-to" value={"Everyone"} />
                <br />
                <br />
                <label htmlFor="wd-due-date">Due</label> 
                <br/>
                <input type="date" id="wd-due-date" defaultValue="2024-09-21" />
                <br/>
                <br />
                <label htmlFor="wd-available-from" style={{ marginRight: '35px' }}>Available From</label>
                <label htmlFor="wd-available-from">Until</label>
                <br/>
                <input type="date" id="wd-available-from" defaultValue="2024-09-21" style={{ marginRight: '20px' }}/>
                <input type="date" id="wd-available-to" defaultValue="2024-09-21" />
            </td>
          </tr>
          <br />
          <tr>
        <td colSpan={2}>
            <hr />
        </td>
    </tr>
          <tr>
            <td></td>
            <td align= "right">
                <Link id="wd-course-assignment-link"  to="/Kanbas/Courses/1234/Assignments"><button>Cancel</button></Link> &nbsp;
                <Link id="wd-course-assignment-link"  to="/Kanbas/Courses/1234/Assignments"><button>Save</button></Link><br/>
            </td>
          </tr>
          <br /> 
        </table>
      </div>
  );}
  