import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Geocode from "react-geocode";
import apiInstance from "../config/AxiosInstance";
const config = {
    headers: {
        "content-type": "multipart/form-data",
    },
};
const lat = localStorage.getItem("lat");
const lng = localStorage.getItem("lng");
export const GetUserLoction = createAsyncThunk(
    "userLoction/GetUserLoction",
    async () => {
        let result = await axios
            .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBR962qKrR2IwdYUmk8J4diZVZuV_L9pWw`)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error.response;
            });
        console.log('response', result);
        return result;
    }
);