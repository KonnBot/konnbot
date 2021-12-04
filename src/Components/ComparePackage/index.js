import React from "react";
import { Collapse } from "antd";
import Table from "./table";
const index = () => {
  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
  }

  return (
    <Collapse defaultActiveKey={["1"]} onChange={callback}>
      <Panel header="Drawings" key="1">
        <div>
          <Table
            p1={
              <>
                Basic Elevation
                <br />
                Structural Design
              </>
            }
            p2={
              <>
                3D Elevation
                <br />
                Structural Design
              </>
            }
            p3={
              <>
                3D Elevation
                <br />
                Structural Design
                <br />
                Electrical Drawings
                <br />
                Plumbing Drawings
                <br />
                Furniture Plan
              </>
            }
            p4={
              <>
                3D Elevation
                <br />
                Structural Design
                <br />
                Electrical Drawings
                <br />
                Plumbing Drawings
                <br />
                Furniture Plan
              </>
            }
            p5={
              <>
                3D Elevation
                <br />
                Structural Design
                <br />
                Electrical Drawings
                <br />
                Plumbing Drawings
              </>
            }
            p6={
              <>
                3D Elevation
                <br />
                Structural Design
                <br />
                Electrical Drawings
                <br />
                Plumbing Drawings
                <br />
                Furniture Plan
              </>
            }
          />
        </div>
      </Panel>
      <Panel header="Foundation" key="2">
        <Table
          p1={
            <>
              Basic Elevation
              <br />
              Structural Design
            </>
          }
          p2={
            <>
              3D Elevation
              <br />
              Structural Design
            </>
          }
          p3={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p4={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p5={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
            </>
          }
          p6={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
        />
      </Panel>
      <Panel header="Structure" key="3">
        <Table
          p1={
            <>
              Basic Elevation
              <br />
              Structural Design
            </>
          }
          p2={
            <>
              3D Elevation
              <br />
              Structural Design
            </>
          }
          p3={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p4={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p5={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
            </>
          }
          p6={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
        />
      </Panel>
      <Panel header="Drawings + Living + Bedroom" key="4">
        <Table
          p1={
            <>
              Basic Elevation
              <br />
              Structural Design
            </>
          }
          p2={
            <>
              3D Elevation
              <br />
              Structural Design
            </>
          }
          p3={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p4={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p5={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
            </>
          }
          p6={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
        />
      </Panel>
      <Panel header="Kitchen" key="5">
        <Table
          p1={
            <>
              Basic Elevation
              <br />
              Structural Design
            </>
          }
          p2={
            <>
              3D Elevation
              <br />
              Structural Design
            </>
          }
          p3={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p4={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p5={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
            </>
          }
          p6={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
        />
      </Panel>
      <Panel header="Bedroom" key="6">
        <Table
          p1={
            <>
              Basic Elevation
              <br />
              Structural Design
            </>
          }
          p2={
            <>
              3D Elevation
              <br />
              Structural Design
            </>
          }
          p3={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p4={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p5={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
            </>
          }
          p6={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
        />
      </Panel>
      <Panel header="Toilet" key="7">
        <Table
          p1={
            <>
              Basic Elevation
              <br />
              Structural Design
            </>
          }
          p2={
            <>
              3D Elevation
              <br />
              Structural Design
            </>
          }
          p3={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p4={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p5={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
            </>
          }
          p6={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
        />
      </Panel>
      <Panel header="Door & Window Work" key="8">
        <Table
          p1={
            <>
              Basic Elevation
              <br />
              Structural Design
            </>
          }
          p2={
            <>
              3D Elevation
              <br />
              Structural Design
            </>
          }
          p3={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p4={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p5={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
            </>
          }
          p6={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
        />
      </Panel>
      <Panel header="Flooring" key="9">
        <Table
          p1={
            <>
              Basic Elevation
              <br />
              Structural Design
            </>
          }
          p2={
            <>
              3D Elevation
              <br />
              Structural Design
            </>
          }
          p3={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p4={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p5={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
            </>
          }
          p6={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
        />
      </Panel>
      <Panel header="Finishes" key="10">
        <Table
          p1={
            <>
              Basic Elevation
              <br />
              Structural Design
            </>
          }
          p2={
            <>
              3D Elevation
              <br />
              Structural Design
            </>
          }
          p3={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p4={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p5={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
            </>
          }
          p6={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
        />
      </Panel>
      <Panel header="Electrical" key="11">
        <Table
          p1={
            <>
              Basic Elevation
              <br />
              Structural Design
            </>
          }
          p2={
            <>
              3D Elevation
              <br />
              Structural Design
            </>
          }
          p3={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p4={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p5={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
            </>
          }
          p6={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
        />
      </Panel>
      <Panel header="Open Area" key="12">
        <Table
          p1={
            <>
              Basic Elevation
              <br />
              Structural Design
            </>
          }
          p2={
            <>
              3D Elevation
              <br />
              Structural Design
            </>
          }
          p3={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p4={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p5={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
            </>
          }
          p6={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
        />
      </Panel>
      <Panel header="Miscellaneous" key="13">
        <Table
          p1={
            <>
              Basic Elevation
              <br />
              Structural Design
            </>
          }
          p2={
            <>
              3D Elevation
              <br />
              Structural Design
            </>
          }
          p3={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p4={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
          p5={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
            </>
          }
          p6={
            <>
              3D Elevation
              <br />
              Structural Design
              <br />
              Electrical Drawings
              <br />
              Plumbing Drawings
              <br />
              Furniture Plan
            </>
          }
        />
      </Panel>
    </Collapse>
  );
};

export default index;
