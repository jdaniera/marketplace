import styles from './Map.module.css'

import { useEffect } from 'react';

export default function Map() {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const markersData = [
    {
      id: 1,
      lat: 49.264047,
      lng: -123.099959,
      title: 'Puppy Yoga'
    },
    {
      id: 2,
      lat: 49.271909,
      lng: -123.104662,
      title: 'Beginner Bellydancing'
    },
    {
      id: 3,
      lat: 49.267214,
      lng: -123.093013,
      title: 'Still Life Drawing (All Levels)'
    },
  ];

  useEffect(() => {
    // Dynamically load Google Maps JavaScript API script
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
    googleMapsScript.async = true;

    googleMapsScript.addEventListener('load', () => {
      // Initialize map after the script is loaded
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 49.268421, lng: -123.101623 },
        zoom: 13,
        styles: mapStyles 
      });

      // Custom marker icon
      const customIcon = {
        url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        scaledSize: new window.google.maps.Size(40, 40)
      };

      markersData.forEach(markerInfo => {
        const marker = new window.google.maps.Marker({
          position: { lat: markerInfo.lat, lng: markerInfo.lng },
          map,
          title: markerInfo.title,
          icon: customIcon
        });
      });
    });

    document.body.appendChild(googleMapsScript);

    return () => {
      document.body.removeChild(googleMapsScript);
    };
  }, []);

  const mapStyles = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    },
  ];

  return (
    <>
       <div className={styles.mapContainer}>
       <p>Happening Near You</p>
        <div id="map" style={{ width: '400px', height: '400px' }}></div>
      </div>
    </>
  );
}
