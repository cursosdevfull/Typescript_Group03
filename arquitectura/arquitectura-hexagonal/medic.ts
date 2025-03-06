export class Medic {
    private readonly id: number;
    private name: string;
    private lastname: string;
    private specialty: string;

    constructor(name: string, lastname: string, specialty: string) {
        if (!name || name.trim().length < 3) throw new Error("Invalid name. Name must have at least 3 characters.");
        if (!lastname || lastname.trim().length < 3) throw new Error("Invalid lastname. Lastname must have at least 3 characters.");
        if (!specialty || specialty.trim().length < 10) throw new Error("Invalid specialty. Specialty must have at least 10 characters.");

        this.id = new Date().getTime();
        this.name = name;
        this.lastname = lastname;
        this.specialty = specialty;
    }

    get properties() {
        return {
            id: this.id,
            name: this.name,
            lastname: this.lastname,
            specialty: this.specialty
        };
    }
}