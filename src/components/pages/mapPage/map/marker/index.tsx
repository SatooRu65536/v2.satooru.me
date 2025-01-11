'use client';

import { Place } from '@/types';
import { Marker as MapLibreMarker } from '@vis.gl/react-maplibre';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import styles from './index.module.scss';
import { Popup } from 'maplibre-gl';

interface Props {
  type: string;
  place: Place;
}

const getHtml = (name: string, visitDate: string) => {
  return `<h2>${name}</h2>`;
};

const Marker = ({ type, place }: Props): ReactElement => {
  const { name, visitDate, latitude, longitude } = place;
  const [popup] = useState(new Popup().setHTML(getHtml(name, visitDate)).setOffset([0, -30]));

  return (
    <MapLibreMarker longitude={longitude} latitude={latitude} anchor="center" popup={popup} className={styles.marker}>
      <img src="/map/castle.png" />
    </MapLibreMarker>
  );
};

export default Marker;
