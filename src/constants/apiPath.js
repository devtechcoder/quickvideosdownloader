import { notification } from "antd";

let ASSET_URL = "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/";

// Backend server URL
const URL = "http://localhost:7900/";
// const URL = "https://quickvideosdownloader.onrender.com/";

let apiPath = {
  baseURL: URL,
  assetURL: ASSET_URL,

  // Header APIs
  globalDownload: "api/app/getUrl",
  proxyDownload: "proxy-download",
  proxyImage: "proxy-image",

  // Auth APIs
  support: "app/auth/support",

  // Common APIs
  common: {
    country: "common/country",
  },
};

export default apiPath;
