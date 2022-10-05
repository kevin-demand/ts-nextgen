module.exports = {
  env: {
      LEGACY_API_URL: 'https://api.tuffshed.com/api',
      LEGACY_API_AUTH_URL: 'https://888tuffshed.com/tsapi/token.php',
      LEGACY_API_KEY:
          'vZKpYEilJcNcSNDiPYUfS06qqp4j9lq218RC6l3W5T30L-pj2RFlUvKf7b2cAD2M02qoHIZl2u3yVJYHIhCj-japnRfK45ugacxj8Q2ufdBDeecZrxcw3iIK7px0Upqs7mQg6raHgEPFoHgPRubSVJ0qTvJSrUKEUx3ouy_d9O9sAI3fSyieQNEgZo7NvH7Ql645xw_VUv-e4QT7-9BaGSmi9B9oWtodBbRKUKhjiEpE9f1JCL1KEr1apkfFZajyJxDztJqSTgSxlQkVY5OGf9PyUh0tdalpXRZ5Kp9TkGcR9dsevqOEBf8N_tKNlZ0g8ZSM1xYpsnZb3nGwQcq-fFMDDtjBXznUq-BdgA5CGFWIy8oYM1gFc3SAxR7ufduyEl4SSdHMWr5TfcjXdaa0PteIJNa_HogY1aeKD8VrN8repc02D6fifNY4v2kdr5PI8MuyQpN1DeR5YXE-Po0OF4KyHdOGu15kdhZ0OkkVgTag5LVoroM5MxSbmWF7yM2Md3GIIODuNJYVvx86ye1OKQIApgCGgiLCsnzoyUWqBAJStYWCjnlIGIMy1kbJWKlKOIlH6xYCg88GuxkXg-UtJA',
      API_AUTH_URL: 'https://login.microsoftonline.com/tuffshed.com/oauth2/v2.0/token',
      API_CLIENT_ID: '9c37678e-0978-463c-8f57-091e1d547df7',
      API_CLIENT_SECRET: 'ZyYn8-seG7-91gdSc2CH5P_vf1~WfE-Qg2',
      API_SCOPE: 'api://api.prd.tuffshed.io/.default',
      MARKET_API: 'https://ts-marketlookup-prd-usnc-func.azurewebsites.net/api/marketInfo/',
      MARKET_API_CODE: '6SPap9OE9H/7UxIxh5o5/D0s2iIgQ19cpUMGdINkZ8qbLX5iJBQ0kQ==',
      GOOGLE_MAPS_KEY: 'AIzaSyD12DG2yLc4wmHbfdVsPzmtRHfuadrClvs',
  },
  async redirects() {
      return [
          {
              source: '/home',
              destination: '/',
              permanent: true,
          },
      ]
  },
}