import { createFileRoute } from "@tanstack/react-router";
import styles from "./auth.module.css";
import Button from "../../components/button/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const LoginSchema = z.object({
  email: z.string().email("Indtast en gylding e-mailadresse"),
  password: z.string().min(6, "Adgangskoden skal være mindst 6 tegn"),
});

type LoginFormData = z.infer<typeof LoginSchema>;

export const Route = createFileRoute("/auth/login")({
  component: LoginComponent,
});

function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Form submitted:", data);
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
              {...register("email")}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.loginPassword}>
            <label htmlFor="">Adgangskode</label>
            <input
              type="password"
              id="password"
              placeholder="Din adgangskode"
              {...register("password")}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>
          <Button buttonText="Log ind" variant="primary" type="submit"></Button>
        </form>
      </div>
    </div>
  );
}
