/* eslint-disable react/prop-types */
import HomeSection1Admin from "../../../Mulecoles/admin/Section1/Index";
import HomeSection2Admin from "../../../Mulecoles/admin/Home/Section2";
import HomeSection3Admin from "../../../Mulecoles/admin/Home/Section3";
import { Container } from "../../../Atoms";

function MainHomeAdmin() {
  return (
    <>
      <Container>
        <HomeSection1Admin bigTitle="Beranda" />
      </Container>
      <HomeSection2Admin />
      <HomeSection3Admin />
    </>
  );
}

export default MainHomeAdmin;
