import { Card, CardBody } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import './Home.css'
import { useEffect, useState } from 'react';

const Home = ({search}) => {
    const location = useLocation;
    const params = new URLSearchParams(location.search).get("search");
    const API_KEY = "9c02f504c8276546a1ce94b65b497967"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search},it&APPID=${API_KEY}&units=metric`
    let tomorrow = `https://api.openweathermap.org/data/2.5/forecast?q=${search},it&appid=${API_KEY}&units=metric`

    const [city, setCity] = useState([]);
    const [city2, setCity2] = useState(null);



    const fetchData = async() => {
        try {
            const res = await fetch(url);
            if (res.ok) {
                let data = await res.json();
                console.log(data);
               setCity(data);

            }else {
                    console.log("error")
                }
            } catch (err) {
                console.log(err);
            }
        };

        useEffect(() => {
            console.log(city)
        },[city])

        useEffect(() => {
            if(search.length > 2)
            fetchData()
        }, [search])



        const fetchTomorrow = async() => {
            try {
                const res = await fetch(tomorrow);
                if (res.ok) {
                    let data = await res.json();
                    console.log(data);
                    console.log(data.list);
                   setCity2(data);
    
                }else {
                        console.log("error")
                    }
                } catch (err) {
                    console.log(err);
                }
            };
    
            useEffect(() => {
                console.log(city2)
            },[city2])
    
            useEffect(() => {
                if(search.length > 2)
                fetchTomorrow()
            }, [search])

            let minimo = 100;
            let massimo = -100;
        
            for (let i = 0; i<city2.list.length; i++) {
                if (i < minimo) {
                    minimo = i;
                }
            }


    return (
        <>
       <div className='main'>
        <h1 className='city'>{city.name}</h1>
        <p className='pa'>{city.weather?.description}</p>
            <div className="cards">
                <Card className='single-card'>
                    <CardBody>
                        <div className='flex'>
                            <Card.Img width={40} src='src/assets/wind-solid.svg' />

                            <div className='center'>
                            <Card.Title className='card-title'>Wind Speed</Card.Title>
                            <Card.Text className='card-text'>{city?.wind?.speed} km/h</Card.Text>
                            </div>
                        </div>

                    </CardBody>
                </Card>
                <Card className='single-card'>
                    <CardBody>
                        <div className='flex'>
                            <Card.Img width={40} src='src/assets/cloud-rain-solid.svg' />

                            <div className='center'>
                            <Card.Title className='card-title'>Rain Chanche</Card.Title>
                            <Card.Text className='card-text'>{city?.clouds?.all} %</Card.Text>
                            </div>
                        </div>

                    </CardBody>
                </Card>
                <Card className='single-card'>
                    <CardBody>
                        <div className='flex'>
                            <Card.Img width={40} src='src/assets/temperature-three-quarters-solid.svg' />

                            <div className='center'>
                            <Card.Title className='card-title'>Temperature</Card.Title>
                            <Card.Text>min: {minimo} <br />max:</Card.Text>
                            <Card.Text className='card-text'>{city?.main?.temp.toFixed()} °C</Card.Text>
                            </div>
                        </div>

                    </CardBody>
                </Card>
                <Card className='single-card'>
                    <CardBody>
                        <div className='flex'>
                            <Card.Img width={40} src='src/assets/percent-solid.svg' />

                            <div className='center'>
                            <Card.Title className='card-title'>Humidity</Card.Title>
                            <Card.Text className='card-text'>{city?.main?.humidity} %</Card.Text>
                            </div>
                        </div>

                    </CardBody>
                </Card>
                <Card className='single-card'>
                    <CardBody>
                        <div className='flex'>
                            <Card.Img width={40} src='src/assets/temperature-three-quarters-solid.svg' />

                            <div className='center'>
                            <Card.Title className='card-title'>Tomorrow</Card.Title>
                            {city2 && <Card.Text className='card-text'>{city2?.list[7]?.main?.temp.toFixed()} °C</Card.Text>}
                            </div>
                        </div>

                    </CardBody>
                </Card>
            </div>
       </div>
       </>
    )
}

export default Home;