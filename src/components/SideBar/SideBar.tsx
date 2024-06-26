import { Sidebar } from "flowbite-react";
import { FaReact } from "react-icons/fa";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { onSetUseCallbackActive, onSetUseEffectActive, onSetUseRefActive, onSetUseStateActive } from "../../store/slices/sidebar";

function SidebarComponent() {
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

  const dispatch = useDispatch();

  const handleUseStateClicked = useCallback(() => {
    dispatch(onSetUseEffectActive(false));
    dispatch(onSetUseCallbackActive(false));
    dispatch(onSetUseRefActive(false));
    dispatch(onSetUseStateActive(!isUseStateClicked));
  }, [dispatch, isUseStateClicked]);

  const handleUseEffectClicked = useCallback(() => {
    dispatch(onSetUseStateActive(false));
    dispatch(onSetUseCallbackActive(false));
    dispatch(onSetUseRefActive(false));
    dispatch(onSetUseEffectActive(!isUseEffectClicked));
  }, [dispatch, isUseEffectClicked]);

  const handleUseCallbackClicked = useCallback(() => {
    dispatch(onSetUseStateActive(false));
    dispatch(onSetUseEffectActive(false));
    dispatch(onSetUseCallbackActive(!isUseCallbackClicked));
  }, [dispatch, isUseCallbackClicked]);

  const handleUseRefClicked = useCallback(() => {
    dispatch(onSetUseStateActive(false));
    dispatch(onSetUseEffectActive(false));
    dispatch(onSetUseCallbackActive(false));
    dispatch(onSetUseRefActive(!isUseRefClicked));
  }, [dispatch, isUseRefClicked]);

  return (
    <Sidebar
      aria-label="Sidebar with content separator example"
      className={`w-72 ${isUseStateClicked || isUseEffectClicked || isUseCallbackClicked || isUseRefClicked ? "h-auto" : "h-screen"
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
          <Sidebar.Item href="#" icon={FaReact} onClick={handleUseCallbackClicked}>
            <span className="text-[#673ab7]">useCallback</span>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaReact} onClick={handleUseRefClicked}>
            <span className="text-[#673ab7]">useRef</span>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarComponent;
