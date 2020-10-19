// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
chart.geodata = am4geodata_continentsLow;
chart.projection = new am4maps.projections.Miller();

// Colors
var color1 = chart.colors.getIndex(1);

chart.homeGeoPoint = {
  latitude: 50,
  longitude: 0,
};
chart.homeZoomLevel = 0.75;
chart.minZoomLevel = 0.75;

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.exclude = ["antarctica"];
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.fill = am4core.color("#f8f8f8");

// Add shadow
var shadow = polygonSeries.filters.push(new am4core.DropShadowFilter());
shadow.color = am4core.color("#A8ABAD");
shadow.blur = 0;

// Pins
var imageSeries = chart.series.push(new am4maps.MapImageSeries());
var imageTemplate = imageSeries.mapImages.template;
imageTemplate.propertyFields.longitude = "longitude";
imageTemplate.propertyFields.latitude = "latitude";
imageTemplate.nonScaling = true;

// Creating a pin bullet
var pin = imageTemplate.createChild(am4plugins_bullets.PinBullet);

// Configuring pin appearance
pin.background.fill = color1;
pin.background.pointerBaseWidth = 5;
pin.background.pointerLength = 250;
pin.background.propertyFields.pointerLength = "length";
pin.circle.fill = pin.background.fill;
pin.label = new am4core.Label();
pin.label.text = "{value}";
pin.label.fill = color1.alternate;

var label = pin.createChild(am4core.Label);
label.text = "{title}";
label.fontWeight = "bold";
label.propertyFields.dy = "length";
label.verticalCenter = "middle";
label.fill = color1;
label.adapter.add("dy", function (dy) {
  return (20 + dy) * -1;
});

// Creating a "heat rule" to modify "radius" of the bullet based
// on value in data
imageSeries.heatRules.push({
  target: pin.background,
  property: "radius",
  min: 20,
  max: 30,
  dataField: "value",
});

imageSeries.heatRules.push({
  target: label,
  property: "dx",
  min: 30,
  max: 40,
  dataField: "value",
});

imageSeries.heatRules.push({
  target: label,
  property: "paddingBottom",
  min: 0,
  max: 10,
  dataField: "value",
});

// Pin data
imageSeries.data = [
  {
    latitude: 31.178959,
    longitude: 29.8930766,
    value: 1,
    title: "Catacombs of Kom El Shoqafa",
    length: 50,
  },
  {
    latitude: 51.1778865,
    longitude: -1.8279531,
    value: 2,
    title: "Stonehenge",
    length: 150,
  },
  {
    latitude: 32.0093905,
    longitude: 118.7811543,
    value: 3,
    title: "Porcelain Tower of Nanjing",
    length: 80,
  },
  {
    latitude: 41.008587,
    longitude: 28.9779863,
    value: 4,
    title: "Hagia Sophia",
    length: 150,
  },
  {
    latitude: 43.7229559,
    longitude: 10.3944083,
    value: 5,
    title: "Leaning Tower of Pisa",
    length: 220,
  },
  {
    latitude: 41.8902142,
    longitude: 12.4900422,
    value: 6,
    title: "Colosseum",
    length: 80,
  },
  
  {
    latitude: 40.4319118,
    longitude: 116.5681862,
    value: 7,
    title: "Great Wall of China",
    length: 150,
  },
];
