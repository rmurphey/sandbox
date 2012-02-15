mulberry = window.mulberry || {};
toura = window.toura || {};

mulberry._Config = {
  "id": "todos",
  "locale": "en-us",
  "buildDate": "1329337694",
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

toura.features = {
  siblingNav : false,
  ads : false,

  sharing : true,
  favorites : true,
  fontSize : true,
  multiLineChildNodes : false,
  debugPage : true
};

mulberry.features = {
  debugToolbar : false
};


