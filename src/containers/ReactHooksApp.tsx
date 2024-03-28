import React from "react";
import SidebarComponent from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import UseState from "../components/UseState/UseState";

function ReactHooksApp() {
  const isUseStateClicked = useSelector(
    (state: RootState) => state.sidebar.isUseStateClicked
  );
  console.log(isUseStateClicked);
  return (
    <div className="flex flex-row">
          <SidebarComponent />

      <div className="w-screen overflow-auto">
        <Header />
        {isUseStateClicked && <UseState/>}
      </div>
    </div>
  );
}
export default ReactHooksApp;
