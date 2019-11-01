import React from "react";
import JobRate from "./components/JobRate";
import "./App.css";

export default function App() {
  return (
    <>
      <p>Employment Rate for 2019 Cohorts</p>
      <div className="container">
        <JobRate cohort="Winter" totalStudents={10} rate={100} />
        <JobRate cohort="Spring" totalStudents={"8"} rate={90} />
        <JobRate cohort="Summer" totalStudents={9} rate={"75"} />
        <JobRate cohort="Fall" totalStudents={18} />
      </div>
    </>
  );
}
