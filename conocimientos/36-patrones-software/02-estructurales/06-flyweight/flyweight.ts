export type Point = { x: number, y: number, z: number };

export type CharacterType = "ENEMY" | "PLAYER" | "KEY" | "CAR";

type TCharacter = {
    getType(): CharacterType;
    draw(point: Point): void;
}

class Character implements TCharacter {
    constructor(private type: CharacterType) { }

    getType(): CharacterType {
        return this.type
    }
    draw(point: Point): void {
        switch (this.getType()) {
            case "ENEMY":
                console.log(`Drawing enemy at ${point.x}, ${point.y}, ${point.z}`);
                break;
            case "PLAYER":
                console.log(`Drawing player at ${point.x}, ${point.y}, ${point.z}`);
                break;
            case "KEY":
                console.log(`Drawing key at ${point.x}, ${point.y}, ${point.z}`);
                break;
            case "CAR":
                console.log(`Drawing car at ${point.x}, ${point.y}, ${point.z}`);
                break;
        }
    }
}

export class Flyweight {
    private characters: { [key: string]: TCharacter } = {};

    getCharacter(type: CharacterType): TCharacter {
        if (!this.characters[type]) {
            this.characters[type] = new Character(type);
        }
        return this.characters[type];
    }
}