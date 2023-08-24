import { useDispatch, useSelector } from "react-redux";
import { togglePreview } from "../redux/windowsSlice";
import { updateInput } from "../redux/inputSlice";

const MarkdownInput = () => {
  const dispatch = useDispatch();
  const global = useSelector((state) => state.windows);
  const mdInput = useSelector((state) => state.input);
  const handleInputChange = (event) => {
    const newInput = event.target.value;

    dispatch(updateInput(newInput));
  };

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
        onChange={handleInputChange}
        value={mdInput.markdown}
      />
    </section>
  );
};

export default MarkdownInput;
