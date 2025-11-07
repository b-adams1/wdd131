// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
    sectionNum: 1, 
    roomNum: 'STC 353', 
    enrolled: 26, 
    days: 'TTh', 
    instructor: 'Bro T'
    },
    {
    sectionNum: 2, 
    roomNum: 'STC 347', 
    enrolled: 28, 
    days: 'TTh', 
    instructor: 'Sis A'
    }
  ],
  enrollStudent: function (sectionNum) {
    // console.log("sectionNum to enroll in", sectionNum)
    const theSection = this.sections.find(
      (section) => sectionNum == section.sectionNum
    );
    if(theSection) {
      theSection.enrolled++;
      renderSections(this.sections);
    };
  },
};

// aCourse.code to call one OR
// aCourse[code] (this one used for key with spaces OR can use a variable that doesnt exist already)
// aCourse.sections[0].instructor would refer to the instructor of section 1

function renderHeader(course) {
  const nameEl = document.querySelector("#courseName");
  const codeEl = document.querySelector("#courseCode");
  nameEl.textContent = course.name;
  codeEl.textContent = course.code;
}

function sectionTemplate(section) {
  return `<tr>
          <td>${section.sectionNum}</td>
          <td>${section.roomNum}</td>
          <td>${section.enrolled}</td>
          <td>${section.days}</td>
          <td>${section.instructor}</td>
        </tr>`;
}

function renderSections(sections) {
  const sectionsEl = document.querySelector("#sections");
  const html = sections.map(sectionTemplate);
  sectionsEl.innerHTML = html.join("");
}

renderHeader(aCourse);
renderSections(aCourse.sections);
aCourse.enrollStudent(1);

document.querySelector("#enrollStudent").addEventListener("click", ()=>{
  const sectionInput = document.querySelector("#sectionNumber");
  aCourse.enrollStudent(sectionInput.value);
});