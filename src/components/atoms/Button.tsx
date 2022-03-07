import "../../styles/Button.css";

export const Button = ({ id, label }: { id: string, label: string }) => (
    <button className="Button" id={id}>{label}</button>
)