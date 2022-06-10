export default class UserInfo {
   constructor({nameSelector, professionSelector}) {
      this._nameUser = nameSelector;
      this._professionUser = professionSelector;
   }

   setUserInfo(data) {
      this._nameUser.textContent = data.name;
      this._professionUser.textContent = data.about;
   }

   getUserInfo() {
      return {
         name: this._nameUser.textContent,
         about: this._professionUser.textContent,
      };
   }

}