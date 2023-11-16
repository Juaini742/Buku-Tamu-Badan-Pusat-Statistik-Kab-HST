import HomeSection1Admin from "../Section1/Index";
import { Container, Hed1 } from "../../../Atoms";

function ProfileAdmin() {
  return (
    <Container>
      <HomeSection1Admin bigTitle="Profil" />
      <Hed1 variant="title-primary">Informasi Profil</Hed1>
      <div className="flex-col-center mt-5">
        <div className="w-[200px]">
          <img src="./image/profile.jpg" alt="profile" className="rounded-lg" />
        </div>
        <div className="my-5">
          <h2>Name: James Andrean</h2>
        </div>
      </div>
    </Container>
  );
}

export default ProfileAdmin;
