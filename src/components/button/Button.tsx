import styles from "./button.module.css";

type ButtonProps = {
  buttonText: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "disabled"
    | "noOutline"
    | "smallPrimary"
    | "smallSecondary";
};

export default function Button({
  buttonText,
  variant,
  onClick,
  type = "button",
}: ButtonProps) {
  const buttonClass = styles[variant] || styles.primary;
  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      <p>{buttonText}</p>
    </button>
  );
}
