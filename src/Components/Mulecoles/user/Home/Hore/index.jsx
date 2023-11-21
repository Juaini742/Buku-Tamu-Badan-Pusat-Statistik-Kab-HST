import { Link } from "react-router-dom";
import { Container, Hed1, Parag, Button } from "../../../../Atoms";
import { useState } from "react";
import CriticsForm from "../../Critics";

function HeroUser() {
  const [isVisible, setIsVisible] = useState(false);

  const hanldeVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container className="relative">
      <Hed1 variant="title">Kantor Badan Pusat Statistik Kab. HST</Hed1>
      <Parag variant="subTitile">Selamat datang di halaman Beranda</Parag>
      <div className="my-5 overflow-hidden rounded-md">
        <img src="./image/hero 1.jpg" alt="office" />
      </div>
      <Parag className="text-[12px] w-[80%]">
        Sebelum anda dapat menambahkan isian baru, anda harus melakukan scan QR
        terlebih dahulu
      </Parag>
      <Button
        variant="outline"
        onClick={hanldeVisible}
        className="mt-5 mr-3 py-2 px-9 "
      >
        Berikan Saran
      </Button>
      <Link to="/formAdd1">
        <Button variant="primary" className="py-3 px-9 ">
          Sceen Disini
        </Button>
      </Link>
      <CriticsForm isVisible={isVisible} />
    </Container>
  );
}

export default HeroUser;
