import type { ReactElement } from 'react';

import type { Markers } from './Map';
import Header from '@/components/bases/Header';

import { animals } from '@/Const/Cisit/animals';
import { castles } from '@/Const/Cisit/castles';
import { kofuns } from '@/Const/Cisit/kofuns';
import { others } from '@/Const/Cisit/others';
import styles from './index.module.scss';
import Map from './Map';

const markers: Markers = { castles, kofuns, animals, others };

function MapPage(): ReactElement {
  return (
    <>
      <Header fixed />
      <main className={styles.container}>
        <Map markers={markers} />
      </main>
    </>
  );
}

export default MapPage;
