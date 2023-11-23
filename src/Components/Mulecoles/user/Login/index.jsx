import { Input } from "antd";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Container, Hed1, Button } from "../../../Atoms";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import RegisterFormUser from "../Register";
import { loginAction } from "../../../../store/Actions/loginAction";

function LoginFormUser() {
  const [isRegisVisible, setIsRegisVisible] = useState(false);
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.auth.loginError);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hanldeRegisVisible = () => {
    setIsRegisVisible(!isRegisVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction({ email, password }));
  };

  return (
    <>
      <Container className="mt-[10%]">
        <RegisterFormUser
          hanldeRegisVisible={hanldeRegisVisible}
          isRegisVisible={isRegisVisible}
        />

        <div
          className={`items-center  gap-3  my-10 ${
            isRegisVisible ? "hidden" : "grid-1-2"
          }`}
        >
          <div>
            <Hed1 variant="title">
              Welcome to Badan Pusat Statistik Kab. HST
            </Hed1>
            <p className="leading-8 text-sm">
              Selamat datang di website Badan Pusat Statistik (BPS)! Kami sangat
              senang melihat Anda di sini. Jika Anda belum memiliki akun, jangan
              lewatkan kesempatan untuk menjadi bagian dari komunitas kami.
              Lakukan registrasi sekarang. Klik tombol di bawah ini untuk
              memulai proses pendaftaran. Terima kasih atas partisipasi Anda!
            </p>
            <Button
              onClick={hanldeRegisVisible}
              className="border-b-4 border-primary"
            >
              Register
            </Button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="border-2 shadow-md rounded-md p-5"
          >
            <div className="w-52 mx-auto my-5">
              <img src="image/logoStatistik black.png" alt="" />
            </div>
            <div>{loginError && <p>{loginError}</p>}</div>
            <div className="mt-4">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="name"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="name"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="primary" className="py-2 px-5 mt-3">
                <AiFillGoogleCircle />
              </Button>
              <Button variant="primary" className="w-full py-2 mt-3">
                Login
              </Button>
            </div>
          </form>
        </div>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default LoginFormUser;
