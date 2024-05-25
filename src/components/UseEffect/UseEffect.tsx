import React, { useState, useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("typescript", typescript);

function UseEffect() {
  const codeRefDeclare = useRef<HTMLElement>(null);
  const codeRefReference = useRef<HTMLElement>(null);
  const codeRefPlayground = useRef<HTMLElement>(null);
  const [count, setCount] = useState(0);


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

  useEffect(() => {
    if (count === 0) return;
    alert(`You clicked ${count} time/s`);
  }, [count]);

  return (
    <div className="max-w-full ml-2 p-6 bg-white shadow-md">
      <h1 className="font-bold text-3xl text-gray-800 mb-6">useEffect</h1>
      <p className="text-gray-700 mb-8">
        <strong>useEffect</strong> is a React Hook that lets you synchronize a
        component with an external system.
      </p>

      <div className="mb-8 mt-8">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Playground</h2>
        <p className="text-gray-700 mb-2">
          This example demonstrates sending an alert message when the button is
          clicked:
        </p>
        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Increase
          </button>
        </div>
        <pre className="rounded-md p-2 bg-gray-100">
          <code ref={codeRefPlayground} className="language-typescript">
            {`import React, { useState, useEffect } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(\`You clicked \${count} time/s\`);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <span>{\`You clicked \${count} times\`}</span>
    </div>
  );
}`}
          </code>
        </pre>
      </div>

      <div className="mb-8">
        <h2 className="font-bold text-xl text-gray-800 mb-4">
          Declaration example
        </h2>
        <pre className="rounded-md p-4 bg-gray-100">
          <code ref={codeRefDeclare} className="language-typescript">
            {`useEffect(setup, dependencies?)`}
          </code>
        </pre>
      </div>

      <div className="mb-8">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Parameters</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>setup: </strong> The function with your Effect’s logic. Your setup function may also optionally return a cleanup function. When your component is added to the DOM, React will run your setup function. After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. After your component is removed from the DOM, React will run your cleanup function.
          </li>
          <li>
            <strong>optional dependencies: </strong> The list of all reactive values referenced inside of the setup code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison. If you omit this argument, your Effect will re-run after every re-render of the component.
          </li>
        </ul>
      </div>
      
      <div>
        <h2 className="font-bold text-xl text-gray-800 mb-4">Returns</h2>
        <p className="text-gray-700 mb-2">
          Call <strong>useEffect</strong> returns <strong>undefined</strong>.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-xl text-gray-800 mb-4 mt-4">Caveats</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            Side effects performed inside useEffect should be carefully managed
            to avoid unintended behavior or performance issues.
          </li>
          <li>
            Be mindful of the dependencies array in useEffect. Omitting
            dependencies or providing an empty array when dependencies are
            required can lead to bugs.
          </li>
          <li>
            useEffect is a Hook, so you can only call it at the top level of
            your component or your own Hooks. You can’t call it inside loops or
            conditions. If you need that, extract a new component and move the
            state into it.
          </li>
          <li>
            If some of your dependencies are objects or functions defined inside
            the component, there is a risk that they will cause the Effect to
            re-run more often than needed. To fix this, remove unnecessary
            object and function dependencies. You can also extract state updates
            and non-reactive logic outside of your Effect.
          </li>
          <li>
            Effects only run on the client. They don’t run during server
            rendering.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UseEffect;
