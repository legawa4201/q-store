import process from "process";

import  { connect,AppDataSource } from "../config/dataSource"

const command: string = process.argv[2];

async function migrate(command: string) {
    try {
        if(!command) throw { name: `NoCommandProvided` }
        await connect()
        if(command === `do`) return await AppDataSource.runMigrations()
        if(command === `undo`) return await AppDataSource.undoLastMigration()
    } catch (error) {
        throw error
    }
}

migrate(command)
.then((res) => {
    console.log(res);
    console.log(`Migration completed...`)
})
.catch((err) => {
    console.error(err)
})

