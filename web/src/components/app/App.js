import React, { useEffect, useState } from "react";
import "../../../src/global.scss";
import "./App.scss";
import "./Main.scss";
import "./Sidebar.scss";

function App() {
  const [githubUsername, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => {
        console.log(error);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(event) {
    event.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input
              name="github_username"
              id="github_username"
              value={githubUsername}
              onChange={e => setGithubUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              value={techs}
              onChange={e => setTechs(e.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="username_github">Usuário do GitHub</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                required
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/6900314?s=460&v=4"
                alt="Tiago Almeida"
              />
              <div className="user-info">
                <strong>Tiago Almeida</strong>
                <span>ReactJS, React Native e Node.JS</span>
              </div>
            </header>
            <p>
              Pós Graduado em Engenharia de Software, Desenvolvedor Full-Stack
              em projetos Web utilizando ReactJS, NodeJS entre outras
              tecnologias.
            </p>
            <a href="https://github.com/tiagoalmeida93">
              Acessar perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/6900314?s=460&v=4"
                alt="Tiago Almeida"
              />
              <div className="user-info">
                <strong>Tiago Almeida</strong>
                <span>ReactJS, React Native e Node.JS</span>
              </div>
            </header>
            <p>
              Pós Graduado em Engenharia de Software, Desenvolvedor Full-Stack
              em projetos Web utilizando ReactJS, NodeJS entre outras
              tecnologias.
            </p>
            <a href="https://github.com/tiagoalmeida93">
              Acessar perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/6900314?s=460&v=4"
                alt="Tiago Almeida"
              />
              <div className="user-info">
                <strong>Tiago Almeida</strong>
                <span>ReactJS, React Native e Node.JS</span>
              </div>
            </header>
            <p>
              Pós Graduado em Engenharia de Software, Desenvolvedor Full-Stack
              em projetos Web utilizando ReactJS, NodeJS entre outras
              tecnologias.
            </p>
            <a href="https://github.com/tiagoalmeida93">
              Acessar perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/6900314?s=460&v=4"
                alt="Tiago Almeida"
              />
              <div className="user-info">
                <strong>Tiago Almeida</strong>
                <span>ReactJS, React Native e Node.JS</span>
              </div>
            </header>
            <p>
              Pós Graduado em Engenharia de Software, Desenvolvedor Full-Stack
              em projetos Web utilizando ReactJS, NodeJS entre outras
              tecnologias.
            </p>
            <a href="https://github.com/tiagoalmeida93">
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
