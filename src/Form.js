import React from "react";

const Form = (props) => {
  const { img, Title, team, link, desc, deadline } = props.what;

  return (
    <article className="what">
      <div className="box_image">
        <img src={img} alt="" />
      </div>
      <div className="box_form">
        <div className="form_head">
          <div className="form_title">{Title}</div>
          <div className="form_team_name">{team}</div>
        </div>

          <div className="form_desc">{desc}</div>
          <div className="form_footer">
          <div className="form_deadline">{deadline}</div>
          <button type="button" className ="primary">Fill the Form</button>

        </div>
      </div>
    </article>
  );
};

export default Form;
