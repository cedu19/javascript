document.getElementById("tax_form").addEventListener("submit",function(event)){
event.preventDefault()
    
let basic_salary = Number(document.getElementById("basic").value)
let benefits = Number(document.getElementById("benefits").value)

function calculate_gross_salary(basic,benefits){
    return benefits + basic
}

let gross_salary = calculate_gross_salary(basic_salary,benefits)
document.getElementById("gross").innerHTML = gross_salary

function calculate_nhif(gross){
    let nhif
    if (gross > 0 && gross<=5999){
        nhif=150
    }else if(gross>6000 && gross<=7999){
        nhif=300
    }else if(gross>8000 && gross<=11999){
        nhif=400
    }else if(gross>12000 && gross<=14999){
        nhif=500
    }else if(gross>15000 && gross<=24999){
        nhif=750
    }else if(gross>25000 && gross<=29999){
        nhif=850
    }else if(gross>30000 && gross<=34999){
        nhif=900
    }else if(gross>35000 && gross<=39999){
        nhif=950
    }else if(gross>40000 && gross<=44999){
        nhif=1000
    }else if(gross>45000 && gross<=49999){
        nhif=1100
    }else if(gross>50000 && gross<=59999){
        nhif=1200
    }else if(gross>60000 && gross<=79999){
        nhif=1400
    }else if(gross>80000 && gross<=89999){
        nhif=1500
    }else if(gross>90000 && gross<=99999){
        nhif=1600
    }else{nhif=1700}
    return nhif
}

let NHIF = calculate_nhif(gross_salary)
document.getElementById("nhif").innerHTML = NHIF

// Calculating nssf
function calculate_nssf(gross_salary){
    let nssf
    if (gross_salary>=18000){
        gross_salary**0.06}
    return nssf
}

let nssf = calculate_nssf(gross_salary)
document.getElementById("nssf").innerHTML = nssf

// Calculating NHDF
function calculating_nhdf(gross_salary){
    return gross_salary*0.015
}

let NHDF = calculating_nhdf(gross_salary)
document.getElementById("nhdf").innerHTML = NHDF

// Calculating taxable income
function calculating_taxable_income(gross_salary,nssf,NHDF,NHIF){
    return gross_salary-(nssf+NHDF+NHIF)
}

let taxable_income = calculating_taxable_income(gross_salary)
document.getElementById("tax").innerHTML = taxable_income


// Calculating payee

// function calculating_payee(taxable_income){
//     if(taxable_income<=24000){
//         taxable_income*0.1
//     }else if(taxable_income>=8333 && taxable_income<=)
// }


}







