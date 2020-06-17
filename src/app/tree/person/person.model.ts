export class Person {
    familyID : number
    name : string;
    father : string;
    mother : string;
    house : string;
    spouse : Person;
    children: Person[];
    age : number;
    sex : string;

    constructor(familyID : number, name : string, fatherName: string, motherName : string, houseName : string, age:number, sex:string){
        this.familyID = familyID;
        this.name = name;
        this.father = fatherName;
        this.mother = motherName;
        this.house = houseName;
        this.children = [];
        this.age = age;
        this.sex = sex;
        
    }

    addChildren(p:Person){
        this.children.push(p);
    }

}