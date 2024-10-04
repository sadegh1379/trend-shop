import type { FC } from "react";
import { ProfileContainer } from "./profile.style";

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  return <ProfileContainer>profile</ProfileContainer>;
};

export default Profile;
