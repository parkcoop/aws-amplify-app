import { Input } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";

export const useInput = ({ type, placeholder }) => {
    const [value, setValue] = useState("");
    const input = (
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
    );
    return [value, input, setValue];
};

export const useIsMounted = () => {
  const isMountedRef = useRef(null);
  useEffect(() => {
    isMountedRef.current = true;
    return () => isMountedRef.current = false;
  });
  return isMountedRef;
}
