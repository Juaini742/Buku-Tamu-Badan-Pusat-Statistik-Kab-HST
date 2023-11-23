/* eslint-disable react/prop-types */
import { Input } from "antd";
import { Card, Button } from "../../../Atoms";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { criticsPostAction } from "../../../../store/Actions/criticsPostAction";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CriticsForm(props) {
  const { isVisible, hanldeVisible } = props;
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.critics.currentUser);

  const [formData, setFormData] = useState({
    name: "",
    suggestion: "",
  });

  const handleChange = (e) => {
    if (e.target) {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        suggestion: e,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(criticsPostAction({ formData, currentUser }));
    setFormData({
      name: "",
      suggestion: "",
    });
  };

  return (
    <Card
      className={`h-72 trans-300 overflow-scroll absolute top-80 w-full ${
        isVisible ? "scale-100" : "scale-0"
      }`}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nama</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan Nama Anda"
            className="my-2"
            required
          />
        </div>
        <div>
          <label>Pesan</label>
          <ReactQuill
            theme="snow"
            value={formData.suggestion}
            onChange={handleChange}
            className="bg-white mb-2"
            required
          />
        </div>
        <div>
          <Button variant="primary" className="py-2 px-5">
            Kirim
          </Button>
          <Button
            onClick={hanldeVisible}
            variant="danger"
            className="py-2 px-5 ml-3"
          >
            Batal
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default CriticsForm;
