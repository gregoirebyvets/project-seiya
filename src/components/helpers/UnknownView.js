import { osName } from "react-device-detect";

export function UnknownView({ children }) {
  if (osName !== "Mac OS" && osName !== "Windows" && osName !== "iOS") {
    return children;
  }
  return null;
}
