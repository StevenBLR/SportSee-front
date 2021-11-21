import axios from "axios";
import { serverUrl } from "../utils/apiInfos";

const axInstance = axios.create({
  baseURL: serverUrl,
});

export function getUserInfos(userId) {
  const path = `/user/${userId}`;
  return axInstance.get(path);
}

export function getUserActivity(userId) {
  const path = `/user/${userId}/activity`;
  return axInstance.get(path);
}

export function getAverageSessions(userId) {
  const path = `/user/${userId}/average-sessions`;
  return axInstance.get(path);
}
