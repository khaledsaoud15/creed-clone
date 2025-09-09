import { useMutation, useQueryClient } from "@tanstack/react-query";
import { url } from "../utils/baseUrl";
import { useState } from "react";

export const useAction = (api, crud = "post", key) => {
  const queryClient = useQueryClient();
  const [error, setError] = useState("");

  const mutation = useMutation({
    mutationFn: async (data) => {
      switch (crud.toLowerCase()) {
        case "post":
          return (await url.post(api, data)).data;
        case "put":
          return (await url.put(api, data)).data;
        case "patch":
          return (await url.patch(api, data)).data;
        case "delete":
          if (typeof data === "string" || typeof data === "number") {
            return (await url.delete(`${api}/${data}`)).data;
          }
          return (await url.delete(api, { data })).data;
        default:
          throw new Error(`Unsupported method: ${crud}`);
      }
    },
    onSuccess: (data) => {
      if (key) {
        queryClient.invalidateQueries([key]);
        setError("");
      }
      if (data?.url) {
        window.location.href = data.url;
      }
    },
    onError: (err) => {
      console.error(err?.response?.data?.message || err.message);
      setError(
        err.response?.data?.message || err.message || "Something went wrong!!"
      );
    },
  });

  return { ...mutation, error };
};
