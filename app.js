import Student from './Student.js';
import Queue from './Queue.js';

function roomAllotment(students, AV, BV, ANV, BNV, NA){
    for(let student of students){
        if(!AV.maxCapacity() && student.class === 'A' && student.foodPreference === 'V'){
            AV.enqueue(student.rollNumber);
        }else if(!BV.maxCapacity() && student.class === 'B' && student.foodPreference === 'V'){
            BV.enqueue(student.rollNumber);
        }else if(!ANV.maxCapacity() && student.class === 'A' && student.foodPreference === 'NV'){
            ANV.enqueue(student.rollNumber);
        }else if(!BNV.maxCapacity() && student.class === 'B' && student.foodPreference === 'NV'){
            BNV.enqueue(student.rollNumber);
        }else{
            NA.enqueue(student.rollNumber);
        }
    }
    return { AV, BV, ANV, BNV, NA };
}

function main(students){
    const maxRoomCapacity = Math.floor(students.length / 4);
    const AV = new Queue(maxRoomCapacity);
    const BV = new Queue(maxRoomCapacity);
    const ANV = new Queue(maxRoomCapacity);
    const BNV = new Queue(maxRoomCapacity);
    const NA = new Queue();
    const result = roomAllotment(students, AV, BV, ANV, BNV, NA);
    console.log(result);
    document.querySelector('code').innerHTML = JSON.stringify(result);
}


//Inputs created using Student class ES6
const studentOne = new Student(1, 'B', 'V');
const studentTwo = new Student(2, 'A', 'V');
const studentThree = new Student(3, 'A', 'V');
const studentFour = new Student(4, 'B', 'NV');
const studentFive = new Student(5, 'B', 'V');
const studentSix = new Student(6, 'A', 'NV');
const studentSeven = new Student(7, 'A', 'V');
const studentEight = new Student(8, 'A', 'NV');
const studentNine = new Student(9, 'B', 'NV');
const studentTen = new Student(10, 'B', 'V');
const studentEleven = new Student(11, 'A', 'NV');
const studentTweleve = new Student(12, 'B', 'NV');
const studentThirteen = new Student(13, 'A', 'NV');
const studentFourteen = new Student(14, 'B', 'V');

//Triggering main function
main([studentOne, studentTwo, studentThree, studentFour, studentFive, studentSix, studentSeven, studentEight, studentNine, studentTen, studentEleven, studentTweleve, studentThirteen, studentFourteen]);

document.querySelector('button').addEventListener('click', () => {
    main([studentOne, studentTwo, studentThree, studentFour, studentFive, studentSix, studentSeven, studentEight, studentNine, studentTen, studentEleven, studentTweleve, studentThirteen, studentFourteen]);
});