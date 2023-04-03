import { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from '../../types/city';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Offer } from '../../types/offer';

type MapProps = {
  city: City;
  points: Offer[];
  activeCard: Offer | undefined;
  size: {
    height: string;
    width: string;
    margin: string;
  };
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapProps): JSX.Element {
  const { city, points, activeCard, size } = props;

  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            activeCard !== undefined && point.id === activeCard.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, activeCard]);


  useEffect(() => {
    map?.setView(
      {
        lat: city.lat,
        lng: city.lng,
      },
      city.zoom,
    );
  }, [city, map]);

  return (
    <div
      style={{ height: size.height, width: size.width, margin: size.margin }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
