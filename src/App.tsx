import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header";

const App: React.FC = () => {
  const [routes, setRoutes] = useState<[]>([]);

  useEffect(() => {
    axios.get('/data/routes.json').then((res) => {
      setRoutes(res.data.routes)
    })
  }, [])

  return <Header routes={routes}/>;
};

export default App;
