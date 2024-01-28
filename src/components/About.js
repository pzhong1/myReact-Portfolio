import React from "react";
function About() {
  //return anything i want display in the website
  return (
    <div className="about">
      <h2 className="mb-4">About Me</h2>
      {/* this is my picture src and set the width 200  and if the pic is not display then display puze zhong */}
      <img
        src={process.env.PUBLIC_URL + "/images/puze zhong img-circle.png"}
        width={200}
        alt="Puze Zhong"
      />
      <p>
        I am a full-stack web developer proficient in both front-end and
        back-end technologies. Since entering the field of web development, I
        have passionately explored new technologies and practices, aiming to
        deliver an optimal user experience alongside efficient back-end
        solutions. I am committed to collaborating closely with team members to
        ensure every project adheres to high-quality standards and fulfills
        customer requirements. I eagerly anticipate connecting with like-minded
        professionals to discuss emerging technological trends and potential
        collaboration opportunities.
      </p>
    </div>
  );
}
export default About; // export so it can use in other files
