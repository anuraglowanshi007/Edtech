// import axios from "axios";
// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//   return axiosInstance({
//     method: `${method}`,
//     url: `${process.env.REACT_APP_BASE_URL}${url}`,
//     data: bodyData ? bodyData : null,
//     headers: headers ? headers : null,
//     params: params ? params : null,
//   });
// };
import axios from "axios";

// Create an axios instance with the base URL
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// Function to handle API requests
export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method,
    url,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};
