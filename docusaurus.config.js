/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'aldBlog',
  tagline: 'Ramblings of My Mind',
  url: 'https://aldman123.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'aldman123',
  projectName: 'aldman123.github.io',
  themeConfig: {
    navbar: {
      title: 'aldBlog',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'welcome',
          position: 'left',
          label: 'Welcome',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/aldman123/aldman123.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Pages',
          items: [
            {
              label: 'Welcome',
              to: '/docs/welcome',
            },
            {
              label: 'Blog',
              to: '/blog'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/aldman123',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/user/Aldman123',
            },
            {
              label: 'alexander@aldridge.ca',
              href: 'mailto:alexander@aldridge.ca',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alexander Aldridge. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/aldman123/aldman123.github.io',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/aldman123/aldman123.github.io/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
