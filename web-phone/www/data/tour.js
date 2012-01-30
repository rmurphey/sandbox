toura.data.local = {
  "items": [
    {
      "id": "text-asset-single_image_gallery",
      "type": "text-asset",
      "name": "single_image_gallery",
      "body": "",
      "contexts": [
        {
          "type": "node",
          "node": "node-single_image_gallery"
        }
      ]
    },
    {
      "type": "image",
      "id": "image-wiry",
      "name": "wiry",
      "filename": "wiry.jpg",
      "streamed": false,
      "featured": {
        "filename": "wiry.jpg",
        "width": 180,
        "height": 240
      },
      "featuredSmall": {
        "filename": "wiry.jpg",
        "width": 180,
        "height": 240
      },
      "gallery": {
        "filename": "wiry.jpg",
        "width": 180,
        "height": 240
      },
      "original": {
        "filename": "wiry.jpg",
        "width": 180,
        "height": 240
      }
    },
    {
      "type": "node",
      "id": "node-single_image_gallery",
      "name": "Single Image Gallery",
      "filename": null,
      "node_name": "single_image_gallery",
      "pageController": {
        "phone": "images-and-text-phone",
        "tablet": "images-and-text-tablet"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-single_image_gallery"
      },
      "images": [
        {
          "image": {
            "_reference": "image-wiry"
          }
        }
      ],
      "parent": {
        "_reference": "node-videos"
      }
    },
    {
      "id": "text-asset-generic_child_page",
      "type": "text-asset",
      "name": "generic_child_page",
      "body": "<p>HMS Beagle was a Cherokee-class 10-gun brig-sloop of the Royal Navy. She was launched on 11 May 1820 from the Woolwich Dockyard on the River Thames, at a cost of £7,803. In July of that year she took part in a fleet review celebrating the coronation of King George IV of the United Kingdom in which she was the first ship to sail under the new London Bridge. After that there was no immediate need for Beagle so she “lay in ordinary”, moored afloat but without masts or rigging. She was then adapted as a survey barque and took part in three expeditions. On the second survey voyage the young naturalist Charles Darwin was on board, and his work would eventually make the Beagle one of the most famous ships in history. <a href=\"http://en.wikipedia.org/wiki/HMS_Beagle\">http://en.wikipedia.org/wiki/HMS_Beagle</a></p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-generic_child_page"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-generic_child_page",
      "name": "Generic Child Page",
      "filename": null,
      "node_name": "generic_child_page",
      "pageController": {
        "phone": "default",
        "tablet": "default"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-generic_child_page"
      },
      "parent": {
        "_reference": "node-videos"
      }
    },
    {
      "id": "text-asset-audio_list_childless",
      "type": "text-asset",
      "name": "audio_list_childless",
      "body": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-audio_list_childless"
        }
      ]
    },
    {
      "type": "image",
      "id": "image-bgoodman",
      "name": "bgoodman",
      "filename": "bgoodman.jpg",
      "streamed": false,
      "featured": {
        "filename": "bgoodman.jpg",
        "width": 270,
        "height": 294
      },
      "featuredSmall": {
        "filename": "bgoodman.jpg",
        "width": 270,
        "height": 294
      },
      "gallery": {
        "filename": "bgoodman.jpg",
        "width": 270,
        "height": 294
      },
      "original": {
        "filename": "bgoodman.jpg",
        "width": 270,
        "height": 294
      }
    },
    {
      "type": "image",
      "id": "image-larmstrong",
      "name": "larmstrong",
      "filename": "larmstrong.jpg",
      "streamed": false,
      "featured": {
        "filename": "larmstrong.jpg",
        "width": 300,
        "height": 313
      },
      "featuredSmall": {
        "filename": "larmstrong.jpg",
        "width": 300,
        "height": 313
      },
      "gallery": {
        "filename": "larmstrong.jpg",
        "width": 300,
        "height": 313
      },
      "original": {
        "filename": "larmstrong.jpg",
        "width": 300,
        "height": 313
      }
    },
    {
      "id": "text-asset-larmstrong",
      "type": "text-asset",
      "name": "larmstrong",
      "body": "<p>Louis Armstrong</p>",
      "contexts": [
        {
          "type": "image",
          "id": "image-larmstrong",
          "node": "node-audio_list_childless"
        },
        {
          "type": "image",
          "id": "image-larmstrong",
          "node": "node-audio_list"
        }
      ]
    },
    {
      "type": "image",
      "id": "image-peerless",
      "name": "peerless",
      "filename": "peerless.jpg",
      "streamed": false,
      "featured": {
        "filename": "peerless.jpg",
        "width": 600,
        "height": 542
      },
      "featuredSmall": {
        "filename": "peerless.jpg",
        "width": 600,
        "height": 542
      },
      "gallery": {
        "filename": "peerless.jpg",
        "width": 600,
        "height": 542
      },
      "original": {
        "filename": "peerless.jpg",
        "width": 600,
        "height": 542
      }
    },
    {
      "type": "audio",
      "id": "audio-bgoodman-sing-sing-sing",
      "name": "bgoodman-sing-sing-sing",
      "filename": "bgoodman-sing-sing-sing.mp3",
      "streamed": false
    },
    {
      "id": "text-asset-bgoodman-sing-sing-sing",
      "type": "text-asset",
      "name": "bgoodman-sing-sing-sing",
      "body": "<p>Benny Goodman and his Orchestra, “Sing, Sing, Sing”</p>",
      "contexts": [
        {
          "type": "audio",
          "id": "audio-bgoodman-sing-sing-sing",
          "node": "node-audio_list_childless"
        },
        {
          "type": "audio",
          "id": "audio-bgoodman-sing-sing-sing",
          "node": "node-audio_list"
        }
      ]
    },
    {
      "type": "audio",
      "id": "audio-larmstrong-hot-seven-potato-head",
      "name": "larmstrong-hot-seven-potato-head",
      "filename": "larmstrong-hot-seven-potato-head.mp3",
      "streamed": false
    },
    {
      "id": "text-asset-larmstrong-hot-seven-potato-head",
      "type": "text-asset",
      "name": "larmstrong-hot-seven-potato-head",
      "body": "<p>Louis Armstrong and his Hot Seven, “Potato Head Blues”</p>",
      "contexts": [
        {
          "type": "audio",
          "id": "audio-larmstrong-hot-seven-potato-head",
          "node": "node-audio_list_childless"
        },
        {
          "type": "audio",
          "id": "audio-larmstrong-hot-seven-potato-head",
          "node": "node-audio_list"
        }
      ]
    },
    {
      "type": "audio",
      "id": "audio-peerless-when-the-sun-goes-down-in-dixie",
      "name": "peerless-when-the-sun-goes-down-in-dixie",
      "filename": "peerless-when-the-sun-goes-down-in-dixie.mp3",
      "streamed": false
    },
    {
      "id": "text-asset-peerless-when-the-sun-goes-down-in-dixie",
      "type": "text-asset",
      "name": "peerless-when-the-sun-goes-down-in-dixie",
      "body": "<p>Peerless Quartet, “When the Sun Goes Down in Dixie”</p>",
      "contexts": [
        {
          "type": "audio",
          "id": "audio-peerless-when-the-sun-goes-down-in-dixie",
          "node": "node-audio_list_childless"
        },
        {
          "type": "audio",
          "id": "audio-peerless-when-the-sun-goes-down-in-dixie",
          "node": "node-audio_list"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-audio_list_childless",
      "name": "Audio List (no children)",
      "filename": null,
      "node_name": "audio_list_childless",
      "pageController": {
        "phone": "audio-with-images-phone",
        "tablet": "audio-with-images-tablet"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-audio_list_childless"
      },
      "images": [
        {
          "image": {
            "_reference": "image-bgoodman"
          }
        },
        {
          "image": {
            "_reference": "image-larmstrong"
          },
          "caption": {
            "_reference": "text-asset-larmstrong"
          }
        },
        {
          "image": {
            "_reference": "image-peerless"
          }
        }
      ],
      "audios": [
        {
          "audio": {
            "_reference": "audio-bgoodman-sing-sing-sing"
          },
          "caption": {
            "_reference": "text-asset-bgoodman-sing-sing-sing"
          }
        },
        {
          "audio": {
            "_reference": "audio-larmstrong-hot-seven-potato-head"
          },
          "caption": {
            "_reference": "text-asset-larmstrong-hot-seven-potato-head"
          }
        },
        {
          "audio": {
            "_reference": "audio-peerless-when-the-sun-goes-down-in-dixie"
          },
          "caption": {
            "_reference": "text-asset-peerless-when-the-sun-goes-down-in-dixie"
          }
        }
      ],
      "parent": {
        "_reference": "node-audio_list"
      }
    },
    {
      "id": "text-asset-audio_list",
      "type": "text-asset",
      "name": "audio_list",
      "body": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-audio_list"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-audio_list",
      "name": "Audio List",
      "filename": null,
      "node_name": "audio_list",
      "pageController": {
        "phone": "audio-with-images-phone",
        "tablet": "audio-with-images-tablet"
      },
      "children": [
        {
          "_reference": "node-single_image_gallery"
        },
        {
          "_reference": "node-generic_child_page"
        },
        {
          "_reference": "node-audio_list_childless"
        }
      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-audio_list"
      },
      "images": [
        {
          "image": {
            "_reference": "image-bgoodman"
          }
        },
        {
          "image": {
            "_reference": "image-larmstrong"
          },
          "caption": {
            "_reference": "text-asset-larmstrong"
          }
        },
        {
          "image": {
            "_reference": "image-peerless"
          }
        }
      ],
      "audios": [
        {
          "audio": {
            "_reference": "audio-bgoodman-sing-sing-sing"
          },
          "caption": {
            "_reference": "text-asset-bgoodman-sing-sing-sing"
          }
        },
        {
          "audio": {
            "_reference": "audio-larmstrong-hot-seven-potato-head"
          },
          "caption": {
            "_reference": "text-asset-larmstrong-hot-seven-potato-head"
          }
        },
        {
          "audio": {
            "_reference": "audio-peerless-when-the-sun-goes-down-in-dixie"
          },
          "caption": {
            "_reference": "text-asset-peerless-when-the-sun-goes-down-in-dixie"
          }
        }
      ],
      "parent": {
        "_reference": "node-home"
      }
    },
    {
      "id": "text-asset-image_gallery_no_child",
      "type": "text-asset",
      "name": "image_gallery_no_child",
      "body": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-image_gallery_no_child"
        }
      ]
    },
    {
      "type": "image",
      "id": "image-bangs",
      "name": "bangs",
      "filename": "bangs.jpg",
      "streamed": false,
      "featured": {
        "filename": "bangs.jpg",
        "width": 240,
        "height": 160
      },
      "featuredSmall": {
        "filename": "bangs.jpg",
        "width": 240,
        "height": 160
      },
      "gallery": {
        "filename": "bangs.jpg",
        "width": 240,
        "height": 160
      },
      "original": {
        "filename": "bangs.jpg",
        "width": 240,
        "height": 160
      }
    },
    {
      "id": "text-asset-bangs",
      "type": "text-asset",
      "name": "bangs",
      "body": "<p>Trendy bangs.</p>",
      "contexts": [
        {
          "type": "image",
          "id": "image-bangs",
          "node": "node-image_gallery_no_child"
        },
        {
          "type": "image",
          "id": "image-bangs",
          "node": "node-image_gallery"
        },
        {
          "type": "image",
          "id": "image-bangs",
          "node": "node-fullscreen_images"
        },
        {
          "type": "image",
          "id": "image-bangs",
          "node": "node-locations"
        },
        {
          "type": "image",
          "id": "image-bangs",
          "node": "node-node_gallery_child_1"
        }
      ]
    },
    {
      "type": "image",
      "id": "image-beardy",
      "name": "beardy",
      "filename": "beardy.jpg",
      "streamed": false,
      "featured": {
        "filename": "beardy.jpg",
        "width": 182,
        "height": 240
      },
      "featuredSmall": {
        "filename": "beardy.jpg",
        "width": 182,
        "height": 240
      },
      "gallery": {
        "filename": "beardy.jpg",
        "width": 182,
        "height": 240
      },
      "original": {
        "filename": "beardy.jpg",
        "width": 182,
        "height": 240
      }
    },
    {
      "id": "text-asset-beardy",
      "type": "text-asset",
      "name": "beardy",
      "body": "<p>Trendy beard. Verrrry trendy. I mean seriously, don’t you want a beard like that? I know you do! Totally beardy.</p>",
      "contexts": [
        {
          "type": "image",
          "id": "image-beardy",
          "node": "node-image_gallery_no_child"
        },
        {
          "type": "image",
          "id": "image-beardy",
          "node": "node-image_gallery"
        },
        {
          "type": "image",
          "id": "image-beardy",
          "node": "node-fullscreen_images"
        },
        {
          "type": "image",
          "id": "image-beardy",
          "node": "node-locations"
        },
        {
          "type": "image",
          "id": "image-beardy",
          "node": "node-node_gallery_child_2"
        }
      ]
    },
    {
      "type": "image",
      "id": "image-header-logo",
      "name": "header-logo",
      "filename": "header-logo.png",
      "streamed": true,
      "url": "http://mulberry.toura.com/images/header-logo.png",
      "featured": {
        "filename": "header-logo.png",
        "url": "http://mulberry.toura.com/images/header-logo.png",
        "width": 440,
        "height": 132
      },
      "featuredSmall": {
        "filename": "header-logo.png",
        "url": "http://mulberry.toura.com/images/header-logo.png",
        "width": 440,
        "height": 132
      },
      "gallery": {
        "filename": "header-logo.png",
        "url": "http://mulberry.toura.com/images/header-logo.png",
        "width": 440,
        "height": 132
      },
      "original": {
        "filename": "header-logo.png",
        "url": "http://mulberry.toura.com/images/header-logo.png",
        "width": 440,
        "height": 132
      }
    },
    {
      "type": "node",
      "id": "node-image_gallery_no_child",
      "name": "Image Gallery (no children)",
      "filename": null,
      "node_name": "image_gallery_no_child",
      "pageController": {
        "phone": "images-and-text-phone",
        "tablet": "images-and-text-tablet"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-image_gallery_no_child"
      },
      "images": [
        {
          "image": {
            "_reference": "image-bangs"
          },
          "caption": {
            "_reference": "text-asset-bangs"
          }
        },
        {
          "image": {
            "_reference": "image-beardy"
          },
          "caption": {
            "_reference": "text-asset-beardy"
          }
        },
        {
          "image": {
            "_reference": "image-bgoodman"
          }
        },
        {
          "image": {
            "_reference": "image-header-logo"
          }
        }
      ],
      "parent": {
        "_reference": "node-image_gallery"
      }
    },
    {
      "id": "text-asset-image_gallery",
      "type": "text-asset",
      "name": "image_gallery",
      "body": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-image_gallery"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-image_gallery",
      "name": "Image Gallery",
      "filename": null,
      "node_name": "image_gallery",
      "pageController": {
        "phone": "images-and-text-phone",
        "tablet": "images-and-text-tablet"
      },
      "children": [
        {
          "_reference": "node-single_image_gallery"
        },
        {
          "_reference": "node-generic_child_page"
        },
        {
          "_reference": "node-image_gallery_no_child"
        }
      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-image_gallery"
      },
      "images": [
        {
          "image": {
            "_reference": "image-bangs"
          },
          "caption": {
            "_reference": "text-asset-bangs"
          }
        },
        {
          "image": {
            "_reference": "image-beardy"
          },
          "caption": {
            "_reference": "text-asset-beardy"
          }
        },
        {
          "image": {
            "_reference": "image-bgoodman"
          }
        },
        {
          "image": {
            "_reference": "image-header-logo"
          }
        }
      ],
      "parent": {
        "_reference": "node-home"
      }
    },
    {
      "id": "text-asset-fullscreen_images",
      "type": "text-asset",
      "name": "fullscreen_images",
      "body": "<p>This page uses the FullScreenImages page definition.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-fullscreen_images"
        }
      ]
    },
    {
      "type": "image",
      "id": "image-tiny_cairn",
      "name": "tiny_cairn",
      "filename": "tiny_cairn.jpg",
      "streamed": false,
      "featured": {
        "filename": "tiny_cairn.jpg",
        "width": 240,
        "height": 160
      },
      "featuredSmall": {
        "filename": "tiny_cairn.jpg",
        "width": 240,
        "height": 160
      },
      "gallery": {
        "filename": "tiny_cairn.jpg",
        "width": 240,
        "height": 160
      },
      "original": {
        "filename": "tiny_cairn.jpg",
        "width": 240,
        "height": 160
      }
    },
    {
      "type": "node",
      "id": "node-fullscreen_images",
      "name": "Fullscreen Image Gallery",
      "filename": null,
      "node_name": "fullscreen_images",
      "pageController": "full-screen-images",
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-fullscreen_images"
      },
      "images": [
        {
          "image": {
            "_reference": "image-bangs"
          },
          "caption": {
            "_reference": "text-asset-bangs"
          }
        },
        {
          "image": {
            "_reference": "image-beardy"
          },
          "caption": {
            "_reference": "text-asset-beardy"
          }
        },
        {
          "image": {
            "_reference": "image-tiny_cairn"
          }
        },
        {
          "image": {
            "_reference": "image-wiry"
          }
        }
      ],
      "parent": {
        "_reference": "node-home"
      }
    },
    {
      "id": "text-asset-feed_list",
      "type": "text-asset",
      "name": "feed_list",
      "body": "<p>This is what a feed list looks like</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-feed_list"
        }
      ]
    },
    {
      "type": "feed",
      "id": "feed-techcrunch",
      "name": "techcrunch",
      "filename": "techcrunch.yml",
      "feedUrl": "http://techcrunch.com/feed"
    },
    {
      "type": "node",
      "id": "node-feed_list",
      "name": "Feed List",
      "filename": null,
      "node_name": "feed_list",
      "pageController": {
        "phone": "feed-list-phone",
        "tablet": "feed-list-tablet"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-feed_list"
      },
      "phoneHeaderImage": {
        "_reference": "image-bangs"
      },
      "tabletHeaderImage": {
        "_reference": "image-bangs"
      },
      "feeds": [
        {
          "feed": {
            "_reference": "feed-techcrunch"
          }
        }
      ],
      "parent": {
        "_reference": "node-home"
      }
    },
    {
      "id": "text-asset-locations",
      "type": "text-asset",
      "name": "locations",
      "body": "<p>A wild Locations List appears…</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-locations"
        }
      ]
    },
    {
      "type": "google-map-pin",
      "id": "google-map-pin-fullsteam",
      "name": "Fullsteam Brewery",
      "filename": "fullsteam.yml",
      "address": "726 Rigsbee Avenue, Durham, NC 27701",
      "lon": -78.899603,
      "lat": 36.002421,
      "website": null,
      "phoneNumber": null
    },
    {
      "id": "text-asset-Fullsteam Brewery",
      "type": "text-asset",
      "name": "Fullsteam Brewery",
      "body": "<p>Delicious farm fresh beer</p>",
      "contexts": [
        {
          "type": "google-map-pin",
          "id": "google-map-pin-fullsteam",
          "node": "node-locations"
        },
        {
          "type": "google-map-pin",
          "id": "google-map-pin-fullsteam",
          "node": "node-location_map"
        }
      ]
    },
    {
      "type": "google-map-pin",
      "id": "google-map-pin-geer_st",
      "name": "Geer Street Garden",
      "filename": "geer_st.yml",
      "address": "644 Foster Street, Durham, North Carolina 27701",
      "lon": -78.901185,
      "lat": 36.002696,
      "website": null,
      "phoneNumber": "555-123-1234"
    },
    {
      "id": "text-asset-Geer Street Garden",
      "type": "text-asset",
      "name": "Geer Street Garden",
      "body": "<p>Try the grilled pimento cheese sandwich.</p>",
      "contexts": [
        {
          "type": "google-map-pin",
          "id": "google-map-pin-geer_st",
          "node": "node-locations"
        },
        {
          "type": "google-map-pin",
          "id": "google-map-pin-geer_st",
          "node": "node-location_map"
        }
      ]
    },
    {
      "type": "google-map-pin",
      "id": "google-map-pin-pinhook",
      "name": "The Pinhook",
      "filename": "pinhook.yml",
      "address": "117 West Main Street, Durham, NC, 27701",
      "lon": -78.900626,
      "lat": 35.994657,
      "website": null,
      "phoneNumber": null
    },
    {
      "id": "text-asset-The Pinhook",
      "type": "text-asset",
      "name": "The Pinhook",
      "body": "<p>Good music, cheap drinks.</p>",
      "contexts": [
        {
          "type": "google-map-pin",
          "id": "google-map-pin-pinhook",
          "node": "node-locations"
        },
        {
          "type": "google-map-pin",
          "id": "google-map-pin-pinhook",
          "node": "node-location_map"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-locations",
      "name": "Locations Page",
      "filename": null,
      "node_name": "locations",
      "pageController": {
        "phone": "location-list",
        "tablet": "location-list"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-locations"
      },
      "images": [
        {
          "image": {
            "_reference": "image-bangs"
          },
          "caption": {
            "_reference": "text-asset-bangs"
          }
        },
        {
          "image": {
            "_reference": "image-beardy"
          },
          "caption": {
            "_reference": "text-asset-beardy"
          }
        },
        {
          "image": {
            "_reference": "image-bgoodman"
          }
        }
      ],
      "googleMapPins": [
        {
          "googleMapPin": {
            "_reference": "google-map-pin-fullsteam"
          },
          "caption": {
            "_reference": "text-asset-Fullsteam Brewery"
          }
        },
        {
          "googleMapPin": {
            "_reference": "google-map-pin-geer_st"
          },
          "caption": {
            "_reference": "text-asset-Geer Street Garden"
          }
        },
        {
          "googleMapPin": {
            "_reference": "google-map-pin-pinhook"
          },
          "caption": {
            "_reference": "text-asset-The Pinhook"
          }
        }
      ],
      "parent": {
        "_reference": "node-home"
      }
    },
    {
      "id": "text-asset-location_map",
      "type": "text-asset",
      "name": "location_map",
      "body": "",
      "contexts": [
        {
          "type": "node",
          "node": "node-location_map"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-location_map",
      "name": "Location Map",
      "filename": null,
      "node_name": "location_map",
      "pageController": {
        "phone": "google-map-phone",
        "tablet": "google-map-tablet"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-location_map"
      },
      "googleMapPins": [
        {
          "googleMapPin": {
            "_reference": "google-map-pin-fullsteam"
          },
          "caption": {
            "_reference": "text-asset-Fullsteam Brewery"
          }
        },
        {
          "googleMapPin": {
            "_reference": "google-map-pin-geer_st"
          },
          "caption": {
            "_reference": "text-asset-Geer Street Garden"
          }
        },
        {
          "googleMapPin": {
            "_reference": "google-map-pin-pinhook"
          },
          "caption": {
            "_reference": "text-asset-The Pinhook"
          }
        }
      ],
      "parent": {
        "_reference": "node-home"
      }
    },
    {
      "id": "text-asset-node_gallery_child_1",
      "type": "text-asset",
      "name": "node_gallery_child_1",
      "body": "<p>This is node 1.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-node_gallery_child_1"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-node_gallery_child_1",
      "name": "Node Gallery Child 1",
      "filename": null,
      "node_name": "node_gallery_child_1",
      "pageController": {
        "phone": "default",
        "tablet": "default"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-node_gallery_child_1"
      },
      "images": [
        {
          "image": {
            "_reference": "image-bangs"
          },
          "caption": {
            "_reference": "text-asset-bangs"
          }
        }
      ],
      "parent": {
        "_reference": "node-node_gallery"
      }
    },
    {
      "id": "text-asset-node_gallery_child_2",
      "type": "text-asset",
      "name": "node_gallery_child_2",
      "body": "<p>This is node 2.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-node_gallery_child_2"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-node_gallery_child_2",
      "name": "Node Gallery Child 2",
      "filename": null,
      "node_name": "node_gallery_child_2",
      "pageController": {
        "phone": "default",
        "tablet": "default"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-node_gallery_child_2"
      },
      "images": [
        {
          "image": {
            "_reference": "image-beardy"
          },
          "caption": {
            "_reference": "text-asset-beardy"
          }
        }
      ],
      "parent": {
        "_reference": "node-node_gallery"
      }
    },
    {
      "id": "text-asset-node_gallery_child_3",
      "type": "text-asset",
      "name": "node_gallery_child_3",
      "body": "<p>This is node 3.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-node_gallery_child_3"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-node_gallery_child_3",
      "name": "Node Gallery Child 3",
      "filename": null,
      "node_name": "node_gallery_child_3",
      "pageController": {
        "phone": "default",
        "tablet": "default"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-node_gallery_child_3"
      },
      "images": [
        {
          "image": {
            "_reference": "image-bgoodman"
          }
        }
      ],
      "parent": {
        "_reference": "node-node_gallery"
      }
    },
    {
      "id": "text-asset-node_gallery",
      "type": "text-asset",
      "name": "node_gallery",
      "body": "<p>Add some instructions here.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-node_gallery"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-node_gallery",
      "name": "Node Gallery",
      "filename": null,
      "node_name": "node_gallery",
      "pageController": {
        "phone": "node-gallery",
        "tablet": "node-gallery"
      },
      "children": [
        {
          "_reference": "node-node_gallery_child_1"
        },
        {
          "_reference": "node-node_gallery_child_2"
        },
        {
          "_reference": "node-node_gallery_child_3"
        }
      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-node_gallery"
      },
      "parent": {
        "_reference": "node-home"
      }
    },
    {
      "id": "text-asset-videos_childless",
      "type": "text-asset",
      "name": "videos_childless",
      "body": "<p>Mulberry now supports cute animal videos.</p>\n\n<p>Humans respond favorably to a neotenized appearance. A neotenized appearance elicits sympathy from humans as well as protective urges. People with cuter faces are perceived to be “warmer,” more honest and more employable for jobs.</p>\n\n<p>Not only humans, but other “adult mammals” are hard-wired to have their “aggressive behavior” inhibited and exhibit “caring” and “nurturing” attitudes toward the appearance of “mammalian infants”. <a href=\"http://en.wikipedia.org/wiki/Cuteness\">http://en.wikipedia.org/wiki/Cuteness</a></p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-videos_childless"
        }
      ]
    },
    {
      "type": "video",
      "id": "video-baby_owls",
      "name": "baby_owls",
      "filename": "baby_owls.mp4",
      "streamed": false,
      "poster": {
        "url": "media/videos/posters/baby_owls.jpg",
        "filename": "baby_owls.jpg"
      }
    },
    {
      "id": "text-asset-baby_owls",
      "type": "text-asset",
      "name": "baby_owls",
      "body": "<p>Baby Owls!</p>",
      "contexts": [
        {
          "type": "video",
          "id": "video-baby_owls",
          "node": "node-videos_childless"
        },
        {
          "type": "video",
          "id": "video-baby_owls",
          "node": "node-videos"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-videos_childless",
      "name": "Videos Page (no children)",
      "filename": null,
      "node_name": "videos_childless",
      "pageController": {
        "phone": "videos-and-text-phone",
        "tablet": "videos-and-text-tablet"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-videos_childless"
      },
      "videos": [
        {
          "video": {
            "_reference": "video-baby_owls"
          },
          "caption": {
            "_reference": "text-asset-baby_owls"
          }
        }
      ],
      "parent": {
        "_reference": "node-videos"
      }
    },
    {
      "id": "text-asset-videos",
      "type": "text-asset",
      "name": "videos",
      "body": "<p>Mulberry now supports cute animal videos.</p>\n\n<p>Humans respond favorably to a neotenized appearance. A neotenized appearance elicits sympathy from humans as well as protective urges. People with cuter faces are perceived to be “warmer,” more honest and more employable for jobs.</p>\n\n<p>Not only humans, but other “adult mammals” are hard-wired to have their “aggressive behavior” inhibited and exhibit “caring” and “nurturing” attitudes toward the appearance of “mammalian infants”. <a href=\"http://en.wikipedia.org/wiki/Cuteness\">http://en.wikipedia.org/wiki/Cuteness</a></p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-videos"
        }
      ]
    },
    {
      "type": "video",
      "id": "video-schnauzer_puppy",
      "name": "schnauzer_puppy",
      "filename": "schnauzer_puppy.mp4",
      "streamed": false,
      "poster": {
        "url": "",
        "filename": "schnauzer_puppy.jpg"
      }
    },
    {
      "id": "text-asset-schnauzer_puppy",
      "type": "text-asset",
      "name": "schnauzer_puppy",
      "body": "<p>Ein schnauzer</p>",
      "contexts": [
        {
          "type": "video",
          "id": "video-schnauzer_puppy",
          "node": "node-videos"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-videos",
      "name": "Videos Page",
      "filename": null,
      "node_name": "videos",
      "pageController": {
        "phone": "videos-and-text-phone",
        "tablet": "videos-and-text-tablet"
      },
      "children": [
        {
          "_reference": "node-single_image_gallery"
        },
        {
          "_reference": "node-generic_child_page"
        },
        {
          "_reference": "node-videos_childless"
        }
      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-videos"
      },
      "videos": [
        {
          "video": {
            "_reference": "video-baby_owls"
          },
          "caption": {
            "_reference": "text-asset-baby_owls"
          }
        },
        {
          "video": {
            "_reference": "video-schnauzer_puppy"
          },
          "caption": {
            "_reference": "text-asset-schnauzer_puppy"
          }
        }
      ],
      "parent": {
        "_reference": "node-home"
      }
    },
    {
      "id": "text-asset-grid_child_two",
      "type": "text-asset",
      "name": "grid_child_two",
      "body": "<p>Just here to be a part of the grid view</p>\n\n<p>\"Twinkle, twinkle, little bat!       How I wonder what you're at!\"</p>\n\n<p>You know the song, perhaps?'</p>\n\n<p>'I've heard something like it,' said Alice.</p>\n\n<p>'It goes on, you know,' the Hatter continued, 'in this way:&mdash;</p>\n\n<p>Here the Dormouse shook itself, and began singing in its sleep 'Twinkle,  twinkle, twinkle, twinkle&mdash;' and went on so long that they had to pinch  it to make it stop.</p>\n\n<p>'Well, I'd hardly finished the first verse,' said the Hatter, 'when the  Queen jumped up and bawled out, \"He's murdering the time! Off with his  head!\"'</p>\n\n<p>'How dreadfully savage!' exclaimed Alice.</p>\n\n<p>'And ever since that,' the Hatter went on in a mournful tone, 'he won't  do a thing I ask! It's always six o'clock now.'</p>\n\n<p>A bright idea came into Alice's head. 'Is that the reason so many  tea-things are put out here?' she asked.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-grid_child_two"
        }
      ]
    },
    {
      "type": "image",
      "id": "image-cooper_holga",
      "name": "cooper_holga",
      "filename": "cooper_holga.jpg",
      "streamed": false,
      "featured": {
        "filename": "cooper_holga.jpg",
        "width": 75,
        "height": 75
      },
      "featuredSmall": {
        "filename": "cooper_holga.jpg",
        "width": 75,
        "height": 75
      },
      "gallery": {
        "filename": "cooper_holga.jpg",
        "width": 75,
        "height": 75
      },
      "original": {
        "filename": "cooper_holga.jpg",
        "width": 75,
        "height": 75
      }
    },
    {
      "type": "node",
      "id": "node-grid_child_two",
      "name": "Grid Child Two",
      "filename": null,
      "node_name": "grid_child_two",
      "pageController": {
        "phone": "default",
        "tablet": "default"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-grid_child_two"
      },
      "featuredImage": {
        "image": {
          "_reference": "image-cooper_holga"
        }
      },
      "parent": {
        "_reference": "node-grid"
      }
    },
    {
      "id": "text-asset-grid_child_three",
      "type": "text-asset",
      "name": "grid_child_three",
      "body": "<p>Just here to be a part of the grid view</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-grid_child_three"
        }
      ]
    },
    {
      "type": "image",
      "id": "image-cooper_beach",
      "name": "cooper_beach",
      "filename": "cooper_beach.jpg",
      "streamed": false,
      "featured": {
        "filename": "cooper_beach.jpg",
        "width": 75,
        "height": 75
      },
      "featuredSmall": {
        "filename": "cooper_beach.jpg",
        "width": 75,
        "height": 75
      },
      "gallery": {
        "filename": "cooper_beach.jpg",
        "width": 75,
        "height": 75
      },
      "original": {
        "filename": "cooper_beach.jpg",
        "width": 75,
        "height": 75
      }
    },
    {
      "type": "node",
      "id": "node-grid_child_three",
      "name": "Grid Child Three has a moderate title",
      "filename": null,
      "node_name": "grid_child_three",
      "pageController": {
        "phone": "default",
        "tablet": "default"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-grid_child_three"
      },
      "featuredImage": {
        "image": {
          "_reference": "image-cooper_beach"
        }
      },
      "parent": {
        "_reference": "node-grid"
      }
    },
    {
      "id": "text-asset-grid_child_one",
      "type": "text-asset",
      "name": "grid_child_one",
      "body": "<p>Just here to be a part of the grid view</p>\n\n<p>'I HAVE tasted eggs, certainly,' said Alice, who was a very truthful  child; 'but little girls eat eggs quite as much as serpents do, you  know.'</p>\n\n<p>'I don't believe it,' said the Pigeon; 'but if they do, why then they're  a kind of serpent, that's all I can say.'</p>\n\n<p>This was such a new idea to Alice, that she was quite silent for a  minute or two, which gave the Pigeon the opportunity of adding, 'You're  looking for eggs, I know THAT well enough; and what does it matter to me  whether you're a little girl or a serpent?'</p>\n\n<p>'It matters a good deal to ME,' said Alice hastily; 'but I'm not looking  for eggs, as it happens; and if I was, I shouldn't want YOURS: I don't  like them raw.'</p>\n\n<p>'Well, be off, then!' said the Pigeon in a sulky tone, as it settled  down again into its nest. Alice crouched down among the trees as well as  she could, for her neck kept getting entangled among the branches, and  every now and then she had to stop and untwist it. After a while she  remembered that she still held the pieces of mushroom in her hands, and  she set to work very carefully, nibbling first at one and then at the  other, and growing sometimes taller and sometimes shorter, until she had  succeeded in bringing herself down to her usual height.</p>\n\n<p>It was so long since she had been anything near the right size, that it  felt quite strange at first; but she got used to it in a few minutes,  and began talking to herself, as usual. 'Come, there's half my plan done  now! How puzzling all these changes are! I'm never sure what I'm going  to be, from one minute to another! However, I've got back to my right  size: the next thing is, to get into that beautiful garden&mdash;how IS that  to be done, I wonder?' As she said this, she came suddenly upon an open  place, with a little house in it about four feet high. 'Whoever lives  there,' thought Alice, 'it'll never do to come upon them THIS size: why,  I should frighten them out of their wits!' So she began nibbling at the  righthand bit again, and did not venture to go near the house till she  had brought herself down to nine inches high.</p>\n\n<p>For a minute or two she stood looking at the house, and wondering what  to do next, when suddenly a footman in livery came running out of the  wood&mdash;(she considered him to be a footman because he was in livery:  otherwise, judging by his face only, she would have called him a  fish)&mdash;and rapped loudly at the door with his knuckles. It was opened  by another footman in livery, with a round face, and large eyes like a  frog; and both footmen, Alice noticed, had powdered hair that curled all  over their heads. She felt very curious to know what it was all about,  and crept a little way out of the wood to listen.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-grid_child_one"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-grid_child_one",
      "name": "Grid Child One",
      "filename": null,
      "node_name": "grid_child_one",
      "pageController": {
        "phone": "default",
        "tablet": "default"
      },
      "children": [
        {
          "_reference": "node-grid_child_two"
        },
        {
          "_reference": "node-grid_child_three"
        }
      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-grid_child_one"
      },
      "featuredImage": {
        "image": {
          "_reference": "image-cooper_beach"
        }
      },
      "parent": {
        "_reference": "node-grid"
      }
    },
    {
      "id": "text-asset-grid_child_four",
      "type": "text-asset",
      "name": "grid_child_four",
      "body": "<p>Just here to be a part of the grid view</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-grid_child_four"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-grid_child_four",
      "name": "Grid Child Four",
      "filename": null,
      "node_name": "grid_child_four",
      "pageController": {
        "phone": "default",
        "tablet": "default"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-grid_child_four"
      },
      "featuredImage": {
        "image": {
          "_reference": "image-cooper_holga"
        }
      },
      "parent": {
        "_reference": "node-grid"
      }
    },
    {
      "id": "text-asset-grid_child_five",
      "type": "text-asset",
      "name": "grid_child_five",
      "body": "<p>Just here to be a part of the grid view</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-grid_child_five"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-grid_child_five",
      "name": "Grid Child Five has a really really long title for it",
      "filename": null,
      "node_name": "grid_child_five",
      "pageController": {
        "phone": "default",
        "tablet": "default"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-grid_child_five"
      },
      "featuredImage": {
        "image": {
          "_reference": "image-cooper_beach"
        }
      },
      "parent": {
        "_reference": "node-grid"
      }
    },
    {
      "id": "text-asset-grid_child_six",
      "type": "text-asset",
      "name": "grid_child_six",
      "body": "<p>Just here to be a part of the grid view</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-grid_child_six"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-grid_child_six",
      "name": "Grid Child Six has a holy moly this title is so utterly out of proportion to anything sane what on earth was the author thinking when he wrote this oh my good lord why would you ever make the title so ridiculously stupidly verbose?",
      "filename": null,
      "node_name": "grid_child_six",
      "pageController": {
        "phone": "default",
        "tablet": "default"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-grid_child_six"
      },
      "featuredImage": {
        "image": {
          "_reference": "image-cooper_holga"
        }
      },
      "parent": {
        "_reference": "node-grid"
      }
    },
    {
      "id": "text-asset-grid",
      "type": "text-asset",
      "name": "grid",
      "body": "<p>This is some dummy text for the grid view page, just to see what it looks like with some body text, because you never know if there will be body text on a page. You know? Body text can crop up pretty much anywhere.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-grid"
        }
      ]
    },
    {
      "type": "image",
      "id": "image-puppy-header",
      "name": "puppy-header",
      "filename": "puppy-header.jpg",
      "streamed": false,
      "featured": {
        "filename": "puppy-header.jpg",
        "width": 1024,
        "height": 255
      },
      "featuredSmall": {
        "filename": "puppy-header.jpg",
        "width": 1024,
        "height": 255
      },
      "gallery": {
        "filename": "puppy-header.jpg",
        "width": 1024,
        "height": 255
      },
      "original": {
        "filename": "puppy-header.jpg",
        "width": 1024,
        "height": 255
      }
    },
    {
      "type": "data-asset",
      "id": "data-asset-test",
      "name": "test",
      "filename": "test.json",
      "dataType": "FooDataAsset",
      "value": "{\"type\":\"FooDataAsset\",\"foo\":\"bar\"}"
    },
    {
      "type": "node",
      "id": "node-grid",
      "name": "Grid",
      "filename": null,
      "node_name": "grid",
      "pageController": {
        "phone": "grid-view",
        "tablet": "grid-view"
      },
      "children": [
        {
          "_reference": "node-grid_child_one"
        },
        {
          "_reference": "node-grid_child_two"
        },
        {
          "_reference": "node-grid_child_three"
        },
        {
          "_reference": "node-grid_child_four"
        },
        {
          "_reference": "node-grid_child_five"
        },
        {
          "_reference": "node-grid_child_six"
        }
      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-grid"
      },
      "phoneHeaderImage": {
        "_reference": "image-puppy-header"
      },
      "tabletHeaderImage": {
        "_reference": "image-puppy-header"
      },
      "dataAssets": [
        {
          "dataAsset": {
            "_reference": "data-asset-test"
          }
        }
      ],
      "parent": {
        "_reference": "node-home"
      }
    },
    {
      "id": "text-asset-default_template",
      "type": "text-asset",
      "name": "default_template",
      "body": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo augue. Ut tempor lacinia odio aliquam dictum. Nulla sed tempor sapien. Nulla non risus eu ipsum commodo facilisis non sit amet libero. Donec at ante et massa iaculis imperdiet. In consequat urna quis massa dictum eget tincidunt nisi dapibus. Etiam fringilla justo nulla, ac mollis sem. Nam euismod consequat nisi sit amet hendrerit. Fusce tincidunt porta lorem, sed interdum est hendrerit id. Phasellus a consequat tellus. Donec eget eros felis. In tristique est at nibh cursus id scelerisque turpis iaculis. Mauris malesuada metus in massa cursus eget interdum libero dignissim. Donec scelerisque luctus nulla, nec adipiscing est faucibus vel.</p>\n\n<p>Nulla eu orci non ligula semper ultricies. Praesent sollicitudin luctus neque, ut pharetra arcu adipiscing nec. Aliquam condimentum posuere nulla, a varius diam condimentum sit amet. Suspendisse egestas, ipsum nec fringilla tristique, mauris nisi pretium ligula, a suscipit elit purus ac lacus. Sed a sagittis augue. Morbi feugiat consectetur felis, elementum vulputate tortor tincidunt ut. Vestibulum semper, felis ac aliquet auctor, metus tortor mattis lorem, in adipiscing lacus massa in quam. Nam tempor turpis in nibh bibendum eu egestas dolor dapibus. Proin quis ipsum vitae tellus semper imperdiet. Suspendisse hendrerit nisi sit amet nisl fermentum facilisis. Proin massa velit, pellentesque id eleifend a, suscipit eu arcu. Nunc a urna et turpis euismod pharetra ac vitae nulla.</p>\n\n<p>Proin gravida odio non nisl sollicitudin vel mattis massa tincidunt. Mauris fermentum dictum neque, eu posuere sem hendrerit luctus. Aliquam posuere dictum purus, vel elementum justo accumsan nec. Vestibulum lacus sem, condimentum auctor molestie porttitor, volutpat et dui. Morbi non diam a ipsum porta tempor quis at elit. Nunc at felis eu velit pulvinar pharetra commodo nec risus. Donec sagittis cursus egestas. Duis ac ante sed orci condimentum adipiscing. Morbi molestie fermentum lectus id aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel enim nec elit vulputate viverra nec in nibh. Proin hendrerit turpis nec libero placerat posuere.</p>\n\n<p>Nam fringilla semper augue, nec ullamcorper arcu dignissim sit amet. Nulla non erat eu enim mattis sagittis eget et justo. Mauris nibh metus, mattis rutrum iaculis vel, pulvinar quis neque. Mauris id malesuada metus. Aenean imperdiet dignissim leo non aliquam. Pellentesque eleifend volutpat iaculis. Donec pretium mi porttitor turpis rhoncus luctus. Ut quis nisl in nulla accumsan vulputate. Aenean vulputate tincidunt nisl vitae eleifend.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-default_template"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-default_template",
      "name": "Default Template",
      "filename": null,
      "node_name": "default_template",
      "pageController": {
        "phone": "default",
        "tablet": "default"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-default_template"
      },
      "parent": {
        "_reference": "node-home"
      }
    },
    {
      "id": "text-asset-home",
      "type": "text-asset",
      "name": "home",
      "body": "<p>This is some sample content. You should replace it with your own.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-home"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-home",
      "name": "Home",
      "filename": null,
      "node_name": "home",
      "pageController": {
        "phone": "home-phone",
        "tablet": "home-tablet"
      },
      "children": [
        {
          "_reference": "node-audio_list"
        },
        {
          "_reference": "node-image_gallery"
        },
        {
          "_reference": "node-fullscreen_images"
        },
        {
          "_reference": "node-feed_list"
        },
        {
          "_reference": "node-locations"
        },
        {
          "_reference": "node-location_map"
        },
        {
          "_reference": "node-node_gallery"
        },
        {
          "_reference": "node-videos"
        },
        {
          "_reference": "node-grid"
        },
        {
          "_reference": "node-default_template"
        }
      ],
      "custom": {
        "background_image": "bangs.jpg"
      },
      "bodyText": {
        "_reference": "text-asset-home"
      },
      "phoneBackgroundImage": {
        "_reference": "image-bangs"
      },
      "tabletBackgroundImage": {
        "_reference": "image-bangs"
      }
    },
    {
      "id": "text-asset-subpage",
      "type": "text-asset",
      "name": "subpage",
      "body": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-subpage"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-subpage",
      "name": "Subpage",
      "filename": null,
      "node_name": "subpage",
      "pageController": {
        "phone": "default",
        "tablet": "default"
      },
      "children": [

      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-subpage"
      },
      "parent": {
        "_reference": "node-about"
      }
    },
    {
      "id": "text-asset-about",
      "type": "text-asset",
      "name": "about",
      "body": "<h1 id=\"about-durham\">About Durham</h1>\n\n<h2 id=\"a-history-of-transformation--a-city-on-the-move\">A History of Transformation – A City on the Move</h2>\n\n<p>Whether you know of Durham as the “City of Medicine” or the “Bull City” it’s easy to see why so many residents and businesses call Durham home.\nLocated halfway between the Great Smoky Mountains and the beaches of the Atlantic, Durham is a community that is home to over 300 restaurants, more than 40 annual festivals, Duke and North Carolina Central universities, Durham Bulls Triple-A baseball, art and science museums, and world-class medical facilities just to name a few. With more than 5.2 million visitors annually, Durham is the top destination of arrivals at RDU International Airport.\nIt doesn’t take long for visitors to the City to notice the changing face of Durham, but the current exciting transformation is just one of many transitions the City has gone through as it has shaped a vibrant history over the last 180 years to become the world-class City it is today.\nDurham was nicknamed the “Bull City” in the late 1800s when the Blackwell Tobacco Company named its product “Bull” Durham Tobacco. By the time James B. Duke of the American Tobacco Company purchased the Blackwell Tobacco Company in 1898, Bull Durham was the most famous trademark in the world.\nThe “Bull City” prospered as a manufacturing hub for the tobacco industry and textiles for many decades, but has since transformed itself into a place where shopping thrives and high-tech industry flourishes with upscale housing in the same classic buildings where tobacco giants American Tobacco and Liggett-Meyers once made this City their industrial home.</p>\n\n<h2 id=\"technology-and-medicine\">Technology and Medicine</h2>\n\n<p>With the birth of the Research Triangle Park (RTP) in the 1950s, Durham began to take on a new look that has evolved into a global center for information technology, biotechnology, pharmaceuticals, and medicine. The City of Durham is known as the “City of Medicine,” with healthcare as a major industry including more than 300 medical and health-related companies and medical practices with a combined payroll exceeding $1.5 billion annually.\nSince its founding in 1924, Duke University has grown into one of the most prestigious private universities in the world and its medical center ranks annually among the top in the nation. The university is the largest employer in Durham, providing jobs for more than 18,000 residents. The City is also home to North Carolina Central University (NCCU), which has recently embarked on an ambitious plan for growth, particularly in the area of biotechnology research. Durham Technical Community College rounds out the community’s post-secondary educational institutions and offers traditional academic and vocational training as well as customized programs to meet changing industry needs.</p>",
      "contexts": [
        {
          "type": "node",
          "node": "node-about"
        }
      ]
    },
    {
      "type": "node",
      "id": "node-about",
      "name": "About",
      "filename": null,
      "node_name": "about",
      "pageController": {
        "phone": "default",
        "tablet": "about-page"
      },
      "children": [
        {
          "_reference": "node-subpage"
        }
      ],
      "custom": {
      },
      "bodyText": {
        "_reference": "text-asset-about"
      }
    }
  ],
  "app": {
    "locale": "en-US",
    "homeNodeId": "node-home",
    "aboutNodeId": "node-about",
    "sharingUrl": "http://toura.com",
    "sharingText": "${name}",
    "aboutEnabled": true,
    "name": "mulberry's kitchensink",
    "theme": {
      "name": "default"
    },
    "os": [
      "ios",
      "android"
    ],
    "type": [
      "phone",
      "tablet"
    ],
    "jquery": true,
    "app_id": {
      "android": {
        "phone": "com.toura.app2_fake"
      },
      "ios": {
        "phone": "com.toura.app2.fake.phone",
        "tablet": "com.toura.app2.fake.tablet"
      }
    },
    "urban_airship": {
      "development": {
        "app_key": "dev_app_key",
        "app_secret": "dev_app_secret"
      },
      "production": {
        "app_key": "prod_app_key",
        "app_secret": "prod_app_secret"
      },
      "android": {
        "transport": "c2dm",
        "c2dm_sender": "c2dmsender@mail.com"
      }
    },
    "flurry": {
      "ios": {
        "api_key": "flurry_ios_api_key"
      },
      "android": {
        "api_key": "flurry_ios_api_key"
      }
    },
    "id": "mulberry's kitchensink",
    "facebookApiKey": null,
    "twitterCustomerKey": null,
    "twitterCustomerSecret": null
  },
  "appVersion": "4.1.0"
};