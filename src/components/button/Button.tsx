import styles from "./button.module.css";

// Type for the buttons props
// this will give access to auto-complete and type checking when using the button component in another component
type ButtonProps = {
  buttonText: string;
  // onClick function is optional
  onClick?: () => void;
  // type is optional and can be one of the three values
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
