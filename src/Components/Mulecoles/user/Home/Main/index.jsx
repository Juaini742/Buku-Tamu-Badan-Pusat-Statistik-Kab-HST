import { Link } from "react-router-dom";
import { Container, Button, Hed1, Parag, Card } from "../../../../Atoms";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCritics } from "../../../../../store/Actions/criticsGetAction";
import { loadGuestAction } from "../../../../../store/Actions/guestsGetAction";
import { Skeleton } from "antd";

function MainHomeUser() {
  const dispatch = useDispatch();
  const critics = useSelector((state) => state.critics.data);
  const guests = useSelector((state) => state.guests.data);
  const loading = useSelector((state) => state.critics.status === "loading");

  useEffect(() => {
    dispatch(loadCritics());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadGuestAction());
  }, [dispatch]);

  return (
    <Container className="my-5">
      <Hed1 variant="title">Riwayat Pendataan</Hed1>
      {loading ? (
        <Skeleton active paragraph={{ rows: 4 }} />
      ) : (
        guests.map((item) => (
          <Card key={item.id} className="flex-between-center mb-3">
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
      <Hed1 variant="title" className="mt-5">
        Riwayat Kritik/Saran
      </Hed1>
      {loading ? (
        <Skeleton active paragraph={{ rows: 4 }} />
      ) : (
        critics.map((item) => (
          <Card key={item.id} className="mb-3">
            <h4>
              <u>{item.name}</u>
            </h4>
            <p dangerouslySetInnerHTML={{ __html: item.suggestion }} />
          </Card>
        ))
      )}
    </Container>
  );
}

export default MainHomeUser;
