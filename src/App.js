import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useEffect } from 'react';

const neowsapi = () => {
  const [ast, setAst] = useState([])

  useEffect(() => {
    const getAst = async () => {
      const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.API_KEY}`)
    }
  })
}

export default App;
