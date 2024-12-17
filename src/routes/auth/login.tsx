import { createFileRoute, useRouter } from "@tanstack/react-router";
import styles from "./auth.module.css";
import Button from "../../components/button/Button";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// API URL
const baseUrl = "http://localhost:3000";

export const Route = createFileRoute("/auth/login")({
  component: LoginComponent,
});

type LoginFormData = {
  email: string;
  password: string;
};

function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const router = useRouter();

  const mutation = useMutation<void, Error, LoginFormData>({
    mutationFn: (loginUser) => {
      return axios.post(`${baseUrl}/auth/login`, loginUser);
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
    onSuccess: (response) => {
      // console.log("Login was a succes", response);

      // access the access_token sent from the backend
      // console.log(response.data.access_token);
      localStorage.setItem("access_token", response.data.access_token);
      router.navigate({ to: "/profile" });
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    mutation.mutate(data);
    // alert("Du er nu logget ind!");
  };

  return (
    <div className={styles.loginContainer}>
      <div>
        <h1 className={styles.loginFormIntro}>
          Log ind for at se, oprette og redigere dine ensembles
        </h1>
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.loginEmail}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Din email"
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
          <div className={styles.loginPassword}>
            <label htmlFor="">Adgangskode</label>
            <input
              type="password"
              id="password"
              placeholder="Din adgangskode"
              {...register("password", { required: "Adgangskode er påkrævet" })}
            />
            {errors.password && (
              <p className={styles.error}>
                {errors.password.message as string}
              </p>
            )}
          </div>
          <Button buttonText="Log ind" variant="primary" type="submit"></Button>
        </form>
      </div>
    </div>
  );
}
