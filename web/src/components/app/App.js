import React, { useEffect, useState } from "react";
import "../../../src/global.scss";
import baseURL from "../../services/api";
import "./App.scss";
import DevForm from "./Dev/DevForm";
import DevItem from "./Dev/DevItem";
import "./Main.scss";
import "./Sidebar.scss";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await baseURL.get("/devs");

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await baseURL.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
