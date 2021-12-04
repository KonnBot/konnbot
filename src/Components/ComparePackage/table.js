import React from "react";
import { Table } from "antd";

const index = ({ p1, p2, p3, p4, p5, p6 }) => {
  const columns = [
    {
      title: "Basic Package",
      dataIndex: "p1",
      key: "p1",
    },
    {
      title: "Standard Package",
      dataIndex: "p2",
      key: "p2",
    },
    {
      title: "Classic Package",
      dataIndex: "p3",
      key: "p3",
    },
    {
      title: "Supreme Package",
      dataIndex: "p4",
      key: "p4",
    },
    {
      title: "Premium Package",
      dataIndex: "p5",
      key: "p5",
    },
    {
      title: "Platinum Package | 1800 ₹/Sqft",
      dataIndex: "p6",
      key: "p6",
    },
  ];
  const data = [
    {
      key: "p1",
      p1: p1,
      p2: p2,
      p3: p3,
      p4: p4,
      p5: p5,
      p6: p6,
    },
  ];
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default index;
