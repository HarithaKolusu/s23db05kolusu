var express = require('express');
var Orders_controller = require('../controllers/Orders');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

/* GET home page. */
router.get('/', secured,Orders_controller.Orders_view_all_Page );
/* GET detail Orders page */
router.get('/detail', secured, Orders_controller.Orders_view_one_Page);
/* GET create Orders page */
router.get('/create', secured, Orders_controller.Orders_create_Page);
/* GET create update page */
router.get('/update', secured,Orders_controller.Orders_update_Page);
/* GET delete costume page */
router.get('/delete',secured, Orders_controller.Orders_delete_Page);

module.exports = router;
