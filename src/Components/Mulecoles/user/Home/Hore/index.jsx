import { Link } from "react-router-dom";
import { Container, Hed1, Parag, Button } from "../../../../Atoms";

function HeroUser() {
  return (
    <Container>
      <Hed1 variant="title">Kantor Badan Pusat Statistik Kab. HST</Hed1>
      <Parag variant="subTitile">Selamat datang di halaman Beranda</Parag>
      <div className="my-5 overflow-hidden rounded-md">
        <img src="./image/hero 1.jpg" alt="office" />
      </div>
      <Parag className="text-[12px] w-[80%]">
        Sebelum anda dapat menambahkan isian baru, anda harus melakukan scan QR
        terlebih dahulu
      </Parag>
      <Link to="/formAdd1">
        <Button variant="primary" className="mt-5 py-3 px-9 ">
          Sceen Disini
        </Button>
      </Link>
    </Container>
  );
}

export default HeroUser;
