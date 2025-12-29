import { useState, useEffect } from "react";
import Editor from "./components/Editor";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const [html, setHtml] = useLocalStorage('html' , '');
  const [js, setJs] = useLocalStorage('js' , '');
  const [css, setCss] = useLocalStorage('css', '');
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    //debouncing effect
  const timeout = setTimeout(() => {
    setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `);
  }, 250);

  return () => {
    clearTimeout(timeout);
  };
}, [html, css, js]);

  
  return (
    <>
      <div className="pane top-pane">
        <Editor
          //
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          //
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          //
          language="javascript"
          displayName="JavaScript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          title="output"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          style={{ border: "none" }}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
