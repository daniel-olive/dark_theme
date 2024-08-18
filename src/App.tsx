import { ThemeProvider } from "./Contexts/ThemeContexts";
import { Button } from "./components/Button/Button";
import { ButtonThemeSwitch } from "./components/ButtonThemeSwitch/ButtonSwitch";
import { Container } from "./components/Container/Container";

function App() {
    return (
        <ThemeProvider>
            <Container>
                <header className="py-5">
                    <h1>Titulo da Página</h1>
                    <ButtonThemeSwitch />
                </header>
                <section>
                    <p>Conteúdo da  página</p>
                </section>
                <Button
                    label="Clique aqui"
                    onClick={() => {}}
                />
            </Container>
        </ThemeProvider>
    );
}

export default App;
