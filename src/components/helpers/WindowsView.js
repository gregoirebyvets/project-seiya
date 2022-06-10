import { osName } from "react-device-detect";

export function WindowsView({ children }) {
  if (osName === "Windows") {
    return children;
  }
  return null;
}
