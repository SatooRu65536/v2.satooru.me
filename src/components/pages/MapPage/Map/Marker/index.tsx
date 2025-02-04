'use client';

import type { Place } from '@/types';
import type { ReactElement } from 'react';
import { Marker as MapLibreMarker } from '@vis.gl/react-maplibre';

import { Popup } from 'maplibre-gl';
import { useState } from 'react';

import styles from './index.module.scss';

interface Props {
  type: string;
  place: Place;
}

function getHtml(name: string) {
  return `<h2>${name}</h2>`;
}

function Marker({ place }: Props): ReactElement {
  const { name, latitude, longitude } = place;
  const [popup] = useState(new Popup().setHTML(getHtml(name)).setOffset([0, -30]));

  return (
    <MapLibreMarker anchor="center" className={styles.marker} latitude={latitude} longitude={longitude} popup={popup}>
      <img alt="城" src="/map/castle.png" />
    </MapLibreMarker>
  );
}

export default Marker;
