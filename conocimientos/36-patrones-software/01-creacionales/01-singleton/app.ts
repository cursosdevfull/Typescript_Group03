import { Database } from './database';


(async () => {
    const database = Database.getInstance();
    await database.getConnection();
    const db1 = Database.getInstance();
    const db2 = Database.getInstance();
    const db3 = Database.getInstance();
    console.log(database.getCurrentDateInServer());
    console.log(db1.getCurrentDateInServer());
    console.log(db2.getCurrentDateInServer());
    console.log(db3.getCurrentDateInServer());
})()




