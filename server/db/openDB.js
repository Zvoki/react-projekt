//konekcija prema SQL bazi 
import sqlite3 from "sqlite3";
import { open } from "sqlite";
//Ovo je mjesto gdje se baza podataka otvara
export async function openDB() {
    return open ({
        __filename: "./server/.db/openDB",
        driver: sqlite3.Database
    });

}