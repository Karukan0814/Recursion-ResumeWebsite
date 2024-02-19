import React from "react";

const SubTitle = ({ title, subtitle }) => {
  return (
    <div>
      <h3 className="subhead-text text-blue-900  ">
        {title}
        <span className="text-sm mx-8">{subtitle}</span>
      </h3>
      <hr className="section-divider" />
    </div>
  );
};

export default SubTitle;
