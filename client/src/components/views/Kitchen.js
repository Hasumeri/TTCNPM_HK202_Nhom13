// import React from 'react'
// import { Button, Form } from 'react-bootstrap'
// import Header from './Header'
// import Order from './Order'
// import Food from './Food'

// const Kitchen = () => {

// 	return (
// 		<div className='col-md-10 col-lg-8 mx-auto d-block'>
// 			<Header />
// 			<Tabs defaultActiveKey="order" transition={false} id="noanim-tab-example">
// 				<Tab eventKey="order" title="Order">
//                     <Tab.Container id="left-tabs" defaultActiveKey="first">
//                         <Row>
//                             <Col md={2} lg={1}>
//                                 <Nav variant="pills" className="flex-column">
//                                     <Nav.Item>
//                                         <Nav.Link eventKey="first">Pending</Nav.Link>
//                                     </Nav.Item>
//                                     <Nav.Item>
//                                         <Nav.Link eventKey="second">Processing</Nav.Link>
//                                     </Nav.Item>
//                                     <Nav.Item>
//                                         <Nav.Link eventKey="three">Completed</Nav.Link>
//                                     </Nav.Item>
//                                 </Nav>
//                             </Col>
//                             <Col md={8} lg={7}>
//                                 <Tab.Content>
//                                     <Tab.Pane eventKey="first">
//                                         <Order />
//                                     </Tab.Pane>
//                                     <Tab.Pane eventKey="second">
//                                         <Order />
//                                     </Tab.Pane>
//                                     <Tab.Pane eventKey="three">
//                                         <Order />
//                                     </Tab.Pane>
//                                 </Tab.Content>
//                             </Col>
//                         </Row>
//                     </Tab.Container>
// 				</Tab>
//                 <Tab eventKey="menu" title="Menu">
//                     <Food />
//                     <Form>
//                         <Form.Check
//                             type="switch"
//                             id="custom-switch"
//                             label="FoodState"
//                         />
//                     </Form>
// 				</Tab>
// 			</Tabs>
// 		</div>
// 	)
// }

// export default Kitchen;
