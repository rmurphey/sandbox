mulberry.pageDef('about-page', {
  "screens": [
    {
      "name": "index",
      "regions": [
        {
          "size": "fixed",
          "scrollable": false,
          "type": "row",
          "components": [
            "PageNav"
          ]
        },
        {
          "type": "row",
          "regions": [
            {
              "type": "row",
              "size": "fixed",
              "className": "header-box",
              "components": [
                "custom.PageHeader"
              ]
            },
            {
              "type": "row",
              "scrollable": true,
              "regions": [
                {
                  "type": "row",
                  "className": "bounder",
                  "regions": [
                    {
                      "type": "column",
                      "size": "flex",
                      "scrollable": false,
                      "className": "body-box",
                      "components": [
                        "BodyText"
                      ]
                    },
                    {
                      "type": "column",
                      "size": "fixed",
                      "scrollable": false,
                      "className": "nav-box",
                      "components": [
                        "ChildNodes"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('audio-with-images-phone', {
  "type": "node",
  "capabilities": [
    "ImageGallery_ImageCaption",
    "ImageGalleryDetail",
    "Page_Images",
    "Page_Audios",
    "AudioList_AudioPlayer",
    "AudioList_AudioCaption"
  ],
  "screens": [
    {
      "name": "index",
      "backgroundImage": true,
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "className": "image-gallery",
          "components": [
            "ImageGallery"
          ]
        },
        {
          "className": "audio-gallery",
          "components": [
            "AudioPlayer"
          ]
        },
        {
          "className": "bottom",
          "scrollable": true,
          "components": [
            "AudioList",
            "ChildNodes",
            "AudioCaption",
            "ImageCaption",
            "BodyText"
          ]
        }
      ]
    },
    {
      "name": "detail",
      "regions": [
        {
          "className": "header",
          "components": [
            "DetailTitle"
          ]
        },
        {
          "components": [
            "ZoomableImageGallery"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('audio-with-images-tablet', {
  "type": "node",
  "capabilities": [
    "ImageGallery_ImageCaption",
    "ImageGalleryDetail",
    "Page_Images",
    "Page_Audios",
    "AudioList_AudioPlayer",
    "AudioList_AudioCaption",
    "Text_ChildNodes"
  ],
  "screens": [
    {
      "name": "index",
      "backgroundImage": true,
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "className": "image-container",
          "regions": [
            {
              "components": [
                "ImageGallery"
              ]
            },
            {
              "className": "caption",
              "components": [
                "ImageCaption"
              ]
            }
          ]
        },
        {
          "type": "row",
          "className": "text-and-child-nodes",
          "regions": [
            {
              "className": "body-text-container",
              "scrollable": true,
              "components": [
                "BodyText"
              ]
            },
            {
              "className": "child-nodes-container",
              "scrollable": true,
              "components": [
                "ChildNodes"
              ]
            }
          ]
        },
        {
          "className": "audio-container",
          "regions": [
            {
              "className": "audio-active-player",
              "regions": [
                {
                  "components": [
                    "AudioPlayer"
                  ]
                },
                {
                  "components": [
                    "AudioCaption"
                  ]
                }
              ]
            },
            {
              "className": "audio-list",
              "scrollable": true,
              "components": [
                "AudioList"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "detail",
      "regions": [
        {
          "className": "header",
          "components": [
            "DetailTitle"
          ]
        },
        {
          "components": [
            "ZoomableImageGallery"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('debug', {
  "screens": [
    {
      "name": "index",
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "scrollable": true,
          "components": [
            "Debug"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('default', {
  "type": "node",
  "screens": [
    {
      "name": "index",
      "backgroundImage": true,
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "scrollable": true,
          "className": "main-content",
          "components": [
            "PageHeaderImage",
            "BodyText",
            "ChildNodes"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('favorites', {
  "type": "node",
  "screens": [
    {
      "name": "index",
      "backgroundImage": true,
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "scrollable": true,
          "components": [
            "Favorites"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('feed-item', {
  "type": "detail",
  "capabilities": [
    "PageNav_FeedTitle"
  ],
  "screens": [
    {
      "name": "index",
      "backgroundImage": true,
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "scrollable": true,
          "components": [
            "FeedItemDetail"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('feed-list-phone', {
  "type": "node",
  "capabilities": [
    "FeedItemList_FeedItemPage"
  ],
  "screens": [
    {
      "name": "index",
      "backgroundImage": true,
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "scrollable": true,
          "components": [
            "PageHeaderImage",
            "FeedItemList"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('feed-list-tablet', {
  "type": "node",
  "capabilities": [
    "FeedItemList_FeedItemDetail"
  ],
  "screens": [
    {
      "name": "index",
      "backgroundImage": false,
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "regions": [
            {
              "backgroundImage": true,
              "scrollable": true,
              "components": [
                "ColumnHeaderImage",
                "FeedItemList"
              ]
            },
            {
              "scrollable": true,
              "components": [
                "FeedItemDetail"
              ]
            }
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('full-screen-images', {
  "type": "node",
  "capabilities": [
    "Page_FullScreenImages"
  ],
  "screens": [
    {
      "name": "index",
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "components": [
            "ZoomableImageGallery"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('google-map-phone', {
  "type": "node",
  "capabilities": [
    "Page_GoogleMapPhone"
  ],
  "screens": [
    {
      "name": "index",
      "backgroundImage": false,
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "className": "google-map",
          "components": [
            "GoogleMap"
          ]
        }
      ]
    },
    {
      "name": "detail",
      "backgroundImage": false,
      "regions": [
        {
          "className": "header",
          "components": [
            "DetailTitle"
          ]
        },
        {
          "scrollable": true,
          "components": [
            "PinInfo"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('google-map-tablet', {
  "type": "node",
  "capabilities": [
    "Page_GoogleMapTablet"
  ],
  "screens": [
    {
      "name": "index",
      "backgroundImage": false,
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "className": "pin-info",
          "components": [
            "PinInfo"
          ]
        },
        {
          "className": "google-map",
          "components": [
            "GoogleMap"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('grid-view', {
  "screens": [
    {
      "name": "index",
      "backgroundImage": true,
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "className": "page-header",
          "components": [
            "PageHeaderImage"
          ]
        },
        {
          "className": "grid",
          "scrollable": true,
          "components": [
            "BodyText",
            "ChildNodeGrid"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('home-phone', {
  "screens": [
    {
      "name": "index",
      "backgroundImage": true,
      "regions": [
        {
          "regions": [
            {
              "components": [

              ]
            },
            {
              "scrollable": true,
              "components": [
                "BodyText",
                "ChildNodes"
              ]
            }
          ]
        },
        {
          "className": "nav",
          "components": [
            "AppNav"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('home-tablet', {
  "screens": [
    {
      "name": "index",
      "backgroundImage": true,
      "regions": [
        {
          "className": "top",
          "regions": [
            {
              "components": [

              ]
            },
            {
              "className": "columns",
              "regions": [
                {
                  "scrollable": true,
                  "components": [
                    "BodyText"
                  ]
                },
                {
                  "scrollable": true,
                  "components": [
                    "ChildNodes"
                  ]
                }
              ]
            }
          ]
        },
        {
          "className": "nav",
          "components": [
            "AppNav"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('home-with-header-phone', {
  "screens": [
    {
      "name": "index",
      "backgroundImage": true,
      "regions": [
        {
          "className": "header-image",
          "components": [
            "PageHeaderImage"
          ]
        },
        {
          "scrollable": true,
          "components": [
            "BodyText",
            "ChildNodes"
          ]
        },
        {
          "className": "nav",
          "components": [
            "AppNav"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('home-with-header-tablet', {
  "screens": [
    {
      "name": "index",
      "backgroundImage": true,
      "regions": [
        {
          "className": "page-header",
          "components": [
            "PageHeaderImage"
          ]
        },
        {
          "scrollable": true,
          "components": [
            "BodyText",
            "ChildNodes"
          ]
        },
        {
          "className": "nav",
          "components": [
            "AppNav"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('hotspots', {
  "screens": [
    {
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "components": [
            "Hotspots"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('images-and-text-phone', {
  "capabilities": [
    "ImageGallery_ImageCaption",
    "ImageGalleryDetail",
    "Page_Images"
  ],
  "screens": [
    {
      "name": "index",
      "backgroundImage": true,
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "className": "image-container",
          "components": [
            "ImageGallery"
          ]
        },
        {
          "scrollable": true,
          "className": "caption-and-text",
          "components": [
            "ImageCaption",
            "ChildNodes",
            "BodyText"
          ]
        }
      ]
    },
    {
      "name": "detail",
      "regions": [
        {
          "className": "header",
          "components": [
            "DetailTitle"
          ]
        },
        {
          "components": [
            "ZoomableImageGallery"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('images-and-text-tablet', {
  "capabilities": [
    "ImageGallery_ImageCaption",
    "ImageGalleryDetail",
    "Page_Images",
    "Text_ChildNodes"
  ],
  "screens": [
    {
      "name": "index",
      "backgroundImage": true,
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "className": "image-container",
          "regions": [
            {
              "className": "image-gallery",
              "components": [
                "ImageGallery"
              ]
            },
            {
              "className": "caption",
              "components": [
                "ImageCaption"
              ]
            }
          ]
        },
        {
          "className": "text-and-child-nodes",
          "regions": [
            {
              "className": "body-text-container",
              "scrollable": true,
              "components": [
                "BodyText"
              ]
            },
            {
              "className": "child-nodes-container",
              "scrollable": true,
              "components": [
                "ChildNodes"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "detail",
      "regions": [
        {
          "className": "header",
          "components": [
            "DetailTitle"
          ]
        },
        {
          "components": [
            "ZoomableImageGallery"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('location-list', {
  "capabilities": [
    "ImageGalleryDetail"
  ],
  "screens": [
    {
      "name": "index",
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "scrollable": true,
          "components": [
            "NodeTitleBanner",
            "ImageGallery",
            "BodyText",
            "LocationList"
          ]
        }
      ]
    },
    {
      "name": "detail",
      "regions": [
        {
          "className": "detail-title",
          "components": [
            "DetailTitle"
          ]
        },
        {
          "components": [
            "ZoomableImageGallery"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('node-gallery', {
  "screens": [
    {
      "name": "index",
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "className": "drop-down-text",
          "components": [
            "DropDownText"
          ]
        },
        {
          "className": "node-gallery",
          "components": [
            "NodeGallery"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('search', {
  "capabilities": [
    "Page_Search"
  ],
  "screens": [
    {
      "name": "index",
      "regions": [
        {
          "className": "search-input",
          "components": [
            "SearchInput"
          ]
        },
        {
          "scrollable": true,
          "components": [
            "SearchResults"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('videos-and-text-phone', {
  "capabilities": [
    "Page_Videos",
    "VideoList_VideoPlayer",
    "VideoList_VideoCaption"
  ],
  "screens": [
    {
      "name": "index",
      "backgroundImage": true,
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "className": "player-container",
          "components": [
            "VideoPlayer"
          ]
        },
        {
          "className": "listing-and-children",
          "scrollable": true,
          "components": [
            "VideoList",
            "ChildNodes",
            "VideoCaption",
            "BodyText"
          ]
        }
      ]
    }
  ]
});

mulberry.pageDef('videos-and-text-tablet', {
  "capabilities": [
    "Page_Videos",
    "VideoList_VideoPlayer",
    "VideoList_VideoCaption",
    "Text_ChildNodes_VideoList"
  ],
  "screens": [
    {
      "name": "index",
      "backgroundImage": true,
      "regions": [
        {
          "className": "page-nav",
          "components": [
            "PageNav"
          ]
        },
        {
          "className": "video-container",
          "regions": [
            {
              "className": "player-container",
              "components": [
                "VideoPlayer"
              ]
            },
            {
              "className": "video-caption",
              "components": [
                "VideoCaption"
              ]
            }
          ]
        },
        {
          "className": "text-and-listings",
          "regions": [
            {
              "scrollable": true,
              "components": [
                "BodyText"
              ]
            },
            {
              "scrollable": true,
              "className": "listings-container",
              "components": [
                "VideoList",
                "ChildNodes"
              ]
            }
          ]
        }
      ]
    }
  ]
});

