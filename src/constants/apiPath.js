import { notification } from "antd";

let ASSET_URL = "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/";

// Backend server URL
// const URL = "http://localhost:7900/";
const URL = "https://quickvideosdownloader.onrender.com/";

let apiPath = {
  baseURL: URL,
  assetURL: ASSET_URL,

  // Header APIs
  globalDownload: "api/app/getUrl",
  proxyDownload: "api/proxy-download",
  proxyImage: "api/proxy-image",
  notification: "app/notification/",

  // Auth APIs
  support: "app/auth/support",

  profile: "app/auth/profile",
  signUp: "app/auth/sign-up",
  editProfile: "app/auth/profile",
  updateProfileImage: "app/auth/profile/image",
  sendOtp: "app/auth/send-otp",
  login: "app/auth/login",
  forgotPassword: "app/auth/forget-password",
  resetPassword: "app/auth/reset-password",
  verifyOtp: "app/auth/verify-otp",
  emailVerify: "app/auth/verify-email",
  resendOtp: "app/auth/resend-otp",
  contactUs: "app/auth/contact-us",
  deleteProfile: "app/auth/delete-profile",
  editNotificationSetting: "app/auth/edit-notification-settings",

  // Home Page--->
  categories: "app/category",
  homeEvent: "app/event-type",
  about: "app/content",
  bannerClicks: "app/banner/clicks",

  // Service Page--->
  services: "app/service",
  subCategories: "app/sub-category",
  serviceByEventType: "/app/service/services-by-eventype",

  // Provder Page ---->
  getProvider: "/app/provider",
  getCount: "/app/provider/call-count",
  reportProvider: "/app/report/provider",
  providerRatingList: "/app/rating/ratings",
  providerRating: "/app/rating/provider",
  addBudget: "/app/user-event/budget-service/add",
  addPkgBudget: "/app/user-event/budget-package/add",

  // Quote Page ---->
  requestQuote: "/app/quote",
  providerServices: "/app/quote/provider-services",
  providerPackages: "/app/quote/provider-packages",

  // Event Page ---->
  eventList: "/app/user-event",
  addEvent: "/app/user-event",
  editEvent: "app/user-event",
  inviteUserGuest: "/app/user-guest//invite-user-guest",
  eventCollab: "app/user-guest/event-collab",
  deleteEvent: "/app/user-event/delete-event",
  userEventDetail: "/app/user-event/event-detail",
  eventGuestDetail: "/app/user-event//budget-service-guest",
  deleteService: "/app/user-event/budget-service/delete",
  deletePackage: "/app/user-event/budget-package/delete",
  addBudgetCategory: "/app/user-event/budget-category/add",

  // Guest Page ---->
  guest: "/app/user-guest",
  allDeleteGuest: "/app/user-guest/delete",
  updateGuest: "/app/user-guest/update-member/",
  importGuest: "/app/user-guest/import-guest/",

  // Side Nav ---->
  appRating: "/app/rating/customerapp",

  // Invite Friend ---->
  subscribe: "app/common/subscribe",

  //app Common

  testimonial: "app/common/testimonial",
  gallary: "app/common/gallary",

  // Common APIs
  common: {
    country: "common/country",
    city: "common/city/",
    eventType: "common/event-type",
    userEvent: "common/user-event",
    categories: "/common/categories",
    subCategories: "/common/sub-category",
    serviceByCategory: "/common/services-by-category",
    filteredAttribute: "/common/attribute",
    getUsers: "/common/get-users",
    updateSearchCount: "/common/provider-search-count",
    imageUpload: "common/image-upload",
    fileUpload: "common/file-upload",
  },
};

export default apiPath;
