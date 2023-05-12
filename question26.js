// Filter a given object based on certain conditions and return the corresponding object

function filterObj(obj) {
    let result = obj.students.filter(student => student.name === "Shashank");

    console.log(result);
}

filterObj({
    students: [
        {
            name: "Shashank",
            surname: "Singh Solanki"
        },
        {
            name: "Shiv",
            surname: "Sagar"
        }
    ]
})