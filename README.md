# amplemarket_challenge

A chrome extension that adds support for basic templates to Gmail.

More info [here](https://www.notion.so/Amplemarket-Coding-Challenge-51a233f9060c4a3298cbd4f38f391e6c).

# How to test

## Production

The app is deployed to Heroku on [this address](https://amplemarket-rfontes.herokuapp.com). To test it on Gmail, you can follow the instructions [here](https://inboxsdk.github.io/inboxsdk-docs/#running-your-hello-world-extension) (check the **Running your Hello World! Extension** section) pointing to the [plugin](./plugin) folder.

Open Gmail, click Compose and check the new icon on the side of the Send button!

## Development

1. Follow the instructions above to run in Production;
2. Run `yarn start-dev` in the project's root folder;
3. Replace the production URL in [`plugin/manifest.json`](./plugin/manifest.json) with the one of you local server (eg.: replace `https://amplemarket-rfontes.herokuapp.com/` with `http://localhost:3001/`, there should be two occurrences)
4. On Chrome, go to (chrome://extensions/)[chrome://extensions/] and click the Update button at the top of your screen;

# License

This project is available under the MIT License. For more information, check the [LICENSE](./LICENSE) file.
