import { Container, Card, Hed1, Button } from "../../../../Atoms";
import { Link } from "react-router-dom";
import { Input } from "antd";
import HomeSection1Admin from "../../Section1/Index";

function DetailDataAdmin() {
  return (
    <Container>
      <HomeSection1Admin bigTitle="Tabel" />
      <Hed1 variant="title-primary">Detail Data</Hed1>
      <Card className="my-5">
        <div>
          <label>Tanggal</label>
          <Input value="Sabtu, 12 Mei 2023" className="my-2" />
        </div>
        <div>
          <label>Nama</label>
          <Input type="text" value="James" className="my-2" />
        </div>
        <div>
          <label>KTP/SIM</label>
          <Input value="657739839889" className="my-2" />
        </div>
        <div>
          <label>Pendidikan</label>
          <Input value="S1 Sistem Informasi" className="my-2" />
        </div>
        <div>
          <label>Umur</label>
          <Input className="my-2" value="23 Tahun" />
        </div>
        <div>
          <label>Pekerjaan</label>
          <Input className="my-2" value="Admin Perusahaan" />
        </div>
        <div>
          <label>No. Hp</label>
          <Input className="my-2" value="086755363" />
        </div>
        <div>
          <label className="block">Provinsi</label>
          <Input className="my-2" value="Kalimantan Selatan" />
        </div>
        <div>
          <label className="block">Kabupaten</label>
          <Input className="my-2" value="Hulu Sungai Tengah" />
        </div>
        <div>
          <label className="block">Kecamatan </label>
          <Input className="my-2" value="Barabai" />
        </div>
        <div>
          <label className="block">Kelurahan</label>
          <Input className="my-2" value="Barabai Darat" />
        </div>
        <div>
          <label className="block">Data Tambahan Alamat</label>
          <Input className="my-2" value="Jln Pancasila Barabai" />
        </div>
        <div>
          <label>Data Yang Diperlukan</label>
          <Input className="my-2" value="Data Penduduk" />
        </div>
        <Button variant="warning" className="py-2 px-5 mr-4">
          Perbaharui data
        </Button>
        <Link to="/admin">
          <Button variant="outline" className="py-1 px-5 mt-3">
            Kembali ke halaman utama
          </Button>
        </Link>
      </Card>
      <div className="my-5">
        <div className="my-3">
          <img src="./image/hero 2.jpg" alt="office" className="rounded-lg" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <img
            src="./image/hero 1.jpg"
            alt="office"
            className="max-w-md md:max-w-sm rounded-md"
          />
          <img
            src="./image/hero 2.jpg"
            alt="office"
            className="max-w-md md:max-w-sm rounded-md"
          />
          <img
            src="./image/hero3.jpg"
            alt="office"
            className="max-w-md md:max-w-sm rounded-md"
          />
          <img
            src="./image/hero4.jpg"
            alt="office"
            className="max-w-md md:max-w-sm rounded-md"
          />
          <img
            src="./image/hero5.jpg"
            alt="office"
            className="max-w-md md:max-w-sm rounded-md"
          />
        </div>
      </div>
    </Container>
  );
}

export default DetailDataAdmin;
