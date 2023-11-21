/* eslint-disable react/prop-types */
import { Hed1, Card } from "../../../../Atoms";
import { TreeSelect } from "antd";
import { useSelector } from "react-redux";
import { getProvAction } from "../../../../../store/Actions/prov.action";
import { getRegencData } from "../../../../../store/Actions/regencyAction";
import { getSubDistAction } from "../../../../../store/Actions/subDistAction";
import { getDistAction } from "../../../../../store/Actions/distActions";
import { useEffect } from "react";

function Step3(props) {
  const { formData, setFormData, handleChange, dispatch } = props;

  const prov = useSelector((state) => state.prov.prov);
  const regency = useSelector((state) => state.regency.regency);
  const subDist = useSelector((state) => state.subDist.subDist);
  const dist = useSelector((state) => state.dist.dist);

  useEffect(() => {
    dispatch(getProvAction());
  }, [dispatch]);

  const handleProvChange = (value) => {
    const selectedProvName = prov.find((item) => item.id === value)?.name || "";
    setFormData({
      ...formData,
      selectedProvinsi: selectedProvName,
    });
    dispatch(getRegencData(value));
  };

  const handleKabChange = (value) => {
    const selectedKabName =
      regency.find((item) => item.id === value)?.name || "";
    setFormData({
      ...formData,
      selectedKab: selectedKabName,
    });
    dispatch(getSubDistAction(value));
  };

  const handleKecChange = (value) => {
    const selectedKecName =
      subDist.find((item) => item.id === value)?.name || value;
    setFormData({
      ...formData,
      selectedKec: selectedKecName,
    });
    dispatch(getDistAction(value));
  };

  const handleKelurahanChange = (value) => {
    const selectedKelName = dist.find((item) => item.id === value)?.name || "";
    setFormData({
      ...formData,
      selectedKel: selectedKelName,
    });
  };

  const convertToTreeData = (data) => {
    return data.map((item) => ({
      title: item.name,
      value: item.id,
      key: item.id,
      children: item.children,
    }));
  };
  const treeData = convertToTreeData(prov);
  const treeDataKab = convertToTreeData(regency);
  const treeDataKec = convertToTreeData(subDist);
  const treeDataKel = convertToTreeData(dist);

  return (
    <Card className="mb-3">
      <Hed1 variant="title-card">Informasi Daerah</Hed1>
      <div>
        <label htmlFor="phone">Provinsi</label>
        <TreeSelect
          treeData={treeData}
          onChange={handleProvChange}
          className="w-full my-2"
        />
      </div>
      <div>
        <label htmlFor="phone">Kabupaten</label>
        <TreeSelect
          treeData={treeDataKab}
          onChange={handleKabChange}
          className="w-full my-2"
        />
      </div>
      <div>
        <label htmlFor="phone">Kecamatan</label>
        <TreeSelect
          treeData={treeDataKec}
          onChange={handleKecChange}
          className="w-full my-2"
        />
      </div>
      <div>
        <label htmlFor="phone">Kelurahan</label>
        <TreeSelect
          treeData={treeDataKel}
          onChange={handleKelurahanChange}
          className="w-full my-2"
        />
      </div>

      <div>
        <label htmlFor="address" className="block">
          Data Tambahan Alamat
        </label>
        <textarea
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          rows="10"
          className="w-full rounded-sm"
        ></textarea>
      </div>
    </Card>
  );
}

export default Step3;
