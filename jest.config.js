module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
  roots: ["<rootDir>"],
  setupFiles: ["<rootDir>/test/setupTests.js"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
    "\\.graphql$": ["graphql-let/jestTransformer", { subsequentTransformer: "babel-jest" }],
    ".+\\.(css|styl|less|sass|scss)$": "<rootDir>/node_modules/jest-css-modules-transform",
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
};
