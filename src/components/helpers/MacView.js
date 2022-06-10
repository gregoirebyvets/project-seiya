import { osName } from "react-device-detect";

export function MacView({ children }) {
  if (osName === "Mac OS" || osName === "iOS") {
    return children;
  }
  return null;
}
