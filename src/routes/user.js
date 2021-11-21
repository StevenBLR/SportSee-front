import axios from "axios";
import { serverUrl } from "../utils/apiInfos";

const axInstance = axios.create({
  baseURL: serverUrl,
});

export function getUserActivity(userId) {
  const path = `/user/${userId}/activity`;
  return axInstance.get(path);
}
