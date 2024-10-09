module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // Handle CSS imports (e.g., CSS Modules, styled-components)
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    // Handle image imports
    "\\.(png|jpg|jpeg|gif|svg)$": "jest-transform-stub",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/.next/"],
};
