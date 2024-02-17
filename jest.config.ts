/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

// @ts-ignore
import type { Config } from "jest";

const config: Config = {
  resetMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
};

export default config;
