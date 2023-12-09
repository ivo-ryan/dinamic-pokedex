import { ThemeProvider } from "./context";
import { Global } from "./pages/home/style";
import { Router } from "./router";


function App() {
  return (
    <ThemeProvider>
      <Global/>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
