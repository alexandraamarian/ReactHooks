import React, { useState, useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("typescript", typescript);

function UseRef() {
  const codeRefDeclare = useRef<HTMLElement>(null);
  const codeRefReference = useRef<HTMLElement>(null);
  const codeRefPlayground = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRefDeclare.current) {
      hljs.highlightElement(codeRefDeclare.current);
    }
    if (codeRefReference.current) {
      hljs.highlightElement(codeRefReference.current);
    }
    if (codeRefPlayground.current) {
      hljs.highlightElement(codeRefPlayground.current);
    }
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="max-w-full ml-2 p-6 bg-white shadow-md">
      <h1 className="font-bold text-3xl text-gray-800 mb-6">useRef</h1>
      <p className="text-gray-700 mb-8">
        <strong>useRef</strong> is a React Hook that lets you create a mutable object which persists across renders.
      </p>

      <div className="mb-8 mt-8">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Playground</h2>
        <p className="text-gray-700 mb-2">
          This example demonstrates how to use <strong>useRef</strong> to focus an input element:
        </p>
        <div className="flex items-center space-x-4 mb-4">
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Type something..."
          />
          <button
            onClick={handleFocus}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Focus Input
          </button>
        </div>
        <pre className="rounded-md p-2 bg-gray-100">
          <code ref={codeRefPlayground} className="language-typescript">
            {`import React, { useRef, useState } from "react";

function UseRefExample() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  );
}`}
          </code>
        </pre>
      </div>

      <div className="mb-8">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Declaration Example</h2>
        <pre className="rounded-md p-4 bg-gray-100">
          <code ref={codeRefDeclare} className="language-typescript">
            {`const refContainer = useRef(initialValue);`}
          </code>
        </pre>
      </div>

      <div className="mb-8">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Reference Example</h2>
        <p className="text-gray-700 mb-2">
          Call <strong>useRef</strong> at the top level of your component to create a ref object:
        </p>
        <pre className="rounded-md p-4 bg-gray-100">
          <code ref={codeRefReference} className="language-typescript">
            {`
import React, { useRef, useState } from 'react';

function Example() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleClick}>
        Focus Input
      </button>
    </div>
  );
}`}
          </code>
        </pre>
      </div>

      <div className="mb-8">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Parameters</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>initialValue: </strong> The initial value you want the ref object to hold.
          </li>
        </ul>
      </div>
      
      <div>
        <h2 className="font-bold text-xl text-gray-800 mb-4">Returns</h2>
        <p className="text-gray-700 mb-2">
          <strong>useRef</strong> returns a mutable ref object whose <strong>.current</strong> property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-xl text-gray-800 mb-4 mt-4">Caveats</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            The <strong>.current</strong> property of the ref object can be mutated.
          </li>
          <li>
            Using refs to directly manipulate the DOM should be avoided if possible. Instead, try to use state and props.
          </li>
          <li>
            Unlike state, changing a ref does not cause a re-render of your component.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UseRef;
