import React, { useState, useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("typescript", typescript);

function UseState() {
  const codeRefDelcare = useRef(null);
  const codeRefReference = useRef(null);
  const codeRefReference2 = useRef(null);

  useEffect(() => {
    if (codeRefDelcare.current) {
      hljs.highlightElement(codeRefDelcare.current);
    }
    if (codeRefReference.current) {
      hljs.highlightElement(codeRefReference.current);
    }
    if (codeRefReference2.current) {
      hljs.highlightElement(codeRefReference2.current);
    }
  }, []);

  const [count, setCount] = useState(0);

  return (
    <div className="max-w-full ml-2 p-6 bg-white shadow-md">
      <h1 className="font-bold text-3xl text-gray-800 mb-6">useState</h1>
      <p className="text-gray-700 mb-8">
        <strong>useState</strong> is a React Hook that lets you add a state variable to your component.
      </p>

      <div className="mb-8">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Playground</h2>
        <p className="text-gray-700 mb-2">
          Try out the <strong>useState</strong> hook:
        </p>
        <div className="grid  grid-cols-2 justify-center items-center space-x-4 mx-20">
          <div className="flex items-center gap-6 ">
            <button
              onClick={() => setCount((prevCount) => prevCount - 1)}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Decrease
            </button>
            <span className="text-2xl font-semibold text-gray-900">{count}</span>
            <button
              onClick={() => setCount((prevCount) => prevCount + 1)}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Increase
            </button>
          </div>
          <div >
            <pre className="rounded-md p-4 bg-gray-100">
              <code ref={codeRefReference2}>
                {`import { useState } from "react";

function UseStateExample() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrease
      </button>
      <span>{count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
    </div>
  );
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Declaration Example</h2>
        <p className="text-gray-700 mb-2">
          Use the following syntax to declare state variables:
        </p>
        <pre className="rounded-md p-4 bg-gray-100">
          <code ref={codeRefDelcare}>
            {`const [state, setState] = useState(initialState);`}
          </code>
        </pre>
      </div>

      <div className="mb-8">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Reference Example</h2>
        <p className="text-gray-700 mb-2">
          Call <strong>useState</strong> at the top level of your component to declare a state variable.
        </p>
        <pre className="rounded-md p-4 bg-gray-100">
          <code ref={codeRefReference}>
            {`
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());
}`}
          </code>
        </pre>
      </div>

      <div className="mb-8">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Parameters</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>initialState:</strong> The initial value of the state variable.
          </li>
          <li>
            If initialState is a function, it will be treated as an initializer function.
            React will call this function during initialization to determine the initial state.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Returns</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>The current state value.</li>
          <li>The setState function to update the state value.</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-xl text-gray-800 mb-4">Caveats</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>useState</strong> can only be called at the top level of your component or custom hooks.
          </li>
          <li>
            In Strict Mode, the initializer function of useState is called twice for development error checking.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UseState;
