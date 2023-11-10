var Orders = require("../models/Orders");

// List of all Orders
exports.Orders_list = async function (req, res) {
    try {
        theOrders = await Orders.find();
        res.send(theOrders);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Orders.
exports.Orders_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Orders.findById(req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

// Handle Orders create on POST.
exports.Orders_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Orders();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.id = req.body.id;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Orders delete form on DELETE.
exports.Orders_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Orders delete DELETE ' + req.params.id);
};

// Handle Orders update form on PUT.
exports.Orders_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Orders.findById(req.params.id)
    // Do updates of properties
    if(req.body.name)
    toUpdate.name = req.body.name;
    if(req.body.id) toUpdate.id = req.body.id;
    if(req.body.price) toUpdate.price = req.body.price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   };

// VIEWS
// Handle a show all view
exports.Orders_view_all_Page = async function (req, res) {
    try {
        theOrders = await Orders.find();
        res.render('Orders', { title: 'Orders Search Results', results: theOrders });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};