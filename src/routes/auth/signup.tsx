import { createFileRoute } from "@tanstack/react-router";
import styles from "./auth.module.css";
import Button from "../../components/button/Button";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SignupFormData } from "../../types/types";

// API URL
const baseUrl = "http://localhost:5000";

export const Route = createFileRoute("/auth/signup")({
  component: SignupComponent,
});

function SignupComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  const mutation = useMutation<void, Error, SignupFormData>({
    mutationFn: (newUser) => {
      return axios.post(`${baseUrl}/auth/signup`, newUser);
    },
    onError: (error) => {
      console.error("Signup failed", error);
    },
    onSuccess: (response) => {
      // console.log('Signup was succesfull', data);
      console.log("Signup was succesfull", response);
    },
  });

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div className={styles.signupContainer}>
      <div>
        <h1 className={styles.signupFormIntro}>
          Log ind for at se, oprette og redigere dine ensembles
        </h1>
        <form className={styles.signupForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.signupName}>
            <label htmlFor="fullName">Fulde navn</label>
            <input
              type="text"
              id="fullName"
              placeholder="Dit navn her..."
              {...register("fullName", { required: "Fulde navn er påkrævet" })}
            />
            {errors.fullName && (
              <p className={styles.error}>
                {errors.fullName.message as string}
              </p>
            )}
          </div>
          <div className={styles.signupEmail}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Din email..."
              {...register("email", {
                required: "E-mail er påkrævet",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Ugyldig email",
                },
              })}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message as string}</p>
            )}
          </div>
          <div className={styles.signupPassword}>
            <label htmlFor="password">Adgangskode</label>
            <input
              type="password"
              id="password"
              placeholder="Din kode..."
              {...register("password", { required: "Adgangskode er påkrævet" })}
            />
            {errors.password && (
              <p className={styles.error}>
                {errors.password.message as string}
              </p>
            )}
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="terms"
              {...register("terms", {
                required: "Du skal acceptere betingelserne",
              })}
            />
            <label htmlFor="terms">Jeg accepterer betingelserne*</label>
            {errors.terms && (
              <p className={styles.error}>{errors.terms.message as string}</p>
            )}
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="newsletter"
              {...register("newsletter")}
            />
            <label htmlFor="newsletter">Tilmeld mig DAOS' nyhedsbrev</label>
          </div>
          <Button buttonText="Opret profil" variant="primary" type="submit" />
        </form>
      </div>
    </div>
  );
}
