/* eslint-disable react/prop-types */
import HomeSection1Admin from "../../Section1/Index";
import { Container, Button } from "../../../../Atoms";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Step1 from "../../../user/FormData/2/step1";
import Step2 from "../../../user/FormData/2/step2";
import Step3 from "../../../user/FormData/2/step3";
import Step4 from "../../../user/FormData/2/step4";
import { guestsPostAction } from "../../../../../store/Actions/guestsPostAction";

function FormAddDataAdmin() {
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
      <HomeSection1Admin bigTitle="Tambah Data" />
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

export default FormAddDataAdmin;
