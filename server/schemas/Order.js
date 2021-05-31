var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Status;
(function (Status) {
    Status["Waiting"] = "Waiting";
    Status["Pending"] = "Pending";
    Status["Processing"] = "Processing";
    Status["Completed"] = "Completed";
})(Status || (Status = {}));

var OrderItem = /** @class */ (function () {
    function OrderItem(id, qty, stat) {
        this.itemID = id;
        this.quantity = qty;
        this.status = stat;
    }

    return OrderItem;
}());

var OrderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    cart: {
        type: OrderItem,
        required: true
    },
    status: {
        type: String,
        enum: ['waiting', 'pending', 'processing', 'completed'],
        require: true
    },
});

module.exports = mongoose.model('Order', OrderSchema);
