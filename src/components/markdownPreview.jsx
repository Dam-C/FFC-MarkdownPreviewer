import { useDispatch, useSelector } from "react-redux";
import { toggleInput } from "../redux/windowsSlice";
import ReactMarkdown from "react-markdown";

const MarkdownPreview = () => {
  const dispatch = useDispatch();
  const global = useSelector((state) => state.windows);
  const md = useSelector((state) => state.input);

  return (
    <section
      className={
        global.preview === true ? "preview-wrapper" : "preview-wrapper hide"
      }
    >
      <div className="preview-top">
        <h2 className="top-title">preview</h2>
        <i className="hide-cross" onClick={() => dispatch(toggleInput())}>
          X
        </i>
      </div>
      <ReactMarkdown className="preview">{md.markdown}</ReactMarkdown>
    </section>
  );
};

export default MarkdownPreview;
