import React from 'react';
import DuckImage from '../assets/Duck.jpg';
import styles from 'components.homeView.sass';
import BlobGrid from '../../../components/BlobGrid';

export const HomeView = () => (
  <div>
    <BlobGrid width={559}
              height={533}
              viewBox='0 0 559 533' />
  </div>
);

export default HomeView;
