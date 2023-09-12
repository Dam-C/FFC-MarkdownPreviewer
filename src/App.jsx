import { MarkdownInput, MarkdownPreview } from "./components/_compIndex";
import "./App.css";

const App = () => {
  return (
    <main className="markdown-wrapper">
      <MarkdownInput />
      <MarkdownPreview />
      <h4 className="creator">by Damien Charlois</h4>
    </main>
  );
};

export default App;
