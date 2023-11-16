import { Container } from "../../../Atoms";
import HomeSection1Admin from "../Section1/Index";

function SettingAdmin() {
  return (
    <Container>
      <HomeSection1Admin bigTitle="Pengaturan" />
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

export default SettingAdmin;
