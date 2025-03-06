import { Medic } from "../medic";

export type MedicPort = {
    save(medic: Medic): Promise<boolean>;
    getAll(): Promise<Medic[]>;
}