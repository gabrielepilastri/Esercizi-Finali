import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "./JobCard";
import { getJobs } from "../redux/jobSlice";


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
        
          const { data } = await response.json();
          dispatch(getJobs(data));
          console.log(jobs)
      } catch (err) {
        console.log(err)
    }
  }



  return (
    <>
      <Container>
        <Row>
          <Col className="col-12">
            
            <input className="my-4" type="text" onChange={handleinput} placeholder="Type and press the search button" />
            <Button onClick={fetchData}>Search</Button>
          </Col>
          <Col>
            {jobs.map((job) => (
              <JobCard key={job._id} data={job} />
            ))}
          </Col>
        </Row>
      </Container>
      
    </>
  )
}



export default Home;