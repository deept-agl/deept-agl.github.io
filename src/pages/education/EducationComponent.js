import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
// import EducationImg from "./EducationImg"; //Old code
import eduImage from "E:/deept-agl.github.io/src/assets/images/tej_grad.png"; //New Image Added
import "./EducationComponent.css";
import { Fade } from "react-reveal";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            {/* <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div> */}
            <img
              src={eduImage}
              alt="Education Illustration"
              className="education-image"
            />
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Qualification and Certifications
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                Recipient of a fully-funded scholarship for Masters from the
                Erasmus+ Organization (by European Union). This highly
                prestigious program selects only 25 students worldwide annually
                for the course, highlighting exceptional academic merit and
                potential. Completed the 4-semester, inter-European program
                across three distinguished universities, demonstrating
                adaptability and a broad international perspective on data
                science.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        <Certifications theme={props.theme} />
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
