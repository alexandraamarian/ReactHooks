import React, { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/atom-one-dark.css";

function UseState() {
  const codeRefDelcare = useRef<HTMLElement>(null);
  const codeRefReference = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRefDelcare.current) {
      hljs.highlightBlock(codeRefDelcare.current);
    }
    if (codeRefReference.current) {
      hljs.highlightBlock(codeRefReference.current);
    }
  }, []);

  hljs.registerLanguage("typescript", typescript);
  return (
    <div className="flex flex-col pl-4 pt-4 overflow-auto">
      <h1 className="font-bold text-2xl">useState</h1>
      <span className="pl-4">
        useState is a React Hook that lets you add a state variable to your
        component.
      </span>
      <pre className="pl-12 pt-5 pb-5 pr-12">
        <code ref={codeRefDelcare} >
          const [state, setState] = useState(initialState)
        </code>
      </pre>
      <h2 className="font-bold text-xl">Reference</h2>
      <span className="pl-4">
        Call useState at the top level of your component to declare a state
        variable.
      </span>
      <pre className="pl-12 pt-5 pb-5 pr-12" >
        <code ref={codeRefReference}>
          {`
import { useState } from 'react';

    function MyComponent() {
        const [age, setAge] = useState(28);
        const [name, setName] = useState('Taylor');
        const [todos, setTodos] = useState(() => createTodos());}
        `}
        </code>
      </pre>
      <span className="pl-4">
      The convention is to name state variables like [something, setSomething] using array destructuring.
      </span>

    </div>
  );
}

export default UseState;
