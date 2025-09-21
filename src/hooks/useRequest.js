import axios from "axios";
import apiPath from "../constants/apiPath";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AppStateContext } from "../context/AppContext";
import { Severty, ShowToast } from "../helper/toast";

const client = axios.create({
  baseURL: apiPath.baseURL,
});

const useRequest = () => {
  const { logout } = useContext(AuthContext);
  // const { country } = AppStateContext();

  const request = async ({
    url,
    method: tmethod,
    data,
    onSuccess,
    onError,
    header,
    onErrorSubmit,
  }) => {
    const method = tmethod.trim().toUpperCase();
    console.log(method);
    let token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";

    console.log(token);

    const headers = {
      ...header,
      Authorization: `Bearer ${token}`,
      // country_id: country?.country_id ?? "646b2e0f46865f1f65565346",
      country_id: "646b2e0f46865f1f65565346",
    };

    try {
      const response = await client({
        url,
        method,
        data,
        headers: { ...headers },
      });

      if (onSuccess) {
        onSuccess(response.data);
        console.log(" onSuccess(response.data);", response?.data);
      } else {
        onErrorSubmit(response.data);
        console.log(" onErrorSubmit(response.data);", response?.data);
      }
      return response.data;
    } catch (err) {
      console.log(err, "Error");
      if (err?.response?.code === "ERR_NETWORK") {
        console.log("ErrorNetwork");
      }
      if (err?.response?.status === 401) {
        logout();
      }
      if (err?.response?.status === 403) {
        logout();
      }
      if (err?.response?.data?.message === "jwt expired") {
        logout();
      }
      if (err?.response?.data?.message === "Un-Authorized User") {
        console.log("--------------------------------------------logotu");
        logout();
      }

      // if (err?.response?.status === 400) {
      //   if (err.response.data?.errors?.length) {
      //     err.response.data?.errors?.map((item) =>
      //       ShowToast(item?.message, Severty.ERROR),
      //     );
      //   }
      // }

      if (onError) {
        console.log(err);
        onError(err);
      }
      // throw err;
    }
  };

  return { request };
};

export default useRequest;
