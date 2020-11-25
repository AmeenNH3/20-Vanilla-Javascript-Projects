function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Gallery(element){
  this.list = [...element.querySelectorAll('.img')];
  this.modal = getElement('.modal');
  this.modalImg = getElement('.main-img');
  this.modalImages = getElement('.modal-images');
  this.closeBtn = getElement('.close-btn');
  this.closeBtn = getElement('.prev-btn');
  this.nextBtn = getElement('.next-btn');
  this.modalImages = getElement('.modal-images');

}


const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));




