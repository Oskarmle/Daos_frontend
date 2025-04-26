import { redirect } from "@tanstack/react-router";
// import {jwtDecode} from "jwt-decode";

export function tokenVerification() {
  // Access the token from local storage
  const token = localStorage.getItem("access_token");

  // If the token is not in localStorage, it will redirect to login page
  if (!token) {
    throw redirect({ to: "/auth/login" });
  }
}
