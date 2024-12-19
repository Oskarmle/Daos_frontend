import Button from "../button/Button";
import styles from "./ensembleListPost.module.css";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

//Import types
import {
  DecodedToken,
  PostElements,
  RegisteredUsersPayload,
} from "../../types/types";

// API URL
const baseUrl = "http://localhost:3000";

export default function EnsembleListPost({
  name,
  size,
  city,
  genre,
  _id,
  registeredUsers,
}: PostElements) {
  const token = localStorage.getItem("access_token");
  // default values
  let decodedToken: DecodedToken = {
    fullName: "",
    email: "",
    ensembleIds: [],
    createdAt: "",
    id: "",
  };


  // Decoding the token
  if (token) {
    try {
      decodedToken = jwtDecode<DecodedToken>(token);
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  }

  // User joining the ensemble, data from token
  const userJoining = {
    fullName: decodedToken.fullName,
    id: decodedToken.id,
  };

  function handleJoinEnsemble() {
    console.log(userJoining);
    mutation.mutate({ registeredUsers: [userJoining] });
  }

  const mutation = useMutation<VideoDecoder, Error, RegisteredUsersPayload>({
    mutationFn: (updateEnsemble) => {
      return axios.patch(`${baseUrl}/ensembles/${_id}`, updateEnsemble, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onError: (error) => {
      console.error("Error joining ensemble:", error);
    },
    onSuccess: () => {
      console.log("Successfully joined ensemble");
    },
  });

  // check if the user is already registered in the array
  const isUserInEnsemble = registeredUsers?.some(
    (user) => user.id === decodedToken.id
  );

  return (
    <div className={styles.ensembleListPostContainer}>
      <div>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.sizeCityContainer}>
          <p className={styles.size}>{`Størrelse på ensemble: ${size}`}</p>
          <p className={styles.city}>{`Vi spiller i ${city}`}</p>
          <p className={styles.genre}>{`Vores genre er ${genre}`}</p>
        </div>
        <div className={styles.buttonContainer}>
          {token && !isUserInEnsemble && (
            <Button
              buttonText="Tilmeld dig"
              variant="smallPrimary"
              onClick={handleJoinEnsemble}
            ></Button>
          )}
        </div>
      </div>
      <div className={styles.bottomBox}></div>
    </div>
  );
}
