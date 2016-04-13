var express = require('express'), //requires that express is installed as a dependancy
    app = express(), //sets a variable that is using express function and properties
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());




var port = process.env.port || 3000;//sets up the port I am running
var router = express.Router();

router.get('/', function(req, res) {
  res.json({message: 'I got my server to actually run on port ' + port});
})
app.use('/api', router);

app.listen(port, function(req,res){// starts the server when the file is executed
  console.log('Go to localhost:3000/api now that your server is running.')
});
