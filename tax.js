document.getElementById("tax_form").addEventListener("submit",function(event){
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

let nhif = calculate_nhif(gross_salary)
document.getElementById("nhif").innerHTML = nhif

// Calculating nssf
function calculate_nssf(gross){
    let nssf
    if (gross>=18000){
        nssf = gross*0.06}
    return nssf
}

let nssf = calculate_nssf(gross_salary)
document.getElementById("nssf").innerHTML = nssf

// Calculating NHDF
function calculating_nhdf(gross){
    return gross*0.015
}

let NHDF = calculating_nhdf(gross_salary)
document.getElementById("nhdf").innerHTML = NHDF

// Calculating taxable income
function calculating_taxable_income(gross,nssf,NHDF,NHIF){
    return gross-(nssf+NHDF+NHIF)
}

let taxable_income = calculating_taxable_income(gross,NHIF,nssf,NHDF)
document.getElementById("tax").innerHTML = taxable_income




function calculating_payee(taxable_income){
    let relief = 2400
    let payee
    if(taxable_income<=24000){
        payee = 0
    }else if(taxable_income>=24000 && taxable_income<=32333){
         payee = (2400 + (taxable_income - 24000) * 0.25)
     }else if(taxable_income >= 32333 && taxable_income <= 500000 ){
        payee = (2400 + (8333 * 0.25) +(( taxable_income - 32333)* 0.3))
     }else if(taxable_income > 500000 && taxable_income <= 800000){
         payee = (2400 + (8333 * 0.25) + (467667 * 0.3) + ((taxable_income - 500000) + 0.325))
     }else{
        payee = (2400 + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325) +( (taxable_income - 800_000) * 0.35))
}
return payee - relief
}

let payee = calculating_payee(taxable_income)
document.getElementById("payee").innerHTML = payee


function calculating_net_salary(gross,NHDF,NHIF,nssf,payee){
    return net_salary = gross - (NHIF+NHDF,nssf,payee)
}

let net_salary = calculating_net_salary(gross,NHDF,NHIF,nssf,payee)
document.getElementById("net").innerHTML = net_salary



})







