import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';

import {
    Container, Form, Col, Row, Button, Image, Modal
} from 'react-bootstrap';

const DeleteFood2 = () => {
    const styleContainer = {
        width: '55%', 
        border: '5px solid #458bdb', 
        backgroundColor: '#b2c4d8',
        padding: '15px'
    }
    const [imageSample, setimageSample] = useState('https://honeysanime.com/wp-content/uploads/2015/12/02-Rainbow-Terrine-Megumi-Tadokoro-and-Souma-Yukihira-Shokugeki-no-Soma-500x281.jpg');
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{marginTop: '50px', marginBottom: '30px'}}>
            <Container style={styleContainer}>
                
                <Form>
                    <Form.Group as={Row}>
                        <Col className="border-bottom">
                            <center><Form.Label><h1>Xóa món ăn</h1></Form.Label></center>                       
                        </Col>
                    </Form.Group>
                    <div className="content">
                        <Row>
                            <Col>
                                <Form.Group as={Row} controlId='food1'>
                                    <Form.Check aria-label="option 1" />
                                    <Form.Group>
                                        <Image className='imageSample' src={imageSample} rounded />
                                        <Form.Label>Rau Ngon Tuyệt Vời</Form.Label>
                                        <Form.Label>Giá: 450.000 VND</Form.Label>
                                    </Form.Group>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Row}>
                                    <Form.Check aria-label="option 1" />
                                    <Form.Group>
                                        <Image className='imageSample' src={imageSample} rounded />
                                        <Form.Label>Rau Ngon Tuyệt Vời</Form.Label>
                                        <Form.Label>Giá: 450.000 VND</Form.Label>
                                    </Form.Group>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Row}>
                                    <Form.Check aria-label="option 1" />
                                    <Form.Group>
                                        <Image className='imageSample' src={imageSample} rounded />
                                        <Form.Label>Rau Ngon Tuyệt Vời</Form.Label>
                                        <Form.Label>Giá: 450.000 VND</Form.Label>
                                    </Form.Group>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group as={Row}>
                                    <Form.Check aria-label="option 1" />
                                    <Form.Group>
                                        <Image className='imageSample' src={imageSample} rounded />
                                        <Form.Label>Rau Ngon Tuyệt Vời</Form.Label>
                                        <Form.Label>Giá: 450.000 VND</Form.Label>
                                    </Form.Group>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Row}>
                                    <Form.Check aria-label="option 1" />
                                    <Form.Group>
                                        <Image className='imageSample' src={imageSample} rounded />
                                        <Form.Label>Rau Ngon Tuyệt Vời</Form.Label>
                                        <Form.Label>Giá: 450.000 VND</Form.Label>
                                    </Form.Group>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Row}>
                                    <Form.Check aria-label="option 1" />
                                    <Form.Group>
                                        <Image className='imageSample' src={imageSample} rounded />
                                        <Form.Label>Rau Ngon Tuyệt Vời</Form.Label>
                                        <Form.Label>Giá: 450.000 VND</Form.Label>
                                    </Form.Group>
                                </Form.Group>
                            </Col>
                        </Row>
                        {/* <Pagination style={{justifyContent: 'center'}}>
                            <Pagination.Prev />
                            <Pagination.Item >{1}</Pagination.Item>
                            <Pagination.Item  onClick={getDelete}>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Next />
                        </Pagination>                        */}

                        <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                            </li>
                            <li class="page-item li-page-item"><NavLink disable to='/deletefood' >1</NavLink></li>
                            <li class="page-item li-page-item"><NavLink to='deletefood/2' >2</NavLink></li>
                            {/* <li class="page-item"><a class="page-link" href="#">3</a></li> */}
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    
                    <div className="text-right">
                        <Button variant="primary" onClick={handleShow} >
                            Delete
                        </Button>
                    </div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body>Bạn có chắn chắn muốn xóa?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Hủy
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Xóa
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </Container>
        </div>
    );
}

export default DeleteFood2;