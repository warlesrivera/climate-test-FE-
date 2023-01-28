import React, { FC, useState } from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";
import { IAlert, IMap, IOffsets } from "../../types";
import { AlertCustomPosition } from "../../components/ui/alert-custom-position";

import allStates from "./data/allstates.json";
import { CardEmpty, CardInfo } from "../../components/ui";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets: IOffsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

interface Props {
  listMap: IMap[] | null
}

const MapChart: FC<Props> = ({ listMap }) => {

  const [anchorAlert, setAnchorAlert] = useState<null | HTMLElement>(null);
  const [alert, setAlert] = useState(false);
  const [description, setDescription] = useState<null | React.ReactNode>(null);

  const onOpenAlert = (e: HTMLElement, alert: IAlert[], humidity:number) => {
    if (alert != undefined) {
      alert.map((item) => {
        setDescription(<CardInfo title={item.sender_name} description={item.description} start={item.start} end={item.end} humidity={humidity} />)
      });
    }
    else {
      setDescription(<CardEmpty humidity={humidity} />)
    }
    setAnchorAlert(e);
    setAlert(true);
  }

  const onCloseAlert = () => {
    setAnchorAlert(null);
    setAlert(false);
    setDescription(<CardEmpty />);
  };

  return (
    <>
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  stroke="#FFF"
                  geography={geo}
                  fill="#DDD"
                />
              ))}
              {geographies.map(geo => {
                const centroid = geoCentroid(geo);
                const cur = allStates.find(s => s.val === geo.id);
                return (
                  <g key={geo.rsmKey + "-name"}>
                    {cur &&
                      centroid[0] > -160 &&
                      centroid[0] < -67 &&
                      (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                        <Marker coordinates={centroid}>
                          <text y="2" fontSize={10} textAnchor="middle">
                            {cur.id}
                          </text>
                        </Marker>
                      ) : (
                        <Annotation
                          subject={centroid}
                          dx={offsets[cur.id as keyof IOffsets][0]}
                          dy={offsets[cur.id as keyof IOffsets][1]}
                        >
                          <text x={4} fontSize={10} alignmentBaseline="middle">
                            {cur.id}
                          </text>
                        </Annotation>
                      ))}
                  </g>
                );
              })}
            </>
          )}
        </Geographies>
        <>
          {
            listMap ? listMap.map((item) => (
              <Marker onClick={(e) => (onOpenAlert(e.currentTarget, item.alerts ? item.alerts : null,item.humidity))} coordinates={[+item.city.long, +item.city.lat]}>
                <circle r={8} fill="#F53" />
              </Marker>

            )) : <></>
          }
        </>
      </ComposableMap>

      <AlertCustomPosition
        placement={'auto'}
        anchorElAlert={anchorAlert}
        open={alert}
        onClose={onCloseAlert}
        sx={{ mt: 0, pr: -4, height: (theme) => theme.spacing(8) }}
      >
        {description}
      </AlertCustomPosition>

    </>
  );
};

export default MapChart;
