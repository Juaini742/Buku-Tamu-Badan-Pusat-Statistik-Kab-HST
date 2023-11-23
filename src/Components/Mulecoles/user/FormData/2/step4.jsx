import { useState } from "react";
import { Hed1, Card, Button } from "../../../../Atoms";
import { Input } from "antd";
import { FaMinus, FaPlus } from "react-icons/fa";

function Step4() {
  const [imageInputs, setImageInputs] = useState([]);

  const addImageInput = () => {
    setImageInputs([...imageInputs, {}]);
  };

  const removeImageInput = (index) => {
    const newImageInputs = [...imageInputs];
    newImageInputs.splice(index, 1);
    setImageInputs(newImageInputs);
  };

  return (
    <Card className="mb-3">
      <Hed1 variant="title-card">Dokumentasi</Hed1>
      <div className="flex justify-end">
        <Button onClick={addImageInput} variant="primary" className="py-2 px-5">
          <FaPlus />
        </Button>
        <Button
          onClick={removeImageInput}
          variant="danger"
          className="py-2 px-5 ml-3"
        >
          <FaMinus />
        </Button>
      </div>
      <div>
        <label>Tambahkan Foto Dokumentasi</label>
        {imageInputs.map((_, index) => (
          <Input key={index} type="file" className="my-2" />
        ))}
      </div>
    </Card>
  );
}

export default Step4;
