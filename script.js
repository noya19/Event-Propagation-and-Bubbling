const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

//-----------------For Capturing Phaze ------------/

document.addEventListener(
  'click',
  (e) => {
    console.log('document Capture');
  },
  { capture: true }
);

grandparent.addEventListener(
  'click',
  (e) => {
    console.log('grandparent Capture');
  },
  { capture: true }
);

parent.addEventListener(
  'click',
  (e) => {
    console.log('parent Capture');
  },
  { capture: true }
);

child.addEventListener(
  'click',
  (e) => {
    console.log('child Capture');
  },
  { capture: true }
);

// ----------------------------For Bubbling Phaze --------------/

document.addEventListener('click', (e) => {
  console.log('document');
});

grandparent.addEventListener('click', (e) => {
  console.log('grandparent');
});

parent.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('parent');
});

child.addEventListener('click', (e) => {
  console.log('child');
});
