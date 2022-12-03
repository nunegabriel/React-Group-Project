import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileMission from './ProfileMission';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocks) => rocks.active);

  return (
    <div className="profile">
      <div className="missions">
        <ProfileMission />
      </div>
      <div className="rockets">
        <h3>My Rockets</h3>
        {reservedRockets.length === 0 ? (
          <div className="noReservations">
            <p>No Reservations Made</p>
            <Link className="reserveRocketsLink" to="/">Make Reservations</Link>
          </div>
        ) : (
          <div className="activeRockets">
            <ul>
              {reservedRockets.map((rocket) => (
                <li key={rocket.id}>{rocket.rocket_name}</li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default Profile;
