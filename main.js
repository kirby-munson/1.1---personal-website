function changeimage() {
  var image = imageById('myPic');
  if (image.src.match("super")) {
    image.src = "https://pixabay.com/static/uploads/photo/2013/07/12/17/58/heroes-152707_960_720.png";
  } else {
    image.src = "http://images.clipartpanda.com/superman-black-and-white-nTXqg8jTB.png"
  }
  }
}
