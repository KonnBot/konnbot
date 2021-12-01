import React, { useState, useEffect } from "react";
import { Table } from "antd";
import AddRemove from "./AddRemove";
import style from "./CustomizePackage.module.css";
const Custom = ({ finalCustomizeCost }) => {
  const [current1, setCurrent1] = useState(1);
  const [current2, setCurrent2] = useState(1);
  const [current3, setCurrent3] = useState(1);
  const [current4, setCurrent4] = useState(1);
  const [current5, setCurrent5] = useState(1);
  const [current6, setCurrent6] = useState(1);
  const [current7, setCurrent7] = useState(1);
  const [totalCustomizeCost, setTotalCustomizecost] = useState();

  const columns = [
    {
      title: <div className={style.tableHead}>Item</div>,
      dataIndex: "item",
      key: "item",
      render: (text) => text,
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = [
    {
      key: "1",
      item: "Civl Work",
      package: <AddRemove current={current1} setCurrent={setCurrent1} />,
      cost:
        current1 === 1
          ? finalCustomizeCost.basic.civilWork &&
            finalCustomizeCost.basic.civilWork
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current1 === 2
          ? finalCustomizeCost.standard.civilWork
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current1 === 3
          ? finalCustomizeCost.classic.civilWork
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current1 === 4
          ? finalCustomizeCost.supreme.civilWork
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current1 === 5
          ? finalCustomizeCost.premium.civilWork
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current1 === 6
          ? finalCustomizeCost.platinum.civilWork
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : "",
    },
    {
      key: "2",
      item: "Flooring Work",
      package: <AddRemove current={current2} setCurrent={setCurrent2} />,
      cost:
        current2 === 1
          ? finalCustomizeCost.basic.flooring &&
            finalCustomizeCost.basic.flooring
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current2 === 2
          ? finalCustomizeCost.standard.flooring
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current2 === 3
          ? finalCustomizeCost.classic.flooring
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current2 === 4
          ? finalCustomizeCost.supreme.flooring
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current2 === 5
          ? finalCustomizeCost.premium.flooring
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current2 === 6
          ? finalCustomizeCost.platinum.flooring
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : "",
    },
    {
      key: "3",
      item: "Door & Windows",
      package: <AddRemove current={current3} setCurrent={setCurrent3} />,
      cost:
        current3 === 1
          ? finalCustomizeCost.basic.doorWindows &&
            finalCustomizeCost.basic.doorWindows
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current3 === 2
          ? finalCustomizeCost.standard.doorWindows
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current3 === 3
          ? finalCustomizeCost.classic.doorWindows
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current3 === 4
          ? finalCustomizeCost.supreme.doorWindows
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current3 === 5
          ? finalCustomizeCost.premium.doorWindows
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current3 === 6
          ? finalCustomizeCost.platinum.doorWindows
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : "",
    },
    {
      key: "4",
      item: "Finishes",
      package: <AddRemove current={current4} setCurrent={setCurrent4} />,
      cost:
        current4 === 1
          ? finalCustomizeCost.basic.finishes &&
            finalCustomizeCost.basic.finishes
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current4 === 2
          ? finalCustomizeCost.standard.finishes
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current4 === 3
          ? finalCustomizeCost.classic.finishes
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current4 === 4
          ? finalCustomizeCost.supreme.finishes
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current4 === 5
          ? finalCustomizeCost.premium.finishes
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current4 === 6
          ? finalCustomizeCost.platinum.finishes
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : "",
    },
    {
      key: "5",
      item: "Sanitry & Plumbing",
      package: <AddRemove current={current5} setCurrent={setCurrent5} />,
      cost:
        current5 === 1
          ? finalCustomizeCost.basic.sanitryPlumbing &&
            finalCustomizeCost.basic.sanitryPlumbing
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current5 === 2
          ? finalCustomizeCost.standard.sanitryPlumbing
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current5 === 3
          ? finalCustomizeCost.classic.sanitryPlumbing
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current5 === 4
          ? finalCustomizeCost.supreme.sanitryPlumbing
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current5 === 5
          ? finalCustomizeCost.premium.sanitryPlumbing
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current5 === 6
          ? finalCustomizeCost.platinum.sanitryPlumbing
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : "",
    },
    {
      key: "6",
      item: "Electrical Work",
      package: <AddRemove current={current6} setCurrent={setCurrent6} />,
      cost:
        current6 === 1
          ? finalCustomizeCost.basic.electricalWork &&
            finalCustomizeCost.basic.electricalWork
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current6 === 2
          ? finalCustomizeCost.standard.electricalWork
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current6 === 3
          ? finalCustomizeCost.classic.electricalWork
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current6 === 4
          ? finalCustomizeCost.supreme.electricalWork
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current6 === 5
          ? finalCustomizeCost.premium.electricalWork
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current6 === 6
          ? finalCustomizeCost.platinum.electricalWork
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : "",
    },
    {
      key: "7",
      item: "Elevation & Miscelleneous",
      package: <AddRemove current={current7} setCurrent={setCurrent7} />,
      cost:
        current7 === 1
          ? finalCustomizeCost.basic.elevation &&
            finalCustomizeCost.basic.elevation
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current7 === 2
          ? finalCustomizeCost.standard.elevation
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current7 === 3
          ? finalCustomizeCost.classic.elevation
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current7 === 4
          ? finalCustomizeCost.supreme.elevation
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current7 === 5
          ? finalCustomizeCost.premium.elevation
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : current7 === 6
          ? finalCustomizeCost.platinum.elevation
              .toFixed(2)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : "",
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dataDemo = [
    {
      key: "1",
      item: "Civl Work",
      cost:
        current1 === 1
          ? finalCustomizeCost.basic.civilWork
          : current1 === 2
          ? finalCustomizeCost.standard.civilWork
          : current1 === 3
          ? finalCustomizeCost.classic.civilWork
          : current1 === 4
          ? finalCustomizeCost.supreme.civilWork
          : current1 === 5
          ? finalCustomizeCost.premium.civilWork
          : current1 === 6
          ? finalCustomizeCost.platinum.civilWork
          : "",
    },
    {
      key: "2",
      item: "Flooring Work",
      package: <AddRemove current={current2} setCurrent={setCurrent2} />,
      cost:
        current2 === 1
          ? finalCustomizeCost.basic.flooring
          : current2 === 2
          ? finalCustomizeCost.standard.flooring
          : current2 === 3
          ? finalCustomizeCost.classic.flooring
          : current2 === 4
          ? finalCustomizeCost.supreme.flooring
          : current2 === 5
          ? finalCustomizeCost.premium.flooring
          : current2 === 6
          ? finalCustomizeCost.platinum.flooring
          : "",
    },
    {
      key: "3",
      item: "Door & Windows",
      package: <AddRemove current={current3} setCurrent={setCurrent3} />,
      cost:
        current3 === 1
          ? finalCustomizeCost.basic.doorWindows
          : current3 === 2
          ? finalCustomizeCost.standard.doorWindows
          : current3 === 3
          ? finalCustomizeCost.classic.doorWindows
          : current3 === 4
          ? finalCustomizeCost.supreme.doorWindows
          : current3 === 5
          ? finalCustomizeCost.premium.doorWindows
          : current3 === 6
          ? finalCustomizeCost.platinum.doorWindows
          : "",
    },
    {
      key: "4",
      item: "Finishes",
      package: <AddRemove current={current4} setCurrent={setCurrent4} />,
      cost:
        current4 === 1
          ? finalCustomizeCost.basic.finishes
          : current4 === 2
          ? finalCustomizeCost.standard.finishes
          : current4 === 3
          ? finalCustomizeCost.classic.finishes
          : current4 === 4
          ? finalCustomizeCost.supreme.finishes
          : current4 === 5
          ? finalCustomizeCost.premium.finishes
          : current4 === 6
          ? finalCustomizeCost.platinum.finishes
          : "",
    },
    {
      key: "5",
      item: "Sanitry & Plumbing",
      package: <AddRemove current={current5} setCurrent={setCurrent5} />,
      cost:
        current5 === 1
          ? finalCustomizeCost.basic.sanitryPlumbing
          : current5 === 2
          ? finalCustomizeCost.standard.sanitryPlumbing
          : current5 === 3
          ? finalCustomizeCost.classic.sanitryPlumbing
          : current5 === 4
          ? finalCustomizeCost.supreme.sanitryPlumbing
          : current5 === 5
          ? finalCustomizeCost.premium.sanitryPlumbing
          : current5 === 6
          ? finalCustomizeCost.platinum.sanitryPlumbing
          : "",
    },
    {
      key: "6",
      item: "Electrical Work",
      package: <AddRemove current={current6} setCurrent={setCurrent6} />,
      cost:
        current6 === 1
          ? finalCustomizeCost.basic.electricalWork
          : current6 === 2
          ? finalCustomizeCost.standard.electricalWork
          : current6 === 3
          ? finalCustomizeCost.classic.electricalWork
          : current6 === 4
          ? finalCustomizeCost.supreme.electricalWork
          : current6 === 5
          ? finalCustomizeCost.premium.electricalWork
          : current6 === 6
          ? finalCustomizeCost.platinum.electricalWork
          : "",
    },
    {
      key: "7",
      item: "Elevation & Miscelleneous",
      package: <AddRemove current={current7} setCurrent={setCurrent7} />,
      cost:
        current7 === 1
          ? finalCustomizeCost.basic.elevation
          : current7 === 2
          ? finalCustomizeCost.standard.elevation
          : current7 === 3
          ? finalCustomizeCost.classic.elevation
          : current7 === 4
          ? finalCustomizeCost.supreme.elevation
          : current7 === 5
          ? finalCustomizeCost.premium.elevation
          : current7 === 6
          ? finalCustomizeCost.platinum.elevation
          : "",
    },
  ];
  useEffect(() => {
    let total =
      dataDemo[0].cost +
      dataDemo[1].cost +
      dataDemo[2].cost +
      dataDemo[3].cost +
      dataDemo[4].cost +
      dataDemo[5].cost +
      dataDemo[6].cost;
    total =
      total &&
      total
        .toFixed(2)
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    setTotalCustomizecost(total);
  }, [dataDemo]);

  console.log("finalCustomizeCost", finalCustomizeCost);
  return (
    <Table
      bordered
      pagination={false}
      columns={columns}
      dataSource={data}
      footer={() => (
        <div className={style.tableFootertext}>
          <span className={style.tableFootertext1}>Total Cost</span>
          <span className={style.tableFootertext2}>{totalCustomizeCost}</span>
        </div>
      )}
    />
  );
};
export default Custom;
