import { ReactElement, useMemo } from 'react';
import Map, { Markers } from './map';
import styles from './index.module.scss';
import Header from '@/components/bases/header';
import { castles } from '@/const/visit/castles';
import { kofuns } from '@/const/visit/kofuns';
import { animals } from '@/const/visit/animals';
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
