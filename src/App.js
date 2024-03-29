import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

const neowsapi = () => {
  const [ast, setAst] = useState([]);

  useEffect(() => {
    const getAst = async () => {
      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.API_KEY}`
      );
      setAst(resp.data.near_earth_objects);
    };
    getAst();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Asteroids List</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Distance from Earth (km)</th>
            <th>Orbiting</th>
          </tr>
        </thead>
        <tbody>
          {asteroids.map((asteroid, index) => (
            <tr key={index}>
              <td>{asteroid.name}</td>
              <td>{asteroid.close_approach_data[0].miss_distance.km}</td>
              <td>{asteroid.orbiting_body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default neowsapi;
