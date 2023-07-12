// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Neatlist Docs',
  tagline: 'Documentation for neatlist',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-test-site.com',

  baseUrl: '/',

  organizationName: 'Neatlist',
  projectName: 'neatlistdocs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Neatlist Docs',
        logo: {
          alt: 'Neatlist',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Tutorials', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub Repository',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Backend',
                to: '/docs/intro',
              },
              {
                label: 'Frontend',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Useful Links',
            items: [
              {
                label: 'Jira Kanban',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Slack',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },

            ],
          },
          {
            title: 'Baserow',
            items: [
              {
                label: 'Grid',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Docs',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Neatlist Documentation.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
