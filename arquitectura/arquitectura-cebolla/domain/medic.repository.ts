import { Medic } from "./medic";

export type MedicRepository = {
    save(medic: Medic): Promise<boolean>;
    getAll(): Promise<Medic[]>;
}