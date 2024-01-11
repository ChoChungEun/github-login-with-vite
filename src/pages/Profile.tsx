import { useEffect } from "react";

const Profile = () => {
  const getProfile = async () => {
    try {
      // 내 정보 서버에 요청
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return <div>profile</div>;
};

export default Profile;
