import React from "react";
import SidebarComponent from "../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import UseState from "../components/UseState/UseState";
import UseEffect from "../components/UseEffect/UseEffect";

function ReactHooksApp() {
  const isUseStateClicked = useSelector(
    (state: RootState) => state.sidebar.isUseStateClicked
  );
  const isUseEffectClicked = useSelector(
    (state: RootState) => state.sidebar.isUseEffectClicked
  );
  return (
    <div className="flex flex-row">
          <SidebarComponent />

      <div className={`w-screen overflow-auto ${isUseStateClicked||isUseEffectClicked?'bg-[#6227ca]':'bg-white'} `}>
        {isUseStateClicked && <UseState/>}
        {isUseEffectClicked && <UseEffect />}
      </div>
    </div>
  );
}
export default ReactHooksApp;
