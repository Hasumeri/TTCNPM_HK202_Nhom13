// import React from 'react'
// import { Button, Form } from 'react-bootstrap'
// import Header from './Header'
// import Order from './Order'

// const Payment = () => {    
// 	const handleSubmit = (event) => {
// 		event.preventDefault()

// 		switch (paymentRes) {
// 			case "Pending":
// 			case "Failed":
// 				alert("Payment Failed!");
// 				break;
// 			default:
// 				alert("Payment Success!");
// 				break;
// 		}
// 	}

// 	return (
// 		<div className='col-md-10 col-lg-8 mx-auto d-block'>
// 			<Header />
// 			<p className='h3 text-center text-secondary'>Payment Notice</p>
// 			<p className='text-center'>Please make the payment, after that you can enjoy all your delicious meals!</p>
// 			<Order />
// 			<div>
// 				<form onSubmit={handleSubmit}>
// 					<Form.Group controlId="Form.method">
// 						<Form.Label>Payment Methods:</Form.Label>
// 						<Form.Control as="select">
// 							<option>Banking</option>
// 							<option>AirPay</option>
// 							<option>Moca</option>
// 							<option>Momo</option>
// 							<option>ViettelPay</option>
// 							<option>ZaloPay</option>
// 						</Form.Control>
// 					</Form.Group>
// 					<Button variant="primary" type="submit">Confirm and Pay</Button>
// 				</form>
// 			</div>
// 		</div>
// 	)
// }

// export default Payment;
