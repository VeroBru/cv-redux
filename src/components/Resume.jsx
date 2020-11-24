import React from "react";
import { connect } from "react-redux";
import BlockTimeline from "./BlockTimeline";
import CodingSkills from "./CodingSkills";
import Title from "./Title";

import "./resume.css";

import { requestData } from "../redux/actions/dataActions";

//de que se ahce destructuring
function Resume({ data, dispatch }) {
  if (!data?.length) {
    dispatch(requestData());
  }

  return (
    <>
      {data && (
        <div className="resume">
          <div className="resume_title">
            <h1>Resume</h1>
            <hr />
          </div>
          <div className="main">
            <div className="resume_container">
              <BlockTimeline
                title={data.block1.title}
                year={data.block1.year}
                place={data.block1.place}
                titleDescription={data.block1.titleDescription}
                description={data.block1.description}
              />
              <BlockTimeline
                title={data.block2.title}
                year={data.block2.year}
                place={data.block2.place}
                titleDescription={data.block2.titleDescription}
                description={data.block2.description}
              />
            </div>

            <div className="skills">
              <Title title={data.skillsTitle} />
              <CodingSkills
                skill={data.skills.skill1.name}
                level={data.skills.skill1.level}
              />
              <CodingSkills
                skill={data.skills.skill2.name}
                level={data.skills.skill2.level}
              />
              <CodingSkills
                skill={data.skills.skill3.name}
                level={data.skills.skill3.level}
              />
              <CodingSkills
                skill={data.skills.skill4.name}
                level={data.skills.skill4.level}
              />
              <CodingSkills
                skill={data.skills.skill5.name}
                level={data.skills.skill5.level}
              />
              <CodingSkills
                skill={data.skills.skill6.name}
                level={data.skills.skill6.level}
              />
              <CodingSkills
                skill={data.skills.skill7.name}
                level={data.skills.skill7.level}
              />
              <CodingSkills
                skill={data.skills.skill8.name}
                level={data.skills.skill8.level}
              />
              <CodingSkills
                skill={data.skills.skill9.name}
                level={data.skills.skill9.level}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function mapStateToProps({ dataReducer }) {
  return {
    data: dataReducer.data,
  };
}

export default connect(mapStateToProps)(Resume);
