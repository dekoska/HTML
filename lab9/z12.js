class Ocena{
    constructor(subject,grade){
        this.subject=subject;
        this.value=grade;
    }
}
class Student{

    constructor(name,surname){
        this.name=name;
        this.surname=surname;
        this.grades = [];
        this.average=0;
    }

    hello(){
        console.log(`Witaj ${this.name} ${this.surname}, Twoja średnia to: ${this.average}`);
    }

    get gradess(){
        if (this.grades.length === 0) {
            return 'Brak ocen';
        }
    
        const gradesInfo = this.grades.map(ocena => `Przedmiot: ${ocena.subject} - ocena: ${ocena.value}`).join(',\n');
        return gradesInfo;
    }

    set gradess (grade){
        if (grade instanceof Ocena) { 
            this.grades.push(grade);
            let sum = 0;

            if(this.grades.length>0){
                this.grades.forEach(function(ocena) {
                    sum += ocena.value;
                });
            this.average = sum / this.grades.length;
            }

        }
    }

}

const student1 = new Student('Jan', 'Kowalski');

const ocena1 = new Ocena('Matematyka', 5);
const ocena2 = new Ocena('Fizyka', 5);
student1.gradess=ocena1;
student1.gradess=ocena2;

student1.hello(); 
console.log(`Oceny studenta ${student1.name} ${student1.surname}:\n${student1.gradess}`);



