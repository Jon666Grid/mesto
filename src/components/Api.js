export default class Api {
   constructor(data) {
      this._url = data.url;
      this._headers = data.headers;
   }

   _checkResponse(res) {
      if (res.ok)
         return res.json();
      return Promise.reject(`Ошибка: ${res.status}`);
   }

   getInitialCards() {
      return fetch(`${this._url}/cards`, {
         headers: this._headers
      })
         .then(res => this._checkResponse(res));
   }

   getUserInfo() {
      return fetch(`${this._url}/users/me`, {
         headers: this._headers
      })
         .then(res => this._checkResponse(res));
   }

   changeInfo(data) {
      return fetch(`${this._url}/users/me`, {
         method: "PATCH",
         headers: this._headers,
         body: JSON.stringify({
            name: data.name,
            about: data.about,
         }),
      }).then(this._checkResponse);
   }

   addCard(data) {
      return fetch(`${this._url}/cards`, {
         method: "POST",
         headers: this._headers,
         body: JSON.stringify({
            name: data.name,
            link: data.link
         })
      })
         .then(this._checkResponse);
   }

   addLike(id) {
      return fetch(`${this._url}/cards/${id}/likes`, {
         method: "PUT",
         headers: this._headers,
      }).then(this._checkResponse);
   }

   changeAvatar(data) {
      return fetch(`${this._url}/users/me/avatar`, {
         method: "PATCH",
         headers: this._headers,
         body: JSON.stringify({
            avatar: data.avatar,
         }),
      }).then(this._checkResponse);
   }

   deleteCard(id) {
      return fetch(`${this._url}/cards/${id}`, {
         method: "DELETE",
         headers: this._headers
      })
         .then(res => this._checkResponse(res));
   }
   deleteLike(id) {
      return fetch(`${this._url}/cards/${id}/likes`, {
         method: "DELETE",
         headers: this._headers
      }).then(this._checkResponse);
   }

}