import { CharacterType, Flyweight, Point } from "./flyweight";

const characterType = ["ENEMY", "PLAYER", "KEY", "CAR"];
const characterQuantity = 5 + Math.round(Math.random() * 6)

const flyweight = new Flyweight();

for (let index = 0; index < characterQuantity; index++) {
    const indexElement = Math.floor(Math.random() * 4);

    const point: Point = {
        x: Math.random() * 100,
        y: Math.random() * 100,
        z: Math.random() * 100
    }

    flyweight.getCharacter(characterType[indexElement] as CharacterType).draw(point);
}