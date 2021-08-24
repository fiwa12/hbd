import React from "react";
import { Link } from "react-router-dom";

import { Layout } from "antd";

import "./App.css";

const Fira = ({ panggilan }) => {
  const { Content } = Layout;
  return (
    <Layout>
      <Content className="container">
        <div className="backgroundWrapper">
          <div className="backgroundWrFiraer">
            <span className="ps">
              <h2>Lastly, here is my du'a for you, {panggilan}:</h2>
              <br />
              <p style={{ color: "#526338" }}>
                Pertama-tama, semoga Mas Bian selalu dalam lindungan Allah,
                senantiasa dikaruniai kesehatan, kebahagiaan dan keberkahan
                sepanjang usianya. Sukses dan bisa semakin banyak memberi
                manfaat kepada orang banyak, dimulai dari orang-orang
                terdekatnya.
              </p>
              <br />
              <p>
                Semoga apa yang Mas Bian cita-citakan bisa tercapai, aku
                insyaaAllah siap mendukung, menyemangati (gak mau kalah sama
                sahabat kamu) dan menemani kamu di setiap langkah menuju kesana.
              </p>
              <br />
              <p>
                Last but not least, semoga semua niat baik kita dimudahkan dan
                dilancarkan, dan bisa dilaksanakan sebelum tahun 2021 ini
                berakhir. AAMIIN!
              </p>
              <br />
              <p style={{ fontSize: "11px" }}>
                p.s. See that picture in the background? I took it 2 years ago,
                and it's from a place I wish I could visit with you one day.
                InsyaaAllah yah, semoga akan ada waktu dan kesempatan untuk kita
                bisa ke sana berdua :)
              </p>
              <br />
              <br />
              <Link to="/">
                <p>Take me back!</p>
              </Link>
            </span>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Fira;
