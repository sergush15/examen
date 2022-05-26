function random_marks() {
    return Array.from({length: 6}, () => Math.floor(Math.random() * 10) + 1)
    // sursa: https://www.cloudhadoop.com/javascript-random-array/
}

const students = [
    {
        name: "Studentul Unu",
        marks : random_marks(),
    },
    {
        name: "Studentul Doi",
        marks : random_marks()
    },
    {
        name: "Studentul Trei",
        marks: random_marks()
    },
    {
        name: "Studentul Patru",
        marks : random_marks()
    },
    {
        name: "Studentul Cinci",
        marks: random_marks()
    },
    {
        name: "Studentul Șase",
        marks: random_marks()
    }
]

let i = 0

document.write("Notele: <br>")

for (i in students) {
    document.write(students[i].name + ": " + students[i].marks + "<br>")
}

function average_mark(marks) {
    let sum = 0

    for (i in marks) {
        sum += marks[i]
    }

    for (i in students) {
        return (sum / 6).toFixed(2)
        // afișarea mediei cu două cifre după virgulă
        // sursa: https://stackoverflow.com/questions/4098685/rounding-numbers-to-2-digits-after-comma
    }
}

document.write("<br>Notele medii:<br>")

for (i in students) {
    document.write(students[i].name + ": " + average_mark(students[i].marks) + "<br>")
}


document.write("<br>Studenții cu nota medie < 5:<br>")

let student
for (student of students) {
    if (average_mark(student.marks) < 5) {
        document.write(student.name + "<br>")
    }
}


document.write("<br>Cea mai mare notă medie:<br>")

average_marks = []
for (student of students) {
    average_marks.push(average_mark(student.marks))
}

max = Math.max.apply(Math, average_marks)
document.write(max + "<br>")


document.write("<br>Cea mai mică notă medie:<br>")
min = Math.min.apply(Math, average_marks)
document.write(min + "<br>")


document.write("<br>Mediile în ordine descrescătoare:<br>")
average_marks.sort()
average_marks.reverse()

for (i of average_marks) {
    document.write(i + "<br>")
}



