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
// polygonTemplate.events.on("hit", function (ev) {
//   ev.target.series.chart.zoomToMapObject(ev.target);
// })
polygonTemplate.events.on("hit", function (ev) {
  chart.closeAllPopups();
  chart.openPopup("We clicked on <strong>" + ev.target.dataItem.dataContext.name + "</strong>");
});


/* Create hover state and set alternative fill color */
// var hs = polygonTemplate.states.create("hover");
// hs.properties.fill = am4core.color("#367B25");

// Add shadow
var shadow = polygonSeries.filters.push(new am4core.DropShadowFilter());
shadow.color = am4core.color("#A8ABAD");
shadow.blur = 0;

// Pins
// var imageSeries = chart.series.push(new am4maps.MapImageSeries());
var imageSeries = chart.series.push(new am4maps.MapImageSeries());
var imageTemplate = imageSeries.mapImages.template;

imageTemplate.propertyFields.longitude = "longitude";
imageTemplate.propertyFields.latitude = "latitude";
imageTemplate.nonScaling = true;

// Creating a pin bullet
var pin = imageTemplate.createChild(am4plugins_bullets.PinBullet);
var marker = imageTemplate.createChild(am4core.Image);

function startupPage() {
  changePin(0)
}

function changePin(mode) {
  if (mode == 1) {
    console.log("selected 1 ")
    var thisAge = document.getElementById("thisAge");
    thisAge.innerHTML = "Old Age";
    var wonder1 = document.getElementById("button1");
    var wonder2 = document.getElementById("button2");
    var wonder3 = document.getElementById("button3");
    var wonder4 = document.getElementById("button4");
    var wonder5 = document.getElementById("button5");
    var wonder6 = document.getElementById("button6");
    var wonder7 = document.getElementById("button7");
    wonder1.innerHTML = "Great Pyramid of Giza";
    wonder2.innerHTML = "Hanging Gardens of Babylon";
    wonder3.innerHTML = "Temple of Artemis at Ephesus";
    wonder4.innerHTML = "Statue of Zeus at Olympia";
    wonder5.innerHTML = "Mausoleum at Halicarnassus";
    wonder6.innerHTML = "Colossus of Rhodes";
    wonder7.innerHTML = "The Pharos Lighthouse of Alexandria";

    // pin.background.fill = color1;
    // pin.background.pointerBaseWidth = 5;
    // pin.background.pointerLength = 250;
    // pin.background.propertyFields.pointerLength = "length";
    // pin.circle.fill = pin.background.fill;
    // pin.label = new am4core.Label();
    // pin.label.text = "o";
    // pin.label.fill = color1.alternate;

    marker.width = 100;
    marker.height = 100;
    marker.nonScaling = false;
    marker.horizontalCenter = "middle";
    marker.verticalCenter = "middle";
    marker.propertyFields.href = "flag";

    var label = pin.createChild(am4core.Label);
    label.text = "{title}";
    label.fontWeight = "bold";
    label.propertyFields.dy = "length";
    label.verticalCenter = "middle";
    label.fill = color1;
    label.adapter.add("dy", function (dy) {
      return (30 + dy) * -1;
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
        latitude: 29.9792345,
        longitude: 31.1320132,
        // value: 2,
        title: "Great Pyramid of Giza",
        name: "United States",
        length: 50,
        flag: "./src/images/old/o1.jpeg"
      },
      {
        latitude: 36.169219,
        longitude: -122.647161,
        // value: 2,
        title: "Hanging Gardens of Babylon",
        length: 50,
        flag: "./src/images/old/o2.jpg"
      },
      {
        latitude: 37.9493643,
        longitude: 27.3616675,
        // value: 2,
        title: "Temple of Artemis at Ephesus",
        length: 50,
        flag: "./src/images/old/o3.jpg"
      },
      {
        latitude: 37.6382058,
        longitude: 21.6278582,
        // value: 2,
        title: "Statue of Zeus at Olympia",
        length: 50,
        flag: "./src/images/old/o4.jpg"
        // flag: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/pin_france.png"
      },
      {
        latitude: 37.0378917,
        longitude: 27.4219277,
        // value: 2,
        title: "Mausoleum at Halicarnassus",
        length: 50,
        flag: "./src/images/old/o5.jpg"
      },
      {
        latitude: 36.4561964,
        longitude: 28.2187341,
        title: "Colossus of Rhodes",
        length: 50,
        flag: "./src/images/old/o6.jpg"
      },
      {
        latitude: 31.2243285,
        longitude: 29.8147986,
        title: "The Pharos Lighthouse of Alexandria",
        length: 50,
        flag: "./src/images/old/o7.jpg"
      },
    ];
  }
  else if (mode == 2) {
    console.log("selected 2 ")
    var thisAge = document.getElementById("thisAge");
    thisAge.innerHTML = "Mid Age";
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

    // pin.background.fill = color2;
    // pin.background.pointerBaseWidth = 5;
    // pin.background.pointerLength = 250;
    // pin.background.propertyFields.pointerLength = "length";
    // pin.circle.fill = pin.background.fill;
    // pin.label = new am4core.Label();
    // pin.label.text = "m";
    // pin.label.fill = color2.alternate;

    marker.width = 100;
    marker.height = 100;
    marker.nonScaling = false;
    marker.horizontalCenter = "middle";
    marker.verticalCenter = "middle";
    marker.propertyFields.href = "flag";

    var label = pin.createChild(am4core.Label);
    label.text = "{title}";
    label.fontWeight = "bold";
    label.propertyFields.dy = "length";
    label.verticalCenter = "middle";
    label.fill = color2;
    label.adapter.add("dy", function (dy) {
      return (30 + dy) * -1;
    });
    imageSeries.heatRules.push({
      target: pin.background,
      property: "radius",
      min: 10,
      max: 10,
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
        // value: 2,
        title: "Catacombs of Kom El Shoqafa",
        length: 50,
        flag: "./src/images/mid/m1.jpg"
      },
      {
        latitude: 51.1778865,
        longitude: -1.8279531,
        // value: 2,
        title: "Stonehenge",
        length: 50,
        flag: "./src/images/mid/m2.jpg"
      },
      {
        latitude: 32.0093905,
        longitude: 118.7811543,
        // value: 2,
        title: "Porcelain Tower of Nanjing",
        length: 50,
        flag: "./src/images/mid/m3.jpg"
      },
      {
        latitude: 41.008587,
        longitude: 28.9779863,
        // value: 2,
        title: "Hagia Sophia",
        length: 50,
        flag: "./src/images/mid/m4.jpg"
      },
      {
        latitude: 43.7229559,
        longitude: 10.3944083,
        // value: 2,
        title: "Leaning Tower of Pisa",
        length: 50,
        flag: "./src/images/mid/m5.jpg"
      },
      {
        latitude: 41.8902142,
        longitude: 12.4900422,
        // value: 2,
        title: "Colosseum",
        length: 50,
        flag: "./src/images/mid/m6.jpg"
      },
      {
        latitude: 40.4319118,
        longitude: 116.5681862,
        // value: 2,
        title: "Great Wall of China",
        length: 50,
        flag: "./src/images/mid/m7.jpg"
      },
    ];
  }
  else {
    console.log("selected 3 ")
    var thisAge = document.getElementById("thisAge");
    thisAge.innerHTML = "New Age";
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

    // pin.background.fill = color3;
    // pin.background.pointerBaseWidth = 5;
    // pin.background.pointerLength = 250;
    // pin.background.propertyFields.pointerLength = "length";
    // pin.circle.fill = pin.background.fill;
    // pin.label = new am4core.Label();
    // pin.label.text = "n";
    // pin.label.fill = color3.alternate;

    marker.width = 100;
    marker.height = 100;
    marker.nonScaling = false;
    marker.horizontalCenter = "middle";
    marker.verticalCenter = "middle";
    marker.propertyFields.href = "flag";

    

    var label = pin.createChild(am4core.Label);
    label.text = "{title}";
    label.fontWeight = "bold";
    label.propertyFields.dy = "length";
    label.verticalCenter = "middle";
    label.fill = color3;
    label.adapter.add("dy", function (dy) {
      return (30 + dy) * -1;
    });
    imageSeries.heatRules.push({
      target: pin.background,
      property: "radius",
      min: 5,
      max: 10,
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
        title: "Chichen Itza",
        // value: 2,
        length: 50,
        flag: "./src/images/new/n1.JPEG"
      },
      {
        latitude: -22.951911,
        longitude: -43.2126759,
        title: "Christ the Redeemer",
        // value: 2,
        length: 50,
        flag: "./src/images/new/n2.jpg"
      },
      {
        latitude: -13.163136,
        longitude: -72.5471516,
        title: "Machu Picchu",
        // value: 2,
        length: 50,
        flag: "./src/images/new/n3.jpg"
      },
      {
        latitude: 40.4319118,
        longitude: 116.5681862,
        title: "Great Wall of China",
        // value: 2,
        length: 50,
        flag: "./src/images/new/n4.jpg"
      },
      {
        latitude: 30.328459,
        longitude: 35.4421735,
        title: "Petra",
        // value: 2,
        length: 50,
        flag: "./src/images/new/n5.jpg"
      },
      {
        latitude: 23.2341868,
        longitude: 80.331867,
        title: "Taj Mahal",
        // value: 2,
        length: 50,
        flag: "./src/images/new/n6.JPEG"
      },
      {
        latitude: 41.8902142,
        longitude: 12.4900422,
        title: "Colosseum",
        // value: 2,
        length: 50,
        flag: "./src/images/new/n7.jpg"
      },
    ];
    marker.events.on("hit", function (ev) {
      chart.closeAllPopups();
      chart.openPopup("We clicked on <strong>"+ ev.target.dataItem.dataContext.title +"</strong><br><h5></h5>");
      // ev.target.series.chart.zoomToMapObject(ev.target)
    });
  }
}

function getInfo(number) {
  var textBufferDetail = {
    "old": {
      "o1": {
        "header": "พีระมิดแห่งกีซา (Great Pyramid of Giza) ปีที่สร้าง  2584–2561BC ",
        "body": "พีระมิดแห่งกีซา (Great Pyramid of Giza) พีระมิดที่ใหญ่โตและเก่าแก่ที่สุดในหมู่พีระมิดทั้งสามแห่งกิซ่า เชื่อว่าสร้างขึ้นในสมัยฟาโรห์คูฟู แห่งราชวงศ์ที่ 4 ของอียิปต์โบราณ ผู้ที่สร้าง คือ กษัตริย์คีออปส์ (CHEOPS) หรือ คูฟู (Khufu), กษัตริย์คาเฟร(Khafre) และ กษัตริย์คูเร (Menkaure) ซึ่งปกครองอาณาจักรอียิปต์เมื่อประมาณ 2,600 ปีก่อนคริสตกาลหรือกว่า 4,600 ปีมาแล้ว  สร้างขึ้นเพื่อเป็น ที่ฝังพระศพของกษัตริย์อียิปต์โบราณ ชาวอียิปต์ในสมัยนั้นเชื่อเรื่องชีวิตหลังความตาย ดังนั้นจึงต้องแน่ใจว่ากษัตริย์ของพวกเขาจะทรงมีทุกสิ่งทุกอย่างที่จำเป็น สำหรับโลกหน้า พวกเขาได้ฝังทรัพย์สินและสิ่งของส่วนพระองค์ไปพร้อมกัน สิ่งที่นักโบราณคดีค้นพบเป็นจำนวนมากในห้องเก็บสมบัติของปิรามิดได้แก่เพชร พลอย อาหาร เครื่องเรือน เครื่องดนตรี และอุปกรณ์ล่าสัตว์",
        "year": "ปีที่สร้าง  2584–2561BC "
      },
      "o2": {
        "header": "สวนลอยแห่งบาบิโลน (Hanging Gardens of Babylon)",
        "body": "บาบิโลนเป็นนครของชาวเซไม้ท์กลุ่มหนึ่ง อยู่ทางภาคใต้ของบริเวณเมโสโปเตเมีย เมื่อประมาณ 2,350 ก่อน ค.ศ. ซึ่งพัฒนาต่อๆมาเป็นนครใหญ่และสวยงามมากแห่งหนึ่งของโลก มีกำแพงเมืองล้อมรอบตัวเมืองเป็นระยะทางเกือบ 8 กิโลเมตร มีหอคอยกั้นระหว่างกำแพงเป็นระยะๆ มีประตูเมือง 8 แห่ง เข้าสู่ภายในเมือง ตัวอาคารสร้างด้วยอิฐ ตรงประตูเมืองวาดภาพเป็นรูปสัตว์นับร้อยๆ ภาพ ตกแต่งสวยงาม มีถนนบนกำแพงเมืองกว้างพอให้ทหารเดินไปรอบๆเมือง เพื่อป้องกันข้าศึกรุุกรานเมือง",
        "year": "ปีที่สร้าง  2584–2561BC "
      },
      "o3": {
        "header": "วิหารแห่งอาร์ทิมิส (Temple of Artemis at Ephesus)",
        "body": "สร้างด้วยหินอ่อน เลียบแบบศิลปะแบบกรีก เพื่อถวายเทพเจ้าอาร์เทมีส (เทพเจ้าแห่งดวงจันทร์ของกรีก) ผู้มาจากสวรรค์ ผู้ช่วยชาวเมืองให้พ้นจากหายนะและภัยพิบัติได้ อยู่ในเมืองอีเฟซุส  บนชายฝั่งแห่งหนึ่ง  (ซึ่งปัจจุบันนี้ คือประเทศตุรกี) ในรัชสมัยของกษัตริย์อเล็กซานเดอร์แห่งกรีก จัดเป็นวิหารที่สวยงามแห่งหนึ่งจนกลายเป็นที่รู้จักว่า เป็นสิ่งมหัศจรรย์ของโลกในยุคเก่า  วิหารนี้มีเนื้อที่ถึง 54,720 ตารางฟุต ตัวอาคารมีความกว้างถึง 400 ฟุต บริเวณโดยรอบวัดแห่งนี้กินเนื้อที่เกือบ 2 เอเคอร์ และมีเสาหินตั้งตระหง่านรอบตัวอาคารมากกว่า 100 เสาหิน แต่ละเสาหินมีเส้นผ่านศุนย์กลาง 6 ฟุต ความสูง 60 ฟุต หลังคาปูด้วยกระเบื้องหินอ่อน ตัววิหารเคยถูกไฟไหม้เสียหายครึ่งหนึ่งแต่ได้รับการซ่อมแซมใหม่โดยกษัตริย์อเล็กซานเดอร์ ",
        "year": "ปีที่สร้าง 550bc ซ่อมอีกครั้งเมื่อ 323bc"
      },
      "o4": {
        "header": "เทวรูปซูสที่โอลิมเปีย (Statue of Zeus at Olympia) ",
        "body": "อนุสาวรีย์นี้เป็นรูปสลักเทพเจ้าซีอุส นั่งบนบัลลังก์สีทองที่แกะสลักด้วยงาช้างจำนวนมากมาประกอบกันขึ้นผู้ที่ปั้นเทวรูปซีอุสนี้ เป็นปฏิมากรเอกชาวกรีก ชื่อ ฟีดีอัส เป็นสิ่งมหัศจรรย์ยุคเก่าแก่สิ่งหนึ่งของโลก คือ สร้างขึ้นประมาณ 2,400 ปีก่อน ระหว่างปี ค.ศ. 53 - 111 ตามตำนานที่จารึกไว้ได้ระบุว่าเทวรูปทำจากงาช้างสูง 58 ฟุต มีขนาดใหญ่กว่าคนปรกติถึง 8 เท่า พระหัตถ์ซ้ายทรงคทา พระหัตถ์ขวารองรับ รูปปั้นแห่งชัยชนะ (A small figure of Victory ) มีเครื่องประดับประดาด้วยทองคำล้วน   ชาวโรมันเรียกอีกชื่อหนึ่งว่า จูปีเตอร์ ชาวกรีกได้เรียกเทวรูปนี้ว่า ซุส ซึ่งเป็นสัญลักษณ์ว่าเป็นผู้นำแห่งเทพเจ้า ซึ่งชาวกรีกนับถื่อมากที่สุดในยุคนั้น",
        "year": "ปีที่สร้าง 435BC"
      },
      "o5": {
        "header": "สุสานแห่งฮาลิคาร์นัสเซิส (Mausoleum at Halicarnassus)",
        "body": "สุสานเก่าแก่ของพระเจ้ามุสโซลุส กษัตริย์แห่งเอเซียไมเนอร์ หรือเปอร์เซียในปัจจุบัน สร้างโดยพระมเหสี  ชื่อ อาเตมีสเซีย ซึ่งเป็นทั้งพระขนิษฐาของพระองค์ด้วย ความตายของพระสวามี ทำให้พระนางเสียพระทัยมากถึงขนาดผสมเถ้าถ่านกระดูกของพระสวามีกับเครื่องดื่มของพระองค์ จึงสร้างสุสานไว้เป็นที่ระลึก คำว่า MAUSOLEUM จึงถูกใช้ขนานนามสุสานขนาดใหญ่ ๆ ในเวลาต่อมา โดยสุสานเก่าแก่ซึ่งได้ชื่อว่าเป็นสิ่งมหัศจรรย์ของโลกนี้ เป็นผลงานของนายช่างผู้สร้างสรรค์ทั้ง 4 คน ด้วยกัน คือ ฟิดิอัส , ชาติรัสบายฮาซีส , สโคปปาส และ ทิโมทิอัส สร้างด้วยหินอ่อน มีขนาดสูงถึง 140 ฟุต ฐานโดยรอบยาวถึง 460 ฟุต บนยอดสุดเป็นพื้นเหลี่ยม เล็กกว่าฐานล่าง ได้ปั้นเป็นรูปราชรถและม้า 1 ชุด กำลังวิ่ง และมีกษัตริย์พระมเหสียืนอยู่บนราชรถม้า ประกอบด้วยลวดลาย สวยงามมาก",
        "year": "ปีที่สร้าง  351BC "
      },
      "o6": {
        "header": "เทวรูปโคโลสซูสแห่งโรดส์ (Colossus of Rhodes) ",
        "body": "รูปของเทพเจ้าเฮลิออส หรืออพอลโล สูงประมาณ 32 เมตร และมีน้ำหนักประมาณ 295 ตัน  หล่อด้วยทองสัมฤทธิ์ในท่ายืน ตัวเทวรูปตั้งอยู่บนฐานทั้งสองข้างของปากอ่าว องค์เทวรูปยืนถ่างคร่อมปากอ่าวให้เรือลอดได้ มีกระจกบานใหญ่ติดอยู่บนอกทำให้เรือที่แล่นออกจากอียิปต์มองเห็นได้ชัดเจน เกิดจากการที่ชาวเกาะโรดส์ได้ตัดสินใจร่วมรบกับพระเจ้าปโตเลมีแห่งอียิปต์ จากการรุกรานของชาวแมซีโดเนียน พวกแมซีโดเนียนเข้าล้อมเกาะไว้ด้วยเรือและทหารมาก มาย แต่ชาวเกาะโรดส์ก็ได้ตีกลับ และเกิดการปะทะกันอยู่เกือบปีจนได้รับชัยชนะ ในบรรดาผู้ที่ร่วมปกป้องเกาะโรดส์ก็มี ปฏิมากรผู้หนึ่งชื่อว่า ชาเรส แห่งลินดัส ด้วยความยินดีปรีดาของชาวโรดส์ และเพื่อเป็นอนุสรณ์แห่งการหลุดพ้นจากชาว แมซีโดเนียน ชาร์เรส จึงได้รับมอบหมายให้สร้างรูปปั้นบรอนซ์มหึมาของเทพเจ้าแห่งพระอาทิตย์ หรืออพอลโล",
        "year": "ปีที่สร้าง 292–280BC"
      },
      "o7": {
        "header": "ประภาคารฟาโรสแห่งอเล็กซานเดรีย (The Pharos Lighthouse of Alexandria)",
        "body": "ตัวประคาภารมีความสูงเท่าใดไม่แน่ชัด แต่อยู่ในระหว่าง 200-600 ฟุต  สร้างด้วยหินอ่อนแกะสลัก ช่วงล่างเป็นรูปสี่เหลี่ยม ช่วงกลางเป็นรูปแปดเหลี่ยม และช่วงบนเป็นทรงกลม ยอดบนสุดของประภาคารนี้ มีภาชนะสำหรับใส่ถ่านหรือกองฟืน ทำหน้าที่เป็นตะเกียงขนาดใหญ่บนยอดนักประวัติศาสตร์สันนิษฐานว่าในเวลากลางวันจะปล่อยควัน ในเวลากลางคืนจะเป็นแสงไฟสว่างที่เห็นได้จากระยะไกล ซึ่งลุกโชติช่วงทั้งวันทั้งคืนเพื่อเป็นไฟสัญญาณไฟ บนยอดประภาคารนี้เห็นได้ไกลในทะเลเมดิเตอร์เรเนียนถึง 40 กิโลเมตร ซึ่งยังไม่ทราบว่าใช้วิธีใดในการจุดไฟและส่องแสง บ้างก็สันนิษฐานว่าใช้กระจกในการส่องแสง บ้างก็เชื่อว่าสามารถส่องแสงได้ถึง 4 ทาง แต่บางส่วนก็เชื่อว่า ส่องแสงได้เพียงแค่ 2 ทางเท่านั้น",
        "year": "ปีที่สร้าง 280BC"
      },
    },
    "mid": {
      "m1": {
        "header": "หลุมฝังศพแห่งอเล็กซานเดรีย (Catacombs of Kom El Shoqafa)",
        "body": "เป็นสถานที่ฝังศพใต้ดินของกษัตริย์อียิปต์โบราณอีกแบบหนึ่งนอกเหนือไปจากปิรามิด อยู่ที่เมืองอเล็กซานเดรีย ประเทศอียิปต์ อุโมงค์แห่งนี้มีชื่อเรียกว่า คาตาโกมบ์ (catacombs) โดยขุดลึกเข้าไปในภูเขาหินทรายเป็นขั้นๆ บางตอนมีความลึกถึง 70-80 ฟุต มีทางเดินกว้าง 3-4 ฟุต ทางเดินจะวกไปเวียนมาเป็นระยะทางนับร้อยไมล์ ผนังอุโมงค์ถูกเจาะเป็นช่อง ๆ ลึกเข้าไปเพื่อใช้เป็นที่บรรจุศพ มีแท่นบูชาและตะเกียงดวงเล็ก ๆ แขวนไว้ บางส่วนของอุโมงค์แห่งนี้ได้ตบแต่งเอาไว้อย่างวิจิตรพิสดาร",
        "year": "ปีที่สร้าง ประมาณ 200ad"
      },
      "m2": {
        "header": "สโตนเฮนจ์ (Stonehenge)",
        "body": "ตั้งอยู่กลาง “ทุ่งราบซัลลิสเบอร์รี่” (Salisbury Plain) บริเวณตอนใต้ของเกาะอังกฤษ สามารถมองเห็นได้อย่างชัดเจนเพราะบริเวณโดยรอบนั้นไม่มีสิ่งปลูกสร้างอื่นใดเลย มีจำนวนแท่งหินทั้งหมด 112 ก้อน ตั้งเรียงเป็นวงกลมซ้อนกัน 3 วง และวางเรียงในลักษณะที่ต่างกัน ทั้งวางนอน วางพาดกัน และวางตั้งขึ้น",
        "year": "ปีที่สร้าง ตั้งแต่ 3000bc ถึง 2000bc"
      },
      "m3": {
        "header": "เจดีย์กระเบื้องเคลือบ (Porcelain Tower of Nanjing)",
        "body": "ตั้งอยู่ที่วัดต้าเป้าเอินในเมืองนานกิงซึ่งเป็น เมืองเอกของมณฑลเจียงซู อยู่ทางตอนเหนือของจีน สร้างไว้เมื่อประมาณคริสต์ศตวรรษที่ 15 สมัยของราชวงศ์หมิง โดยพุทธศาสนิกชนชาวจีนเป็นผู้สร้างเอาไว้ เจดีย์ออกแบบเป็นทรงแปดเหลี่ยม ความสูงทั้งสิ้น 9 ชั้น หลังคามุงด้วยกระเบื้องเคลือบสีเขียว มีกระดิ่งแขวนไว้ทั้งหมด 80 ลูก เล่ากันว่าบนยอดเจดีย์นั้น มีลูกบอลทำด้วยทองติดอยู่ ประกอบด้วยเหล็กที่เป็นวงแหวนล้อมรอบถึง 9 วง นอกจากี้ยังมีไข่มุกขนาดใหญ่ 5 เม็ดอยู่ที่ปลาย",
        "year": "ปีที่สร้าง ประมาณ 1500ad"
      },
      "m4": {
        "header": "ฮาเกียโซเฟีย  (Hagia Sophia)",
        "body": "ฮาเกียโซเฟีย มีชื่อตรงกับความหมายภาษาอังกฤษว่า “Holy Wisdom” หรือแปลเป็นไทยได้ว่า “ภูมิปัญญาศักดิ์สิทธิ์” ฮากาโซเฟียเป็นโบสถ์ทรงโดมที่ใหญ่ที่สุดในโลก และได้รับการขนานนามว่าเป็น “มหาโบสถ์” (The Great Church)  เนื่องจากมีขนาดใหญ่ที่สุดเมื่อเทียบกับโบสถ์คริสต์ทั่วโลกในยุคนั้น โบสถ์ฮาเกียโซเฟียแห่งนี้ยังเป็นต้นแบบของสถาปัตยกรรมโบสถ์ของคริสต์ศาสนิกชนตะวันตก ยุคไบแซนไทน์ (Byzantine) ทั้งศาสนาคริสต์นิกายออร์โธดอกซ์ (Orthodox) และกรีกคาทอลิก (Greek Catholic)",
        "year": "ปีที่สร้าง 532ce"
      },
      "m5": {
        "header": "หอเอนเมืองปิซา (Leaning Tower of Pisa)",
        "body": "เป็นหอระฆังสูงใหญ่ของศาสนาคริสต์นิกายโรมันคาทอลิกที่ซึ่งตั้งอยู่ที่จัตุรัส Piazza del Duomo เมืองปิซา เป็นหอระฆังที่สร้างด้วยหินอ่อนสีขาว ซึ่งมีเอกลักษณ์โดดเด่นที่ความเอนเอียงของหอระฆังซึ่งยอดของหอระฆังนั้นห่างจากแนวตั้งฉากของพื้นไปประมาณ 3.9 เมตรเลยทีเดียว",
        "year": "ปีที่สร้าง 1173ad"
      },
      "m6": {
        "header": "โคลอสเซียม (Colosseum)",
        "body": "หนึ่งในสถานที่ท่องเที่ยวที่มีชื่อเสียงมากที่สุดของกรุงโรมประเทศอิตาลี เป็นสนามกีฬากลางแจ้งโบราณขนาดใหญ่ยักษ์ ใจกลางเมือง ที่นอกจากจะเคยเป็นสนามประลองอันทรงเกียรติที่โหดเหี้ยมแล้ว ยังได้รับการคัดเลือกจากองค์กร New 7 Wonders ให้เป็นหนึ่งในเจ็ดสิ่งมหัศจรรย์ของโลกอีกด้วย สนามกีฬาโบราณขนาดใหญ่แห่งนี้ถูกสร้างขึ้นในสมัยจักรพรรดิเวสเปเซี่ยนแห่งจักวรรดิโรมัน และได้สร้างแล้วเสร็จในสมัยจักรพรรดิไททัสในช่วงคริสต์ศตวรรษที่ 1 หรือราวๆ ปี ค.ศ. 80 โดยมีลักษณะเป็นอัฒจันทร์รูปวงกลมที่ก่อด้วยอิฐและหินทรายที่มีเส้นรอบวงประมาณ 527 เมตร สูงประมาณ 57 เมตร และสามารถบรรจุคนได้มากถึงประมาณ 50,000 คนเลยทีเดียว",
        "year": "ปีที่สร้าง 80 AD"
      },
      "m7": {
        "header": "กำแพงเมืองจีน (Great Wall of China)",
        "body": "กำแพงที่มีป้อมคั่นเป็นช่วง ๆ ของจีนสมัยโบราณ กำแพงส่วนใหญ่ที่ปรากฏในปัจจุบันสร้างขึ้นในสมัยราชวงศ์ฉิน ทั้งนี้เพื่อป้องกันการรุกรานจากพวกฮันส์ หรือชนเผ่าซยงหนู (Xiongnu)ที่เป็นไม้เบื่อไม้เมากับอารยธรรมจีนในยุคต้นๆ ตั้งแต่สมัยราชวงศ์โจว (ราว 400 ปีก่อนคริสตกาล) เนื่องจากจะเข้ามารุกรานจีนตามแนวชายแดนทางเหนือ ในสมัยราชวงค์ฉิน ได้สั่งให้สร้างกำแพงหมื่นลี้ตามชายแดน เพื่อป้องกันพวก ซยงหนู เข้ามารุกราน และพวกเติร์กจากทางเหนือ หลังจากนั้นยังมีการสร้างกำแพงต่ออีกหลายครั้งด้วยกันยิ่งทำให้กำแพงมีความยาวมากขึ้น",
        "year": "ปีที่สร้าง 700 BC"
      },
    },
    "new": {
      "n1": {
        "header": "ชิเชนอิตซา (Chichén Itzá)",
        "body": "ศูนย์กลางสำคัญทางอารยธรรมในแทบทุกด้านของชนเผ่ามายาที่อาศัยอยู่ในประเทศเม็กซิโกช่วง ค.ศ. 600-1200 ถือเป็นชนเผ่าที่มีพัฒนาการด้านดาราศาสตร์ สถาปัตยกรรม ปรัชญา ฯลฯ ที่ทันสมัย และได้รับการยอมรับที่สุดในยุคศตวรรษที่ 10-15 ดังจะเห็นได้จากสถาปัตยกรรมต่างๆ ที่หลงเหลืออยู่ภายในเขตโบราณสถานชิเชนอิตซาที่ยิ่งใหญ่ และเปี่ยมไปด้วยมนต์ขลังของการก่อสร้างอันน่าทึ่ง ซึ่งคำว่าชิเชนอิตซา (Chichen Itza) ในภาษามายานั้นมีความหมายว่า ต้นทางแห่งความสุขของประชาชน โดยปัจจุบันพื้นที่ตรงนี้ถูกยกให้เป็นหนึ่งในเขตโบราณสถานทรงคุณค่าที่สุดชิ้นหนึ่งของโลก บนพื้นที่กว่า 64 ตารางกิโลเมตรนั้นมีทั้ง วิหารพีระมิด พระราชวัง หอดูดาว โรงอาบน้ำ ฯลฯ จนถูกยกให้เป็นพื้นที่ทางมรดกโลกที่สำคัญที่สุดแห่งหนึ่งของโลก",
        "year": "ปีที่สร้าง 600 AD"
      },
      "n2": {
        "header": "รูปปั้นพระเยซูคริสต์ (Christ the Redeemer)",
        "body": "อยู่บนยอดเขากอร์โกวาดู ในนครรีโอเดจาเนโร ประเทศบราซิล ได้รับการลงคะแนนเป็น 1 ใน 7 สิ่งมหัศจรรย์ของโลกยุคใหม่ และถือเป็นสัญญาลักษณ์ของนครรีโอเดจาเนโร และที่ยึดเหนี่ยวทางจิตใจของชาวคริสต์ในประเทศบราซิลทั้งหมด ทั้งยังเป็นแหล่งท่องเที่ยวยอดนิยมของเมือง เป็นรูปปั้นสูง 30 เมตร กว้าง 38 เมตร ( วัดจากปลายแขนซ้าย ถึงปลายแขนขวา ) มีน้ำหนัก 635 ตัน ตั้งอยู่บนจุดสูงสุดของยอดเขากอร์โกวาดูในอุทยานแห่งชาติทิจูคาในตำแหน่งที่สามารถมองเห็นมหานครรีโอเดจาเนโรได้ทั้งหมด ถือเป็นรูปปั้นพระเยซูคริสต์ขนาดใหญ่ที่สุดในโลก ที่ตั้งอยู่บนระดับความสูง 710 เมตร",
        "year": "ปีที่สร้าง 1931 AD"
      },
      "n3": {
        "header": "มาชูปิกชู (Machu Picchu)",
        "body": "มาชู ปิกชู (Machu Picchu) เป็นซากเมืองโบราณของอารยธรรมอินคา อดีตนั้นเมืองแห่งนี้เข้าถึงได้ยาก มีความเร้นลับและมหัศจรรย์ เพราะตั้งอยู่บนภูเขาสูง อันเป็นภูเขาส่วนหนึ่งในแนวเทือกเขาแอนดีสที่สูงใหญ่ที่สุดในโลก มาชู ปิกชู สร้างขึ้นในช่วงศตวรรษที่ 15 เคยเป็นดินแดนที่มีความเจริญรุ่งเรืองในยุคที่อาณาจักรอินคาอยู่ในยุคเฟื่องฟู แต่เมื่ออาณาจักรอินคาต้องล่มสลายด้วยการขยายอำนาจของสเปน มาชู ปิกชู ก็ถูกทอดทิ้ง กลายเป็นเมืองสาบสูญไปในช่วงศตวรรษที่ 16 และได้กลับกลายมาเป็นแหล่งท่องเที่ยวในฝันของนักเดินทางจากทั่วโลกอีกครั้ง หลังจากการค้นพบโดย Hiram Bingham ในปี ค.ศ. 1911",
        "year": "ปีที่สร้าง 1450 AD"
      },
      "n4": {
        "header": "กำแพงเมืองจีน (Great Wall of China)",
        "body": "กำแพงที่มีป้อมคั่นเป็นช่วง ๆ ของจีนสมัยโบราณ กำแพงส่วนใหญ่ที่ปรากฏในปัจจุบันสร้างขึ้นในสมัยราชวงศ์ฉิน ทั้งนี้เพื่อป้องกันการรุกรานจากพวกฮันส์ หรือชนเผ่าซยงหนู (Xiongnu)ที่เป็นไม้เบื่อไม้เมากับอารยธรรมจีนในยุคต้นๆ ตั้งแต่สมัยราชวงศ์โจว (ราว 400 ปีก่อนคริสตกาล) เนื่องจากจะเข้ามารุกรานจีนตามแนวชายแดนทางเหนือ ในสมัยราชวงค์ฉิน ได้สั่งให้สร้างกำแพงหมื่นลี้ตามชายแดน เพื่อป้องกันพวก ซยงหนู เข้ามารุกราน และพวกเติร์กจากทางเหนือ หลังจากนั้นยังมีการสร้างกำแพงต่ออีกหลายครั้งด้วยกันยิ่งทำให้กำแพงมีความยาวมากขึ้น",
        "year": "ปีที่สร้าง 700 BC"
      },
      "n5": {
        "header": "เปตรา (Petra)",
        "body": "สถานที่ท่องเที่ยวที่มีชื่อเสียงมากเป็นอันดับต้นๆของโลก นครหินแกะสลักโบราณที่ซ่อนตัวอย่างลึกลับในหุบเขา วาดี มูซา หรือ หุบเขาโมเสส ที่ตั้งอยู่ระหว่างทะเลสาบเดดซีกับทะเลอัคบาในประเทศ จอร์แดน นครนี้แต่เดิมนั้นเป็นนครแห่งการค้าขนาดใหญ่ซึ่งต่อมาถูกละทิ้งเป็นเวลานานกว่า 700 ปี จนเมื่อมีนักสำรวจชาวสวิตเซอร์แลนด์ โยฮันน์ ลุควิก บวร์กฮาร์ท เดินทางผ่านมาพบเห็นเข้าเมื่อปี พ.ศ. 2355 (ค.ศ. 1812) ซึ่งปัจจุบันได้กลายเป็นสัญลักษณ์ที่สำคัญและเป็นแหล่งท่องเที่ยวที่มีนักท่องเที่ยวเข้าชมมากที่สุดของประเทศจอร์แดน",
        "year": "ปีที่สร้าง 312 BC"
      },
      "n6": {
        "header": "ทัชมาฮาล (Taj Mahal)",
        "body": "ทัชมาฮาลเป็นอาคารฝังศพสร้างด้วยหินอ่อนสีขาวงาช้าง ตั้งอยู่บนฝั่งแม่น้ำทางใต้ของแม่น้ำยมุนา ในเมืองอัคระ รัฐอุตตรประเทศ ประเทศอินเดีย ทับมาฮาลสร้างขึ้นโดยจักรพรรดิโมกุล จักรพรรดิชาห์ชะฮัน (ครองราชย์ 1628 ถึง 1658) เพื่อตั้งศพของพระสนมเอก มุมตาช มหัล และเป็นที่ตั้งพระศพของจักรพรรดิชาห์ชะฮันเอง ทัชมาฮาลประกอบด้วยตัวอาคารสุสาน, มัสยิด และเกสต์เฮาส์ รายล้อมด้วยสวน การก่อสร้างทัชมาฮาลสำเร็จสมบูรณ์ในปี 1643 แต่มีการก่อสร้างในเฟสอื่น ๆ ชองโครงการที่ดำเนินต่อไปอีกกว่า 10 ปี ",
        "year": "ปีที่สร้าง 1643 AD"
      },
      "n7": {
        "header": "โคลอสเซียม(Colosseum)",
        "body": "หนึ่งในสถานที่ท่องเที่ยวที่มีชื่อเสียงมากที่สุดของกรุงโรมประเทศอิตาลี เป็นสนามกีฬากลางแจ้งโบราณขนาดใหญ่ยักษ์ ใจกลางเมือง ที่นอกจากจะเคยเป็นสนามประลองอันทรงเกียรติที่โหดเหี้ยมแล้ว ยังได้รับการคัดเลือกจากองค์กร New 7 Wonders ให้เป็นหนึ่งในเจ็ดสิ่งมหัศจรรย์ของโลกอีกด้วย สนามกีฬาโบราณขนาดใหญ่แห่งนี้ถูกสร้างขึ้นในสมัยจักรพรรดิเวสเปเซี่ยนแห่งจักวรรดิโรมัน และได้สร้างแล้วเสร็จในสมัยจักรพรรดิไททัสในช่วงคริสต์ศตวรรษที่ 1 หรือราวๆ ปี ค.ศ. 80 โดยมีลักษณะเป็นอัฒจันทร์รูปวงกลมที่ก่อด้วยอิฐและหินทรายที่มีเส้นรอบวงประมาณ 527 เมตร สูงประมาณ 57 เมตร และสามารถบรรจุคนได้มากถึงประมาณ 50,000 คนเลยทีเดียว",
        "year": "ปีที่สร้าง 80 AD"
      },
    }
  }


  var nameButton = "button" + number
  var nameImage
  var thisAge = document.getElementById('thisAge').innerHTML
  if (thisAge == "Old Age") {
    nameImage = "old" + number
  } else if (thisAge == "Mid Age") {
    nameImage = "mid" + number
  } else if (thisAge == "New Age") {
    nameImage = "new" + number
  }
  const image1 = document.getElementById(nameImage)
  var textBoxHead = document.getElementById("textHead")
  var textBoxDetail = document.getElementById("textDetail")
  var textBoxYear = document.getElementById("textYear")
  if (nameImage != "old1") { document.getElementById("old1").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.old.o1.header
    textBoxDetail.innerHTML = textBufferDetail.old.o1.body
    textBoxYear.innerHTML = textBufferDetail.old.o1.year
    document.getElementById("old1").className = "enabled"
  }
  if (nameImage != "old2") { document.getElementById("old2").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.old.o2.header
    textBoxDetail.innerHTML = textBufferDetail.old.o2.body
    textBoxYear.innerHTML = textBufferDetail.old.o2.year
    document.getElementById("old2").className = "enabled"
  }
  if (nameImage != "old3") { document.getElementById("old3").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.old.o3.header
    textBoxDetail.innerHTML = textBufferDetail.old.o3.body
    textBoxYear.innerHTML = textBufferDetail.old.o3.year
    document.getElementById("old3").className = "enabled"
  }
  if (nameImage != "old4") { document.getElementById("old4").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.old.o4.header
    textBoxDetail.innerHTML = textBufferDetail.old.o4.body
    textBoxYear.innerHTML = textBufferDetail.old.o4.year
    document.getElementById("old4").className = "enabled"
  }
  if (nameImage != "old5") { document.getElementById("old5").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.old.o5.header
    textBoxDetail.innerHTML = textBufferDetail.old.o5.body
    textBoxYear.innerHTML = textBufferDetail.old.o5.year
    document.getElementById("old5").className = "enabled"
  }
  if (nameImage != "old6") { document.getElementById("old6").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.old.o6.header
    textBoxDetail.innerHTML = textBufferDetail.old.o6.body
    textBoxYear.innerHTML = textBufferDetail.old.o6.year
    document.getElementById("old6").className = "enabled"
  }
  if (nameImage != "old7") { document.getElementById("old7").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.old.o7.header
    textBoxDetail.innerHTML = textBufferDetail.old.o7.body
    textBoxYear.innerHTML = textBufferDetail.old.o7.year
    document.getElementById("old7").className = "enabled"
  }

  if (nameImage != "mid1") { document.getElementById("mid1").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.mid.m1.header
    textBoxDetail.innerHTML = textBufferDetail.mid.m1.body
    textBoxYear.innerHTML = textBufferDetail.mid.m1.year
    document.getElementById("mid1").className = "enabled"
  }
  if (nameImage != "mid2") { document.getElementById("mid2").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.mid.m2.header
    textBoxDetail.innerHTML = textBufferDetail.mid.m2.body
    textBoxYear.innerHTML = textBufferDetail.mid.m2.year
    document.getElementById("mid2").className = "enabled"
  }
  if (nameImage != "mid3") { document.getElementById("mid3").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.mid.m3.header
    textBoxDetail.innerHTML = textBufferDetail.mid.m3.body
    textBoxYear.innerHTML = textBufferDetail.mid.m3.year
    document.getElementById("mid3").className = "enabled"
  }
  if (nameImage != "mid4") { document.getElementById("mid4").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.mid.m4.header
    textBoxDetail.innerHTML = textBufferDetail.mid.m4.body
    textBoxYear.innerHTML = textBufferDetail.mid.m4.year
    document.getElementById("mid4").className = "enabled"
  }
  if (nameImage != "mid5") { document.getElementById("mid5").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.mid.m5.header
    textBoxDetail.innerHTML = textBufferDetail.mid.m5.body
    textBoxYear.innerHTML = textBufferDetail.mid.m5.year
    document.getElementById("mid5").className = "enabled"
  }
  if (nameImage != "mid6") { document.getElementById("mid6").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.mid.m6.header
    textBoxDetail.innerHTML = textBufferDetail.mid.m6.body
    textBoxYear.innerHTML = textBufferDetail.mid.m6.year
    document.getElementById("mid6").className = "enabled"
  }
  if (nameImage != "mid7") { document.getElementById("mid7").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.mid.m7.header
    textBoxDetail.innerHTML = textBufferDetail.mid.m7.body
    textBoxYear.innerHTML = textBufferDetail.mid.m7.year
    document.getElementById("mid7").className = "enabled"
  }

  if (nameImage != "new1") { document.getElementById("new1").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.new.n1.header
    textBoxDetail.innerHTML = textBufferDetail.new.n1.body
    textBoxYear.innerHTML = textBufferDetail.new.n1.year
    document.getElementById("new1").className = "enabled"
  }
  if (nameImage != "new2") { document.getElementById("new2").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.new.n2.header
    textBoxDetail.innerHTML = textBufferDetail.new.n2.body
    textBoxYear.innerHTML = textBufferDetail.new.n2.year
    document.getElementById("new2").className = "enabled"
  }
  if (nameImage != "new3") { document.getElementById("new3").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.new.n3.header
    textBoxDetail.innerHTML = textBufferDetail.new.n3.body
    textBoxYear.innerHTML = textBufferDetail.new.n3.year
    document.getElementById("new3").className = "enabled"
  }
  if (nameImage != "new4") { document.getElementById("new4").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.new.n4.header
    textBoxDetail.innerHTML = textBufferDetail.new.n4.body
    textBoxYear.innerHTML = textBufferDetail.new.n4.year
    document.getElementById("new4").className = "enabled"
  }
  if (nameImage != "new5") { document.getElementById("new5").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.new.n5.header
    textBoxDetail.innerHTML = textBufferDetail.new.n5.body
    textBoxYear.innerHTML = textBufferDetail.new.n5.year
    document.getElementById("new5").className = "enabled"
  }
  if (nameImage != "new6") { document.getElementById("new6").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.new.n6.header
    textBoxDetail.innerHTML = textBufferDetail.new.n6.body
    textBoxYear.innerHTML = textBufferDetail.new.n6.year
    document.getElementById("new6").className = "enabled"
  }
  if (nameImage != "new7") { document.getElementById("new7").className = "disabled" }
  else {
    textBoxHead.innerHTML = textBufferDetail.new.n7.header
    textBoxDetail.innerHTML = textBufferDetail.new.n7.body
    textBoxYear.innerHTML = textBufferDetail.new.n7.year
    document.getElementById("new7").className = "enabled"
  }
  var titleModal = document.getElementById("titleModal");
  titleModal.innerHTML = textBoxHead.innerHTML
}

// document.getElementById("app-bg").style.backgroundRepeat = "url('./src/images/new1.jpg') center";
// Pin data
window.onload = startupPage;