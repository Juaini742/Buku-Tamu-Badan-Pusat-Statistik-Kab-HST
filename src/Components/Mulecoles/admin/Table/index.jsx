import { Table } from "antd";
import { Link } from "react-router-dom";
import { HiArchiveBoxXMark, HiEye, HiPencilSquare } from "react-icons/hi2";
import HomeSection1Admin from "../Section1/Index";
import { Container, Hed1, Button } from "../../../Atoms";

const dataSource = [
  {
    key: "1",
    date: "sabtu, 12 mei 2020",
    name: "Mike",
    age: 32,
    imported: "10 Downing Street",
    button: (
      <>
        <Link to="/detailsAdmin">
          <Button variant="primary" className="px-2 py-2">
            <HiEye />
          </Button>
        </Link>
        <Link to="/updateAdmin">
          <Button variant="warning" className="px-2 py-2 mx-2">
            <HiPencilSquare />
          </Button>
        </Link>
        <Button variant="danger" className="px-2 py-2">
          <HiArchiveBoxXMark />
        </Button>
      </>
    ),
  },
  {
    key: "2",
    date: "sabtu, 20 mei 2020",
    name: "John",
    age: 42,
    imported: "10 Downing Street",
    button: (
      <>
        <Link to="/detailsAdmin">
          <Button variant="primary" className="px-2 py-2">
            <HiEye />
          </Button>
        </Link>
        <Link to="/updateAdmin">
          <Button variant="warning" className="px-2 py-2 mx-2">
            <HiPencilSquare />
          </Button>
        </Link>
        <Button variant="danger" className="px-2 py-2">
          <HiArchiveBoxXMark />
        </Button>
      </>
    ),
  },
  {
    key: "3",
    date: "Senin, 12 mei 2023",
    name: "John",
    age: 42,
    imported: "10 Downing Street",
    button: (
      <>
        <Link to="/detailsAdmin">
          <Button variant="primary" className="px-2 py-2">
            <HiEye />
          </Button>
        </Link>
        <Link to="/updateAdmin">
          <Button variant="warning" className="px-2 py-2 mx-2">
            <HiPencilSquare />
          </Button>
        </Link>
        <Button variant="danger" className="px-2 py-2">
          <HiArchiveBoxXMark />
        </Button>
      </>
    ),
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
  {
    title: "Tindakan",
    dataIndex: "button",
    key: "button",
  },
];

function TableDataAdmin() {
  return (
    <Container className="my-10">
      <HomeSection1Admin bigTitle="Tabel" />
      <Hed1 variant="title-primary">Tabel Informasi</Hed1>
      <Table dataSource={dataSource} columns={columns} />
    </Container>
  );
}

export default TableDataAdmin;
