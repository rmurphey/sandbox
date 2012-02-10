dojo.provide('toura.AppConfig');

mulberry = window.mulberry || {};

mulberry._Config = {
  "id": "Toura Demo",
  "locale": "en-us",
  "buildDate": "1328900215",
  "appVersion": "4.1.0",
  "updateUrl": null,
  "versionUrl": null
};

// force all images to come from S3. this
// is mainly used by MAP for the preview window.
mulberry.forceLocal = false;
mulberry.forceStreaming = false;

// skips checking for newer remote version.
// useful for speeding up non-data dev.
mulberry.skipVersionCheck = false;

mulberry.features = {
  multiLineChildNodes : false,
  sharing : true,
  favorites : true,
  fontSize : true,
  siblingNav : false,
  debugToolbar : false,
  ads : false,
  debugPage : true
};
