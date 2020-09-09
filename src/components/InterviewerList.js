import React from "react";
import PropTypes from "prop-types";

import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {

   // builds an array of interviewer list items and render
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {props.interviewers.map((interviewer) => (
          <InterviewerListItem
            key={interviewer.id}
            id={interviewer.id}
            name={interviewer.name}
            avatar={interviewer.avatar}
            setInterview={(event) => props.setInterviewer(interviewer.id)}
            selected={interviewer.id === props.interviewer}
          />
        ))}
      </ul>
    </section>
  );
}

// prop types is restricted to only specific data types 
InterviewerList.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};