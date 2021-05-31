/*import React from 'react';

const AddFood = () => {

    state = {

    }

    return (

    );
};

export default AddFood;*/

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Button, Container, Form, Col, Row, Figure, Image
} from 'react-bootstrap';

class AddFood extends Component {

    state = {
        profileImg: 'https://terroirauburn.com.au/wp-content/uploads/2018/04/blank-profile-picture-973460_960_720-700x700.png'
    }

    render() {
        const {profileImg} = this.state
        return (
            <div style={{marginTop: '50px'}}>
                <Container style={{
                        width: '55%', border: '5px solid #458bdb', backgroundColor: '#b2c4d8',
                        padding: '15px'
                    }}>
                    <Form>
                        <Form.Group as={Row}>
                            <Col className="border-bottom">
                                <Form.Label><h1>Thêm món ăn</h1></Form.Label>
                            </Col>
                        </Form.Group>
                        <Row>
                            <Col xs={5}>
                                <div className="page">
                                    <Container>
                                        Chỉnh sửa ảnh
                                        <div className="img-holder">
                                            <img src={profileImg} alt="" id="img" />
                                        </div>
                                        <input type="file" name="image-upload" id="input-image" accept="image/*" />
                                        <div className="label">
                                            <label htmlFor="input-image" className="image-upload">
                                                <i className="material-icons">add_photo_alternate</i>
                                                Chọn ảnh
                                            </label>
                                        </div>
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
        );
    }
}

export default AddFood;