function arrFromObject(obj) {
    let result = obj.students.map(item => {
        const studentData = {
            name: item.name,
            surname: item.surname
        }

        return studentData;
    })
    console.log(result);
}

arrFromObject({
    students: [
        {
            name: "Shashank",
            surname: "Singh Solanki",
            department: "BCA"
        },
        {
            name: "Shiv",
            surname: "Sagar",
            department: "BCA"
        }
    ]
})