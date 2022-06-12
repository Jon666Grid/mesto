export default class UserInfo {
   constructor({ nameSelector, aboutSelector }) {
      this._userName = document.querySelector(nameSelector);
      this._userAbout = document.querySelector(aboutSelector);
   }

   setUserInfo(data) {
      this._userName.textContent = data.name;
      this._userAbout.textContent = data.about;
   }

   getUserInfo() {
      return {
         name: this._userName.textContent,
         about: this._userAbout.textContent,
      };
   }
}