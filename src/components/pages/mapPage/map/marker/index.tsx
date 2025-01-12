'use client';

import { Marker as MapLibreMarker } from '@vis.gl/react-maplibre';
import { Popup } from 'maplibre-gl';
import { ReactElement, useState } from 'react';

import styles from './index.module.scss';

import { Place } from '@/types';

interface Props {
  type: string;
  place: Place;
}

const getHtml = (name: string) => {
  return `<h2>${name}</h2>`;
};

const Marker = ({ place }: Props): ReactElement => {
  const { name, latitude, longitude } = place;
  const [popup] = useState(new Popup().setHTML(getHtml(name)).setOffset([0, -30]));

  return (
    <MapLibreMarker longitude={longitude} latitude={latitude} anchor="center" popup={popup} className={styles.marker}>
      <img alt="城" src="/map/castle.png" />
    </MapLibreMarker>
  );
};

export default Marker;
