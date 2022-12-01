const DISPLAY_MISSIONS = 'missions/DISPLAY_MISSION';
const LEAVE_MISSION = 'missions/LEAVE_MISSION';
const JOIN_MISSION = 'missions/JOIN_MISSION';

export const displayMissions = (data) => ({
  data,
  type: DISPLAY_MISSIONS,
});

const orgMissions = (data) => {
  const missions = data.map((mission) => ({
    reserved: false,
    id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  return displayMissions(missions);
};

export const fetchMissions = () => (dispatch) => {
  try {
    fetch('https://api.spacexdata.com/v3/missions')
      .then((response) => response.json())
      .then((json) => dispatch(orgMissions(json)));
  } catch (e) {
    console.log('error');
  }
};

const initialState = [];

function missionsReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_MISSIONS:
      return action.data;

      // for checking status
    case JOIN_MISSION:
      return state.map((status) => {
        if (status.id !== action.id) {
          return status;
        }
        return { ...status, reserved: true };
      });
    case LEAVE_MISSION:
      return state.map((status) => {
        if (status.id !== action.id) {
          return status;
        } return { ...status, reserved: false };
      });
    default:
      return state;
  }
}

export const joinMission = (id) => ({
  id,
  type: JOIN_MISSION,
});
export const leaveMission = (id) => ({
  id,
  type: LEAVE_MISSION,
});

export default missionsReducer;
