import { LatLngProps } from "@interfaces/index";
import { MapModule } from "@modules/index";
import React, { HtmlHTMLAttributes, useEffect, useRef } from "react";
import styled from "styled-components";

interface MapProps extends HtmlHTMLAttributes<HTMLElement> {
  latLng?: LatLngProps;
  isClickPossible: boolean;
}
const Map = ({ id, className, latLng, isClickPossible }: MapProps) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    MapModule({
      mapContainer,
      isClickPossible,
      latLng,
    });
  }, [latLng]);

  return <Container id={id} className={className} ref={mapContainer} />;
};

export default Map;

const Container = styled.section`
  width: 100%;
  max-width: 900px;
  height: 400px;
  margin-bottom: 30px;
`;
