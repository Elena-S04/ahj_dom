export default class Character {
  constructor(url) {
    this.url = url;
    this.items = [...document.querySelectorAll(".item")];
  }

  createCharacter() {
    const character = document.createElement("img");
    character.classList.add("img");
    character.src = this.url;
    return character;
  }

  randomMove() {
    const itemWithCharacter = this.items.findIndex((item) =>
      item.querySelector(".img"),
    );
    let randomItem = Math.floor(Math.random() * this.items.length);

    if (itemWithCharacter) {
      while (randomItem === itemWithCharacter) {
        randomItem = Math.floor(Math.random() * (this.items.length - 1));
      }
    }
    return randomItem;
  }

  MoveCharacter() {
    const characterToMove = this.createCharacter();
    setInterval(() => {
      this.items[this.randomMove()].appendChild(characterToMove);
    }, 2000);
  }
}
