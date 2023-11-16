import { Table } from "antd";
import { Container, Hed1 } from "../../../../Atoms";
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

function HomeSection3Admin() {
  return (
    <Container className="my-10">
      <Hed1 variant="title-primary">Tabel Data</Hed1>
      <Table dataSource={dataSource} columns={columns} />
    </Container>
  );
}

export default HomeSection3Admin;
