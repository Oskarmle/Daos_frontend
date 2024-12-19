import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { tokenVerification } from "../../auth/authGuard";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import styles from "./ensemble.module.css";
import Button from "../../components/button/Button";
import { CreateEnsembleFormData, DecodedToken } from "../../types/types";

// API URL
const baseUrl = "http://localhost:5000";

export const Route = createFileRoute("/ensemble/create")({
  component: CreateEnsembleComponent,
  beforeLoad: tokenVerification,
});

// Dropdown options
const activeMusiciansOptions = ["1-4", "5-9", "10-24", "25-49", "50+"];
const practiceTypeOptions = ["continuous", "project_based"];
const practiceFrequencyOptions = [
  "daily",
  "weekly",
  "bi-weekly",
  "monthly",
  "bi-monthly",
];
const genreOptions = [
  "baroque",
  "folk",
  "chamber",
  "romantic",
  "late-modern",
  "late-romantic",
  "symphonic",
];

function CreateEnsembleComponent() {
  const token = localStorage.getItem("access_token");
  // default values
  let decodedToken: DecodedToken = {
    fullName: "",
    email: "",
    ensembleIds: [],
    createdAt: "",
    id: "",
  };

  if (token) {
    try {
      decodedToken = jwtDecode<DecodedToken>(token);
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateEnsembleFormData>();

  const mutation = useMutation<void, Error, CreateEnsembleFormData>({
    mutationFn: (newEnsemble) => {
      if (!token) {
        console.error("No token found");
      }
      return axios.post(`${baseUrl}/ensembles`, newEnsemble, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onError: (error) => {
      console.error("Failed creating ensemble", error);
    },
    onSuccess: (response) => {
      // console.log('Signup was succesfull', data);
      console.log("Successfully created the ensemble", response);
    },
  });

  const onSubmit = (data: CreateEnsembleFormData) => {
    const newEnsemble = {
      ...data,
      registeredUsers: [
        {
          fullName: decodedToken.fullName,
          id: decodedToken.id,
        },
      ],
    };
    console.log(newEnsemble);
    mutation.mutate(newEnsemble);
  };

  return (
    <div className={styles.signupContainer}>
      <div>
        <h1 className={styles.header}>Opret dit egen ensemble</h1>
        <form className={styles.signupForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.signupName}>
            <label htmlFor="name">Fulde enesmble navn</label>
            <input
              type="text"
              id="name"
              placeholder="Dit ensemble navn her..."
              {...register("name", { required: "Ensemble navn er påkrævet" })}
            />
            {errors.name && (
              <p className={styles.error}>{errors.name.message as string}</p>
            )}
          </div>
          <div className={styles.signupName}>
            <label htmlFor="description">Beskriv dit ensemble</label>
            <input
              type="text"
              id="description"
              placeholder="Hvad laver dit ensemble"
              {...register("description", {
                required: "Ensemble beskrivelse er påkrævet",
              })}
            />
            {errors.description && (
              <p className={styles.error}>
                {errors.description.message as string}
              </p>
            )}
          </div>
          <div className={styles.signupName}>
            <label htmlFor="website">Ensemble hjemmeside</label>
            <input
              type="text"
              id="website"
              placeholder="Ensembles hjemmeside"
              {...register("website", {
                required: "Ensemble hjemmeside er påkrævet",
              })}
            />
            {errors.website && (
              <p className={styles.error}>{errors.website.message as string}</p>
            )}
          </div>
          <div className={styles.signupName}>
            <label htmlFor="zipCode">Beskriv dit ensemble</label>
            <input
              type="text"
              id="zipCode"
              placeholder="Ensembles postnummer"
              {...register("zipCode", {
                required: "Ensemble postnummer er påkrævet",
              })}
            />
            {errors.zipCode && (
              <p className={styles.error}>{errors.zipCode.message as string}</p>
            )}
          </div>
          <div className={styles.signupName}>
            <label htmlFor="city">Beskriv dit ensemble</label>
            <input
              type="text"
              id="city"
              placeholder="Ensembles by"
              {...register("city", { required: "Ensemble by er påkrævet" })}
            />
            {errors.city && (
              <p className={styles.error}>{errors.city.message as string}</p>
            )}
          </div>
          <div className={styles.signupName}>
            <label htmlFor="activeMusicians">
              Hvor mange aktive musikere er der i dit ensemble
            </label>
            <Dropdown
              options={activeMusiciansOptions}
              onChange={(option) => setValue("activeMusicians", option.value)}
              placeholder="Vælg aktive musikere"
            ></Dropdown>
            {errors.activeMusicians && (
              <p className={styles.error}>
                {errors.activeMusicians.message as string}
              </p>
            )}
          </div>
          <div className={styles.signupName}>
            <label htmlFor="practiceFrequency">Hvor ofte øver i?</label>
            <Dropdown
              options={practiceFrequencyOptions}
              onChange={(option) => setValue("practiceFrequency", option.value)}
              placeholder="ugentligt eller..?"
            ></Dropdown>
            {errors.practiceFrequency && (
              <p className={styles.error}>
                {errors.practiceFrequency.message as string}
              </p>
            )}
          </div>
          <div className={styles.signupName}>
            <label htmlFor="practiceType">
              Er ensembles projektbaseret eller kontinuerligt?
            </label>
            <Dropdown
              options={practiceTypeOptions}
              onChange={(option) => setValue("practiceType", option.value)}
              placeholder="projektbaseret eller kontinuerligt"
            ></Dropdown>
            {errors.practiceType && (
              <p className={styles.error}>
                {errors.practiceType.message as string}
              </p>
            )}
          </div>
          <div className={styles.signupName}>
            <label htmlFor="genre">Hvilken genre spiller dit ensemble? </label>
            <Dropdown
              options={genreOptions}
              onChange={(option) => setValue("genre", option.value)}
              placeholder="Genre"
            ></Dropdown>
            {errors.genre && (
              <p className={styles.error}>{errors.genre.message as string}</p>
            )}
          </div>
          <Button buttonText="Opret ensemble" variant="primary" type="submit" />
        </form>
      </div>
    </div>
  );
}
