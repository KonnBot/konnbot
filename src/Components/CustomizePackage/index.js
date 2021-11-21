import { Table } from "antd";
import AddRemove from "./AddRemove";
import style from "./CustomizePackage.module.css";
const index = () => {
  const columns = [
    {
      title: <div className={style.tableHead}>Item</div>,
      dataIndex: "item",
      key: "item",
      render: (text) => text,
      className: "customize",
    },
    {
      title: <div className={style.tableHead}>Unit</div>,
      dataIndex: "unit",
      key: "unit",
      className: "customize",
    },
    {
      title: <div className={style.tableHead}>Package</div>,
      dataIndex: "package",
      key: "package",
      responsive: ["md"],
      className: "customize",
    },
    {
      title: <div className={style.tableHead}>Cost</div>,
      key: "cost",
      dataIndex: "cost",
      className: "customize",
    },
  ];

  const data = [
    {
      key: "1",
      item: "Cement",
      unit: "Begs",
      package: <AddRemove />,
      cost: 200,
    },
    {
      key: "2",
      item: "Sand",
      unit: "CUS",
      package: <AddRemove />,
      cost: 200,
    },
    {
      key: "3",
      item: "Aggregate",
      unit: "CUM",
      package: <AddRemove />,
      cost: 200,
    },
    {
      key: "4",
      item: "Bars",
      unit: "Tons",
      package: <AddRemove />,
      cost: 200,
    },
    {
      key: "5",
      item: "Tile",
      unit: "Sqft",
      package: <AddRemove />,
      cost: 200,
    },
    {
      key: "6",
      item: "Doors",
      unit: "Nos",
      package: <AddRemove />,
      cost: 200,
    },
    {
      key: "7",
      item: "Windows",
      unit: "Nos",
      package: <AddRemove />,
      cost: 200,
    },
    {
      key: "8",
      item: "Kitchen",
      unit: "Sqft",
      package: <AddRemove />,
      cost: 200,
    },
    {
      key: "9",
      item: "Sanitary",
      unit: "Nos",
      package: <AddRemove />,
      cost: 200,
    },
    {
      key: "10",
      item: "Painting",
      unit: "Sqft",
      package: <AddRemove />,
      cost: 200,
    },
    {
      key: "11",
      item: "Electrical Fixtures",
      unit: "Nos",
      package: <AddRemove />,
      cost: 200,
    },
  ];

  return (
    <Table
      bordered
      pagination={false}
      columns={columns}
      dataSource={data}
      footer={() => (
        <div className={style.tableFootertext}>
          <span className={style.tableFootertext1}>Total Cost</span>
          <span className={style.tableFootertext2}>1,22,2,2</span>
        </div>
      )}
    />
  );
};
export default index;
