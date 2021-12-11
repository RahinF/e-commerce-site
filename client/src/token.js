import jwt from "jsonwebtoken";

export const getToken = () => localStorage.getItem("token");


export const decodeToken = (token) =>  jwt.decode(token);

