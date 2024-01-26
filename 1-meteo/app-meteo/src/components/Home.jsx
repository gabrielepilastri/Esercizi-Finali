import { Card, CardBody } from "react-bootstrap";
// import { useLocation } from 'react-router-dom'
import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCity, setCity2 } from "../reducers/fetchSlice";

const Home = ({ search }) => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.weather.city);
  const city2 = useSelector((state) => state.weather.city2);

  // const location = useLocation;
  // const params = new URLSearchParams(location.search).get("search");
  const API_KEY = "9c02f504c8276546a1ce94b65b497967";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${search},it&APPID=${API_KEY}&units=metric`;
  let tomorrow = `https://api.openweathermap.org/data/2.5/forecast?q=${search},it&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    // all'avvio eseguo la fetch di entrambi gli url tramite la slice
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (res.ok) {
          let data = await res.json();
          console.log(data);

          dispatch(setCity({ city: data }));
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    };

    const fetchTomorrow = async () => {
      try {
        const res = await fetch(tomorrow);
        if (res.ok) {
          let data = await res.json();
          console.log(data);
          console.log(data.list[1]);

          dispatch(setCity2({ city2: data }));
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (search.length > 2) {
      fetchData();
      fetchTomorrow();
    }
  }, [dispatch, search]);

  let iconUrl = "https://openweathermap.org/img/wn/";
  let finalUrl = "@2x.png";

  return (
    <>
      <div className="main">
        <div className="d-flex align-items-center">
          {city?.weather?.[0] && (
            <small className="city fs-2">
              {city.name}, {city.weather[0].description}
            </small>
          )}
          {city.name == undefined ? null : (
            <img
              className="wimg"
              src={iconUrl + city?.weather?.[0].icon + finalUrl}
              alt="weather icon"
            />
          )}
        </div>
        <p className="pa">{city?.weather?.description}</p>
        <div className="cards d-flex flex-wrap">

        {city.name == undefined ? null : (
            <Card
              style={{
                backgroundImage: "url('../src/assets/temperatura.jpeg')",
              }}
              className="single-card mx-2 my-2"
            >
              <CardBody>
                <div className="d-flex fs-4">
                  <Card.Img
                    style={{ width: "60px", height: "60px" }}
                    src="src/assets/temperature-three-quarters-solid.svg"
                  />

                  <div className="center">
                    <Card.Text className="card-title">Temperature</Card.Text>

                    <div className="d-flex flex-column">
                      <Card.Text className="card-text">
                        {city?.main?.temp} °C
                      </Card.Text>

                      <Card.Text className="minmax ms-2">
                        min: {city?.main?.temp_min.toFixed()}
                        <br />
                        max: {city?.main?.temp_max.toFixed()}
                      </Card.Text>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          )}

            {city.name == undefined ? null : (
            <Card
              style={{ backgroundImage: "url('../src/assets/pioggia.jpeg')", backgroundPositionY:"center"}}
              className="single-card mx-2 my-2"
            >
              <CardBody>
                <div className="d-flex fs-4">
                  <Card.Img
                    style={{ width: "60px", height: "60px" }}
                    width={40}
                    src="src/assets/cloud-rain-solid.svg"
                  />

                  <div className="center">
                    <Card.Text className="card-title">Rain Chanche</Card.Text>
                    <Card.Text className="card-text">
                      {city?.clouds?.all} %
                    </Card.Text>
                  </div>
                </div>
              </CardBody>
            </Card>
          )}

          {city.name == undefined ? null : (
            <Card
              style={{
                backgroundPositionY: "center",
                backgroundImage: "url('../src/assets/vento.jpeg')",
              }}
              className="single-card mx-2 my-2"
            >
              <CardBody>
                <div className="d-flex fs-4">
                  <Card.Img
                    style={{ width: "60px", height: "60px" }}
                    src="src/assets/wind-solid.svg"
                  />

                  <div className="center">
                    <Card.Text className="card-title">Wind Speed</Card.Text>
                    <Card.Text className="card-text">
                      {city?.wind?.speed} km/h
                    </Card.Text>
                  </div>
                </div>
              </CardBody>
            </Card>
          )}
          
          {city.name == undefined ? null : (
            <Card
              style={{ backgroundImage: "url('../src/assets/umidità.jpeg')" }}
              className="single-card mx-2 my-2"
            >
              <CardBody>
                <div className="d-flex fs-4">
                  <Card.Img
                    style={{ width: "60px", height: "60px" }}
                    width={40}
                    src="src/assets/droplet-solid.svg"
                  />

                  <div className="center">
                    <Card.Text className="card-title">Humidity</Card.Text>
                    <Card.Text className="card-text">
                      {city?.main?.humidity} %
                    </Card.Text>
                  </div>
                </div>
              </CardBody>
            </Card>
          )}
          
        </div>
      </div>
    </>
  );
};

export default Home;
