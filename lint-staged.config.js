module.exports = {
  '*.{ts,tsx}': ["bash -c 'npm run types:check'", 'npm run format:check'],
};
