'use client';

import * as React from 'react';
import { MapLayerMouseEvent, Map as MapLibre } from '@vis.gl/react-maplibre';
import styles from './index.module.scss';
import 'maplibre-gl/dist/maplibre-gl.css';
import { ReactElement, useCallback } from 'react';
import { Place } from '@/types';
import Marker from './marker';

export type Markers = Record<string, Place[]>;

interface Props {
  markers: Markers;
}

const Map = ({ markers }: Props): ReactElement => {
  const handleRightClick = useCallback((e: MapLayerMouseEvent) => {
    console.log(`{
  name: '',
  latitude: ${e.lngLat.lat},
  longitude: ${e.lngLat.lng},
  visitDate: '年月日',
},`);
  }, []);

  return (
    <MapLibre
      initialViewState={{
        longitude: 136.899049,
        latitude: 35.185731,
        zoom: 7,
      }}
      onContextMenu={handleRightClick}
      className={styles.map}
      mapStyle="/map/style.json"
    >
      {Object.entries(markers).map(([type, ms]) =>
        ms.map((m) => <Marker key={`${type}-${m.name}`} place={m} type={type} />),
      )}
    </MapLibre>
  );
};

export default Map;
