import styles from "./button.module.css";

type ButtonProps = {
  buttonText: string;
  onClick?: () => void;
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "disabled"
    | "noOutline"
    | "smallPrimary"
    | "smallSecondary";
};

export default function Button({ buttonText, variant, onClick }: ButtonProps) {
  const buttonClass = styles[variant] || styles.primary;
  return (
    <button className={buttonClass} onClick={onClick}>
      <p>{buttonText}</p>
    </button>
  );
}
