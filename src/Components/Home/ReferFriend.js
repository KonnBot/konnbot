import React, { useState } from "react";
import style from "./Home.module.css";
import { Button, Modal } from "antd";
import Refer from "../Forms/Refer";

export default function ReferFriend() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  console.log("is", isSent);
  return (
    <div>
      <div className={style.container6}>
        <div style={{ flexGrow: 4 }}>
          <div className={style.container6text1}>Referral Program</div>
          <div className={style.container6text2}>
            Refer your friends & family looking for house construction and earn
            cashbacks/discounts* upto 20,000 INR today
          </div>
          <div>
            <>
              <Button
                style={{
                  backgroundColor: "#ffc000",
                  color: "#FFFFFF",
                  borderRadius: "5px",
                  height: "max-content",
                  marginTop: "10px",
                }}
                type="primary"
                size="large"
                onClick={showModal}
              >
                <div style={{ fontSize: "20px" }}>Refer a friend</div>
              </Button>

              <Modal
                title={<div className={style.referUs}>Refer us</div>}
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
              >
                {isSent ? (
                  <div className={style.referThankyou}>
                    <img alt="refer" src="/assets/referThankYou.png" />
                    <div className={style.referThankyoutext}>Thank you</div>
                    <div className={style.referThankyoutext1}>
                      we get back to you soon
                    </div>
                  </div>
                ) : (
                  <Refer isSent={isSent} setIsSent={setIsSent} />
                )}
              </Modal>
            </>
          </div>
        </div>
        <div className={style.container6IMG}>
          <img
            className={style.container6Img}
            alt="home"
            src="/assets/15_HomePage.png"
          />
        </div>
      </div>
    </div>
  );
}
