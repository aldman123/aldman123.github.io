import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Media',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Read my ramblings on various books, video games, movies, or television I'm passionate about.
      </>
    ),
  },
  {
    title: 'Table Top',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        I play Dungeons and Dragons twice a week, and I love discussing the intricacies of rules, systems, and play styles.
      </>
    ),
  },
  {
    title: 'Computer Science',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I study Computer Science at the University of Victoria. I love language paradimes and various problem solving techniques.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
