import { Medic } from "../domain/medic";
import { MedicRepository } from "../domain/medic.repository";

export class MedicInfrastructure implements MedicRepository {
    private medics: Medic[] = [];

    async save(medic: Medic): Promise<boolean> {
        // Save medic in database
        this.medics.push(medic);
        return true;
    }

    async getAll(): Promise<Medic[]> {
        // Get all medics from database
        return this.medics;
    }

    publish(medic: Medic): void {
    }
}