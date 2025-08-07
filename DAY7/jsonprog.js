let stuinfo = [
    {
        "roll number": 2302840100120,
        "name": "manas",
        "course": "Btech",
        "age": 21
    },
    {
        "roll number": 2302840100247,
        "name": "mashriba",
        "course": "Btech",
        "age": 21
    },
    {
        "roll number": 23028401001,
        "name": "rimsha",
        "course": "Btech",
        "age": 21
    },
    {
        "roll number": 2302841100120,
        "name": "umar",
        "course": "Btech",
        "age": 21
    }
];

console.log("Students detail");
for (let rec of stuinfo) {
    console.log("Roll number = " + rec["roll number"]);
    console.log("Name = " + rec["name"]);
    console.log("Course = " + rec["course"]);
    console.log("Age = " + rec["age"]);
}


