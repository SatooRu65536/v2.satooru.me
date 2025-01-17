'use client';

import type { Place } from '@/types';
import type { MapLayerMouseEvent } from '@vis.gl/react-maplibre';
import type { ReactElement } from 'react';
import { Map as MapLibre } from '@vis.gl/react-maplibre';
import * as React from 'react';
import { useCallback } from 'react';
import styles from './index.module.scss';
import Marker from './Marker';
import 'maplibre-gl/dist/maplibre-gl.css';

export type Markers = Record<string, Place[]>;

interface Props {
  markers: Markers;
}

function Map({ markers }: Props): ReactElement {
  const handleRightClick = useCallback((_e: MapLayerMouseEvent) => {
  }, []);

  return (
    <MapLibre
      className={styles.map}
      initialViewState={{
        longitude: 136.899049,
        latitude: 35.185731,
        zoom: 7,
      }}
      mapStyle="/map/style.json"
      onContextMenu={handleRightClick}
    >
      {Object.entries(markers).map(([type, ms]) =>
        ms.map((m) => <Marker key={`${type}-${m.name}`} place={m} type={type} />),
      )}
    </MapLibre>
  );
}

export default Map;
