/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Container, Hed1, Parag, Button } from "../../../../Atoms";

function FormAddData1() {
  return (
    <Container>
      <Hed1 variant="title">Kantor Badan Pusat Statistik Kab. HST</Hed1>
      <Parag variant="subTitile">
        Selamat datang di halaman pengisian data tamu
      </Parag>
      <Link to="/formAdd1/formAdd2">
        <Button variant="primary" className="py-3 px-10 mt-5">
          Sceen Disini
        </Button>
      </Link>
      <div className="flex-center h-52 text-slate-400 font-bold">
        Sebelum Anda dapat melakukan tambah data baru, silahkan scan QR terlebuh
        dahulu
      </div>
      <div className="my-52"></div>
    </Container>
  );
}

export default FormAddData1;
