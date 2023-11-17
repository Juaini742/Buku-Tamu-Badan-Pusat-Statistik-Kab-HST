import { Input } from "antd";
import { Link } from "react-router-dom";
import { Container, Hed1, Parag, Card, Button } from "../../../Atoms";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CriticsForm() {
  const [value, setValue] = useState("");

  return (
    <Container>
      <Hed1 variant="title">Kantor Badan Pusat Statistik Kab. HST</Hed1>
      <Parag variant="subTitile">
        Selamat datang di halaman Form Saran/Kritik
      </Parag>
      <Card className="my-10">
        <div>
          <label>Nama</label>
          <Input
            type="text"
            placeholder="Masukkan Nama Anda"
            className="my-2"
          />
        </div>
        <div>
          <label>Pesan</label>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="bg-white mb-10"
          />
        </div>
        <div>
          <Button variant="primary" className="my-5 mr-3 py-2 px-5">
            Kirim
          </Button>
          <Link to="/">
            <Button variant="warning" className="py-2 px-5">
              Batal
            </Button>
          </Link>
        </div>
      </Card>
    </Container>
  );
}

export default CriticsForm;
