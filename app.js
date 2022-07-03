var images;


images = ['./images/0z4a7998-2.JPG', './images/southstackatnight.jpeg', './images/oliviaswedding.jpeg', './images/windemere.jpeg', './images/coors.jpeg', './images/beach.jpeg', './images/995DAFB5-E478-40CE-957A-4FAB4D8CF64B.JPG', './images/21246577_1466273480153776_8666502172486926269_o.jpeg', './images/prestatynbeach.jpeg', './images/barkbybeach.jpeg', './images/DSC02955.JPG', './images/paris.jpeg', './images/flamingoglasses.jpeg', './images/0Z4A3119.JPG', './images/windemere.jpeg', './images/DSC03879.JPG', './images/oscarchristmas.jpeg'];
let element_dogimage = document.getElementById('dogimage');
element_dogimage.setAttribute("src", './images/cornfields.jpeg');


document.getElementById('next').addEventListener('click', (event) => {
  images.push(images[0]);
  let element_dogimage2 = document.getElementById('dogimage');
  element_dogimage2.setAttribute("src", images.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  images.unshift(images.pop());
  let element_dogimage3 = document.getElementById('dogimage');
  element_dogimage3.setAttribute("src", images.slice(-1)[0]);

});