import { Link } from "react-router-dom";
import { Container, Button, Hed1, Parag, Card } from "../../../../Atoms";

function MainHomeUser() {
  return (
    <Container className="my-5">
      <Hed1 variant="title">Riwayat Pendataan</Hed1>
      <Card className="flex-between-center ">
        <figure>
          <Parag variant="subTitile">Name: James Brown</Parag>
          <Parag variant="subTitile">Nik/Sim: 624527283001</Parag>
          <Parag variant="subTitile">Pendidikan: S1 Sistem Informasi</Parag>
          <Parag variant="subTitile">No.Hp: 0867553627</Parag>
        </figure>
        <div className="flex gap-2">
          <Link to="/details">
            <Button variant="primary" className="h-20 px-4">
              Lihat Lengkap
            </Button>
          </Link>
          <Button variant="warning" className="h-20 px-4">
            Edit
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default MainHomeUser;
