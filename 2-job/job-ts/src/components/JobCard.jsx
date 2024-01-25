import { Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux"
import { addFav } from "../redux/favSlice";
import '../App.css'



const JobCard = ({data}) => {
    const dispatch = useDispatch();

    return(
        <>
            <div className="jobb">
            <Col className="col-12"><h3>{data.company_name}</h3></Col>
            <Col className="col-12 innerjobb">
                <a href={data.url}>{data.title}</a>
                <Button className="ms-3 pb-2" variant="warning" onClick={()=> dispatch(addFav(data.title))}> <img src="../src/assets/star-solid.svg" alt="img star" width={20} />  </Button>
            </Col>
            </div>
        </>
    )
}

export default JobCard;