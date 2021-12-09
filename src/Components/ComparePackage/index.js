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
                Architectural Plan
                <br />
                Section and Elevation
                <br />
                Structural Drawings
              </>
            }
            p2={
              <>
                Architectural Plan
                <br />
                Section and Elevation
                <br />
                Structural drawings
                <br />
                3D Elevation
              </>
            }
            p3={
              <>
                Architectural plan
                <br />
                Section and Elevation
                <br />
                Structural Drawings
                <br />
                3D elevation
                <br />
                Electrical Drawings
                <br />
                Plumbing Drawings
              </>
            }
            p4={
              <>
                Architectural plan
                <br />
                Section and Elevation
                <br />
                3D Elevation
                <br />
                Electrical Drawings 
                <br />
                Plumbing Drawings
              </>
            }
            p5={
              <>
                Architectural plan
                <br />
                Section and Elevation
                <br />
                3D Elevation
                <br />
                Electrical Drawings
                <br />
                Plumbing Drawings
                <br />
                Complete Walktrough
              </>
            }
            p6={
              <>
                Architectural paln
                <br />
                Section and Elevation
                <br />
                3D Elevation
                <br />
                Electrical Drawings
                <br />
                Plumbing Drawings
                <br />
                Complete Walktrough
              </>
            }
          />
        </div>
      </Panel>
      <Panel header="Foundation" key="2">
        <Table
          p1={
            <>
              As per Structural Design
            </>
          }
          p2={
            <>
               As per Structural Design
            </>
          }
          p3={
            <>
               As per Structural Design
            </>
          }
          p4={
            <>
               As per Structural Design
            </>
          }
          p5={
            <>
               As per Structural Design
            </>
          }
          p6={
            <>
               As per Structural Design
            </>
          }
        />
      </Panel>
      <Panel header="Bricks" key="3">
        <Table
          p1={
            <>
              AAC Blocks 4"
              <br />
              AAC Blocks 6"
            </>
          }
          p2={
            <>
              AAC Blocks 4"
              <br />
              AAC Blocks 6"
              <br />
              Semi Ghol Bricks
            </>
          }
          p3={
            <>
              AAC Blocks 4"
              <br />
              AAC Blocks 6"
              <br />
              Ghol Bricks
            </>
          }
          p4={
            <>
             AAC Blocks 4"
              <br />
              AAC Blocks 6"
              <br />
              Ghol Bricks
            </>
          }
          p5={
            <>
               AAC Blocks 4"
              <br />
              AAC Blocks 6"
              <br />
              Ghol Bricks
            </>
          }
          p6={
            <>
               AAC Blocks 4"
              <br />
              AAC Blocks 6"
              <br />
              Ghol Bricks
            </>
          }
        />
      </Panel>
      <Panel header="Steel" key="4">
        <Table
          p1={
            <>
              Jhanvi TMT
              <br />
              Sangam TMT
              <br />
              Kamdhenu TMT or equivalent
            </>
          }
          p2={
            <>
              Bansal TMT
              <br />
              Shakti TMT or equivalent
            </>
          }
          p3={
            <>
            Goel TMT
              <br />
            Bansal TMT or equivalent  
            </>
          }
          p4={
            <>
            Goel TMT
              <br />
            Bansal TMT or equivalent 
            </>
          }
          p5={
            <>
              Tata TMT
              <br />
              Jindal TMT
              <br />
              Goel TMT
            </>
          }
          p6={
            <>
              Tata TMT
              <br />
              Jindal TMT
              <br />
              Goel TMT
            </>
          }
        />
      </Panel>
      <Panel header="Cement" key="5">
        <Table
          p1={
            <>
              KJS
              <br />
              Ramco or equivalent
            </>
          }
          p2={
            <>
             KJS
              <br />
              JK super or equivalent
            </>
          }
          p3={
            <>
              Ultratech
              <br />
              Birla perfect
              <br />
              JK Super
            </>
          }
          p4={
            <>
              ACC 
              <br />
              Ultratech
              <br />
              Birla perfect
            </>
          }
          p5={
            <>
            ACC 
            <br />
            Ultratech
            <br />
            Birla perfect 
            </>
          }
          p6={
            <>
              ACC 
              <br />
              Ultratech
              <br />
              Birla perfect
            </>
          }
        />
      </Panel>
      <Panel header="Kitchen" key="6">
        <Table
          p1={
            <>
              Ceramic wall tiles upto Rs.40/sqft.
              <br />
              ISI marked faucet upto Rs.2400
              <br />
              Single sink upto Rs.3000
            </>
          }
          p2={
            <>
            Ceramic wall tiles upto Rs.60/sqft.
              <br />
              ISI marked faucet upto Rs.3000
              <br />
              Single sink upto Rs.4500  
            </>
          }
          p3={
            <>
              Ceramic wall tiles upto Rs.60/sqft.
              <br />
              ISI marked faucet upto Rs.3500
              <br />
              Single sink upto Rs.6000
            </>
          }
          p4={
            <>
              Ceramic wall tiles upto Rs.80/sqft.
              <br />
              ISI marked faucet upto Rs.4000
              <br />
              Single sink upto Rs.7000
            </>
          }
          p5={
            <>
              Ceramic wall tiles upto Rs.100/sqft.
              <br />
              ISI marked faucet upto Rs.4000
              <br />
              Single sink upto Rs.8000
            </>
          }
          p6={
            <>
              Ceramic wall tiles upto Rs.120/sqft.
              <br />
              ISI marked faucet upto Rs.6000
              <br />
              Single sink upto Rs.10000
            </>
          }
        />
      </Panel>
      <Panel header="Toilet" key="7">
        <Table
          p1={
            <>
              Wall tiles upto Rs.40/sqft
              <br />
              Fittings upto Rs. 40000 per 1000 sqft
              <br />
              CPVC pipe Kisan or equivalent
            </>
          }
          p2={
            <>
              Wall tiles upto Rs.60/sqft
              <br />
              Fittings upto Rs. 40000 per 1000 sqft
              <br />
              CPVC pipe Plasto or equivalent
            </>
          }
          p3={
            <>
              Wall tiles upto Rs.60/sqft
              <br />
              Fittings upto Rs. 50000 per 1000 sqft
              <br />
              CPVC pipe Supreme,Astral or equivalent
            </>
          }
          p4={
            <>
               Wall tiles upto Rs.80/sqft
              <br />
              Fittings upto Rs. 60000 per 1000 sqft
              <br />
              CPVC pipe Ashirvad or equivalent
            </>
          }
          p5={
            <>
              Wall tiles upto Rs.100/sqft
              <br />
              Fittings upto Rs. 80000 per 1000 sqft
              <br />
              CPVC pipe Ashirvad or equivalent
            </>
          }
          p6={
            <>
             Wall tiles upto Rs.120/sqft
              <br />
             Fittings upto Rs. 100000 per 1000 sqft
              <br />
             CPVC pipe Ashirvad or equivalent 
            </>
          }
        />
      </Panel>
      <Panel header="Door & Windows" key="8">
        <Table
          p1={
            <>
              Main Door-Salwood frame & Panel worth Rs. 25000 includes fixture 
              <br />
              Internal Doors-Flush Doors+Laminates upto Rs. 8000 including fixtures
              <br />
              Windows-Aliminum windows with glass and mesh shutters of Rs. 170/sqft (3 track with 1 mesh)
            </>
          }
          p2={
            <>
              Main Door-Salwood frame & Panel worth Rs. 40000 includes fixture 
              <br />
              Internal Doors-Flush Doors+Laminates upto Rs. 8000 including fixtures
              <br />
              Windows-Aliminum windows with glass and mesh shutters of Rs. 210/sqft (3 track with 1 mesh)
            </>
          }
          p3={
            <>
              Main Door-Salwood frame & Panel worth Rs. 40000 includes fixture 
              <br />
              Internal Doors-Flush Doors+Laminates upto Rs. 10000 including fixtures
              <br />
              Windows-Aliminum windows with glass and mesh shutters of Rs. 240/sqft (3 track with 1 mesh)
            </>
          }
          p4={
            <>
              Main Door-Salwood frame & Panel worth Rs. 40000 includes fixture 
              <br />
              Internal Doors-Flush Doors+Laminates upto Rs. 10000 including fixtures
              <br />
              Windows-Aliminum windows with glass and mesh shutters of Rs. 300/sqft (3 track with 1 mesh)
            </>
          }
          p5={
            <>
              Main Door-Salwood frame & Panel worth Rs. 40000 includes fixture 
              <br />
              Internal Doors-Flush Doors+Laminates upto Rs. 10000 including fixtures
              <br />
              Windows-Aliminum windows with glass and mesh shutters of Rs. 650/sqft (3 track with 1 mesh)
            </>
          }
          p6={
            <>
              Main Door-Salwood frame & Panel worth Rs. 40000 includes fixture 
              <br />
              Internal Doors-Flush Doors+Laminates upto Rs. 10000 including fixtures
              <br />
              Windows-Aliminum windows with glass and mesh shutters of Rs. 650/sqft (3 track with 1 mesh)
            </>
          }
        />
      </Panel>
      <Panel header="Flooring" key="9">
        <Table
          p1={
            <>
              Living and Dining Flooring - Tiles of value upto Rs.40 per sqft
              <br />
              Rooms and Kitchen Flooring - Tiles upto Rs.40 per sqft
              <br />
              Balcony and Open Areas Flooring -Anti-skid tiles of value upto Rs.40 per sqft
              <br />
              Staircase Flooring - Rajasthani Granite of value upto ₹ 90 per sqft
            </>
          }
          p2={
            <>
              Living and Dining Flooring - Tiles of value upto Rs.55 per sqft
              <br />
              Rooms and Kitchen Flooring - Tiles upto Rs.55 per sqft
              <br />
              Balcony and Open Areas Flooring -Anti-skid tiles of value upto Rs.55 per sqft
              <br />
              Staircase Flooring - Rajasthani Granite of value upto ₹ 110 per sqft
            </>
          }
          p3={
            <>
              Living and Dining Flooring - Tiles of value upto Rs.70 per sqft
              <br />
              Rooms and Kitchen Flooring - Tiles upto Rs.70 per sqft
              <br />
              Balcony and Open Areas Flooring -Anti-skid tiles of value upto Rs.70 per sqft
              <br />
              Staircase Flooring - Rajasthani Granite of value upto ₹ 125 per sqft
            </>
          }
          p4={
            <>
              Living and Dining Flooring - Tiles of value upto Rs.85 per sqft
              <br />
              Rooms and Kitchen Flooring - Tiles upto Rs.85 per sqft
              <br />
              Balcony and Open Areas Flooring -Anti-skid tiles of value upto Rs.85 per sqft
              <br />
              Staircase Flooring - Rajasthani Granite of value upto ₹ 140 per sqft
            </>
          }
          p5={
            <>
              Living and Dining Flooring - Tiles of value upto Rs.100 per sqft
              <br />
              Rooms and Kitchen Flooring - Tiles upto Rs.100 per sqft
              <br />
              Balcony and Open Areas Flooring -Anti-skid tiles of value upto Rs.100 per sqft
              <br />
              Staircase Flooring - Rajasthani Granite of value upto ₹ 150 per sqft
            </>
          }
          p6={
            <>
              Living and Dining Flooring - Tiles of value upto Rs.120 per sqft
              <br />
              Rooms and Kitchen Flooring - Tiles upto Rs.120 per sqft
              <br />
              Balcony and Open Areas Flooring -Anti-skid tiles of value upto Rs.160 per sqft
              <br />
              Staircase Flooring - Rajasthani Granite of value upto ₹ 90 per sqft
            </>
          }
        />
      </Panel>
      <Panel header="Finishes" key="10">
        <Table
          p1={
            <>
              Interior Painting - JK Putty + Tractor Emulsion or equivalent
              <br />
              Exterior Painting - Asian Primer + Ace Exterior Emulsion Paint or equivalent
            </>
          }
          p2={
            <>
              Interior Painting - JK Putty + Tractor Emulsion or equivalent
              <br />
              Exterior Painting - Asian Primer + Ace Exterior Emulsion Paint or equivalent
            </>
          }
          p3={
            <>
              Interior Painting - JK Putty + Tractor Emulsion or equivalent
              <br />
              Exterior Painting - Asian Primer + Ace Exterior Emulsion Paint or equivalent
            </>
          }
          p4={
            <>
              Interior Painting - JK Putty + Apcolite Premium Emulsion or equivalent
              <br />
              Exterior Painting - Asian Primer + Ace Exterior Emulsion Paint or equivalent
            </>
          }
          p5={
            <>
              Interior Painting - JK Putty + Apcolite Premium Emulsion or equivalent
              <br />
              Exterior Painting - Asian Primer + Ace Exterior Emulsion Paint or equivalent
            </>
          }
          p6={
            <>
              Interior Painting - JK Putty + Royale Luxury Emuslion or equivalent
              <br />
              Exterior Painting - Asian Primer + Ace Exterior Emulsion Paint or equivalent
            </>
          }
        />
      </Panel>
      <Panel header="Electrical" key="11">
        <Table
          p1={
            <>
              Wires - Fireproof wires by Finolex
              <br />
              Switches & Sockets - Anchor Roma
            </>
          }
          p2={
            <>
              Wires - Fireproof wires by Finolex
              <br />
              Switches & Sockets - Anchor Roma
            </>
          }
          p3={
            <>
              Wires - Fireproof wires by V - Guard
              <br />
              Switches & Sockets - Anchor Roma
            </>
          }
          p4={
            <>
              Wires - Fireproof wires by V - Guard
              <br />
              Switches & Sockets - Phlips or equivalent
            </>
          }
          p5={
            <>
              Wires - Fireproof wires by RR Kabel
              <br />
              Switches & Sockets - Philips or equivalent
            </>
          }
          p6={
            <>
              Wires - Fireproof wires by RR Kabel
              <br />
              Switches & Sockets - Havells or equivalent
            </>
          }
        />
      </Panel>
      <Panel header="Open Area" key="12">
        <Table
          p1={
            <>
              Underground Sump - 4000 litres
              <br />
              Staircase Railing - Stainless Steel Railing
              <br />
              Main Gate - Galvanized Iron Steel Gate upto Rs. 20000
            </>
          }
          p2={
            <>
              Underground Sump - 4000 litres
              <br />
              Staircase Railing - Stainless Steel Railing
              <br />
              Main Gate - Galvanized Iron Steel Gate upto Rs. 20000
            </>
          }
          p3={
            <>
               Underground Sump - 6000 litres
              <br />
              Staircase Railing - Stainless Steel Railing
              <br />
              Main Gate - Galvanized Iron Steel Gate upto Rs. 20000
            </>
          }
          p4={
            <>
               Underground Sump - 6000 litres
              <br />
              Staircase Railing - Stainless Steel Railing
              <br />
              Main Gate - Galvanized Iron Steel Gate upto Rs. 25000
            </>
          }
          p5={
            <>
               Underground Sump - 6000 litres
              <br />
              Staircase Railing - Stainless Steel Railing
              <br />
              Main Gate - Galvanized Iron Steel Gate upto Rs. 30000
            </>
          }
          p6={
            <>
               Underground Sump - 8000 litres
              <br />
              Staircase Railing - Stainless Steel Railing
              <br />
              Main Gate - Galvanized Iron Steel Gate upto Rs. 40000
            </>
          }
        />
      </Panel>
      <Panel header="Miscellaneous" key="13">
        <Table
          p1={
            <>
              Overhead Tank - Sintex Double Layered 1000 ltrs
              <br />
              Window Grill - Basic MS Grills with Enamel Paint at Rs.110 per sqft.
              <br />
              Chicken Mesh Wire - Fixing the Joints of R.C.C & Masonry Wall Rs.110 per sqft.
            </>
          }
          p2={
            <>
              Overhead Tank - Sintex Double Layered 1500 ltrs
              <br />
              Window Grill - Basic MS Grills with Enamel Paint at Rs.110 per sqft.
              <br />
              Chicken Mesh Wire - Fixing the Joints of R.C.C & Masonry Wall Rs.145 per sqft.
            </>
          }
          p3={
            <>
              Overhead Tank - Sintex Double Layered 2000 ltrs
              <br />
              Window Grill - Basic MS Grills with Enamel Paint at Rs.110 per sqft.
              <br />
              Chicken Mesh Wire - Fixing the Joints of R.C.C & Masonry Wall Rs.145 per sqft.
            </>
          }
          p4={
            <>
              Overhead Tank - Sintex Double Layered 2500 ltrs
              <br />
              Window Grill - Basic MS Grills with Enamel Paint at Rs.130 per sqft.
              <br />
              Chicken Mesh Wire - Fixing the Joints of R.C.C & Masonry Wall Rs.145 per sqft.
            </>
          }
          p5={
            <>
              Overhead Tank - Sintex Double Layered 2500 ltrs
              <br />
              Window Grill - Basic MS Grills with Enamel Paint at Rs.140 per sqft.
              <br />
              Chicken Mesh Wire - Fixing the Joints of R.C.C & Masonry Wall Rs.145 per sqft.
            </>
          }
          p6={
            <>
              Overhead Tank - Sintex Double Layered 4000 ltrs
              <br />
              Window Grill - Basic MS Grills with Enamel Paint at Rs.160 per sqft.
              <br />
              Chicken Mesh Wire - Fixing the Joints of R.C.C & Masonry Wall Rs.145 per sqft.
            </>
          }
        />
      </Panel>
    </Collapse>
  );
};

export default index;
