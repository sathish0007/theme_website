import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Section from "./components/section";
import Footer from "./components/footer";
import React, { useEffect, useState } from "react";
import AdminComponent from "./adminComponent";
import api from "./config";

function App() {
  const [primaryColor, setPrimaryColor] = useState("white");

  useEffect(() => {
    fetch(`${api}/users/theme`)
      .then((res) => res.json())
      .then((data) => setPrimaryColor(data.result.theme));
  }, []);
  return (
    <div class="page-wrapper" style={{ "--primaryColor": primaryColor }}>
      {window.location.pathname.includes("admin") ? (
        <AdminComponent />
      ) : (
        <>
          <Header />
          <Section />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
