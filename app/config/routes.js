var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var solesController = require('../controllers/soles.js');

  // http://127.0.0.1:3000/soles
  router.route('/soles');

  //GET all soles
  solesController.get('/', solesController.getAll);

  //POST a new blob
  solesController.post(solesController.createSole);

  solesController.route('/soles/:id');

  // GET return specific Sole
  solesController.get(solesFrom.kitchen);

  // PATCH update existing Sole
  solesController.patch(solesController.updateSole);

  // DELETE remove specific Sole from DB
  solesController.delete(solesController.removeSole);


module.exports = router;