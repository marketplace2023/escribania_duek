import { AxiosError } from "axios";
import { handleAxiosError } from "./handle-axios-error";

export const handleFormError =
  (setError: (key: string, error: string) => void) => (error: any) => {
    if (error instanceof AxiosError) {
      handleAxiosError(error, setError);
    }
  };
