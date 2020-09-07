const calc = () => {let sub1= document.getElementById('s1').value;
let sub2= document.getElementById('s2').value;
let sub3= document.getElementById('s3').value;
let sub4= document.getElementById('s4').value;
let sub5= document.getElementById('s5').value;
let grades= " ";


let totalGrades= parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4) +  parseFloat(sub5);


let percent=parseFloat((totalGrades/500)*100);

debugger;

if(percent<= 100  && percent>= 80){
    grades = 'A';
  }else if(percent<= 79  && percent>= 60){
     grades = 'B';
  }else if(percent<= 59  && percent>= 40){
     grades = 'C';
  }else{
     grades = 'F';
  }

  if(percent>= 40){
    document.getElementById('showGrade').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${percent}%. <br> Your grade is ${grades}. You are Pass. `
  }
  else{
    document.getElementById('showGrade').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${percent}%. <br> Your grade is ${grades}. You are Fail. `
  }

11
}

