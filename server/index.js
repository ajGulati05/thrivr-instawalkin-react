//this will only be used for refresh and login

const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const axios = require("axios");

const defaultAddOnParams = {
  scope: "*",
  customProvider: "managersapi",
  client_id: process.env.REACT_APP_CLIENT_ID,
  client_secret: process.env.REACT_APP_CLIENT_SECRET
};
const app = express();

app.use(bodyParser.json());
app.use(pino);

app.post("/proxy/login", (req, res) => {
  axios
    .post(
      BASE_URL + "/therapist/login",
      {
        ...req.body,
        ...defaultAddOnParams
      },
      {
        headers: {
          "content-type": "application/json",
          accept: "application/json"
        }
      }
    )
    .then(response => {
      return res.status(response.status).json({ ...response.data });
    })
    .catch(e => {
      if (e.response.data) {
        return res.status(e.response.status).json({ ...e.response.data });
      }
      return res.status(200).json({ status: false, errors: "Internal Server Error" });
    });
});

app.post("/proxy/refresh", (req, res) => {
  axios
    .post(
      BASE_URL + "/therapist/refresh",
      {
        ...req.body,
        ...defaultAddOnParams
      },
      {
        headers: {
          "content-type": "application/json",
          accept: "application/json"
        }
      }
    )
    .then(response => {
      return res.status(response.status).json({ ...response.data });
    })
    .catch(e => {
      if (e.response.data) {
        return res.status(e.response.status).json({ ...e.response.data });
      }
      return res.status(200).json({ status: false, errors: "Internal Server Error" });
    });
});


app.listen(3001, () => console.log("Express server is running on localhost:3001"));

