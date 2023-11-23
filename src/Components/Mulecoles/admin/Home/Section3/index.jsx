import { Table } from "antd";
import { Container, Hed1 } from "../../../../Atoms";
import { guesAlltAction } from "../../../../../store/Actions/guestsGetAllAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function HomeSection3Admin() {
  const dispatch = useDispatch();
  const guests = useSelector((state) => state.guests.data);

  useEffect(() => {
    dispatch(guesAlltAction());
  }, [dispatch]);

  const dataSource = guests.map((item) => ({
    key: item.id,
    date: item.date,
    name: item.name,
    age: item.age,
    imported: item.data,
  }));

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

  return (
    <Container className="my-10 snap-x">
      <Hed1 variant="title-primary">Tabel Data</Hed1>
      <div className="snap-center">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </Container>
  );
}

export default HomeSection3Admin;
