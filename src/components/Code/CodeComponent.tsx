import { useEffect } from "react";
import Prism from "prismjs";
import "./CodeComponent.css"

type proptypes={
  code:string
}
const CodeComponent = ({code}:proptypes) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre className="border border-gray-600 rounded-xl">
      <code className={`language-javascript`}>{code}</code>
    </pre>
  )
}

export default CodeComponent
