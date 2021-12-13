import { useEffect } from "react/cjs/react.development";

//making sure you can't scroll over page body when overlay is open
export const useScrollHook = (visibility) => {
  useEffect(() => {
    if (visibility) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";
    };
  }, [visibility]);
};
