import { Sidebar } from "flowbite-react";
import { FaReact } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa6";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { onSetUseEffectActive, onSetUseStateActive } from "../../store/slices/sidebar";

function SidebarComponent() {
  const isUseStateClicked = useSelector(
    (state: RootState) => state.sidebar.isUseStateClicked
  );
  const isUseEffectClicked = useSelector(
    (state: RootState) => state.sidebar.isUseEffectClicked
  );
  const dispatch = useDispatch();

  const handleUseStateClicked = useCallback(() => {
    dispatch(onSetUseEffectActive(false));
    dispatch(onSetUseStateActive(!isUseStateClicked));
  }, [dispatch, isUseStateClicked]);

  const handleUseEffectClicked = useCallback(() => {
    dispatch(onSetUseStateActive(false));
    dispatch(onSetUseEffectActive(!isUseEffectClicked));
  }, [dispatch, isUseEffectClicked]);
  
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Sidebar
      aria-label="Sidebar with content separator example"
      className={`w-72 ${
        isUseStateClicked || isUseEffectClicked ? "h-auto" : "h-screen"
      } rounded-none border-none`}
    >
      <Sidebar.Items>
        <div>
          {" "}
          <h2 className="text-center text-2xl font-bold text-[#673ab7] sm:text-3xl lg:text-4xl 2xl:text-[2.5rem]">
            React Hooks
          </h2>
        </div>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={FaReact} onClick={handleUseStateClicked}>
            <span className="text-[#673ab7]">useState</span>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaReact} onClick={handleUseEffectClicked}>
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
