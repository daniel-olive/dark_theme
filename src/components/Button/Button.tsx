import { useTheme } from "../../Contexts/ThemeContexts";

type Props = {
    label: string;
    onClick: () => void;
};
export const Button = ({ label, onClick }: Props) => {
    const ctxTheme = useTheme();
    return (
        <button
            onClick={onClick}
            className={`p-2 m-2 rounded-md bg-black text-white font-semibold
                ${ctxTheme?.theme === "dark" ? "bg-white text-black" : "bg-black text-white"}`}
        >
            {label}
        </button>
    );
};
