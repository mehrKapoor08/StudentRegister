var nameOfTheStudent=[]; 
function submit() {
    var name1=document.getElementById("nameOfStudent1").value;
    var name2=document.getElementById("nameOfStudent2").value;
    var name3=document.getElementById("nameOfStudent3").value;
    var name4=document.getElementById("nameOfStudent4").value;
    var name5=document.getElementById("nameOfStudent5").value;

    nameOfTheStudent.push(name1);
    nameOfTheStudent.push(name2);
    nameOfTheStudent.push(name3);
    nameOfTheStudent.push(name4);
    nameOfTheStudent.push(name5);
    console.log(nameOfTheStudent);
    document.getElementById("displayName").innerHTML=nameOfTheStudent;
    document.getElementById("submitButton").style.display="none";
    document.getElementById("sortButton").style.display="inline-block";
}
function sorting() {
    nameOfTheStudent.sort();
    console.log(nameOfTheStudent);
    document.getElementById("displayName").innerHTML=nameOfTheStudent;
}