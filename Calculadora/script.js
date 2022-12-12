function insert(num){
    var numer = document.getElementById('findings').innerHTML;
    document.getElementById('findings').innerHTML = numer + num;
}

function clean(){
    document.getElementById('findings').innerHTML ="";
}

function back(){
    var findings = document.getElementById('findings').innerHTML;
    document.getElementById('findings').innerHTML = findings.substring(0, findings.length -1);
}

function calc(){
    var findings = document.getElementById('findings').innerHTML;
    if(findings){
        document.getElementById('findings').innerHTML = eval(findings);
    }
}