//konekcija prema SQL bazi 
import Database from "better-sqlite3";

//Ovo je mjesto gdje se baza podataka otvara
export function openDB() {
    return new Database.Database('./server/Populera-produkter.db', (err) => {
        if (err) {
            console.error("Fel när databas öppnas:", err.message);
        } else {
            console.log("Databas öppnad.");
        }
       

    }); 
}   