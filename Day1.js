//Cash checker
 let amount = 1399;
 let note = 0

 if(amount>500){
    note = Math.floor(amount/500)
    amount = amount%500
    console.log('500 notes are :' +note)
    

   //  fjd
 }
 if(amount>=200 && amount<500){
    note = Math.floor(amount/200)
    amount = amount%200
    console.log('200 notes are :' +note)
    
 }
 
 if(amount>=100 && amount<200){
    note = Math.floor(amount/100)
    amount = amount%100
    console.log('100 notes are :' +note)
    
 }
 if(amount>=50 && amount<100){
    note = Math.floor(amount/50)
    amount = amount%50
    console.log('50 notes are :' +note)
    
 }
 if(amount>=20 && amount<50){
    note = Math.floor(amount/20)
    amount = amount%20
    console.log('20 notes are :' +note)
    
 }
 if(amount>=10 && amount<20){
    note = Math.floor(amount/10)
    amount = amount%10
    console.log('10 notes are :' +note)
    
 }
 
 if(amount>=5 && amount<10){
    note = Math.floor(amount/5)
    amount = amount%5
    console.log('5 notes are :' +note)
    
 }
 
 if(amount<5){
   
    console.log('1 sikke are :' +amount)
    
 }


//bill splitter

let electricity_unit = 800;
let payBill = 0

if(electricity_unit>400){
   payBill +=  (electricity_unit-400)*.12
   electricity_unit = 400
}
if(200<electricity_unit && electricity_unit<=400){
   payBill +=  (electricity_unit-200)*.08
   electricity_unit = 200
}
if(100<electricity_unit && electricity_unit<=200){
   payBill +=  (electricity_unit-100)*.06
   electricity_unit = 100
   
}
if(100>=electricity_unit){
   payBill +=  electricity_unit*.04
   
}

//console.log(electricity_unit)
//console.log(payBill)

// Cash checker