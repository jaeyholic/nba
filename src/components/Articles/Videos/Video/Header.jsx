import React from 'react';
import TeamInfo from '../../Elements/TeamInfo'

const Header = (props) => {

  const TeamData = (team) => {
    return team ? (
      <TeamInfo team={team} />
    ): null
  }

  return (
    <div>
      {TeamData(props.team)}
    </div>
  );
};

export default Header;