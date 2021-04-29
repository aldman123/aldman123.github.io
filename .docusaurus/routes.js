
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
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
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
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
