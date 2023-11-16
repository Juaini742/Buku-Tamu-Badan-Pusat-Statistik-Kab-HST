import HomeSection1Admin from "../../Section1/Index";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { Container, Button, Parag, Hed1 } from "../../../../Atoms";

const dataSource = [
  {
    key: "1",
    date: "sabtu, 12 mei 2020",
    name: "Mike",
    age: 32,
    imported: "10 Downing Street",
  },
  {
    key: "2",
    date: "sabtu, 20 mei 2020",
    name: "John",
    age: 42,
    imported: "10 Downing Street",
  },
  {
    key: "3",
    date: "Senin, 12 mei 2023",
    name: "John",
    age: 42,
    imported: "10 Downing Street",
  },
];

const columns = [
  {
    title: "tanggal",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Nama",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Umur",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Data Yang diperlukakn",
    dataIndex: "imported",
    key: "imported",
  },
];

function AddDataStep1() {
  return (
    <Container className="my-5">
      <HomeSection1Admin bigTitle="Tambah Data" />
      <Hed1 variant="title-primary">Tombol</Hed1>
      <Parag variant="subTitile" className="my-3">
        Data akan tersimpan sesuai dengan tombol yang dipilih
      </Parag>
      <div className="">
        <Link to="addAdmin2">
          <Button variant="primary" className="py-2 px-10">
            IPDS
          </Button>
        </Link>
        <Link to="/addAdmin2">
          <Button variant="danger" className="py-2 px-10 mx-3">
            Umum
          </Button>
        </Link>
      </div>
      <div className="my-10">
        <Hed1 variant="title-primary" className="mb-3">
          Tabel Data
        </Hed1>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </Container>
  );
}

export default AddDataStep1;
