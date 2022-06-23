export default class Section {
   constructor(renderer, selector) {
      this._renderer = renderer;
      this._section = document.querySelector(selector);
   }

   renderItems(items,userId) {
      items.forEach((item) => {
         this._renderer(item,userId);
      })
   }

   addItem(element) {
      this._section.prepend(element);
   }
}