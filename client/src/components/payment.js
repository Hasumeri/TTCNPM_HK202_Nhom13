import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Elements } from 'react-stripe-elements';
import Order from './Order';

class Payment extends React.Component {    
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	handleSubmit(event) {
		/*switch (paymentRes.result) {
			case "Pending":
			case "Failed":
				window.location.href = "/status/failed";
				break;
			default:
				window.location.href = "/status/success";
				break;
		}*/
		alert('submitted: ' + this.state.value);
		event.preventDefault();
	}
	render() {
        return (
			<div id="paymentPage">
				<Elements>
					<h1>Payment Notice</h1>
					<p>Please make the payment, after that you can enjoy all your delicious meals!</p>
					<Order />
					<form onSubmit={this.handleSubmit}>
						<fieldset>
							<legend>Payment Methods:</legend>
							<input type="radio" id="banking" name="method" value="bank account"> Banking
							<select value={this.state.value} onChange={this.handleChange}>
								<option value="agribank">Agribank</option>
								<option value="hdbank">HDbank</option>
								<option value="sacombank">Sacombank</option>
								<option value="techcombank">Techcombank</option>
								<option value="vietcombank">Vietcombank</option>
								<option value="vietinbank">Vietinbank</option>
								<option value="other">Other</option>
							</select>
							<br>
							<input type="radio" id="epay" name="method" value="E-pay"> E-wallet
							<select value={this.state.value} onChange={this.handleChange}>
								<option value="airpay">AirPay</option>
								<option value="moca">Moca</option>
								<option value="momo">Momo</option>
								<option value="viettelpay">ViettelPay</option>
								<option value="zalopay">ZaloPay</option>
							</select>
						</fieldset>
						<br>
						<input type="submit" value="Confirm and Pay">
					</form>
				</Elements>
			</div>
		);
    }
}

export default Payment