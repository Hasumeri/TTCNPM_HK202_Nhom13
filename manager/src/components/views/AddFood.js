import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'

import {
    Container, Form, Col, Row, Button, Image
} from 'react-bootstrap'

const AddFood = () => {

    //const {foodState: {food}, addFood } = useContext(FoodContext)

    const handleSubmit = () => {
        //var result = food;
    }

    const [profileImg, setprofileImg] = useState('data:image/jpeg;base64,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');
    
    const imageHandler = (event) => {
        const reader = new FileReader();

        reader.onload = () => {
            if(reader.readyState === 2) {
                setprofileImg(reader.result);
            }
        }
        
        reader.readAsDataURL(event.target.files[0])
    }

    const styleContainer = {
        width: '80%', 
        border: '3px solid #458bdb', 
        padding: '15px'
    }

    return (
        <div className='col-md-10 col-lg-8 mx-auto d-block'>
            <Header />
            <div style={{marginTop: '50px'}}>
                
                <Container style={styleContainer}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row}>
                            <Col className="border-bottom">
                                <center><Form.Label><h1>Thêm món ăn</h1></Form.Label></center>                       
                            </Col>
                        </Form.Group>
                        <Row>
                            <Col xs={5}>
                                <div className="page">
                                    <Container>
                                        <center>Thêm ảnh</center>
                                        <div className="img-holder">
                                            <Image className="img-upload-pattern" src={profileImg} rounded />
                                        </div>

                                        <Form.Group>
                                            <Form.File name="image-upload" id="input-image" onChange={imageHandler} />
                                        </Form.Group>

                                        <Form.Group controlId="input-image" className="choose-image">
                                            <Form.Label className="image-upload" >Chọn ảnh</Form.Label>
                                        </Form.Group>
                                    </Container>
                                </div>
                            </Col>
                            <Col xs={7}>
                            <Form.Group as={Row} controlId="nameFood">
                                <Col>
                                    <Form.Control type="text" placeholder="Nhập tên món ăn" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="priceFood">
                                <Col>
                                    <Form.Control type="text" placeholder="Nhập đơn giá" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="descriptionFood">
                                <Col>
                                    <Form.Control as="textarea" placeholder="Mô tả" rows={6} />
                                </Col>
                            </Form.Group>
                            </Col>
                        </Row>
                        
                        <div className="text-right">
                            <Button variant="primary" type="submit" >
                                Hoàn thành
                            </Button>
                        </div>
                        
                    </Form> 
                </Container>
            </div>
        </div>
    );
};

export default AddFood;