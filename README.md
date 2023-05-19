# bard-api

[![NPM Version](https://img.shields.io/npm/v/bard-api.svg)](https://www.npmjs.com/package/bard-api) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/your-npm-module-name/blob/main/LICENSE)

An unofficial JS API module for [Google Bard](https://bard.google.com) for node.js and browser

## Installation

**node.js:**

To install the module, use the following command:

```bash
npm install @xelcior/bard-api
```

**Browser:**

Download the package and use the bundle in your script:

```html
<script src="dist/bard-api.min.js"></script>
```

OR use from CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/DK013/bard-api/dist/bard-api.min.js"></script>
```

## Usage

```javascript
const bardapi = require('@xelcior/bard-api');

const _bard = new bardapi("[SESSION TOKEN HERE]");

(async () => {
    const answer = await _bard.getAnswer('What is Google Bard?');
    console.log(answer); //use response
})();
```

###### How to obtain SESSION TOKEN:

1. Go to [bard.google.com](https://bard.google.com) and carry on with the onboarding process if you have not done already.
2. press `F12` to open **Developer Tools** and go to **Application** tab.
3. On the left hand side, Go to Cookies > https://bard.google.com
4. On the right hand side find and copy the value of `__Secure-1PSID` and use it as your **SESSION TOKEN**

## TO-DO

1. Use stream instead of waiting for response to reduce latency
2. I'd like to automate the process of accuring SESSION TOKEN but since that might need some kind of web crawler to read cookies from user's browser, which IS kinda illeagal, I'd rather not do it. 😅

## Contribution

Contributions are welcome! Follow the steps below to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the original repository.

Please ensure that your code adheres to the established coding standards and includes appropriate tests.

## Test

* create `.env` file in project root with `BARD_TOKEN="<SESSION TOKEN HERE>"` replacving with your own SESSION TOKEN. (See how to obtain Session Token in Usage section above)
* Run the following command
  ```bash
  npm run test
  ```

## License

This project is licensed under the [MIT License](https://github.com/dk013/bard-api/blob/main/LICENSE).
