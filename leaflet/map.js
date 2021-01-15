  var map = L.map("map", {
        center: [47.4282298, 9.3814352],
        zoom: 17,
        gestureHandling: true
    });

    var OpenStreetMap_Transportmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //Add markers
   var marker = new L.marker([47.4282298, 9.3814352]).addTo(map);