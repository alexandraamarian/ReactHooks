import React, { useState, useEffect, useRef, useCallback } from "react";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("typescript", typescript);

function UseCallback() {
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

  const [count, setCount] = useState(0);

  const memoizedCallback = useCallback(() => {
    alert(`Current count is ${count}`);
  }, [count]);

  return (
    <div className="max-w-full ml-2 p-6 bg-white shadow-md">
      <h1 className="font-bold text-3xl text-gray-800 mb-6">useCallback</h1>
      <p className="text-gray-700 mb-8">
        <strong>useCallback</strong> is a React Hook that returns a memoized callback function.
      </p>

      <div className="mb-8 mt-8">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Playground</h2>
        <p className="text-gray-700 mb-2">
          This example demonstrates memoizing a callback function using <strong>useCallback</strong>:
        </p>
        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={() => setCount((prevCount) => prevCount + 1)}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Increase
          </button>
          <button
            onClick={memoizedCallback}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Show Alert
          </button>
        </div>
        <pre className="rounded-md p-2 bg-gray-100">
          <code ref={codeRefPlayground} className="language-typescript">
            {`import React, { useState, useCallback } from "react";

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const memoizedCallback = useCallback(() => {
    alert(\`Current count is \${count}\`);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={memoizedCallback}>
        Show Alert
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
            {`const memoizedCallback = useCallback(callback, dependencies);`}
          </code>
        </pre>
      </div>

      <div className="mb-8">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Reference Example</h2>
        <p className="text-gray-700 mb-2">
          Call <strong>useCallback</strong> at the top level of your component to memoize a callback function:
        </p>
        <pre className="rounded-md p-4 bg-gray-100">
          <code ref={codeRefReference} className="language-typescript">
            {`
import React, { useState, useCallback } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  const memoizedCallback = useCallback(() => {
    console.log(\`Clicked \${count} times\`);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={memoizedCallback}>
        Log Click
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
            <strong>callback: </strong> The function that you want to memoize.
          </li>
          <li>
            <strong>dependencies: </strong> An array of dependencies. The callback will only be updated when one of the dependencies has changed.
          </li>
        </ul>
      </div>
      
      <div>
        <h2 className="font-bold text-xl text-gray-800 mb-4">Returns</h2>
        <p className="text-gray-700 mb-2">
          <strong>useCallback</strong> returns the memoized callback function.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-xl text-gray-800 mb-4 mt-4">Caveats</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>useCallback</strong> is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
          </li>
          <li>
            Ensure that you specify all dependencies that are used within the callback function. Missing dependencies can lead to bugs.
          </li>
          <li>
            Avoid creating a new callback function within the <strong>useCallback</strong> hook. Always wrap the existing callback function with the hook.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UseCallback;
