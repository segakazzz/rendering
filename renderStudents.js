function renderStudents(students) {
  let divs = students.map(function(student) {
    console.log(student);
    return `
        <div class="cards ${student.isPresent ? "present" : "absent"}">
            <h2>${student.name}</h2>
            <h6>${student.isPresent ? "Present" : "Absent"}</h6>
        </div>
        `;
  });
  return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(students)}</code>
            <div>
                <h1>Roll Call!</h1>
                ${divs.join("")}
            </div>
        </div>
    `;
}

function students() {
  var content = document.getElementById("content");

  var studentsAbstraction = [
    {
      name: "Kamilah",
      isPresent: true
    },
    {
      name: "Kim",
      isPresent: true
    },
    {
      name: "Stuart",
      isPresent: false
    },
    {
      name: "Ron",
      isPresent: true
    },
    {
      name: "Krissy",
      isPresent: false
    }
  ];

  content.innerHTML = renderStudents(studentsAbstraction);
}
