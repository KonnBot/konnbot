import React from "react";
import { Row, Col, Image } from "antd";

export default function ImageGallery({ images }) {
  return (
    <Row gutter={[30, 30]} justify="center">
      {images &&
        images.map((e, i) => {
          return (
            <Col span={8}>
              <Image key={i} src={e} />
            </Col>
          );
        })}
    </Row>
  );
}
