import { Medic } from "../domain/medic";
import { MedicRepository } from "../domain/medic.repository";

export class MedicApplication {
    constructor(private readonly repository: MedicRepository) { }

    async save(medic: Medic) {
        return this.repository.save(medic);
    }

    async getAll() {
        return this.repository.getAll();
    }
}