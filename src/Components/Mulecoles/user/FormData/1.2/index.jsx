/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Container, Hed1, Parag, Button, Card } from "../../../../Atoms";

function FormAddData12() {
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
      <Card className="flex-between-center mt-10">
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
      <div className="my-52"></div>
    </Container>
  );
}

export default FormAddData12;
