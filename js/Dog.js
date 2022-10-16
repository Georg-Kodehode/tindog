export class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  // display the next dog using data from data.js
  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `<img src=${avatar}>
            <img src="images/badge-like.png" class="like-or-not-img" id="like-or-not-img">
            <div class="dog-img-text">
                <h3>${name}, ${age}</h3>
                <p>${bio}</p>
            </div>`;
  }
}
