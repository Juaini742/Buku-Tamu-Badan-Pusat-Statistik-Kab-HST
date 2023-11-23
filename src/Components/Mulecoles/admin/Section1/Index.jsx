import { Hed1 } from "../../../Atoms";

function HomeSection1Admin(props) {
  const { bigTitle } = props;

  return (
    <div className="flex-wrap-between gap-3 my-10">
      <div className="">
        <Hed1 variant="title-bold">{bigTitle}</Hed1>
        <Hed1 variant="title">Buku Tamu Badan Pusat Statistik Kab. HST</Hed1>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden">
          <img src="./image/profile2.jpg" alt="profile" className="w-full" />
        </div>
        <div className="">
          <h1 className="font-bold">James Andrean</h1>
          <p>Admin BPS Kab. HST</p>
        </div>
      </div>
    </div>
  );
}

export default HomeSection1Admin;
