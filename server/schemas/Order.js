const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Status;
(function (Status) {
    Status["Waiting"] = "waiting";
    Status["Pending"] = "pending";
    Status["Processing"] = "processing";
    Status["Completed"] = "completed";
})(Status || (Status = {}));
var OrderItem = /** @class */ (function () {
    function OrderItem(id, qty, price) {
        if (qty === void 0) { qty = 1; }
        this.itemID = id;
        this.quantity = qty;
        this.price = price;
    }
    return OrderItem;
}());
var OrderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    cart: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        "enum": ['waiting', 'pending', 'processing', 'completed'],
        require: true
    }
});
module.exports.OrderSchema = mongoose.model('order', OrderSchema);
module.exports.OrderItem = OrderItem;
module.exports.Status = Status;
