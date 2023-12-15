import React from 'react';
import { useParams } from 'react-router-dom';

const cards = [
  { title: 'Anti Wrinkle Treatment', link: '/botox' },
  { title: 'Dermal Fillers', link: '/dermalfillers' },
  { title: 'Secret RF', link: '/secretrf' },
  { title: 'HArmonyCA', link: '/harmonyca' },
  { title: 'Profhilo', link: '/profhilo' },
  { title: 'Facials', link: '/facials' },
  { title: 'Sclerotherapy', link: '/sclerotherapy' },
  { title: 'LED', link: '/led' },
  { title: 'Fat Dissolve', link: '/fatdissolve' },
  { title: 'Growth Factors', link: '/growthfactors' },
  { title: 'Special Package for Time Clinic', link: '/specialpackage' },
  { title: 'Consulation', link: '/consulation' },
  
];

const SinglePage = () => {
  const { link } = useParams();
  const card = cards.find((c) => c.link === `/${link}`);
  const title = card ? card.title : 'Not found';

  return (
    <div className='singlePage'>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
    </div>
  );
};

export default SinglePage;
