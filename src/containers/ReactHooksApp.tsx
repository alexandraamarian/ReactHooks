import React from "react";
import SidebarComponent from "../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import UseState from "../components/UseState/UseState";
import UseEffect from "../components/UseEffect/UseEffect";
import UseCallback from "../components/UseCallback/UseCallback";
import UseRef from "../components/UseRef/UseRef";

function ReactHooksApp() {
  const isUseStateClicked = useSelector(
    (state: RootState) => state.sidebar.isUseStateClicked
  );

  const isUseEffectClicked = useSelector(
    (state: RootState) => state.sidebar.isUseEffectClicked
  );

  const isUseCallbackClicked = useSelector(
    (state: RootState) => state.sidebar.isUseCallbackClicked
  );

  const isUseRefClicked = useSelector(
    (state: RootState) => state.sidebar.isUseRefClicked
  );

  return (
    <div className="flex flex-row">
      <SidebarComponent />

      <div className={`w-screen overflow-auto ${isUseStateClicked || isUseEffectClicked || isUseCallbackClicked || isUseRefClicked ? 'bg-[#6227ca]' : 'bg-white'} `}>
        {isUseStateClicked && <UseState />}
        {isUseEffectClicked && <UseEffect />}
        {isUseCallbackClicked && <UseCallback />}
        {isUseRefClicked && <UseRef />}
      </div>
    </div>
  );
}
export default ReactHooksApp;
