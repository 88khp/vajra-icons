import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Vajra UI Icons',
  tagline: "Lucide icon adapters for Vajra UI's icon contract",
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
    // Keep the plain webpack bundler rather than rspack ("Faster") — this
    // site's react-native-web-webpack-plugin relies on webpack's
    // resolve.mainFields/alias merging behavior, which is simpler to reason
    // about than rspack's for a site this small.
    faster: false,
  },

  url: 'https://88khp.github.io',
  baseUrl: '/vajra-icons/',

  organizationName: '88khp',
  projectName: 'vajra-icons',

  onBrokenLinks: 'throw',

  plugins: ['./plugins/react-native-web-webpack-plugin.ts'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Vajra UI Icons',
      logo: {
        alt: 'Vajra UI Icons Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/88khp/vajra-icons',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.npmjs.com/package/@88khp/vajra-icons',
          label: 'npm',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/88khp/vajra-icons',
            },
            {
              label: 'npm',
              href: 'https://www.npmjs.com/package/@88khp/vajra-icons',
            },
            {
              label: 'Changelog',
              href: 'https://github.com/88khp/vajra-icons/blob/main/CHANGELOG.md',
            },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'Vajra UI (styled)',
              href: 'https://www.npmjs.com/package/@88khp/vajra-ui',
            },
            {
              label: 'Vajra UI Core (headless)',
              href: 'https://www.npmjs.com/package/@88khp/vajra-core',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 88khp. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
