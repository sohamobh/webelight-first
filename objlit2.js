let fname = 'Soha';
let lname = 'Mobh';
let course = 'React';

function student(fname, lname, course) {
    let fullname = fname + " " + lname;
    return { fullname, course };
}
let s = student(fname, lname, course);
console.log(s.fullname, s.course);