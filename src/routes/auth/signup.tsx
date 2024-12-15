import { createFileRoute } from "@tanstack/react-router";
import styles from "./auth.module.css";
import Button from "../../components/button/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// using zod for validation
const SignupSchema = z.object({
  name: z.string().min(5, "Dit fulde navn er påkrævet"),
  email: z.string().email("Indtast en gylding e-mailadresse"),
  password: z
    .string()
    .min(6, "Adgangskoden skal være mindst 6 tegn")
    .max(20, "Adgangskoden må ikke overstige 20 tegn"),
  terms: z.boolean().refine((val) => val, "Du skal acceptere betingelserne"),
  newsletter: z.boolean().optional(),
});

// TypeScript type inference from Zod schema
type SignupFormData = z.infer<typeof SignupSchema>;

export const Route = createFileRoute("/auth/signup")({
  component: SignupComponent,
});

function SignupComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className={styles.signupContainer}>
      <div>
        <h1 className={styles.signupFormIntro}>
          Log ind for at se, oprette og redigere dine ensembles
        </h1>
        <form className={styles.signupForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.signupName}>
            <label htmlFor="name">Fulde navn</label>
            <input
              type="text"
              id="name"
              placeholder="Dit navn her..."
              {...register("name")}
            />
            {errors.name && (
              <p className={styles.error}>{errors.name.message}</p>
            )}
          </div>
          <div className={styles.signupEmail}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Din email..."
              {...register("email")}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.signupPassword}>
            <label htmlFor="password">Adgangskode</label>
            <input
              type="password"
              id="password"
              placeholder="Din kode..."
              {...register("password")}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" id="terms" {...register("terms")} />
            <label htmlFor="terms">Jeg accepterer betingelserne*</label>
            {errors.terms && (
              <p className={styles.error}>{errors.terms.message}</p>
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
