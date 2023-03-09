const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        // к 14 задаче: friends: ["Alex", "Nick", "John", "Helen", "Ann"]
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {
            id: 1,
            name: "Ann",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            id: 2,
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            id: 4,
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ]
}



//1. Создайте полную (глубокая) копию объекта user
let deepCopyUser =  {...user, friends: [...user.friends] };
console.log("b =", deepCopyUser)

//2. Создайте полную (глубокая) копию объекта superUser
let deepCopySuperUser = {...superUser, friends: [...superUser.friends.map(el => ({...el}))] };
console.log("a =", deepCopySuperUser)

// Внесите  следующие изменения в объект superUser:
//3.Удалите объект с id=1 из массива  friends
let superUserCorrect1 = {...superUser, friends: [...superUser.friends.filter(el => el.id !== 1)]};
console.log("c =", superUserCorrect1)

//4. поменяйте объекту с id=2 из массива  friends значение св-ва name на "Donald"
let superUserCorrect2 = {...superUser, friends: superUser.friends.map(el => el.id === 2
        ? {...el, name: "Donald"}
        :el)};
console.log("d =", superUserCorrect2);

//5. добавьте в список друзей нового друга
const newFriend = {
    id: 5,
    name: "Nick",
    age: 27,
    isMarried: false,
    scores: 99
}
let superUserCorrect3 = {...superUser, friends: [newFriend, ...superUser.friends]};
console.log("k =", superUserCorrect3);


//6. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(el => el);
console.log("6 =", deepCopyStudents);

//7. Отсортируйте КОПИЮ массива deepCopyStudents по алфавиту (sort)
let sortedByName = deepCopyStudents.sort((a, b) => {
    if (a.name > b.name){
        return 1
    }
    if (a.name < b.name){
        return -1
    }
    return 0
});
console.log("7 =",sortedByName);

//8. Отсортируйте deepCopyStudents по успеваемости (лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores);
console.log("8",sortedByScores);

//9. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = deepCopyStudents.filter(el => el.scores >= 100);
console.log( "9", bestStudents)

//10. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0, 3);
console.log("10",topStudents)


//11. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents =  deepCopyStudents.concat(topStudents);
console.log("11", newDeepCopyStudents)


//12. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(el => el.isMarried === false);
console.log("12", notMarriedStudents)

//13. Сформируйте массив имён студентов (map)
let studentsNames = students.map(el => el.name);
console.log("13", studentsNames)

//14. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(el => ({...el, isStudent: true}));
console.log(14, trueStudents)

//15. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(el =>
    el.name === "Nick"
        ? {...el, isMarried: true}
        :el
);
console.log(15, studentsWithMarriedNick)

//16. Найдите студента с самым высоким баллом не используя методы массивов и Math.max()*
let bestStudent = students.sort((a, b) => b.scores - a.scores)[0];
console.log(16, bestStudent)

//17. Найдите сумму баллов всех студентов (reduce)
let scoresSum = students.reduce((acc, el) => el.scores + acc, 0)
console.log(17, scoresSum)





















