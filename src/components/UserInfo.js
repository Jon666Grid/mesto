export default class UserInfo {
   constructor({ nameSelector, aboutSelector,avatar }) {
      this._userName = document.querySelector(nameSelector);
      this._userAbout = document.querySelector(aboutSelector);
      this._avatar = document.querySelector(avatar);
   }

   setUserInfo(data) {
      this._userName.textContent = data.name;
      this._userAbout.textContent = data.about;
      this._avatar.src = data.avatar;
   }

   getUserInfo() {
      return {
         name: this._userName.textContent,
         about: this._userAbout.textContent,
         avatar: this._avatar.src
      };
   }
}