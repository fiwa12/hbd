import React from "react";
import { Link } from "react-router-dom";

import { Layout } from "antd";

import Fira from "./Fira";

function Main({ panggilan, name, dua1, dua2, dua3, additionalDua }) {
  const { Content } = Layout;
  return (
    <div>
      <Layout>
        <Content className="container">
          <div className="backgroundWrapper">
            <h1>
              happy birthday,
              <br />
              {name}{" "}
              <ion-icon
                name="heart-outline"
                size="medium"
                className="icon"
              ></ion-icon>
            </h1>
            {/* <h2 className="nameContainer">
            <p>✨</p>
            {name}
            <p>✨</p>
          </h2> */}
            <span>
              <div style={{ textAlign: "center", marginBottom: "10px" }}>
                Here are some du'a you've made for yourself :
              </div>
              <p>🍂 {dua1}</p>
              <p>🍂 {dua2}</p>
              <p>🍂 {dua3}</p>
            </span>
            {/* <button className="btn">du'a #1</button>
          <button className="btn">du'a #3</button>
        <button className="btn">du'a #2</button> */}
            {additionalDua !== "" ? (
              <span style={{ marginTop: "10px" }}>
                <p style={{ textAlign: "center", marginBottom: "10px" }}>
                  And here's an additional du'a for us{" "}
                  <ion-icon
                    name="heart-outline"
                    size="small"
                    className="icon"
                  ></ion-icon>
                </p>
                <p style={{ textAlign: "center" }}>{additionalDua}</p>
              </span>
            ) : (
              ""
            )}
            <Link to="/fira">
              <p>Click to see my du'a for you</p>
            </Link>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Main;
