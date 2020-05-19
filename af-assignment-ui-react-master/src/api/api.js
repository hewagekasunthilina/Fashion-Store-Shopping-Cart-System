/*
 * Create an instance of axios that contains are main config,
 * such as base hostname/URL.
 * Import this as axios, but from api/api.
 * DO:- import axios from "./api/api" (Adjust the path based on where you are).
 */
import axios from "axios";

export default axios.create({
  baseURL: "http://18.141.11.75:3001/",
  responseType: "json"
});
