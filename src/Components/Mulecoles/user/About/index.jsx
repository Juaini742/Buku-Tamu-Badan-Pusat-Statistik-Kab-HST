import { Link } from "react-router-dom";
import { Container, Hed1, Parag, Button } from "../../../Atoms";
function AboutUser() {
  return (
    <Container className="my-5">
      <Hed1 variant="title">Kantor Badan Pusat Statistik Kab. HST</Hed1>
      <Parag variant="subTitile">Selamat datang di halaman Tenang Kami</Parag>
      <div className="my-5 overflow-hidden rounded-md">
        <img src="./image/hero 1.jpg" alt="office" />
      </div>
      <Parag className="font-semibold text-base leading-10 text-justify">
        Badan Pusat Statistik Kabupaten Hulu Sungai Tengah Jl. Keramat Manjang
        No. 10 Barabai, 71313 Kalimantan Selatan. Badan Pusat Statistik adalah
        Lembaga Pemerintah Non-Departemen yang bertanggung jawab langsung kepada
        Presiden. Sebelumnya, BPS merupakan Biro Pusat Statistik, yang dibentuk
        berdasarkan UU Nomor 6 Tahun 1960 tentang Sensus dan UU Nomer 7 Tahun
        1960 tentang Statistik. Sebagai pengganti kedua UU tersebut ditetapkan
        UU Nomor 16 Tahun 1997 tentang Statistik. Berdasarkan UU ini yang
        ditindaklanjuti dengan peraturan perundangan dibawahnya, secara formal
        nama Biro Pusat Statistik diganti menjadi Badan Pusat Statistik.
      </Parag>
      <Link to="https://ppid.bps.go.id/app/konten/6307/Profil-BPS.html">
        <Button variant="primary" className="py-2 w-full">
          Lihat Lebih Detail
        </Button>
      </Link>
    </Container>
  );
}

export default AboutUser;
