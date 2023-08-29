import React, { useCallback, useEffect, useState } from "react";
import { atomLinkList } from "../states/atomLinkList";
import { getItem } from "../utils/AsyncStorageUtils";
import { useSetRecoilState } from "recoil";
export const RecoilCustomPersist = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const setList = useSetRecoilState(atomLinkList);

  const loadDate = useCallback(async () => {
    const data = await getItem("MAIN/LINK_LIST");
    console.log(data);

    if (data !== null) {
      setList(JSON.parse(data));
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) return;
    loadDate();
  }, []);

  return <>{isLoaded && props.children}</>;
};
