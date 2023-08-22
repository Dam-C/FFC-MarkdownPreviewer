import { MarkdownInput, MarkdownPreview } from "./components/_compIndex";
import "./App.css";

const App = () => {
  return (
    <main className="markdown-wrapper">
      <MarkdownInput />
      <MarkdownPreview />
    </main>
  );
};

export default App;
