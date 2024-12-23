import { redirect } from "@tanstack/react-router";
// import {jwtDecode} from "jwt-decode";

export function tokenVerification() {
  const token = localStorage.getItem("access_token");

  if (!token) {
    throw redirect({ to: "/auth/login" });
  }
}
