import { useEffect, useState } from "react";

export default function Map() {
    const bingMapsApiKey = process.env.NEXT_PUBLIC_NAME;
    // const testKey = "AjtUzWJBHlI3Ma_Ke6Qv2fGRXEs0ua5hUQi54ECwfXTiWsitll4AkETZDihjcfeI";
    const url = `https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/47.645523,-122.139059/18?mapSize=500,500&pp=47.645523,-122.139059;66&mapLayer=Basemap,Buildings&key=${bingMapsApiKey}`
    const [map, setMap] = useState();
    useEffect(() => {
        fetch(url)
        .then((res) => console.log(res))
        // .then((res) => res.json())
        // .then((info) => {
        //     setMap(info);
        // })
    }, [])
    console.log(map);
    return (
        <div></div>
    );
};