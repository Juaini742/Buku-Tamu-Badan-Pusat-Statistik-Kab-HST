import { Container, Card, Button } from "../../../../Atoms";
import { Link, useParams } from "react-router-dom";
import { Input, Skeleton } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { guesAlltAction } from "../../../../../store/Actions/guestsGetAllAction";

function DetailDataAdmin() {
  const dispatch = useDispatch();
  const guests = useSelector((state) => state.guests.data);
  const [selectedItem, setSelectedItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    dispatch(guesAlltAction());
  }, [dispatch]);

  useEffect(() => {
    const selected = guests.find((guest) => guest.id === id); // Menggunakan ID langsung
    setSelectedItem(selected);
  }, [id, guests]);

  if (!selectedItem) {
    return (
      <Container>
        <Skeleton active paragraph={{ rows: 20 }} />
      </Container>
    );
  }

  return (
    <Container>
      <Card className="my-5">
        <div>
          <label>Tanggal</label>
          <Input value={selectedItem.date} className="my-2" />
        </div>
        <div>
          <label>Nama</label>
          <Input type="text" value={selectedItem.name} className="my-2" />
        </div>
        <div>
          <label>KTP/SIM</label>
          <Input value={selectedItem.ktp} className="my-2" />
        </div>
        <div>
          <label>Pendidikan</label>
          <Input value={selectedItem.educate} className="my-2" />
        </div>
        <div>
          <label>Umur</label>
          <Input className="my-2" value={selectedItem.age} />
        </div>
        <div>
          <label>Pekerjaan</label>
          <Input className="my-2" value={selectedItem.work} />
        </div>
        <div>
          <label>No. Hp</label>
          <Input className="my-2" value={selectedItem.phone} />
        </div>
        <div>
          <label className="block">Provinsi</label>
          <Input className="my-2" value={selectedItem.selectedProvinsi} />
        </div>
        <div>
          <label className="block">Kabupaten</label>
          <Input className="my-2" value={selectedItem.selectedKab} />
        </div>
        <div>
          <label className="block">Kecamatan </label>
          <Input className="my-2" value={selectedItem.selectedKec} />
        </div>
        <div>
          <label className="block">Kelurahan</label>
          <Input className="my-2" value={selectedItem.selectedKel} />
        </div>
        <div>
          <label className="block">Data Tambahan Alamat</label>
          <Input className="my-2" value={selectedItem.address} />
        </div>
        <div>
          <label>Data Yang Diperlukan</label>
          <Input className="my-2" value="Data Penduduk" />
        </div>
        <Link to="#">
          <Button variant="warning" className="py-2 px-5 mr-4">
            Perbaharui data
          </Button>
        </Link>
        <Link to="/table">
          <Button variant="outline" className="py-1 px-5 mt-3">
            Kembali ke Tabel
          </Button>
        </Link>
      </Card>
      <div className="my-5">
        <div className="my-3">
          <img src="../image/hero 2.jpg" alt="office" className="rounded-lg" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <img
            src="../image/hero 1.jpg"
            alt="office"
            className="max-w-md md:max-w-sm rounded-md"
          />
          <img
            src="../image/hero 2.jpg"
            alt="office"
            className="max-w-md md:max-w-sm rounded-md"
          />
          <img
            src="../image/hero3.jpg"
            alt="office"
            className="max-w-md md:max-w-sm rounded-md"
          />
          <img
            src="../image/hero4.jpg"
            alt="office"
            className="max-w-md md:max-w-sm rounded-md"
          />
          <img
            src="../image/hero5.jpg"
            alt="office"
            className="max-w-md md:max-w-sm rounded-md"
          />
        </div>
      </div>
    </Container>
  );
}

export default DetailDataAdmin;
