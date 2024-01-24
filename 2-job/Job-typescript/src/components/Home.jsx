import { Button } from "bootstrap";


const Home = () => {
  const API_KEY = "https://strive-benchmark.herokuapp.com/api/jobs?search=";



  return (
    <>
      <h1>Job Finder</h1>
      <Button>Favourites</Button>
    </>
  )
}



export default Home;