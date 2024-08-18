import { ReactNode, useContext } from "react";
import { useTheme } from "../../Contexts/ThemeContexts";

type Props = {
    children: ReactNode;
};

export const Container = ({ children }: Props) => {
    const ctxTheme = useTheme();

    return (
        <div
            className={`w-full h-screen
            ${ctxTheme?.theme === "dark"
            ? "bg-black text-white"
            : "bg-white text-black"}`}
        >
            <div className="container mx-auto">
                Tema: {ctxTheme?.theme}
                {children}
            </div>
        </div>
    );
};
