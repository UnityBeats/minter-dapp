var mapSW = [0, 16384],
    mapNE = [16384, 0];

var tileUrl = '../leafletjs/Map_Tiles_v1/{z}_{x}_{y}.png';
var tileUrl2 = '../leafletjs/Map_Tiles_v1_2/{z}_{x}_{y}.png'

var customTileLayer = L.tileLayer(tileUrl, {
    minZoom: 2,
    maxZoom: 6,
    noWrap: true,
    continuousWorld: false,
    tileSize: 256,
    zoomOffset: -1,
    errorTileUrl: 'error.png',
    attribution: 'me',
});

var customTileLayer2 = L.tileLayer(tileUrl2, {
  minZoom: 2,
  maxZoom: 5,
  noWrap: true,
  continuousWorld: false,
  tileSize: 256,
  zoomOffset: -1,
  errorTileUrl: 'error.png',
  attribution: 'me',
});

var map = L.map('map', {
    attributionControl: false,
    zoomControl: false
}).setView([0, 0], 0);

customTileLayer.getTileUrl = function(coords) {
    var url = L.Util.template(tileUrl, coords);
    return url;
};

customTileLayer2.getTileUrl = function(coords) {
  var url = L.Util.template(tileUrl2, coords);
  return url;
};

customTileLayer.addTo(map);

//switch tile layer function desktop

var slider = document.querySelector('.switch .checkbox');
var sliderPosition = slider.checked;
var worldMapText = document.querySelector('.world-map-text');
var treeMapText = document.querySelector('.tree-map-text');
var mobileSlider = document.querySelector('.mobile-switch .checkbox');

slider.checked = false;
mobileSlider.checked = false;

if (sliderPosition) {
  treeMapText.style.display = 'block';
  worldMapText.style.display = 'none';
} else {
  treeMapText.style.display = 'none';
  worldMapText.style.display = 'block';
}

slider.addEventListener('change', function() {
  sliderPosition = this.checked;
  mobileSlider.checked = this.checked;
  switchTileLayer(sliderPosition);
  if (sliderPosition) {
    treeMapText.style.display = 'block';
    worldMapText.style.display = 'none';
  } else {
    treeMapText.style.display = 'none';
    worldMapText.style.display = 'block';
  }
});

function switchTileLayer(isTreeMap) {
  map.removeLayer(customTileLayer);
  map.removeLayer(customTileLayer2);

  if (isTreeMap) {
    customTileLayer2.addTo(map);
  } else {
    customTileLayer.addTo(map);
  }
}

//switch tile layer function mobile

var mobileSliderPosition = mobileSlider.checked;

if (mobileSliderPosition) {
  treeMapText.style.display = 'block';
  worldMapText.style.display = 'none';
} else {
  treeMapText.style.display = 'none';
  worldMapText.style.display = 'block';
}

mobileSlider.addEventListener('change', function() {
  mobileSliderPosition = this.checked;
  slider.checked = this.checked;
  switchMobileTileLayer(mobileSliderPosition);
  switchTileLayer(mobileSliderPosition);
  if (mobileSliderPosition) {
    treeMapText.style.display = 'block';
    worldMapText.style.display = 'none';
  } else {
    treeMapText.style.display = 'none';
    worldMapText.style.display = 'block';
  }
});

function switchMobileTileLayer(isTreeMap) {
  map.removeLayer(customTileLayer);
  map.removeLayer(customTileLayer2);

  if (isTreeMap) {
    customTileLayer2.addTo(map);
  } else {
    customTileLayer.addTo(map);
  }
}

//set bounds of the map

map.setMaxBounds(new L.LatLngBounds(
    map.unproject(mapSW, map.getMaxZoom()),
    map.unproject(mapNE, map.getMaxZoom())
));

//position of zoom buttons

var zoomControl = L.control.zoom({
  position: 'topright'
}).addTo(map);

function updateZoomControlPosition() {
  if (window.innerWidth <= 1080) {
    zoomControl.setPosition('bottomright');
  } else {
    zoomControl.setPosition('topright');
  }
}

window.addEventListener('resize', updateZoomControlPosition);
updateZoomControlPosition();

//marker icons

var deathIcon = L.divIcon({
    html: '<i class="fa-solid fa-skull-crossbones"></i>',
    iconSize: [30, 30],
    className: 'my-div-icon'
});

var citiesIcon = L.divIcon({
    html: '<i class="fa-brands fa-fort-awesome"></i>',
    iconSize: [30, 30],
    className: 'my-div-icon'
});

var townsIcon = L.divIcon({
    html: '<i class="fa-solid fa-place-of-worship"></i>',
    iconSize: [30, 30],
    className: 'my-div-icon'
});

var villagesIcon = L.divIcon({
    html: '<i class="fa-solid fa-house-chimney-window"></i>',
    iconSize: [30, 30],
    className: 'my-div-icon'
});

var portsIcon = L.divIcon({
    html: '<i class="fa-solid fa-anchor"></i>',
    iconSize: [30, 30],
    className: 'my-div-icon'
});

var liftsIcon = L.divIcon({
    html: '<i class="fa-solid fa-link"></i>',
    iconSize: [30, 30],
    className: 'my-div-icon'
});

var statuesIcon = L.divIcon({
    html: '<i class="fa-solid fa-life-ring"></i>',
    iconSize: [30, 30],
    className: 'my-div-icon'
});

var healersIcon = L.divIcon({
    html: '<i class="fa-solid fa-bottle-droplet"></i>',
    iconSize: [30, 30],
    className: 'my-div-icon'
});

//location marker

var marker = L.marker([51.5, -0.09]);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

//death markers

var deathGroup = L.layerGroup();

var deathmarker1 = L.marker([51.2, -0.09], {icon: deathIcon});
deathmarker1.bindPopup("<b>Death #14...</b><br>Died to a stray duck fart.");
deathGroup.addLayer(deathmarker1); // add each marker to the group layer like this

var deathmarker2 = L.marker([51.3, -0.1], {icon: deathIcon});
deathmarker2.bindPopup("<b>Death #15...</b><br>Died to a rogue pigeon feather.");
deathGroup.addLayer(deathmarker2);

//cities markers

var citiesGroup = L.layerGroup();

var citiesmarker1 = L.marker([51.27, -0.08], {icon: citiesIcon});
citiesmarker1.bindPopup("<b>City 1...</b><br>A great place to live.");
citiesGroup.addLayer(citiesmarker1); // add each marker to the group layer like this

var citiesmarker2 = L.marker([51.35, -0.12], {icon: citiesIcon});
citiesmarker2.bindPopup("<b>City 2 #15...</b><br>A horrible place to live.");
citiesGroup.addLayer(citiesmarker2);

//towns markers

var townsGroup = L.layerGroup();

var townsmarker1 = L.marker([51.97, -0.04], {icon: townsIcon});
townsmarker1.bindPopup("<b>City 1...</b><br>A great place to live.");
townsGroup.addLayer(townsmarker1); // add each marker to the group layer like this

//villages markers

var villagesGroup = L.layerGroup();

var villagesmarker1 = L.marker([51.6, -0.02], {icon: villagesIcon});
villagesmarker1.bindPopup("<b>City 1...</b><br>A great place to live.");
villagesGroup.addLayer(villagesmarker1); // add each marker to the group layer like this

//ports markers

var portsGroup = L.layerGroup();

var portsmarker1 = L.marker([50.91, -0.04], {icon: portsIcon});
portsmarker1.bindPopup("<b>City 1...</b><br>A great place to live.");
portsGroup.addLayer(portsmarker1); // add each marker to the group layer like this

//lifts markers

var liftsGroup = L.layerGroup();

var liftsmarker1 = L.marker([51.53, -0.01], {icon: liftsIcon});
liftsmarker1.bindPopup("<b>City 1...</b><br>A great place to live.");
liftsGroup.addLayer(liftsmarker1); // add each marker to the group layer like this

//statues markers

var statuesGroup = L.layerGroup();

var statuesmarker1 = L.marker([51.76, -0.24], {icon: statuesIcon});
statuesmarker1.bindPopup("<b>City 1...</b><br>A great place to live.");
statuesGroup.addLayer(statuesmarker1); // add each marker to the group layer like this

//healers markers

var healersGroup = L.layerGroup();

var healersmarker1 = L.marker([51.12, -0.11], {icon: healersIcon});
healersmarker1.bindPopup("<b>City 1...</b><br>A great place to live.");
healersGroup.addLayer(healersmarker1); // add each marker to the group layer like this




//handle marker clicks

function handleLocationClick() {
    var filterItem = document.querySelector('.location');
    var link = filterItem.querySelector('a');

    if (marker._map) {
      marker.remove();
      link.classList.remove('active');
    } else {
      marker.addTo(map);
      link.classList.add('active');
    }
  }

function handleDeathClick() {
    var filterItem = document.querySelector('.death');
    var link = filterItem.querySelector('a');

    if (map.hasLayer(deathGroup)) {
      map.removeLayer(deathGroup);
      link.classList.remove('active');
    } else {
      map.addLayer(deathGroup);
      link.classList.add('active');
    }
}

function handleCitiesClick() {
    var filterItem = document.querySelector('.cities');
    var link = filterItem.querySelector('a');

    if (map.hasLayer(citiesGroup)) {
      map.removeLayer(citiesGroup);
      link.classList.remove('active');
    } else {
      map.addLayer(citiesGroup);
      link.classList.add('active');
    }
}

function handleTownsClick() {
    var filterItem = document.querySelector('.towns');
    var link = filterItem.querySelector('a');

    if (map.hasLayer(townsGroup)) {
      map.removeLayer(townsGroup);
      link.classList.remove('active');
    } else {
      map.addLayer(townsGroup);
      link.classList.add('active');
    }
}

function handleVillagesClick() {
    var filterItem = document.querySelector('.villages');
    var link = filterItem.querySelector('a');

    if (map.hasLayer(villagesGroup)) {
      map.removeLayer(villagesGroup);
      link.classList.remove('active');
    } else {
      map.addLayer(villagesGroup);
      link.classList.add('active');
    }
}

function handlePortsClick() {
    var filterItem = document.querySelector('.ports');
    var link = filterItem.querySelector('a');

    if (map.hasLayer(portsGroup)) {
      map.removeLayer(portsGroup);
      link.classList.remove('active');
    } else {
      map.addLayer(portsGroup);
      link.classList.add('active');
    }
}

function handleLiftsClick() {
    var filterItem = document.querySelector('.lifts');
    var link = filterItem.querySelector('a');

    if (map.hasLayer(liftsGroup)) {
      map.removeLayer(liftsGroup);
      link.classList.remove('active');
    } else {
      map.addLayer(liftsGroup);
      link.classList.add('active');
    }
}

function handleStatuesClick() {
    var filterItem = document.querySelector('.statues');
    var link = filterItem.querySelector('a');

    if (map.hasLayer(statuesGroup)) {
      map.removeLayer(statuesGroup);
      link.classList.remove('active');
    } else {
      map.addLayer(statuesGroup);
      link.classList.add('active');
    }
}

function handleHealersClick() {
    var filterItem = document.querySelector('.healers');
    var link = filterItem.querySelector('a');

    if (map.hasLayer(healersGroup)) {
      map.removeLayer(healersGroup);
      link.classList.remove('active');
    } else {
      map.addLayer(healersGroup);
      link.classList.add('active');
    }
}

// mobile filter

const filterToggle = document.querySelector('.filter-toggle');
const mobileFilterBottom = document.querySelector('.mobile-filter-bottom');

filterToggle.addEventListener('click', function() {
  mobileFilterBottom.classList.toggle('active');
  filterToggle.classList.toggle('active');
});


// full screen toggle

const fullscreenToggle = document.getElementById('fullscreen-toggle');

fullscreenToggle.addEventListener('click', function() {
  const mapContainer = document.querySelector('.map-bottom-container');

  if (!document.fullscreenElement) {
    mapContainer.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

fullscreenToggle.addEventListener('click', function() {
  const mapContainer = document.querySelector('.map-bottom-container');

  if (!document.fullscreenElement) {
    mapContainer.requestFullscreen();
    // when entering fullscreen, set the minZoom option
    map.setMinZoom(3);
  } else {
    document.exitFullscreen();
    // when exiting fullscreen, set the minZoom option back to the default value
    map.setMinZoom(2);
  }
});

document.addEventListener("fullscreenchange", function () {
  // when exiting fullscreen, reset the minZoom option back to the default value
  if (!document.fullscreenElement) {
    map.setMinZoom(2);
  }
});