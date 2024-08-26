import { useState } from "react";
import { useToggleType } from "../types/useToggle";

export const useToggle : useToggleType = (defaultValue = false) => {

  const [value, setValue] = useState<boolean>(defaultValue);

  const toggle = () => {
    setValue((prev) => !prev)
  }

  return [value, toggle]
}