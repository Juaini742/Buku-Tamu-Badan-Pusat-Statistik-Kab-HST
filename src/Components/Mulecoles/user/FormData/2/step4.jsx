import { Hed1, Card, Button } from "../../../../Atoms";
import { Input } from "antd";

function Step4() {
  return (
    <Card className="mb-3">
      <Hed1 variant="title-card">Dokumentasi</Hed1>
      <div className="flex justify-end">
        <Button variant="primary" className="py-2 px-5">
          Tambah foto
        </Button>
      </div>
      <div>
        <label>Tambahkan Foto Dokumentasi</label>
        <Input type="file" className="my-2" />
      </div>
    </Card>
  );
}

export default Step4;
