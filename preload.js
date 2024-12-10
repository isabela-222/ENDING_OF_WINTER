console.log("Preload running...");

// loop through all the content you want to preload
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

// images and sounds
preload(
  "imgs/end/e1.png",
  "imgs/end/e2.png",
  "imgs/end/e3.png",
  "imgs/end/e4.png",
  "imgs/end/e5.png",
  "imgs/end/e6.png",
  "imgs/end/e7.png",
  "imgs/end/e8.png",
  "imgs/end/e9.png",
  "imgs/end/1.jpeg",
  "imgs/end/3.jpeg",
  "imgs/end/4.jpeg",
  "imgs/end/5.jpeg",
  "imgs/end/6.jpeg",
  "imgs/end/7.jpeg",
  "imgs/end/8.jpeg",
  "imgs/end/9.jpeg",
  "imgs/end/10.jpeg",
  "imgs/end/11.jpeg",
  "imgs/end/12.jpeg",
  "imgs/end/13.jpeg",
  "imgs/end/14.jpeg",
  "imgs/end/15.jpeg",
  "imgs/end/16.jpeg",
  "imgs/end/17.jpeg",
  "imgs/end/18.jpeg",
  "imgs/end/19.jpeg",
  "imgs/end/20.jpeg",
  "imgs/end/21.jpeg",
  "imgs/end/22.jpeg",
  "imgs/end/23.jpeg",
  "imgs/end/24.jpeg",
  "imgs/end/25.jpeg",
  "imgs/end/26.jpeg",
  "imgs/end/27.jpeg",
  "imgs/end/28.jpeg",
  "imgs/end/29.jpeg",
  "imgs/end/30.jpeg",
  "imgs/end/31.jpeg",
  "imgs/end/32.jpeg",
  "imgs/end/33.jpeg",
  "imgs/end/34.jpeg",
  "imgs/end/35.jpeg",
  "imgs/end/36.jpeg",
  "imgs/end/37.jpeg",
  "imgs/end/38.jpeg",
  "imgs/end/39.jpeg"
);
