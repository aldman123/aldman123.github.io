export default {
  "title": "aldBlog",
  "tagline": "Casting spells and painfully aware of my fails",
  "url": "https://aldman123.github.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "aldman123",
  "projectName": "aldman123.github.io",
  "themeConfig": {
    "navbar": {
      "title": "aldBlog",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "welcome",
          "position": "left",
          "label": "Welcome",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/aldman123/aldman123.github.io",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Pages",
          "items": [
            {
              "label": "Welcome",
              "to": "/docs/welcome"
            },
            {
              "label": "Blog",
              "to": "/blog"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/aldman123"
            },
            {
              "label": "Reddit",
              "href": "https://www.reddit.com/user/Aldman123"
            },
            {
              "label": "alexander@aldridge.ca",
              "href": "mailto:alexander@aldridge.ca"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Alexander Aldridge. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\alexa\\Documents\\aldman123.github.io\\sidebars.js",
          "editUrl": "https://github.com/aldman123/aldman123.github.io"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/aldman123/aldman123.github.io/blog/"
        },
        "theme": {
          "customCss": "C:\\Users\\alexa\\Documents\\aldman123.github.io\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};