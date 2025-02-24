export class Database {
    private static instance: Database;
    private currentDate: Date

    private constructor() {
        console.log("Creando nueva instancia de Database");
        this.currentDate = new Date();
    }

    static getInstance(): Database {
        console.log("Obteniendo instancia de Database");
        if (!this.instance) {
            this.instance = new Database();
        }
        return this.instance
    }

    private connection(): Promise<string> {
        return new Promise((resolve, reject) => {
            const timeout = Math.floor(Math.random() * 1000) + 500;

            setTimeout(() => {
                resolve(`Conexión establecida en ${timeout} milisegundos`);
            }, timeout);
        })
    }

    async getConnection(): Promise<string> {
        return this.connection();
    }

    getCurrentDateInServer(): Date {
        return this.currentDate;
    }
}

