/* eslint-disable react/prop-types */
import { Hed1, Card } from "../../../../Atoms";
import { Input } from "antd";

function Step1(props) {
  const { formData, handleChange } = props;

  return (
    <Card className="mb-3">
      <Hed1 variant="title-card">Informasi</Hed1>
      <div>
        <label htmlFor="date">Tanggal</label>
        <Input
          type="date"
          id="date"
          name="date"
          onChange={handleChange}
          value={formData.date}
          className="my-2"
          required
        />
      </div>
      <div>
        <label htmlFor="data">Data Yang Diperlukan</label>
        <Input
          type="text"
          id="data"
          name="data"
          onChange={handleChange}
          value={formData.data}
          placeholder="Masukkan Data yang Anda Perlukan"
          className="my-2"
          required
        />
      </div>
    </Card>
  );
}

export default Step1;
