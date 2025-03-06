import { MedicApplication } from "./application/medic.application";
import { Medic } from "./domain/medic";
import { MedicRepository } from "./domain/medic.repository";
import { MedicInfrastructure } from "./infrastructure/medic.infrastructure";

class App {
    constructor(private readonly application: MedicApplication) { }

    async create(medic: Medic) {
        this.application.save(medic);
    }

    async getAll() {
        return this.application.getAll();
    }
}

const start = async () => {
    const repository: MedicRepository = new MedicInfrastructure();
    const application = new MedicApplication(repository)
    const app = new App(application)

    await app.create(new Medic("John", "Doe", "Cardiologist"));
    await app.create(new Medic("Jane", "Doe", "Neurologist"));
    await app.create(new Medic("Alice", "Doe", "Dermatologist"));
    await app.create(new Medic("Bob", "Doe", "Psychiatrist"));
    await app.create(new Medic("Charlie", "Doe", "Ophthalmologist"));
    await app.create(new Medic("David", "Doe", "Pediatrician"));
    await app.create(new Medic("Eve", "Doe", "Gynecologist"));

    const medics = await app.getAll();
    console.log(medics);
}

start()