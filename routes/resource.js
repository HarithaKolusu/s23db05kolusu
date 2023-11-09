var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var Orders_controller = require('../controllers/Orders');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Orders ROUTES ///
// POST request for creating a Costume.
router.post('/Orders', Orders_controller.Orders_create_post);
// DELETE request to delete Costume.
router.delete('/Orders/:id', Orders_controller.Orders_delete);
// PUT request to update Costume.
router.put('/Orders/:id', Orders_controller.Orders_update_put);
// GET request for one Costume.
router.get('/Orders/:id', Orders_controller.Orders_detail);
// GET request for list of all Costume items.
router.get('/Orders', Orders_controller.Orders_list);
module.exports = router;