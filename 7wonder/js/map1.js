// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
chart.geodata = am4geodata_continentsLow;
chart.projection = new am4maps.projections.Miller();

// Colors
var color1 = chart.colors.getIndex(16);
var color2 = chart.colors.getIndex(1);
var color3 = chart.colors.getIndex(29);

chart.homeGeoPoint = {
  latitude: 50,
  longitude: 0,
};
// chart.homeZoomLevel = 0.75;
// chart.minZoomLevel = 0.75;
chart.homeZoomLevel = 1;
chart.minZoomLevel = 1;

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
// polygonTemplate.tooltipText = "{name}";
polygonSeries.exclude = ["antarctica"];
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.fill = am4core.color("#f8f8f8");
polygonTemplate.events.on("hit", function (ev) {
  ev.target.series.chart.zoomToMapObject(ev.target);
})
/* Create hover state and set alternative fill color */
// var hs = polygonTemplate.states.create("hover");
// hs.properties.fill = am4core.color("#367B25");

chart.zoomControl = new am4maps.ZoomControl();
var buttonTopPosition;
polygonSeries.events.on("inited", () => {
  polygonSeries.mapPolygons.each(polygon => {
    const buttonZoom = document.getElementById('us-button');
    buttonZoom.addEventListener("click", () => {
      const id = polygon.dataItem.dataContext.id;
      console.log(id)
      const animation = chart.zoomToMapObject(polygon);
      animation.events.on("animationended", () => {
        chart.homeGeoPoint = chart.centerGeoPoint;
        chart.homeZoomLevel = chart.zoomLevel;
      });
    });
  });
});



// Add shadow
var shadow = polygonSeries.filters.push(new am4core.DropShadowFilter());
shadow.color = am4core.color("#A8ABAD");
shadow.blur = 0;

// Pins
// var imageSeries = chart.series.push(new am4maps.MapImageSeries());
var imageSeries = chart.series.push(new am4maps.MapImageSeries());
var imageTemplate = imageSeries.mapImages.template;
var circle = imageTemplate.createChild(am4core.Circle);
imageTemplate.propertyFields.longitude = "longitude";
imageTemplate.propertyFields.latitude = "latitude";
imageTemplate.nonScaling = true;


// Creating a pin bullet
var pin = imageTemplate.createChild(am4plugins_bullets.PinBullet);

function startupPage() {
  changePin(2)
}

function changePin(mode) {
  if (mode == 2) {
    console.log("selected 2 ")
    var wonder1 = document.getElementById("button1");
    var wonder2 = document.getElementById("button2");
    var wonder3 = document.getElementById("button3");
    var wonder4 = document.getElementById("button4");
    var wonder5 = document.getElementById("button5");
    var wonder6 = document.getElementById("button6");
    var wonder7 = document.getElementById("button7");
    wonder1.innerHTML = "Catacombs of Kom El Shoqafa";
    wonder2.innerHTML = "Stonehenge";
    wonder3.innerHTML = "Porcelain Tower of Nanjing";
    wonder4.innerHTML = "Hagia Sophia";
    wonder5.innerHTML = "Leaning Tower of Pisa";
    wonder6.innerHTML = "Colosseum";
    wonder7.innerHTML = "Great Wall of China";
    pin.background.fill = color2;
    pin.background.pointerBaseWidth = 5;
    pin.background.pointerLength = 250;
    pin.background.propertyFields.pointerLength = "length";
    pin.circle.fill = pin.background.fill;
    pin.label = new am4core.Label();
    pin.label.text = "m";
    pin.label.fill = color2.alternate;
    var label = pin.createChild(am4core.Label);
    label.text = "{title}";
    label.fontWeight = "bold";
    label.propertyFields.dy = "length";
    label.verticalCenter = "middle";
    label.fill = color2;
    label.adapter.add("dy", function (dy) {
      return (20 + dy) * -1;
    });
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
    imageSeries.data = [
      {
        latitude: 31.178959,
        longitude: 29.8930766,
        value: 2,
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
        value: 2,
        title: "Porcelain Tower of Nanjing",
        length: 80,
      },
      {
        latitude: 41.008587,
        longitude: 28.9779863,
        value: 2,
        title: "Hagia Sophia",
        length: 150,
      },
      {
        latitude: 43.7229559,
        longitude: 10.3944083,
        value: 2,
        title: "Leaning Tower of Pisa",
        length: 220,
      },
      {
        latitude: 41.8902142,
        longitude: 12.4900422,
        value: 2,
        title: "Colosseum",
        length: 80,
      },

      {
        latitude: 40.4319118,
        longitude: 116.5681862,
        value: 2,
        title: "Great Wall of China",
        length: 150,
      },
    ];
  }
  else {
    console.log("selected 3 ")
    var wonder1 = document.getElementById("button1");
    var wonder2 = document.getElementById("button2");
    var wonder3 = document.getElementById("button3");
    var wonder4 = document.getElementById("button4");
    var wonder5 = document.getElementById("button5");
    var wonder6 = document.getElementById("button6");
    var wonder7 = document.getElementById("button7");
    wonder1.innerHTML = "Chichen Itza";
    wonder2.innerHTML = "Christ the Redeemer";
    wonder3.innerHTML = "Machu Picchu";
    wonder4.innerHTML = "Great Wall";
    wonder5.innerHTML = "Petra";
    wonder6.innerHTML = "Taj Mahal";
    wonder7.innerHTML = "Colosseum";
    pin.background.fill = color3;
    pin.background.pointerBaseWidth = 5;
    pin.background.pointerLength = 250;
    pin.background.propertyFields.pointerLength = "length";
    pin.circle.fill = pin.background.fill;
    pin.label = new am4core.Label();
    pin.label.text = "n";
    pin.label.fill = color3.alternate;
    var label = pin.createChild(am4core.Label);
    label.text = "{title}";
    label.fontWeight = "bold";
    label.propertyFields.dy = "length";
    label.verticalCenter = "middle";
    label.fill = color3;
    label.adapter.add("dy", function (dy) {
      return (20 + dy) * -1;
    });
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
    imageSeries.data = [
      {
        latitude: 20.6828175,
        longitude: -88.5728543,
        value: 2,
        title: "Chichen Itza",
        length: 50,
      },
      {
        latitude: -22.951911,
        longitude: -43.2126759,
        value: 2,
        title: "Christ the Redeemer",
        length: 150,
      },
      {
        latitude: -13.163136,
        longitude: -72.5471516,
        value: 2,
        title: "Machu Picchu",
        length: 80,
      },
      {
        latitude: 40.4319118,
        longitude: 116.5681862,
        value: 2,
        title: "Great Wall of China",
        length: 150,
      },
      {
        latitude: 30.328459,
        longitude: 35.4421735,
        value: 2,
        title: "Petra",
        length: 220,
      },
      {
        latitude: 23.2341868,
        longitude: 80.331867,
        value: 2,
        title: "Taj Mahal",
        length: 80,
      },

      {
        latitude: 41.8902142,
        longitude: 12.4900422,
        value: 2,
        title: "Colosseum",
        length: 150,
      },
    ];
  }
}

function getInfo(number) {
  var nameButton = "button" + number
  var indexTemp = document.getElementById(nameButton).innerHTML
  console.log(indexTemp)

}


// Pin data
window.onload = startupPage;