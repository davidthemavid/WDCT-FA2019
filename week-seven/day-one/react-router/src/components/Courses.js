import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const WebDev = () => <h3>Web Development Course</h3>;
const DataScience = () => <h3>Data Science Course</h3>;
const UX = () => <h3>User Experience Course</h3>;

export default function Courses(props) {
  console.log(props.match);
  return (
    <div>
      <h2>Course Page</h2>
      <nav>
        <Link to={`${props.match.url}/web-dev`}>Web Dev</Link>
        <Link to={`${props.match.url}/data-science`}>Data Science</Link>
        <Link to={`${props.match.url}/ux`}>UX</Link>
      </nav>
      <Switch>
        <Route path={`${props.match.path}/web-dev`} component={WebDev} />
        <Route
          path={`${props.match.path}/data-science`}
          component={DataScience}
        />
        <Route path={`${props.match.path}/ux`} component={UX} />
      </Switch>
    </div>
  );
}
