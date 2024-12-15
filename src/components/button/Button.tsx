import styles from "./button.module.css";

type ButtonProps = {
  buttonText: string;
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "disabled"
    | "noOutline"
    | "smallPrimary"
    | "smallSecondary";
};

export default function Button({ buttonText, variant }: ButtonProps) {
  const buttonClass = styles[variant] || styles.primary;
  return (
    <button className={buttonClass}>
      <p>{buttonText}</p>
    </button>
  );
}
