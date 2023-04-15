// import { useState, useEffect, useContext } from 'react';
import jwtDecode from "jwt-decode";

export default function useAuthListener() {
  let userId, jwt;

  try {
    jwt = localStorage.getItem("token");
    userId = jwtDecode(jwt).data.user.id;
  } catch (error) {
    userId = null;
  }

  return { userId, jwt };
}
