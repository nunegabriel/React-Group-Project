import React from 'react';
import { useSelector } from 'react-redux';

const ProfileMission = () => {
  const missions = useSelector((state) => state.missions);
  const reseverdMissions = missions.filter((mission) => mission.reserved);
  return (
    <>
      <div>
        <h3>My Missons</h3>
        <table className="missions-table">
          <tbody>
            {reseverdMissions.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProfileMission;
