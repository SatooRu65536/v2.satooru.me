import { ReactElement } from 'react';

import styles from './index.module.scss';
import Map, { Markers } from './map';

import Header from '@/components/bases/header';
import { animals } from '@/const/visit/animals';
import { castles } from '@/const/visit/castles';
import { kofuns } from '@/const/visit/kofuns';
import { others } from '@/const/visit/others';

const markers: Markers = { castles, kofuns, animals, others };

const MapPage = (): ReactElement => {
  return (
    <>
      <Header fixed />
      <main className={styles.container}>
        <Map markers={markers} />
      </main>
    </>
  );
};

export default MapPage;
