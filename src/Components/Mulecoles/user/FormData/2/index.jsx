/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Hed1, Parag, Button } from "../../../../Atoms";
import { guestsPostAction } from "../../../../../store/Actions/guestsPostAction";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";

function FormAddData2() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.guests.currentUser);

  const [formData, setFormData] = useState({
    date: "",
    name: "",
    ktp: "",
    educate: "",
    age: "",
    work: "",
    phone: "",
    selectedProvinsi: "",
    selectedKab: "",
    selectedKec: "",
    selectedKel: "",
    address: "",
    data: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(guestsPostAction({ formData, currentUser }));

    // setFormData({
    //   date: "",
    //   name: "",
    //   ktp: "",
    //   educate: "",
    //   age: "",
    //   work: "",
    //   phone: "",
    //   selectedProvinsi: "",
    //   selectedKab: "",
    //   selectedKec: "",
    //   selectedKel: "",
    //   address: "",
    //   data: "",
    // });
  };

  return (
    <Container>
      <Hed1 variant="title">Kantor Badan Pusat Statistik Kab. HST</Hed1>
      <Parag variant="subTitile">
        Selamat datang di halaman pengisian data tamu
      </Parag>
      <form onSubmit={handleSubmit} className="my-5">
        <Step1 formData={formData} handleChange={handleChange} />
        <Step2 formData={formData} handleChange={handleChange} />
        <Step3
          formData={formData}
          setFormData={setFormData}
          dispatch={dispatch}
          handleChange={handleChange}
        />
        <Step4 />

        <Button variant="primary" className="w-full py-2 ">
          Simpan Data
        </Button>
      </form>
      <div className="my-52"></div>
    </Container>
  );
}

export default FormAddData2;
