module.exports = {
  preset: 'react-native',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|lucide-react-native|react-native-svg)/)',
  ],
  // The react-native preset's Jest resolver honors package.json's "react-native"
  // export condition, which points lucide-react-native at its ESM .mjs build —
  // outside Jest's default transform glob, so it fails to parse. Force the CJS
  // build instead, same workaround vajra-ui's root jest.config.js uses for
  // @devraj-labs/vajra-ui-core's own exports map.
  moduleNameMapper: {
    '^lucide-react-native$': '<rootDir>/node_modules/lucide-react-native/dist/cjs/lucide-react-native.js',
  },
};
