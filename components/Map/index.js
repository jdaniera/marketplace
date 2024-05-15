"use client";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";
import style from './Map.module.css'

export default function Map() {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const loader = new Loader({
      apiKey: googleMapsApiKey,
      version: "weekly",
      libraries: ["places"], 
    });

    loader.load().then(() => {
      initMap();
    }).catch(error => {
      console.error("Error loading Google Maps API:", error);
    });
  }, []);

  async function initMap() {
    
    const position = { lat: 49.268421, lng: -123.101623 };
    const { Map } = await google.maps.importLibrary("maps");

    const map = new Map(document.getElementById("map"), {
      zoom: 13,
      center: position,
      mapId: "NEARBY_CLASSES",
    });

    const markersData = [
      { lat: 49.264047, lng: -123.099959, title: 'Puppy Yoga' },
      { lat: 49.271909, lng: -123.104662, title: 'Beginner Bellydancing' },
      { lat: 49.267214, lng: -123.093013, title: 'Still Life Drawing (All Levels)' },
    ];

    markersData.forEach(markerInfo => {
      const marker = new google.maps.Marker({
        position: { lat: markerInfo.lat, lng: markerInfo.lng },
        map: map,
        title: markerInfo.title,
        icon: '/homeMap/mapIcon.png',
      });
    });
  }

  return( 
    <>
      <div className={style.mapContainer}>
        <h2>Happening Near You:</h2>
      </div>
        <div id="map" style={{ width: '400px', height: '400px' }}></div>
      <div>
      </div>
    </>
  )
}
