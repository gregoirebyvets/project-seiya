import axios from "axios";
import React, { useEffect, useState } from "react";
import downloadWindows from "../../images/support_download_windows.svg";
import downloadApple from "../../images/support_download_apple.svg";
import downloadData from "../../images/support_download_data.svg";
import downloadLayout from "../../images/support_download_layout.svg";
import dateFormat from "dateformat";

const DownloadLinks = ({ actions }) => {
  const [lastVersion, setLastVersion] = useState(null);
  const [infoDownload, setInfoDownload] = useState([]);

  useEffect(() => {
    const fetchInfos = async () => {
      axios
        .get("https://web.byvets.be/api/download/version/pegase", {
          method: "GET",
          mode: "cors",
        })
        .then((response) => {
          setLastVersion(response.data.version);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get("https://web.byvets.be/api/download/info/", {
          method: "GET",
          mode: "cors",
        })
        .then((response) => {
          setInfoDownload(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchInfos();
  }, []);
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 octet";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["octets", "Ko", "Mo", "Go", "To", "Po", "Eo", "Zo", "Yo"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const getLinkName = (str) => {
    switch (str) {
      case "mac":
        return "Pégase";
      case "windows":
        return "Pégase";
      case "donnees":
        return "Données";
      case "misesEnPage":
        return "Mises en page";

      default:
        break;
    }
  };
  const getImage = (str) => {
    switch (str) {
      case "mac":
        return downloadApple;
      case "windows":
        return downloadWindows;
      case "donnees":
        return downloadData;
      case "misesEnPage":
        return downloadLayout;

      default:
        break;
    }
  };

  const getDescription = (str) => {
    switch (str) {
      case "mac":
        return "Mac OS X (10.10 et +)";
      case "windows":
        return "Windows (7, 8, 10)";
      case "donnees":
        return "Windows & Mac";
      case "misesEnPage":
        return "Windows & Mac";

      default:
        break;
    }
  };

  return (
    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-6">
      {infoDownload.length > 0 &&
        infoDownload.map((link) => {
          return (
            <button
              key={link.name}
              onClick={() => {
                switch (link.name) {
                  case "mac":
                    actions.mac();
                    break;
                  case "windows":
                    actions.windows();
                    break;
                  case "donnees":
                    actions.datas();
                    break;
                  case "misesEnPage":
                    actions.layouts();
                    break;

                  default:
                    break;
                }
              }}
              className="flex border items-center border-blue-gray-500 rounded-2xl text-xs text-midnight-blue-500 py-2 px-2 font-light cursor-pointer"
            >
              <div className="w-1/3 text-center">
                <img src={getImage(link.name)} alt="" className="mx-auto" />
              </div>
              <div className="w-2/3 pl-2">
                <h4 className="font-semibold mb-1">
                  {getLinkName(link.name)} {link.version}
                </h4>
                <p className="mb-1">{getDescription(link.name)}</p>
                <p className="mb-1">{formatBytes(link.size)}</p>
                <p className="mb-1">
                  Màj : {dateFormat(new Date(link.date * 1000), "dd.mm.yyyy")}
                </p>
              </div>
              <div></div>
            </button>
          );
        })}
    </div>
  );
};

export default DownloadLinks;
