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
    <div className="flex flex-col pl-4 pt-4 bg-slate-200">
      <h1 className="font-bold text-2xl text-[#1f2937]">useState</h1>
      <span className="pl-4 ">
        useState is a React Hook that lets you add a state variable to your
        component.
      </span>
      <pre className="pl-12 pt-5 pb-5 pr-12">
        <code ref={codeRefDelcare}>
          const [state, setState] = useState(initialState)
        </code>
      </pre>
      <h2 className="font-bold text-xl text-[#1f2937]">Reference</h2>
      <span className="pl-4 ">
        Call useState at the top level of your component to declare a state
        variable.
      </span>
      <pre className="pl-12 pt-5 pb-5 pr-12">
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
        The convention is to name state variables like [something, setSomething]
        using array destructuring.
      </span>
      <h2 className="font-bold text-xl text-[#1f2937] pb-2 pt-2">
        Parameters{" "}
      </h2>
      <div>
        <li>
          initialState: The value you want the state to be initially. It can be
          a value of any type, but there is a special behavior for functions.
          This argument is ignored after the initial render.
        </li>
        <li>
          If you pass a function as initialState, it will be treated as an
          initializer function. It should be pure, should take no arguments, and
          should return a value of any type. React will call your initializer
          function when initializing the component, and store its return value
          as the initial state.
        </li>
      </div>
      <h2 className="font-bold text-xl text-[#1f2937] pb-2 pt-2">Returns </h2>
      <span className="pl-4">
        useState returns an array with exactly two values:
      </span>

      <li>
        The current state. During the first render, it will match the
        initialState you have passed.
      </li>
      <li>
        The set function that lets you update the state to a different value and
        trigger a re-render.
      </li>
      <h2 className="font-bold text-xl text-[#1f2937] pb-2 pt-2">
        Caveats Caveats{" "}
      </h2>
      <li>
        useState is a Hook, so you can only call it at the top level of your
        component or your own Hooks. You can’t call it inside loops or
        conditions. If you need that, extract a new component and move the state
        into it.
      </li>
      <li>
        In Strict Mode, React will call your initializer function twice in order
        to help you find accidental impurities. This is development-only
        behavior and does not affect production. If your initializer function is
        pure (as it should be), this should not affect the behavior. The result
        from one of the calls will be ignored.
      </li>
    </div>
  );
}

export default UseState;
