import Index from "@/pages";
import { ColorModeProvider } from "@/context/mode/ColorModeContext";

function App() {
  return (
    <ColorModeProvider>
      <Index />
    </ColorModeProvider>
  );
}

export default App;
