import type { Plugin } from '@docusaurus/types';

/**
 * Aliases react-native -> react-native-web so the icon components (which
 * import from lucide-react-native + react-native-svg, both of which target
 * react-native under the hood) can render in the browser for the live icon
 * grid. Unlike the vajra-ui-core/vajra-ui sites, this package has no
 * dependency on @devraj-labs/vajra-ui-core.
 *
 * @devraj-labs/vajra-ui-icons itself is a normal published npm dependency
 * here (see package.json) — the site consumes it the same way any real
 * consumer would, no local symlink or dist/ alias needed. Its dist/ output
 * is compiled with jsx: "react-native" (JSX left untransformed, meant for
 * a downstream RN bundler) — webpack's default rules skip node_modules, so
 * that JSX never gets transformed. The babel-loader rule below runs it
 * through @babel/preset-react instead, same fix as the vajra-ui-core site
 * applies for its own package.
 *
 * react-native-svg's package.json has a "react-native": "src/index.ts"
 * field pointing at raw, uncompiled source meant for a Metro/RN bundler,
 * which pulls in real react-native internals (requireNativeComponent etc.)
 * that webpack can't parse. mainFields below fixes this for the *client*
 * compiler. The *server* (SSR) compiler still chokes on it even with the
 * same resolve config, because IconGrid's `require('@devraj-labs/...')`
 * call lives inside a <BrowserOnly> render callback — never executed
 * during SSR, but still statically present in the server bundle's module
 * graph, so webpack tries to parse it anyway. Since it's genuinely never
 * needed server-side, marking it (and its transitive react-native-ish
 * deps) as externals for the server compiler is the correct fix, not just
 * a workaround: webpack skips bundling them entirely rather than needing
 * to successfully resolve/parse something that will never run in Node.
 */
export default function reactNativeWebPlugin(): Plugin {
  return {
    name: 'react-native-web-webpack-plugin',
    configureWebpack(_config, isServer) {
      return {
        mergeStrategy: { 'resolve.mainFields': 'replace', 'resolve.extensions': 'prepend' },
        resolve: {
          alias: {
            'react-native$': 'react-native-web',
          },
          mainFields: ['browser', 'module', 'main'],
          extensions: ['.web.js', '.web.jsx', '.web.ts', '.web.tsx', '.js', '.jsx', '.ts', '.tsx'],
        },
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              include: [/node_modules\/@devraj-labs\/vajra-ui-icons/],
              use: {
                loader: require.resolve('babel-loader'),
                options: {
                  presets: [require.resolve('@babel/preset-react')],
                },
              },
            },
          ],
        },
        ...(isServer
          ? {
              externals: [
                '@devraj-labs/vajra-ui-icons',
                'lucide-react-native',
                'react-native-svg',
              ],
            }
          : {}),
      };
    },
  };
}
