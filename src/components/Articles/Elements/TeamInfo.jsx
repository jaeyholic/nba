import React from "react";
import style from "../Articles.module.css";

const TeamInfo = props => {
  return (
    <div className={style.TeamInfo}>
      <div
        className={style.left}
        style={{
          background: `url(/images/teams/${props.team.logo})`
        }}
      />
      <div className={style.right}>
        <span>
          {props.team.city} {props.team.name}
        </span>
      </div>
      <div>
        <strong>
          W: {props.team.stats[0].wins} L: {props.team.stats[0].defeats}
        </strong>
      </div>
    </div>
  );
};

export default TeamInfo;
