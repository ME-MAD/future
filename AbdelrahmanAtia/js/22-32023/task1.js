class Employee
{
    //properties
    salary;
    name;
    id;
    gender;


    //methods
    constructor(salary , name , id , gender ){
        this.salary = salary;
        this.name = name;
        this.id = id;
        this.gender = gender;
    }

    getSalaray(){
             console.log(this.salary * 1.2)
        }

    getGender(){
        if (this.gender == "male"){
            console.log("the Employee is male")
        }
        else{
            console.log("the Employee is female")
        } 
    }


}

 class Teacher extends Employee
{
    className;
    subjectName;
    
    teach(studentName){
        console.log(this.name + "teachs the student " + studentName)
    }
}

 class Accountant extends Employee
 {
    additions;
    daysOff;

    getSalaray(){
        return this.salary + this.additions
    }
 }





