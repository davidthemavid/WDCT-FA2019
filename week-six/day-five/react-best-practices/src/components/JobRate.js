import React from "react";
import PropTypes from "prop-types";

export default function JobRate({ cohort, campus, totalStudents, rate }) {
  return (
    <div className="jobrate">
      <h2>{cohort}</h2>
      <h4>{campus}</h4>
      <h3>{totalStudents}</h3>
      <h1>{rate}%</h1>
    </div>
  );
}

JobRate.propTypes = {
  cohort: PropTypes.string.isRequired,
  campus: PropTypes.string,
  totalStudents: PropTypes.number.isRequired,
  rate: PropTypes.number
};

JobRate.defaultProps = {
  campus: "Vancouver",
  rate: 0
};
