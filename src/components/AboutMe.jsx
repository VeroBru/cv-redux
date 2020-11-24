import React from "react";
import { connect } from "react-redux";
import "./aboutMe.css";
import { requestData } from "../redux/actions/dataActions";

function AboutMe({ data, dispatch }) {
  if (!data && !data?.length) {
    dispatch(requestData());
  }

  return (
    <>
      <div className="container_aboutme">
        {data && (
          <div>
            <h1 className="nameh1">{data.aboutMe.name}</h1>
            <p>{data.aboutMe.textAboutMe}</p>
          </div>
        )}
        {!data && <h2>LOADING...</h2>}
      </div>
    </>
  );
}

function mapStateToProps({ dataReducer }) {
  return {
    data: dataReducer.data,
  };
}

export default connect(mapStateToProps)(AboutMe);
