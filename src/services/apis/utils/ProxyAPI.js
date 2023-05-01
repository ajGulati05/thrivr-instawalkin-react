import axios from "axios";
import apiConfig from "../apiConfig";
import { getAccessToken } from "./Storage";
import { responseCodes } from "../../../constants/global";
import Authentication from "../../authentication";
const Auth = new Authentication();
export default class ProxyAPI {
  constructor(defaultToken = false) {
    var showErrors = false;
    this.instance = axios.create({
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.instance.interceptors.request.use(config => {
      let token = defaultToken || getAccessToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      if(config.url=='/api/login')
      {
        showErrors=true;

      }
      return config;
    });
    this.instance.interceptors.response.use(
      response => {
        return response;
      },
      data => {
        if (data && data.response && data.response.status) {

          if (data.response.status == responseCodes["401"] && !showErrors) {

            Auth.clearAll();
          }
        }
        return Promise.reject(data.response);
      }
    );
  }

  callApi({ method = "get", ...rest }) {
    return this.instance({ method, ...rest });
  }
}
