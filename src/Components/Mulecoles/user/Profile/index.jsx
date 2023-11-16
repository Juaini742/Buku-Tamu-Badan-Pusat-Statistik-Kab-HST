import { Container, Hed1, Parag } from "../../../Atoms";

function ProfileUser() {
  return (
    <Container>
      <Hed1 variant="title">Kantor Badan Pusat Statistik Kab. HST</Hed1>
      <Parag variant="subTitile">
        Selamat datang di halaman informasi user
      </Parag>
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

export default ProfileUser;
