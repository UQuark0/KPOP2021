/**
 * КПОП
 * Лабораторна робота №2
 * (c) Бігдан А. І. 2021
 */

// ==================== LAB 1 RELATED ====================

enum Category {
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster,
}

interface _Worker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
    logPrize: PrizeLogger;
}

function logPrize(s: string) {
    console.log(s);
} 

function getAllWorkers() : _Worker[] {
    let workers : _Worker[] = [
        {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Designer, logPrize: logPrize},
        {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer, logPrize: logPrize},
        {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.ScrumMaster, logPrize: logPrize},
        {id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, logPrize: logPrize}
    ];
    return workers;
}

function getWorkerById(id : number, workers: _Worker[]) : _Worker | undefined {
    return workers.find((worker) => worker.id === id);
}

interface PrizeLogger {
    (s: string): void
}

let workers = getAllWorkers();

workers[0].logPrize("PRIZE");

// ==================== END ====================

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    booksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer?(custName : string): void;
}

let favoriteAuthor : Author = {name: "Eliezer Yudkowsky", email: "eliezer@yudkowsky.net", booksPublished: 7};
let favoriteLibrarian : Librarian = {name: "Баба Таня", email: "який ше етаі", department: "в школі 7 работаю"}

class UniversityLibrarian implements Librarian {
    department: string;
    name: string;
    email: string;

    constructor(librarian: Librarian) {
        this.department = librarian.department;
        this.name = librarian.name;
        this.email = librarian.email;
    }

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

let favoriteUniversityLibrarian = new UniversityLibrarian(favoriteLibrarian);
favoriteUniversityLibrarian.assistCustomer("Алкаш Виталик");

abstract class ReferenceItem {
    title: string;
    protected year: number;
    
    private _publisher: string;

    get publisher(): string {
        return this._publisher;
    }

    set publisher(publisher: string) {
        this._publisher = publisher;
    }

    constructor(title: string, year: number) {
        console.log("Creating a new ReferenceItem...");

        this._publisher = ""
        this.title = title;
        this.year = year;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by ${this._publisher}`);
    }

    abstract printCitation(): void;
}

// let ri = new ReferenceItem("HPMOR", 2010);

// ri.publisher = "Eliezer Yudkowsky";

// ri.printItem();

class Encyclopedia extends ReferenceItem {
    edition: number;

    constructor(title: string, year: number, edition: number) {
        super(title, year);
        this.edition = edition;
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

let britannica = new Encyclopedia("Encyclopedia Britannica", 2011, 3);
britannica.printItem();

// Контрольні запитання
// 1. Інтерфейси - це визначення публічних методів, полів і властивостей, яким можуть задовільняти класи та їх об'єкти.
// 2. Класи - це шаблони об'єктів, що описують методи, поля і властивості (як і будь-якій іншій мові bruh).
// 3. Модулі - це спосіб підключення зовнішніх TS-файлів у програму.
// 4. -
// 5. -