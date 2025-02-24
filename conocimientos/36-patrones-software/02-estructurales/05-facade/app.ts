import { Facade } from "./facade";


(async () => {
    const facade = new Facade();
    const currentDate = new Date()

    // Search for hotels with availability for 5 days, 2 people, and a price range between 500 and 1000. Date is next week 
    const next = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7);
    const search1 = await facade.search(next, 5, 2, [500, 1000]);

    // Search for hotels with availability for 14 days, 3 people, and a price range between 1000 and 2000. Date is next month
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
    const search2 = await facade.search(nextMonth, 14, 3, [1000, 2000]);


    console.log(JSON.stringify([
        search1,
        search2
    ], null, "\t"));

})()
