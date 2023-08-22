import { useDispatch, useSelector } from "react-redux";
import { togglePreview } from "../redux/windowsSlice";

const MarkdownInput = () => {
  const text =
    "# Welcome to my React Markdown Previewer! ## This is a sub-heading...";
  const dispatch = useDispatch();
  const global = useSelector((state) => state.windows);
  const mdInput = useSelector((state) => state.input);

  return (
    <section
      className={
        global.input === true ? "editor-wrapper" : "editor-wrapper hide"
      }
    >
      <div className="editor-top">
        <h2 className="top-title">editor</h2>
        <i className="hide-cross" onClick={() => dispatch(togglePreview())}>
          X
        </i>
      </div>
      <textarea
        id="editor"
        className="editor-box"
        defaultValue={mdInput.markdown}
      ></textarea>
    </section>
  );
};

export default MarkdownInput;
