var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var solesController = require('../controllers/soles');

  // http://127.0.0.1:3000/soles
  router.route('/soles');

  //GET all soles
  router.get(solesController.getAll);

  //POST a new blob
  router.post(solesController.createSole);

  router.route('/soles/:id');

  // GET return specific Sole
  router.get(solesFrom.kitchen);

  // PATCH update existing Sole
  router.patch(solesController.updateSole);

  // DELETE remove specific Sole from DB
  router.delete(solesController.removeSole);


module.exports = router;