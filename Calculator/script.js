const equation = document.getElementById("equation");
function appendtodiaplay(input) {
    equation.value += input;
}
function remove(){
    const val=String(equation.value)
    equation.value=val.substring(0,val.length-1)
}
document.getElementById("clear").onclick = () => {
    equation.value = "";
}
document.getElementById("evaluate").onclick = () => {
    try {
        let ans = eval(equation.value);
        equation.value = ans;
    }
    catch {
        equation.value = 'Error'
    }
}