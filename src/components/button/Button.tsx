import { ButtonProps } from "../../types/types";
import styles from "./button.module.css";

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
