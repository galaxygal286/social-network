import { createPortal } from "react-dom";
import { useLoadingStore } from "../store/useLoadingStore";

const Loading=()=>{
  const { loading } = useLoadingStore();

  if (!loading) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col items-center">
        
      </div>
    </div>,
    document.body
  );
}

export default Loading;
