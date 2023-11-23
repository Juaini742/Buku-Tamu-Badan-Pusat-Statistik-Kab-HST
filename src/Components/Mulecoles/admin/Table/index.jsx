import { Table } from "antd";
import { Link } from "react-router-dom";
import { HiArchiveBoxXMark, HiEye, HiPencilSquare } from "react-icons/hi2";
import HomeSection1Admin from "../Section1/Index";
import { Container, Hed1, Button } from "../../../Atoms";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { guesAlltAction } from "../../../../store/Actions/guestsGetAllAction";

function TableDataAdmin() {
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
    button: (
      <>
        <Link to={`/detailsAdmin/${item.id}`}>
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
    {
      title: "Tindakan",
      dataIndex: "button",
      key: "button",
    },
  ];
  return (
    <Container className="my-10">
      <HomeSection1Admin bigTitle="Tabel" />
      <Hed1 variant="title-primary">Tabel Informasi</Hed1>
      <div className="overflow-scroll w-[400px] sm:w-full">
        <Table
          dataSource={dataSource}
          columns={columns}
          className="w-[800px]"
        />
      </div>
    </Container>
  );
}

export default TableDataAdmin;
