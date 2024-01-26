import { useEffect, useState } from "react";
import Home from "./components/Home";
import "./App.css";
import { Button, Card, CardBody } from "react-bootstrap";
import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

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
  const city2 = useSelector((state) => state.weather.city2); //city2 per il grafico forecast
  const [currentTime, setCurrentTime] = useState(new Date());
  const sunrise = city?.sys?.sunrise * 1000; //l'oggetto forniva i secondi a partire dal 1970, quindi li trasformo in millisecondi per l'orario di alba e tramonto,
  const sun = new Date(sunrise);
  const sunset = city?.sys?.sunset * 1000;
  const set = new Date(sunset);

  const data = [
    //con il ciclo stavo riscontrando delle difficoltà quindi ho fatto questa cosa orrenda
    { name: "", temp: city2?.list[2]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[5]?.main?.temp.toFixed() },
    { name: "1 day", temp: city2?.list[8]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[11]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[14]?.main?.temp.toFixed() },
    { name: "2 days", temp: city2?.list[16]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[18]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[21]?.main?.temp.toFixed() },
    { name: "3 days", temp: city2?.list[24]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[26]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[29]?.main?.temp.toFixed() },
    { name: "4 days", temp: city2?.list[32]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[34]?.main?.temp.toFixed() },
    { name: "", temp: city2?.list[37]?.main?.temp.toFixed() },
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
      <div className="split d-flex gap-4">
        <div className="container col-6">
          <div className="topSearch text-center d-flex mt-3 ms-1">
            <input
              className="input py-1 rounded border border-none me-2"
              type="text"
              name="search"
              placeholder="type and press search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="info" type="button" onClick={() => handleSearch()}>
              Search
            </Button>
          </div>
          <h3 className="orario mt-2 text-light">
            {currentTime.toLocaleString()}
          </h3>

          <Home search={searched} />
        </div>

        {city.name == undefined ? null : (
          <div className="sideContainer p-3 col-6">
            <div>
              <h4 className="city fs-2">Sunrise & Sunset</h4>
              <div className="rise-set d-flex">
                <Card
                  style={{
                    height: "140px",
                    width: "20vw",
                    backgroundSize: "cover",
                    backgroundPositionY: "center",
                    backgroundImage: "url('../src/assets/alba.jpeg')",
                  }}
                  className="sun-card single-card me-3"
                >
                  <CardBody>
                    <div className="d-flex fs-4">
                      <Card.Img
                        style={{ width: "60px", height: "60px" }}
                        src="src/assets/sun-solid (1).svg"
                      />

                      <div className="center ms-3">
                        <Card.Text className="card-title">Sunrise</Card.Text>
                        <Card.Text className="card-text">
                          {sun.toLocaleTimeString()}
                        </Card.Text>{" "}
                       
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card
                  style={{
                    height: "140px",
                    width: "20vw",
                    backgroundSize: "cover",
                    backgroundPositionY: "bottom",
                    backgroundImage: "url('../src/assets/tramonto.jpeg')",
                  }}
                  className="sun-card single-card"
                >
                  <CardBody>
                    <div className="d-flex fs-4">
                      <Card.Img
                        style={{ width: "60px", height: "60px" }}
                        src="src/assets/sun-solid (1).svg"
                      />

                      <div className="center ms-3">
                        <Card.Text className="card-title">Sunset</Card.Text>
                        <Card.Text className="card-text">
                          {set.toLocaleTimeString()}
                        </Card.Text>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <h4 className="city fs-2">Tomorrow</h4>
              <div className="tomorrow d-flex">
                <Card
                  style={{
                    height: "140px",
                    width: "20vw",
                    backgroundSize: "cover",
                    backgroundPositionY: "center",
                    backgroundImage: "url('../src/assets/temperatura.jpeg')",
                  }}
                  className="single-card me-3"
                >
                  <CardBody>
                    <div className="d-flex fs-4">
                      <Card.Img
                        style={{ width: "60px", height: "60px" }}
                        src="src/assets/temperature-three-quarters-solid.svg"
                      />

                      <div className="center ms-3">
                        <Card.Text className="card-title">
                          Tomorrow Temperature
                        </Card.Text>
                        {city2 && city2.list && (
                          <Card.Text className="card-text">
                            {city2?.list[8]?.main?.temp} °C
                          </Card.Text>
                        )}
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card
                  style={{
                    height: "140px",
                    width: "20vw",
                    backgroundSize: "cover",
                    backgroundPositionY: "center",
                    backgroundImage: "url('../src/assets/pioggia.jpeg')",
                  }}
                  className="single-card"
                >
                  <CardBody>
                    <div className="d-flex fs-4">
                      <Card.Img
                        style={{ width: "60px", height: "60px" }}
                        src="src/assets/cloud-rain-solid.svg"
                      />

                      <div className="center ms-3">
                        <Card.Text className="card-title">
                          Tomorrow <br /> Rain Chance
                        </Card.Text>
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

            {city.name == undefined ? null : (
              <div className="grafico">
                <hr />
                <p className="fw-bold text-light fs-4">
                  Temperature nei prossimi 5 giorni
                </p>
                <LineChart
                  width={650}
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
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
