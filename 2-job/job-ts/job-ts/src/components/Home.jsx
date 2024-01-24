import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "./JobCard";


const Home = () => {
  const API_KEY = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.value)
  const [input, setinput] = useState("");

  const handleinput = (e) => {
    setinput(e.target.value);
    console.log(input)
  }


    const fetchData = async () => {
      try {
        const response = await fetch(API_KEY + input + "&limit=20");
        if(response.ok) {
          const { data } = await response.json();
          dispatch(getJobs(data));
          console.log(jobs)
        } else {
            console.log("erroraccio")
        }
      } catch (err) {
        console.log(err)
    }
  }



  return (
    <>
      <Container>
        <Row>
          <Col className="col">
            <h1>Job Finder</h1>
            <input type="text" onChange={handleinput} placeholder="Type and press the search button" />
            <Button onClick={fetchData}>Search</Button>
          </Col>
          <Col>
            {jobs.map((job) => (
              <JobCard/>
            ))}
          </Col>
        </Row>
      </Container>
      
    </>
  )
}



export default Home;