import { Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux"



const JobCard = (data) => {
    const dispatch = useDispatch();

    return(
        <>
            <Col className="col-4"><h3>{data.company_name}</h3></Col>
            <Col className="col-8">
                <a href={data.url}>{data.title}</a>
                <Button onClick={()=> dispatch(getFav(data.title))} className="ms-3">star</Button>
            </Col>
        </>
    )
}

export default JobCard;