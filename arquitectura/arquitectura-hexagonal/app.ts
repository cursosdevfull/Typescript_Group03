import { MedicAdapter } from "./adapters/medic.adapter";
import { Medic } from "./medic";
import { MedicPort } from "./ports/medic.port";

class App {
    constructor(private readonly medicPort: MedicPort) { }

    async create(name: string, lastname: string, specialty: string) {
        const medic = new Medic(name, lastname, specialty);
        await this.medicPort.save(medic);
    }

    async getAll() {
        return this.medicPort.getAll();
    }
}


const start = async () => {
    const port: MedicPort = new MedicAdapter();
    const app = new App(port)

    await app.create("John", "Doe", "Cardiologist");
    await app.create("Jane", "Doe", "Neurologist");
    await app.create("Alice", "Doe", "Dermatologist");
    await app.create("Bob", "Doe", "Psychiatrist");
    await app.create("Charlie", "Doe", "Ophthalmologist");
    await app.create("David", "Doe", "Pediatrician");
    await app.create("Eve", "Doe", "Gynecologist");

    const medics = await app.getAll();
    console.log(medics);
}

start()

