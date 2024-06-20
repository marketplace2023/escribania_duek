import { AxiosError } from "axios";

export function handleAxiosError(
  error: AxiosError,
  setError: (key: string, error: string) => void
) {
  if (error.response?.status === 400) {
    const data = error.response?.data as { errors: Record<string, string[]> };

    for (const [key, errors] of Object.entries<string[]>(data.errors)) {
      setError(key, errors[0]);
    }
  }
}
