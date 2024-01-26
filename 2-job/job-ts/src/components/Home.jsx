import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "./JobCard";
import { getJobs } from "../redux/jobSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


const Home = () => {
  const API_KEY = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  const lastKey = "&limit=20"
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.value)
  const [input, setinput] = useState("");

  const handleinput = (e) => {
    setinput(e.target.value);
    console.log(input)
  }


    const fetchData = async () => {             /**eseguo la fetch dei dati al click del button */
      try {
        const response = await fetch(API_KEY + input + lastKey);
        
          const { data } = await response.json();
          dispatch(getJobs(data));
          console.log(jobs)
      } catch (err) {
        console.log(err)
    }
  }



  return (
    <>
      <Container className="sm-mt-5">
        <Row>
          <Col className="col-12 d-flex align-items-center justify-content-center">
            
            <input className="my-4 py-2 rounded border border-none me-3" type="text" onChange={handleinput} placeholder="Type and press search" />
            <Button className="px-3 py-2" variant="info" onClick={fetchData}> <img src="../src/assets/magnifying-glass-solid.svg" alt="lens" width={20} /> </Button>
          </Col>
          <Col className="col-6 mx-auto d-flex flex-column align-items-center">
            {jobs.map((job) => (               /**passo a la key e l'oggetto */
              <JobCard key={job._id} data={job} />
            ))}
          </Col>
        </Row>
      </Container>
      
    </>
  )
}



export default Home;