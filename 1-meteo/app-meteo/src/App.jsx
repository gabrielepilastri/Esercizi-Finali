import { useEffect, useState } from "react";
import Home from "./components/Home";
import "./App.css";
import { Card, CardBody } from "react-bootstrap";
import { useSelector } from "react-redux";



function App() {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState("");
  const city = useSelector((state) => state.weather.city);  //prendo lo stato di city per implementare il sunrise
  const [currentTime, setCurrentTime] = useState(new Date());
  const sunrise = city.sys.sunrise
  const sun = new Date(sunrise)
  const sunset = city.sys.sunset
  const set = new Date(sunset)


  const handleSearch = () => {
    if (search.length > 0) {
      
      setSearched(search);

    }
  };


  useEffect(() => {
   
    const orario = setInterval(() => {     // Aggiorno data e ora ogni secondo
      setCurrentTime(new Date());
    }, 1000);

   
    return () => clearInterval(orario);
  }, []); 


  return (
    <>
      <div className="split">
      <div className="container">
        <div className="topSearch">
          <input
            className="input"
            type="text"
            name="search"
            placeholder="Search city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button" onClick={() => handleSearch()}>
            Cerca
          </button>
          
          
        </div>
        <h3 className="orario">{currentTime.toLocaleString()}</h3>

        <Home search={searched} />
        <div>
          <hr />
          grafico
        </div>
      </div>
      
      <div className="sideContainer">
        <div>
            
        </div>
        <div>
          <h2>Sunrise & Sunset</h2>
          <Card className="sun-card">
                    <CardBody>
                        <div className="flex">
                            <Card.Img width={40} src='src/assets/wind-solid.svg' />

                            <div className="center">
                            <Card.Title>Sunrise</Card.Title>
                            <Card.Text>{sun.toLocaleTimeString()}</Card.Text>
                            </div>
                        </div>

                    </CardBody>
            </Card>
            <Card className="sun-card">
                <CardBody>
                    <div className="flex">
                        <Card.Img width={40} src='src/assets/wind-solid.svg' />

                        <div className="center">
                        <Card.Title>Sunset</Card.Title>
                        <Card.Text>{set.toLocaleTimeString()}</Card.Text>
                        </div>
                    </div>

                </CardBody>
            </Card>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
