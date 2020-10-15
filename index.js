const serverless = require('serverless-http');
const express = require('express')
const bodyParser = require('body-parser');
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const app = express()
const { openModal } = require("./slackHelper");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext())
// app.use(express.json());
app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.post("/slack", async (req, res, next) => {
    try {
        const payload = JSON.parse(req.body.payload);

        if (payload.callback_id === "showModal") {
            await openModal(payload.trigger_id);
        }

        if (payload.type === "view_submission") {
            const { firstNameBlock, lastNameBlock } = payload.view.state.values;

            // save to DB
        }

        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: e.message });
    }
});

module.exports.handler = serverless(app);