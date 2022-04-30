import React from "react";
import PropTypes from "prop-types";
import {
  CustomComponent, Skill
} from "@discretize/gw2-ui-new";

import skillFallback from "./skill-fallback.js";

const SkillWithFallback = (props) => {
  const {id} = props;


  if (skillFallback[id]) {
    return <><Skill {...props} className="aw2-skill-inline aw2-skill-inline-has-fallback" /><CustomComponent type="Skill" className="aw2-skill-inline-fallback" data={skillFallback[id]} disableText={true} style={{
      fontSize: "32px",
      lineHeight: "32px"
    }} /></>;
  }
  return <Skill {...props} />;

};
SkillWithFallback.propTypes = {id: PropTypes.string.isRequired};

export default SkillWithFallback;
