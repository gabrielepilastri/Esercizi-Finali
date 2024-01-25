import { Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux"
import { addFav } from "../redux/favSlice";
import '../App.css'



const JobCard = ({data}) => {
    const dispatch = useDispatch();

    return(
        <>
            <div className="jobb">
            <Col className="col-4"><h3>{data.company_name}</h3></Col>
            <Col className="col-6">
                <a href={data.url}>{data.title}</a>
                <Button className="ms-3" variant="outline-warning" onClick={()=> dispatch(addFav(data.title))}>star</Button>
            </Col>
            </div>
        </>
    )
}

export default JobCard;