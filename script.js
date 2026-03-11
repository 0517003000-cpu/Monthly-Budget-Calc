function formatRupiah(number) {
    return "Rp " + number.toLocaleString("id-ID");
}

function calculateBudget(){

let income = document.getElementById("income").value;

if(income === "" || income <= 0){
document.getElementById("result").innerHTML = "Please enter a valid income.";
return;
}

income = Number(income);

let needs = income * 0.50;
let nonEssential = income * 0.30;
let savings = income * 0.20;

document.getElementById("result").innerHTML =
"<h3>Budget Breakdown</h3>" +
"<p>Essential Expenses (50%): " + formatRupiah(needs) + "</p>" +
"<p>Non-Essential Expenses (30%): " + formatRupiah(nonEssential) + "</p>" +
"<p>Savings (20%): " + formatRupiah(savings) + "</p>";

}
