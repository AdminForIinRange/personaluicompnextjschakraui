import NotFound from '@/app/not-found';
import Card from '@/components/presets/Card';
import React from 'react';

const Single = ({ params }) => {
  if (params.slug === 'cards') {
    return (
      <div>
        <Card />
      </div>
    );
  } else if (params.slug === 'modal') {
    return (
      <div>
        <hi>Modal</hi>
      </div>
    );
  } else if (params.slug === 'frames') {
    return (
      <div>
        <hi>Frames</hi>
      </div>
    );
  } else if (params.slug === 'animations') {
    return (
      <div>
        <hi>Animations</hi>
      </div>
    );
  } else if (params.slug === 'charts') {
    return (
      <div>
        <hi>Charts</hi>
      </div>
    );
  } else if (params.slug === 'loginForm') {
    return (
      <div>
        <hi>Login Form</hi>
      </div>
    );
  } else if (params.slug === 'Hero') {
    return (
      <div>
        <hi>Hero</hi>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default Single;
