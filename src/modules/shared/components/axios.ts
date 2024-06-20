import { getAuth } from "@/modules/auth/util/auth-storage";
import * as Axios from "axios";
import qs from "qs";

const axios = Axios.default.create({
  baseURL: "http://localhost:3000",
  paramsSerializer: (params) => qs.stringify(params),
});

axios.interceptors.request.use((request) => {
  const authInfo = getAuth();

  if (authInfo && !request.headers.Authorization) {
    request.headers.Authorization = `Bearer ${authInfo.token}`;
  }

  return request;
});

export default axios;
