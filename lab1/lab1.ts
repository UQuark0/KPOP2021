/**
 * КПОП
 * Лабораторна робота №1
 * (c) Бігдан А. І. 2021
 */

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
    category: Category
}

interface Customer {
    id: number;
    name: string;
    age?: number;
    city?: string;
}

function getAllWorkers() : _Worker[] {
    let workers : _Worker[] = [
        {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Designer},
        {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer},
        {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.ScrumMaster},
        {id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer}
    ];
    return workers;
}

function logFirstAvailable(workers : _Worker[] = getAllWorkers()) : void {
    console.log(workers.length);

    let worker : _Worker | undefined = workers.find((worker) => worker.available);
    
    if (!worker) {
        console.log('no available workers');
        return
    }

    console.log(`${worker.name} ${worker.surname}`);
}

function getWorkerNamesByCategory(workers : _Worker[], category : Category = Category.Designer) : string[] {
    return workers.
        filter((worker) => worker.category === category).
        map((worker) => worker.name);
}

function logWorkersNames(names : string[]) : void {
    names.forEach((name) => {
        console.log(name);
    })
}

function getWorkerById(id : number, workers: _Worker[]) : _Worker | undefined {
    return workers.find((worker) => worker.id === id);
}

let autoincrementCustomerId = 0
function createCustomer(name : string, age? : number, city? : string) : Customer {
    console.log(name);
    if (age) {
        console.log(age);
    }
    if (city) {
        console.log(city);
    }
    return {id: ++autoincrementCustomerId, name: name, age: age, city: city}
} 

function createCustomerId(customer : Customer) : string {
    return `${customer.name}_${customer.id}`;
}

function checkoutWorkers(customer : string, workerIds : number[], workers: _Worker[]) : string[] {
    console.log(customer)
    let surnames : string[] = [];
    workerIds.forEach((workerId) => {
        let worker = getWorkerById(workerId, workers);
        if (worker?.available) {
            surnames.push(worker.surname)
        }
    })
    return surnames
}

let workers = getAllWorkers();

logFirstAvailable(workers);
logWorkersNames(getWorkerNamesByCategory(workers, Category.Developer));

createCustomer("Ann", 31, "Kyiv");
createCustomer("Jade", 18);
let customer = createCustomer("Harry");

console.log(createCustomerId(customer));

logWorkersNames(getWorkerNamesByCategory(workers));
logFirstAvailable();

let myWorkers = checkoutWorkers('Ann', [1, 2, 4], workers);

myWorkers.forEach((surname) => console.log(surname));

/*

Результат роботи:

4
Ivan Ivanov
Petro
Evgen
Ann
31
Kyiv
Jade
18
Harry
Harry_3
Ivan
4
Ivan Ivanov
Ann
Ivanov
Petrov
Zhukov

Контрольні запитання.

1. TypeScript - це типизований язик, що є надмножиною JavaScript. Для компіляції використовується tsc (TypeScript Compiler)
2. Змінні у TS оголошуються за наступним синтаксисом:
    let {ім'я} : {тип} = {значення}
   Базові типи даних:
    void
    string
    boolean
    number
    bigint
    array
    tuple
    enum
    object
3. Enum - перелічуваний тип. Може приймате одне значення з декількох можливих.
   Tuple - кортеж. Може містити дані різних типів.
   void - пустий тип
4. Функція оголошується за наступним синтаксисом:
    function {ім'я}({ім'я}: {тип}, {ім'я}?: {тип}, {ім'я}: {тип} = {значення}): {тип}
   Де ? - необов'язковий параметр, = - параметр із значенням за замовчуванням
5. Стрілочні функції в TS такі ж самі, як і в JS, тільки типізовані

*/