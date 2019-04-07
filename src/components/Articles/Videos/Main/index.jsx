import React from 'react';

//components
import VideosList from '../../../widgets/VideosList'

const Index = () => {
  return (
    <div>
      <VideosList type="card" title={false} loadMore={true} start={0} amount={8} />
    </div>
  );
};

export default Index;