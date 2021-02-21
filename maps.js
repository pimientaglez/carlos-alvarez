// Initialize and add the map
function initMap() {
    const consultorio = { lat: 31.2993582, lng: -110.9387659 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: consultorio,
    });
    const marker = new google.maps.Marker({
      position: consultorio,
      map: map,
    });
  }