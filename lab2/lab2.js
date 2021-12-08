"use strict";
/**
 * КПОП
 * Лабораторна робота №2
 * (c) Бігдан А. І. 2021
 */
// ==================== LAB 1 RELATED ====================
var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
function logPrize(s) {
    console.log(s);
}
function getAllWorkers() {
    let workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Designer, logPrize: logPrize },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer, logPrize: logPrize },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.ScrumMaster, logPrize: logPrize },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, logPrize: logPrize }
    ];
    return workers;
}
function getWorkerById(id, workers) {
    return workers.find((worker) => worker.id === id);
}
let workers = getAllWorkers();
workers[0].logPrize("PRIZE");
let favoriteAuthor = { name: "Eliezer Yudkowsky", email: "eliezer@yudkowsky.net", booksPublished: 7 };
let favoriteLibrarian = { name: "Баба Таня", email: "який ше етаі", department: "в школі 7 работаю" };
class UniversityLibrarian {
    constructor(librarian) {
        this.department = librarian.department;
        this.name = librarian.name;
        this.email = librarian.email;
    }
    assistCustomer(custName) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
let favoriteUniversityLibrarian = new UniversityLibrarian(favoriteLibrarian);
favoriteUniversityLibrarian.assistCustomer("Алкаш Виталик");
class ReferenceItem {
    constructor(title, year) {
        console.log("Creating a new ReferenceItem...");
        this._publisher = "";
        this.title = title;
        this.year = year;
    }
    get publisher() {
        return this._publisher;
    }
    set publisher(publisher) {
        this._publisher = publisher;
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year} by ${this._publisher}`);
    }
}
let ri = new ReferenceItem("HPMOR", 2010);
ri.publisher = "Eliezer Yudkowsky";
ri.printItem();
class Encyclopedia extends ReferenceItem {
    constructor(title, year, edition) {
        super(title, year);
        this.edition = edition;
    }
    printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
}
let britannica = new Encyclopedia("Encyclopedia Britannica", 2011, 3);
britannica.printItem();
