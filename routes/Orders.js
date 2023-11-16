var express = require('express');
var Orders_controller = require('../controllers/Orders');
var router = express.Router();

/* GET home page. */
router.get('/', Orders_controller.Orders_view_all_Page );
/* GET detail Orders page */
router.get('/detail', Orders_controller.Orders_view_one_Page);
/* GET create Orders page */
router.get('/create', Orders_controller.Orders_create_Page);
/* GET create update page */
router.get('/update', Orders_controller.Orders_update_Page);
/* GET delete costume page */
router.get('/delete', Orders_controller.Orders_delete_Page);

module.exports = router;
