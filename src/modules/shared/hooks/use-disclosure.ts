import { useCallback, useState } from "react";

import type { Dispatch, SetStateAction } from "react";

type UseBooleanReturn = {
  isOpen: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export function useDisclosure(defaultValue: boolean = false): UseBooleanReturn {
  const [value, setValue] = useState(defaultValue);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  const toggle = useCallback(() => {
    setValue((x) => !x);
  }, []);

  return { isOpen: value, setValue, open: setTrue, close: setFalse, toggle };
}
