import React from "react";
import { Row, Col, Image } from "antd";

export default function ImageGallery({images}) {
  console.log("images", images)
  return (
    <Row gutter={[30, 30]} justify="center">
      {
      images && images.map((e,i)=>{
       return( <Col span={8}>
          <Image key={i} src={e} />
        </Col>
       )
      })
    }
    </Row>
  );
}

