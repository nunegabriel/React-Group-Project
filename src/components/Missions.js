/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/missions/missionSlice'

function Missions() {

  const { posts, loading } = useSelector((state) => state.post);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  })

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
        {posts.map((item) => (
          <tr>
            <td>{item.mission_name}</td>
            <td className="desc">{item.description}</td>
            <td><button type="submit">Not A member</button></td>
            <td><button type="submit">Join Mission</button></td>
          </tr>
        ))}

        </tbody>

        </table>
   
</div>
  );
}

export default Missions;