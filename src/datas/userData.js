import axios from "axios";
import { serverUrl } from "./apiInfos";

const axInstance = axios.create({
  baseURL: serverUrl,
});

/**
 * Fetch User's infos
 * @param {Number} userId User id
 * @returns Promise containing user's datas
 */
export function getUserInfos(userId) {
  const path = `/user/${userId}`;
  return axInstance.get(path);
}

/**
 * Fetch User's activity
 * @param {Number} userId User id
 * @returns Promise containing user's activiy datas
 */
export function getUserActivity(userId) {
  const path = `/user/${userId}/activity`;
  return axInstance.get(path);
}

/**
 * Fetch User's average session
 * @param {Number} userId User id
 * @returns Promise containing user's average session datas
 */
export function getAverageSessions(userId) {
  const path = `/user/${userId}/average-sessions`;
  return axInstance.get(path);
}

/**
 * Fetch User's performance
 * @param {Number} userId User id
 * @returns Promise containing user's performance data
 */
export function getPerformance(userId) {
  const path = `/user/${userId}/performance`;
  return axInstance.get(path);
}
