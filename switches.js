let Grade = window.prompt("Enter Your Grade :");
Grade = String(Grade);

switch(Grade){
    case "A":
        window.alert("DISTINCTION");
        break;
    case "B":
        window.alert("FIRST CLASS");
        break;
    case "C":
        window.alert("SECOND CLASS");
        break;
    case "D":
        window.alert("THIRD CLASS");
        break;
    case "F":
        window.alert("CONGRATS FIND A AUTO !");
        break;
    default:
        window.alert("ERR:")
}