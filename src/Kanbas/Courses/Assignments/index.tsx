export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" /> &nbsp;
        <button id="wd-add-assignment-group">+ Group</button> &nbsp;
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a> <br/>
            <span>Multiple Modules | <b><i>Not available until</i></b> May 6 at 12:00am | </span>
            <b>Due</b> <br/> May 13 at 11:59pm | 100 pts
          </li>
          <br/>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1235/Assignments/124">
              A3 - ENV + HTML
            </a> <br/>
            <span>Multiple Modules | <b><i>Not available until</i></b> May 13 at 12:00am | </span>
            <b>Due</b> <br/> May 20 at 11:59pm | 100 pts                      
          </li>
          <br/>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1236/Assignments/125">
              A4 - ENV + HTML
            </a> <br/>          
            <span>Multiple Modules | <b><i>Not available until</i></b> May 20 at 12:00am | </span>
            <b>Due</b> <br/> May 27 at 11:59pm | 100 pts            
          </li>          
        </ul>
      </div>
  );}
  