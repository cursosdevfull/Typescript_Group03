import { Medic } from "../medic";
import { MedicPort } from "../ports/medic.port";

export class MedicAdapter implements MedicPort {
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