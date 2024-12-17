import Button from "../button/Button";
import styles from "./ensembleListPost.module.css";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

// API URL
const baseUrl = "http://localhost:3000";

type PostElements = {
  name: string;
  size: string;
  city: string;
  genre: string;
  _id: string;
};

type DecodedToken = {
  fullName: string;
  email: string;
  ensembleIds: string[];
  createdAt: string;
  id: string;
};

type Userjoining = {
  fullName: string;
  id: string;
};

export default function EnsembleListPost({
  name,
  size,
  city,
  genre,
  _id,
}: PostElements) {
  const token = localStorage.getItem("access_token");
  // default values
  let decodedToken: DecodedToken = {
    fullName: "Henter navn",
    email: "example@email.com",
    ensembleIds: [],
    createdAt: "Henter dato",
    id: "",
  };

  if (token) {
    try {
      decodedToken = jwtDecode<DecodedToken>(token);
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  }

  const userJoining = {
    fullName: decodedToken.fullName,
    id: decodedToken.id,
  };

  function handleJoinEnsemble() {
    console.log(
      `I want to join the ensemble with the id ${_id} and name ${name}`
    );
    console.log(userJoining);
    mutation.mutate({ id: userJoining.id, fullName: userJoining.fullName });
  }

  const mutation = useMutation<VideoDecoder, Error, Userjoining>({
    mutationFn: (updateEnsemble) => {
      return axios.patch(`${baseUrl}/ensembles/${_id}`, updateEnsemble, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onError: (error) => {
      console.error("Error joining ensemble:", error);
    },
    onSuccess: () => {
      console.log("Successfully joined ensemble");
    },
  });

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
          <Button
            buttonText="Tilmeld dig"
            variant="smallPrimary"
            onClick={handleJoinEnsemble}
          ></Button>
        </div>
      </div>
      <div className={styles.bottomBox}></div>
    </div>
  );
}
