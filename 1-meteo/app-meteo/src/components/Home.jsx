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


  return (
    <>
      <div className="main">
        <h1 className="city">{city.name}</h1>
        <p className="pa">{city?.weather?.description}</p>
        <div className="cards">
          <Card className="single-card">
            <CardBody>
              <div className="flex">
                <Card.Img width={40} src="src/assets/wind-solid.svg" />

                <div className="center">
                  <Card.Title className="card-title">Wind Speed</Card.Title>
                  <Card.Text className="card-text">
                    {city?.wind?.speed} km/h
                  </Card.Text>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="single-card">
            <CardBody>
              <div className="flex">
                <Card.Img width={40} src="src/assets/cloud-rain-solid.svg" />

                <div className="center">
                  <Card.Title className="card-title">Rain Chanche</Card.Title>
                  <Card.Text className="card-text">
                    {city?.clouds?.all} %
                  </Card.Text>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="single-card">
            <CardBody>
              <div className="flex">
                <Card.Img width={40} src="src/assets/percent-solid.svg" />

                <div className="center">
                  <Card.Title className="card-title">Humidity</Card.Title>
                  <Card.Text className="card-text">
                    {city?.main?.humidity} %
                  </Card.Text>
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
                  <Card.Title className="card-title">Temperature</Card.Title>
                  <Card.Text className="minmax">
                    min: {city?.main?.temp_min.toFixed()} <br />
                    max: {city?.main?.temp_max.toFixed()}
                  </Card.Text>
                  <Card.Text className="card-text">
                    {city?.main?.temp} °C
                  </Card.Text>
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
    </>
  );
};

export default Home;
