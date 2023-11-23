/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Hed1, Parag, Button, Card } from "../../../../Atoms";
import { useEffect } from "react";
import { Skeleton } from "antd";
import { loadGuestAction } from "../../../../../store/Actions/guestsGetAction";

function FormAddData12() {
  const dispatch = useDispatch();
  const guests = useSelector((state) => state.guests.data);
  const loading = useSelector((state) => state.guests.status === "loading");

  useEffect(() => {
    dispatch(loadGuestAction());
  }, [dispatch]);

  return (
    <Container>
      <Hed1 variant="title">Kantor Badan Pusat Statistik Kab. HST</Hed1>
      <Parag variant="subTitile">
        Selamat datang di halaman pengisian data tamu
      </Parag>
      <div className="">
        <Link to="/formAdd1/formAdd2">
          <Button variant="primary" className="py-2 px-10">
            IPDS
          </Button>
        </Link>
        <Link to="/formAdd1/formAdd2">
          <Button variant="danger" className="py-2 px-10 mx-3">
            Umum
          </Button>
        </Link>
      </div>

      {loading ? (
        <Skeleton active />
      ) : (
        guests.map((item) => (
          <Card key={item.id} className="flex-between-center mt-10">
            <figure>
              <Parag variant="subTitile">Name: {item.name}</Parag>
              <Parag variant="subTitile">Nik/Sim: {item.ktp}</Parag>
              <Parag variant="subTitile">Pendidikan: {item.educate}</Parag>
              <Parag variant="subTitile">No.Hp: {item.phone}</Parag>
            </figure>
            <div className="flex gap-2">
              <Link to={`/details/${item.id}`}>
                <Button variant="primary" className="h-20 px-4">
                  Lihat Lengkap
                </Button>
              </Link>
              <Button variant="warning" className="h-20 px-4">
                Edit
              </Button>
            </div>
          </Card>
        ))
      )}

      <div className="my-52"></div>
    </Container>
  );
}

export default FormAddData12;
