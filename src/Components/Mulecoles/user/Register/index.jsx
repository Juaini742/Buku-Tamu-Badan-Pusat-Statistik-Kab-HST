/* eslint-disable react/prop-types */
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { Hed1, Button } from "../../../Atoms";
import { useState } from "react";
import { registerAction } from "../../../../store/Actions/registerAction";

function RegisterFormUser(props) {
  const { hanldeRegisVisible, isRegisVisible } = props;

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerAction({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className={` content-center items-center gap-3 my-10 ${
        isRegisVisible ? "grid-1-2" : "hidden"
      }`}
    >
      <form
        onSubmit={handleRegister}
        className="border-2 shadow-md rounded-md p-5"
      >
        <div className="w-52 mx-auto my-5">
          <img src="image/logoStatistik black.png" alt="" />
        </div>
        <div className="mt-4">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <div>
          <Button variant="primary" className="w-full py-2 mt-3">
            Register
          </Button>
        </div>
      </form>
      <div>
        <Hed1 variant="title">Welcome to Badan Pusat Statistik Kab. HST</Hed1>
        <p className="leading-8 text-sm">
          Selamat datang di website Badan Pusat Statistik (BPS)! Kami sangat
          senang melihat Anda di sini. Jika Anda sudah memiliki akun, silahkan
          login sekarang. Klik tombol di bawah ini untuk memulai proses login.
          Terima kasih atas partisipasi Anda!
        </p>
        <Button
          onClick={hanldeRegisVisible}
          className="border-b-4 border-primary"
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default RegisterFormUser;
