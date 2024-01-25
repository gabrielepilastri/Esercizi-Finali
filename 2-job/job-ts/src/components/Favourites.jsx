import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { delFav } from "../redux/favSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"


const Favourites = () => {
    const dispatch = useDispatch();
    const favs = useSelector((state) => state.fav?.value)

    return(
        <>
           <Container>
            <Row>
                <Col className="col-12 text-center mt-3 text-light">
                <h1>Favourites</h1>
                </Col>
                <Col className="col-5 mx-auto mt-5">
        <ListGroup className="list">
            {favs?.length > 0 ? (
                favs.map((f, i) => (
                     <ListGroupItem key={i} className="bgFav">
                        <div className="d-flex justify-content-between align-items-center text-light">
                        {f}
                        <Button variant="danger" className="ms-3" onClick={()=> dispatch(delFav(f))}>X</Button> 
                        </div>
                     </ListGroupItem>
                ))
            ) : <h2 className="text-light text-center">There are no favourites</h2>
            }
           
        </ListGroup>
                </Col>
            </Row>
           </Container>
        </>
    )
}


export default Favourites;