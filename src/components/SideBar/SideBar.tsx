
import { Sidebar } from "flowbite-react";
import { FaReact } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa6";
import { useCallback, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../store/store";
import { onSetUseStateActive } from "../../store/slices/sidebar";

function SidebarComponent() {
  
  const isUseStateClicked = useSelector((state: RootState) => state.sidebar.isUseStateClicked); 
  const dispatch = useDispatch()

  const handleUseStateClicked = useCallback(() => {
    dispatch(onSetUseStateActive(!isUseStateClicked));  
    },[dispatch, isUseStateClicked]);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Sidebar
      aria-label="Sidebar with content separator example"
      className="w-72 h-screen rounded-none border-none"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={FaReact} onClick={handleUseStateClicked}>
            <span className="text-[#673ab7]">useState</span>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaReact} onClick={handleClick}>
            <span className="text-[#673ab7]">useEffect</span>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaReact} onClick={handleClick}>
            <span className="text-[#673ab7]">useCallback</span>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaReact} onClick={handleClick}>
            <span className="text-[#673ab7]">useRef</span>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaReact} onClick={handleClick}>
            <span className="text-[#673ab7]">useLayoutEffect</span>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={TiDocumentText} onClick={handleClick}>
            <span className="text-[#673ab7]">Docs</span>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaRegUser} onClick={handleClick}>
            <span className="text-[#673ab7]"> About me</span>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarComponent;