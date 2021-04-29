
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','dc9'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','40b'),
  exact: true,
},
{
  path: '/blog/tags/skyrim',
  component: ComponentCreator('/blog/tags/skyrim','95b'),
  exact: true,
},
{
  path: '/blog/tags/video-games',
  component: ComponentCreator('/blog/tags/video-games','32e'),
  exact: true,
},
{
  path: '/blog/ulfric-is-a-bad-boy',
  component: ComponentCreator('/blog/ulfric-is-a-bad-boy','f05'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','acd'),
  
  routes: [
{
  path: '/docs/welcome',
  component: ComponentCreator('/docs/welcome','e40'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
