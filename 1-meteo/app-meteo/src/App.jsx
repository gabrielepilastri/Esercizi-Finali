import { useEffect, useState } from "react";
import Home from "./components/Home";
import "./App.css";
import { Button, Card, CardBody } from "react-bootstrap";
import { useSelector } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
} from "recharts";



// VERSIONE DESKTOP: 1330px, 727px
// VERSIONE MOBILE: 470px, 600px+




function App() {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState("");
  const city = useSelector((state) => state.weather.city); //prendo lo stato di city per implementare il sunrise
  const city2 = useSelector((state) => state.weather.city2);//city2 per il grafico forecast
  const [currentTime, setCurrentTime] = useState(new Date());
  const sunrise = city?.sys?.sunrise * 1000; //trasformo i secondi in millisecondi per l'orario di alba e tramonto
  const sun = new Date(sunrise);
  const sunset = city?.sys?.sunset * 1000;
  const set = new Date(sunset);

  const data = [  //con il ciclo stavo riscontrando delle difficoltà quindi ho fatto questa cosa orrenda
    { name: "", temp: city2?.list[0]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[1]?.main.temp.toFixed() },
    { name: "", temp: city2?.list[2]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[3]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[4]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[5]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[6]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[7]?.main?.temp.toFixed() },
    { name: "1 day", temp: city2?.list[8]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[9]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[10]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[11]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[12]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[13]?.main.temp.toFixed() },
    { name: "", temp: city2?.list[14]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[15]?.main?.temp.toFixed() },
    { name: "2 days", temp: city2?.list[16]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[17]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[18]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[19]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[20]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[21]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[22]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[23]?.main?.temp.toFixed() },
    { name: "3 days", temp: city2?.list[24]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[25]?.main.temp.toFixed() },
    { name: "", temp: city2?.list[26]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[27]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[28]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[29]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[30]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[31]?.main?.temp.toFixed() },
    { name: "4 days", temp: city2?.list[32]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[33]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[34]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[35]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[36]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[37]?.main.temp.toFixed() },
    { name: "", temp: city2?.list[38]?.main?.temp.toFixed() },
    { name: "5 days", temp: city2?.list[39]?.main?.temp.toFixed() },
  ];

  const handleSearch = () => {
    if (search.length > 0) {
      setSearched(search);
    }
  };

  useEffect(() => {
    const orario = setInterval(() => {
      // Aggiorno data e ora ogni secondo
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(orario);
  }, []);

  return (
    <>
      <div className="split">
        <div className="container">
          <div className="topSearch text-center">
            <input
              className="input"
              type="text"
              name="search"
              placeholder="Search city"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="info" type="button" onClick={() => handleSearch()}>
              Cerca
            </Button>
          </div>
          <h3 className="orario">{currentTime.toLocaleString()}</h3>

          <Home search={searched} />
          <div className="grafico">
            <hr />
            <p>Temperature nei prossimi 5 giorni</p>

            <LineChart
              width={800}
              height={200}
              data={data}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis domain={[-10, 30]} />
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#368BCA"
                yAxisId={0}
              />
            </LineChart>
          </div>
        </div>

        <div className="sideContainer">
          <div></div>
          <div>
            <h2>Sunrise & Sunset</h2>
            <Card className="sun-card">
              <CardBody>
                <div className="flex">
                  <Card.Img className="immagine" width={40} src="src/assets/sun-solid (1).svg" />

                  <div className="center">
                    <Card.Title>Sunrise</Card.Title>
                    <Card.Text>{sun.toLocaleTimeString()}</Card.Text>{" "}
                    {/*   provando ad ottenere l'orario dell'alba, ma mi esce una data del 1970*/}
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="sun-card">
              <CardBody>
                <div className="flex">
                  <Card.Img className="immagine" width={40} src="src/assets/sun-solid.svg" />

                  <div className="center">
                    <Card.Title>Sunset</Card.Title>
                    <Card.Text>{set.toLocaleTimeString()}</Card.Text>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="single-card">
              <CardBody>
                <div className="flex">
                  <Card.Img
                    width={40}
                    src="src/assets/temperature-three-quarters-solid.svg"
                  />

                  <div className="center">
                    <Card.Title className="card-title">Tomorrow</Card.Title>
                    {city2 && city2.list && (
                      <Card.Text className="card-text">
                        {city2?.list[8]?.main?.temp.toFixed()} °C
                      </Card.Text>
                    )}
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
