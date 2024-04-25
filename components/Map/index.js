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
    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 49.268421, lng: -123.101623 },
      zoom: 13,
      styles: mapStyles // Custom map styles
    });

    // Custom marker icon
    const customIcon = {
      url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
      scaledSize: new window.google.maps.Size(40, 40)
    };

    // Create markers with custom icons and info windows
    markersData.forEach(markerInfo => {
      const marker = new window.google.maps.Marker({
        position: { lat: markerInfo.lat, lng: markerInfo.lng },
        map,
        title: markerInfo.title,
        icon: customIcon
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  }, []);

  const mapStyles = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    },
  ];

  return (
    <div id="map" style={{ width: '400px', height: '400px' }}></div>
  );
}
