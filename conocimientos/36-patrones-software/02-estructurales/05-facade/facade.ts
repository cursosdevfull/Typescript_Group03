type priceRange = [number, number];

class DecameronApi {
    async searchByAvailability(startDate: Date, days: number, people: number, price: priceRange) {
        return new Promise((resolve, reject) => {
            const timeout = Math.floor(Math.random() * 1000) + 500;

            setTimeout(() => {
                resolve([
                    { hotel: "Decameron Punta Sal", typeRoom: "Luxury", price: 1000 },
                    { hotel: "Decameron Punta Sal", typeRoom: "Standard", price: 800 },
                    { hotel: "Decameron Punta Sal", typeRoom: "Economic", price: 600 },
                    { hotel: "Decameron Mancora", typeRoom: "Luxury", price: 1000 },
                    { hotel: "Decameron Mancora", typeRoom: "Standard", price: 800 },
                    { hotel: "Decameron Mancora", typeRoom: "Economic", price: 600 },
                ])
            }, timeout);
        })
    }

}

class MarriotApi {
    searchByHotel(startDate: Date, days: number, people: number, price: priceRange) {
        return new Promise((resolve, reject) => {
            const timeout = Math.floor(Math.random() * 1000) + 500;

            setTimeout(() => {
                resolve([
                    { hotel: "Marriot Miraflores", typeRoom: "Luxury", price: 1200 },
                    { hotel: "Marriot Miraflores", typeRoom: "Standard", price: 1000 },
                    { hotel: "Marriot Miraflores", typeRoom: "Economic", price: 800 },
                    { hotel: "Marriot Cusco", typeRoom: "Luxury", price: 1200 },
                    { hotel: "Marriot Cusco", typeRoom: "Standard", price: 1000 },
                    { hotel: "Marriot Cusco", typeRoom: "Economic", price: 800 }
                ])
            }, timeout);
        })
    }
}

export class Facade {
    private decameronApi: DecameronApi;
    private marriotApi: MarriotApi;

    constructor() {
        this.decameronApi = new DecameronApi();
        this.marriotApi = new MarriotApi();
    }

    async search(startDate: Date, days: number, people: number, price: priceRange) {
        return Promise.all([
            this.decameronApi.searchByAvailability(startDate, days, people, price),
            this.marriotApi.searchByHotel(startDate, days, people, price)
        ])
    }
}
