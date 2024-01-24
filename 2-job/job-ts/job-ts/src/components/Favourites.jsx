import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { delFav } from "../redux/favSlice";


const Favourites = () => {
    const dispatch = useDispatch();
    const favs = useSelector((state) => state.fav?.value)

    return(
        <>
           <Container>
            <Row>
                <Col>
                <h1>Favourites</h1>
                </Col>
                <Col className="col-12">
        <ListGroup>
            {favs?.length > 0 ? (
                favs.map((f, i) => (
                     <ListGroupItem key={i}>
                        {f}
                        <Button onClick={()=> dispatch(delFav(f))}>X</Button> 
                     </ListGroupItem>
                ))
            ) : <h2>There are no favourites</h2>
            }
           
        </ListGroup>
                </Col>
            </Row>
           </Container>
        </>
    )
}


export default Favourites;