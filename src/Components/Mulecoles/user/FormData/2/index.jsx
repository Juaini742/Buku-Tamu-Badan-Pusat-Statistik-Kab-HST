/* eslint-disable react/prop-types */
import { Input, Select } from "antd";
import { Container, Hed1, Parag, Card, Button } from "../../../../Atoms";

function FormAddData2() {
  return (
    <Container>
      <Hed1 variant="title">Kantor Badan Pusat Statistik Kab. HST</Hed1>
      <Parag variant="subTitile">
        Selamat datang di halaman pengisian data tamu
      </Parag>
      <form action="" className="my-5">
        <Card>
          <div>
            <label>Tanggal</label>
            <Input type="date" className="my-2" />
          </div>
          <div>
            <label>Nama</label>
            <Input
              type="text"
              placeholder="Masukkan Nama Anda"
              className="my-2"
            />
          </div>
          <div>
            <label>KTP/SIM</label>
            <Input
              type="number"
              placeholder="Masukkan no KTP/SIM Anda"
              className="my-2"
              showCount
              maxLength={16}
            />
          </div>
          <div>
            <label>Nama</label>
            <Input
              type="text"
              placeholder="Masukkan Title Pendidikan Anda atau Pendidikan Terakhir"
              className="my-2"
            />
          </div>
          <div>
            <label>Umur</label>
            <Input
              type="number"
              placeholder="Masukkan Umur Anda"
              className="my-2"
              showCount
              maxLength={2}
            />
          </div>
          <div>
            <label>Pekerjaan</label>
            <Input
              type="text"
              placeholder="Masukkan Pekerjaan Anda Sekarang"
              className="my-2"
            />
          </div>
          <div>
            <label>No. Hp</label>
            <Input
              type="text"
              placeholder="Masukkan No.Hp Anda"
              className="my-2"
              showCount
              maxLength={13}
            />
          </div>
          <div>
            <label>Provinsi</label>
            <Select
              className="w-full my-2"
              placeholder="Select a position level"
            >
              <Select.Option value="choose">point A</Select.Option>
            </Select>
          </div>
          <div>
            <label>Kabupaten</label>
            <Select
              className="w-full my-2"
              placeholder="Select a position level"
            >
              <Select.Option value="choose">point A</Select.Option>
            </Select>
          </div>
          <div>
            <label>Kecamatan</label>
            <Select
              className="w-full my-2"
              placeholder="Select a position level"
            >
              <Select.Option value="choose">point A</Select.Option>
            </Select>
          </div>
          <div>
            <label>kelurahan</label>
            <Select
              className="w-full my-2"
              placeholder="Select a position level"
            >
              <Select.Option value="choose">point A</Select.Option>
            </Select>
          </div>
          <div>
            <label className="block">Data Tambahan Alamat</label>
            <textarea
              name="alamat"
              id=""
              rows="10"
              className="w-full rounded-sm"
            ></textarea>
          </div>
          <div>
            <label>Data Yang Diperlukan</label>
            <Input
              type="text"
              placeholder="Masukkan Data yang Anda Perlukan"
              className="my-2"
            />
          </div>
          <div className="flex justify-end">
            <Button variant="primary" className="py-2 px-5">
              Tambah foto
            </Button>
          </div>
          <div>
            <label>Tambahkan Foto Dokumentasi</label>
            <Input type="file" className="my-2" />
          </div>
          <Button variant="primary" className="w-full py-2 ">
            Simpan Data
          </Button>
        </Card>
      </form>
      <div className="my-52"></div>
    </Container>
  );
}

export default FormAddData2;
