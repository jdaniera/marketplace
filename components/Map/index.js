"use client"
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";
import style from './Map.module.css'
import Link from "next/link";


export default function Map() {

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const [selectedMarker, setSelectedMarker] = useState(null)

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
    // the location
    const position = { lat: 49.268421, lng: -123.101623 };
    // request needed libraries
    const { Map } = await google.maps.importLibrary("maps");

    const map = new Map(document.getElementById("map"), {
      zoom: 13,
      center: position,
      mapId: "NEARBY_CLASSES",
    });

    const defaultIcon = {
      url: '/images/homeMap/mapIcon.svg',
      scaledSize: new google.maps.Size(50, 50), 
    };

    const hoverIcon = {
      url: '/images/homeMap/mapIcon.svg',
      scaledSize: new google.maps.Size(70, 70), 
    };

    const selectedIcon = {
      url: '/images/homeMap/mapIcon.svg',
      scaledSize: new google.maps.Size(70, 70), 
    };

    const markersData = [
      { lat: 49.264047, lng: -123.099959, 
        title: 'Puppy Yoga', 
        info: 'False Creek Community Center',
        date: 'Sunday, May 26, 2024',
        time: '1PM-2:30PM',
        image: '/images/homeMap/puppy-yoga.svg',
        alt: 'yoga session with puppy' },
      { lat: 49.271909, lng: -123.104662, 
        title: 'Beginner Bellydancing', 
        info: 'Mount Pleasant Community Center',
        date: 'Monday, May 27, 2024',
        time: '7PM-8PM',
        image: '/images/homeMap/bellydancing.svg',
        alt: 'woman bellydancing'},
      { lat: 49.267214, lng: -123.093013, 
        title: 'Still Life Drawing/Painting (All Levels)', 
        info: 'Emily Carr',
        date: 'Thursday, May 30, 2024',
        time: '10AM-11AM',
        image: '/images/homeMap/still-life.svg',
        alt: 'painting of still life flowers' },
    ];

    markersData.forEach(markerInfo => {
      const marker = new google.maps.Marker({
        position: { lat: markerInfo.lat, lng: markerInfo.lng },
        map: map,
        title: markerInfo.title,
        icon: defaultIcon,
      });

      marker.addListener('mouseover', () => {
        marker.setIcon(hoverIcon);
      })

      marker.addListener('mouseout', () => {
        if (!selectedMarker || selectedMarker !== marker) {
          marker.setIcon(defaultIcon);
        }
      }); // when not hovered return to default size icon

      marker.addListener('click', () => {
        setSelectedMarker(markerInfo)
        marker.setIcon(selectedIcon);

        
      })
    });
  }

  return( 
    <>
      <div className={style.mapContainer}>
        <h2>Happening Near You:</h2>
      </div>
        <div id="map" style={{ width: '400px', height: '400px' }}></div>
      <div>
      {selectedMarker && (
        <div className={style.infoContainer}>
            <h3>{selectedMarker.title}</h3>
            <div className={style.infoDetails}>
              <div className={style.infoText}>
                <p>{selectedMarker.info}</p>
                <p>{selectedMarker.date}</p>
                <p>{selectedMarker.time}</p>
                <Link href="/ClassInfo">
                  <button className={style.button}>View Class</button>
                </Link>
              </div>
              <div className={style.imgContainer}>
                <img src={selectedMarker.image} alt={selectedMarker.alt}/>
             </div>
            </div>
        </div>
      )}
      </div>
    </>
  )
}
