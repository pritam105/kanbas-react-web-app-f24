import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
          <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
          <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
          <div id="wd-dashboard-courses">
            <div className="wd-dashboard-course">
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                    <img src="/images/reactLogo.png" width={200} />
                    <div>
                    <h5>
                        CS1234 React JS
                    </h5>
                    <p className="wd-dashboard-course-title">
                        Full Stack software developer
                    </p>
                    <button> Go </button>
                    <br/>
                    </div>
                </Link>
            </div>
            <div className="wd-dashboard-course">
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1235/Home">
                    <img alt="logo" src="/images/ML.jpg" width={200} />
                    <div>
                    <h5>
                        CS1235 ML
                    </h5>
                    <p className="wd-dashboard-course-title">
                        Machine Learning
                    </p>
                    <button> Go </button>
                    <br/>
                    </div>
                </Link>
            </div>
            <div className="wd-dashboard-course"> 
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1236/Home">
                    <img alt="logo" src="/images/algo.jpg" width={200} />
                    <div>
                    <h5>
                        CS1236 Algorithms
                    </h5>
                    <p className="wd-dashboard-course-title">
                        Algorithms
                    </p>
                    <button> Go </button>
                    <br/>
                    </div>
                </Link>            
            </div>
            <div className="wd-dashboard-course"> 
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1237/Home">
                    <img alt="logo" src="/images/designpatterns.jpg" width={200} />
                    <div>
                    <h5>
                        CS1237 Design Patterns
                    </h5>
                    <p className="wd-dashboard-course-title">
                        Design Patterns
                    </p>
                    <button> Go </button>
                    <br/>
                    </div>
                </Link>            
            </div>
            <div className="wd-dashboard-course"> 
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1238/Home">
                    <img alt="logo" src="/images/nlp.webp" width={200} />
                    <div>
                    <h5>
                        CS1238 NLP
                    </h5>
                    <p className="wd-dashboard-course-title">
                        NLP
                    </p>
                    <button> Go </button>
                    <br/>
                    </div>
                </Link>            
            </div> 
            <div className="wd-dashboard-course"> 
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1239/Home">
                    <img alt="logo" src="/images/cyber.jpg" width={200} />
                    <div>
                    <h5>
                        CS1239 Cybersecurity
                    </h5>
                    <p className="wd-dashboard-course-title">
                        CyberSecurity
                    </p>
                    <button> Go </button>
                    <br/>
                    </div>
                </Link>            
            </div>
            <div className="wd-dashboard-course"> 
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1230/Home">
                    <img alt="logo" src="/images/dl.png" width={200} />
                    <div>
                    <h5>
                        CS1230 Deep Learning
                    </h5>
                    <p className="wd-dashboard-course-title">
                        Deep Learning
                    </p>
                    <button> Go </button>
                    <br/>
                    </div>
                </Link>            
            </div>                                   
          </div>
        </div>
    );    
}