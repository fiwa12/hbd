import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Layout } from "antd";

import "./App.css";
import Fira from "./Fira.js";
import Main from "./Main.js";

const App = () => {
  const moment = require("moment");
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let name = "";
  let panggilan = "";
  let dua1 = "";
  let dua2 = "";
  let dua3 = "";
  let additionalDua = "";
  alert("Hi there!");
  name = prompt("Please enter your name!");
  if (name.toLowerCase().includes("bian")) {
    let pw = prompt("Enter Password");
    if (pw === "gigit") {
      panggilan = prompt("What do you want me to call you?");
      let answer = prompt("Do you know what day is today?");
      let getToday = new Date();
      let today = moment(getToday).format("DD/MM/YYYY");
      // console.log("hari ini adalah :", today);
      if (
        (answer.toLowerCase().includes("ulang tahun") ||
          answer.toLowerCase().includes("birthday") ||
          answer.includes("25")) &&
        today === "25/08/2021"
      ) {
        alert(`YES!! IT'S YOUR BIRTHDAY!!`);
        if (window.confirm("Are you excited?")) {
          alert("ME TOO!!");
          alert(`Barakallahu fii umriik, ${panggilan}❤️!`);
          alert(
            "Berhubung aku udah tanya beberapa kali kamu jawab kamu mau lancarnya rencana kita supaya jadi kadomu tahun ini, dan aku belum bisa kasih itu sekarang.."
          );
          alert("I made this *modest* page for you, I hope you like it!");
          alert(`Before we start, I just want to say..`);
          alert(`Aku sangat sangat bersyukur bisa dipertemukan dengan kamu..`);
          alert(`Di waktu yang tepat..`);
          alert(`Dan dengan kondisi yang tepat..`);
          alert(
            `Sehingga sesuatu yang bermula dari "nothing to lose", bisa berubah jadi "something to lose" in just a few months`
          );
          alert(
            `Tentunya, segala hal yang kutemukan di kamu, baik itu hal-hal yang memang aku cari maupun hal-hal yang aku bahkan tidak tahu aku butuhkan..`
          );
          alert(
            `Juga menjadi salah satu faktor yang paling berperan dalam membuat aku bisa yakin bahwa you're the one I want to experience this thing called LIFE with..`
          );
          alert(`Aku sayang kamu, Mas Bian`);
          alert(`Without further ado, let's start!`);
          alert(`Think about your top 3 du'a for yourself!`);
          dua1 = prompt(`Write your first du'a for yourself...`);
          dua2 = prompt(`Write your second du'a for yourself...`);
          dua3 = prompt(`Write your third du'a for yourself...`);
          if (window.confirm(`Do you have any additional du'a for us?`)) {
            additionalDua = prompt("Please write it here...");
            alert(`Aamiin! Let's see it all in action!`);
            alert(
              `This page will only be able to be accessed during your birthday, so prepare to take a screenshot if you want!`
            );
          } else {
            alert(`Okay then! Let's see what you've written for yourself!`);
            alert(`p.s. Scroll to the bottom to see what my du'a for you 😉`);
          }
        } else {
          alert(
            "WHY NOT?! GET SOME EXCITEMENT AND START AGAIN FROM THE BEGINNING!"
          );
          window.location.reload();
        }
      } else {
        alert(`Sorry, but I don't think today's your day :(`);
      }
    } else {
      alert("Sorry, this page is not intended for you!");
    }
  } else {
    alert("I don't know you, sorry!");
  }

  if (name.toLowerCase().includes("bian")) {
    return (
      <Router>
        <Switch>
          <Route exact path="/fira">
            <Fira panggilan={panggilan} />
          </Route>
          <Route exact path="/">
            <Main
              name={name}
              panggilan={panggilan}
              dua1={dua1}
              dua2={dua2}
              dua3={dua3}
              additionalDua={additionalDua}
            />
          </Route>
        </Switch>
      </Router>
    );
  } else return null;
};

export default App;
