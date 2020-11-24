function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;

    let percent;
    let contribution;
    let amount;
    let date;
    let count
    let arr =[percent,contribution,amount,date];
    for (i=0; i<=arr.length; i++){
        if (typeof arr[i]=="number"){
            count=count+1;
        }
        if (count=4){
            break;
        }
        else{
            return "Ошибка";
        }
    }
   let date1 = new Date(); 
    let diff = Math.abs(date1-date); 
    diff=diff/(86400000*30)
  


  

let s=amount-contribution
let p=percent/1200
let  o=s*(p+p/((Math.pow((1+p), diff)-1)))
console.log(o)
return o;
    }
        
 
function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
    if (typeof name ===  'string'){
        return "Привет, мир! Меня зовут "+ name;

    }
    else{
        return "Аноним" ;
    }

    
}