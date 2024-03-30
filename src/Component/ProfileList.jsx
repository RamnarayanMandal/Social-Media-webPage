import React, { useContext } from 'react';
import { PostList } from '../Store/Posts-List-Store'; // Correct import name
import Profile from './Profile';

const ProfileList = () => {
  const { profileList } = useContext(PostList); // Correct context property name

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10">
        {profileList.map((profile,index) => ( // Correct variable name and key attribute
          <Profile key={index} profile={profile} /> // Pass each profile as a prop to the Profile component
        ))}
      </div>
    </>
  );
};

export default ProfileList;
