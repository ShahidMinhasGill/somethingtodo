import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiInstance from "../config/AxiosInstance";
const config = {
    headers: {
        "content-type": "multipart/form-data",
    },
};

export const GetUserLoction = createAsyncThunk(
    "userLoction/GetUserLoction",
    async () => {
        const lat = localStorage.getItem("lat");
        const lng = localStorage.getItem("lng");
        // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBR962qKrR2IwdYUmk8J4diZVZuV_L9pWw
        let result = await axios
            .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},-${lng}&key=AIzaSyBR962qKrR2IwdYUmk8J4diZVZuV_L9pWw`)
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