/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, fetchMissions, leaveMission } from '../redux/missions/missionSlice'

function Missions() {

  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const initMission = [];
  
  useEffect(() => {
    if ((missions.length || initMission.length) === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions]);


  const bookMission = (mission) => {
    if (!mission.reserved) {
      dispatch(joinMission(mission.id));
    } else {
      dispatch(leaveMission(mission.id));
    }
  };
  return (
    <div className="missions">
      <table>
        <thead>
          <tr className="row">
            <th className="column head">Mission</th>
            <th className="column head">Description</th>
            <th className="column head">Status</th>
            <th className="column head">{' '}</th>
          </tr>
        </thead>

        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.mission_name}</td>
              <td className="desc">{mission.description}</td>
              <td>
                <div className="mission-status">
                  {mission.reserved && 'Active Member'}
                  {!mission.reserved && 'Not a Member'}
                </div>
              </td>
              <td><button key={mission.id} type="submit"
              onClick={() => bookMission(mission)}
              >
                 {mission.reserved && 'Leave Mission'}
                {!mission.reserved && 'Join Mission'}
              </button>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Missions;