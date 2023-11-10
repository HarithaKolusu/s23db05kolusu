var express = require('express');
var Orders_controller = require('../controllers/Orders');
var router = express.Router();

/* GET home page. */
router.get('/', Orders_controller.Orders_view_all_Page );

module.exports = router;
