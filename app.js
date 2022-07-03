var images, captions;


images = ['./images/0z4a7998-2.JPG', './images/southstackatnight.jpeg', './images/oliviaswedding.jpeg', './images/windemere.jpeg', './images/coors.jpeg', './images/beach.jpeg', './images/995DAFB5-E478-40CE-957A-4FAB4D8CF64B.JPG', './images/21246577_1466273480153776_8666502172486926269_o.jpeg', './images/prestatynbeach.jpeg', './images/barkbybeach.jpeg', './images/DSC02955.JPG', './images/paris.jpeg', './images/flamingoglasses.jpeg', './images/0Z4A3119.JPG', './images/DSC03879.JPG', './images/oscarchristmas.jpeg'];
captions = ['My daughter eating bluebells...', 'Southstack, Anglesey at sunset', 'Confetti throw at a friends wedding', 'The sunset at Windemere', 'Friends entering a garden party', 'My step father chasing my son on the beach', 'My youngest son on a beach in Cyprus at sunset', 'My boys at my brothers wedding', 'My hometown beach at Sunset', 'A friend at Barkby Beach', 'My daughter running on a beach in Wales', 'The Eiffel Tower, Paris', 'A friend wearing flamingo glasses at a party', 'My son in the sea in Cyprus', 'My boys climbing rocks on holiday in Anglesey', 'My son seeing Christmas lights for the first time'];
let element_dogimage = document.getElementById('dogimage');
element_dogimage.setAttribute("src", './images/cornfields.jpeg');


document.getElementById('next').addEventListener('click', (event) => {
  images.push(images[0]);
  captions.push(captions[0]);
  let element_dogimage2 = document.getElementById('dogimage');
  element_dogimage2.setAttribute("src", images.shift());
  let element_caption = document.getElementById('caption');
  element_caption.innerText = captions.shift();

});

document.getElementById('previous').addEventListener('click', (event) => {
  images.unshift(images.slice(-1)[0]);
  captions.unshift(captions.slice(-1)[0]);
  let element_dogimage3 = document.getElementById('dogimage');
  element_dogimage3.setAttribute("src", images.pop());
  let element_caption2 = document.getElementById('caption');
  element_caption2.innerText = captions.pop();

});