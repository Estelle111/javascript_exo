function display() {
    decimal1 = document.querySelector("#premier_nombre").value;
    decimal2 = document.querySelector("#deuxieme_nombre").value;
    round1 = Math.floor(decimal1);
    round2 = Math.floor(decimal2);
    alert(round1 % round2);
}