import { Link } from "react-router-dom";
import { Container, Hed1, Parag, Button } from "../../../../Atoms";
import { useState } from "react";
import CriticsForm from "../../Critics";
import { Carousel } from "antd";

function HeroUser() {
  const [isVisible, setIsVisible] = useState(false);

  const hanldeVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container className="relative">
      <Hed1 variant="title">Kantor Badan Pusat Statistik Kab. HST</Hed1>
      <Parag variant="subTitile">Selamat datang di halaman Beranda</Parag>

      <div className="overflow-hidden rounded-xl my-5">
        <img src="./image/hero 1.jpg" alt="office" />
      </div>

      {/* <Carousel autoplay>
        <div className="overflow-hidden rounded-xl my-5">
          <img src="./image/hero 1.jpg" alt="office" />
        </div>
        <div className="overflow-hidden rounded-xl my-5">
          <img src="./image/hero 2.jpg" alt="office" />
        </div>
        <div className="overflow-hidden rounded-xl my-5">
          <img src="./image/hero3.jpg" alt="office" />
        </div>
      </Carousel> */}

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
      <CriticsForm hanldeVisible={hanldeVisible} isVisible={isVisible} />
    </Container>
  );
}

export default HeroUser;
