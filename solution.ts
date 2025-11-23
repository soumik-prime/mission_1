const formatValue = (param: string | number | boolean) : string | number | boolean => {
    if(typeof param === 'string') return param.toUpperCase();
    else if(typeof param === 'number') return param*10;
    else return !param;
}






const getLength = (param: string | any[]) : number => {
    if(typeof param === 'string') return param.length;
    else if(Array.isArray(param)) return param.length;
    else return 0;
}






class Person {
    public name: string;
    public age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getDetails() : string {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
};






interface Items{
    title: string;
    rating: number
};
const filterByRating = (param: Items[]) : Items[] => {
    return param.filter(element => element.rating >= 4);
}






interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean
};
const filterActiveUsers = (param: User[]) : User[] => {
    return param.filter(element => element.isActive);
}






interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
};
const printBookDetails = (param: Book) => {
    console.log(`Title: ${param.title}, Author: ${param.author}, Published: ${param.publishedYear}, Available: ${param.isAvailable ? 'Yes' : 'No'}`);
}






const getUniqueValues = (array1: (string | number)[], array2: (string | number)[])
: (string | number)[] => {
    const newArray: (string | number)[] = [];
    let idx = 0;
    for(let i = 0; i < array1.length; i++){
        let unique: boolean = true;
        for(let j = 0; j < idx; j++){
            if(newArray[j] === array1[i]){
                unique = false;
                break;
            }
        }
        if(unique) {
            newArray[idx] = array1[i];
            idx++;
        }
    }

    for(let i = 0; i < array2.length; i++){
        let unique: boolean = true;
        for(let j = 0; j < idx; j++){
            if(newArray[j] === array2[i]){
                unique = false;
                break;
            }
        }
        if(unique) {
            newArray[idx] = array2[i];
            idx++;
        }
    }
    return newArray;
}






interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number
};
const calculateTotalPrice = (param: Product[]) : number => {
    return param.reduce((acc: number, curr: Product) => {
        let currentPrice = (curr.price * curr.quantity);
        if(curr.discount !== undefined) currentPrice -= (currentPrice * curr.discount) / 100;
        return acc + currentPrice;
    }, 0)
}
