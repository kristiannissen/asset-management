/**
 *
 */
import { useState, useEffect, useCallback } from "react";

const useNetworkInformation = () => {
  const [networkInformation, setNetworkInformation] = useState({
    downlink: 0.0,
    effectiveType: "",
    rtt: 0,
  });

  useEffect(() => {
    let information =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    setNetworkInformation(information);
  }, []);

  const change = useCallback(() => {
    networkInformation.addEventlistener("change", () => {
      console.log("changing");
    });
  }, []);

  return [networkInformation, change];
};

export default useNetworkInformation;
