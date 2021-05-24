const sek = document.querySelector('.s'),
      min = document.querySelector('.m'),
      hour = document.querySelector('.h'),
      twoHour = document.querySelector('.hours'),
      twoMin = document.querySelector('.minutes');
      twoSec = document.querySelector('.seconds');
      
      


// console.log(sek, min, hour);    

function soat() {
  let vaqt = new Date();
  let rHour = vaqt.getHours();
  let rMin = vaqt.getMinutes();
  let rSec = vaqt.getSeconds();

  twoHour.innerHTML= rHour < 10 ? '0' + rHour : rHour
  twoMin.innerHTML = rMin < 10 ? '0' + rMin : rMin
  twoSec.innerHTML = rSec < 10 ? '0' + rSec : rSec
  setTimeout(() => {soat()},1000)

  sek.style = `transform: rotate(${rSec * 6}deg)`;
  min.style = `transform: rotate(${rMin * 6}deg)`;
  hour.style = `transform: rotate(${rHour * 30}deg)`;
}
soat();


const tabsItem = document.querySelectorAll('.tabsItem');
const tabsCon = document.querySelectorAll('.tabsContentItem');
// console.log(tabsItem);

for(let i=0; i<tabsItem.length; i++){
  tabsItem[i].addEventListener('click', () =>{
    for(let j=0; j<tabsItem.length; j++){
      tabsItem[j].classList.remove('active')
      tabsCon[j].classList.remove('active')
    }
    tabsItem[i].classList.add('active')
    tabsCon[i].classList.add('active')
  
  })
}

const startBtn = document.querySelector('.stopwatch__btn'),
      dSec = document.querySelector('.stopwatch__seconds'),
      dMin = document.querySelector('.stopwatch__minutes'),
      dHour = document.querySelector('.stopwatch__hours'),
      ddSec = document.querySelector('.stopwatch__dseconds'),
      indi = document.querySelector('.tabsLink__span');
      // resume = document.querySelector('.stopwatch__bt')

// console.log(startBtn,dSec,dMin,dHour);

startBtn.addEventListener('click', function(){
  if(this.innerHTML === 'start'){
    this.innerHTML = 'stop';
    this.style = 'background: red; color: white;'
    indi.classList.add('active')
    setTimeout(() => recursion(), 15)
  }
  else if(this.innerHTML === 'stop'){
    this.innerHTML = 'clear' 
    // resume.innerHTML = 'resume';
    this.style = 'background: green; color: white;'
    indi.classList.remove('active')
    indi.classList.add('active_clear')
  }
  else{
    this.innerHTML = 'start'
    this.style = 'background: #fff;'
    indi.classList.remove('active_clear')
    // resume.classList.remove('.stopwatch__bt')
    ddSec.innerHTML = 0;
    dSec.innerHTML = 0;
    dMin.innerHTML = 0;
    dHour.innerHTML = 0;
  }
})

// resume.addEventListener('click', function(){
//     if(this.innerHTML === ddSec){
//       this.innerHTML = resume.classList.remove('')
//     }
// })

function recursion(){
  ddSec.innerHTML++;
  if(ddSec.innerHTML > 59){
    ddSec.innerHTML = 0;
    dSec.innerHTML++;
  }
  if(dSec.innerHTML > 59){
    dSec.innerHTML = 0;
    dMin.innerHTML++;
  }
  if(dMin.innerHTML > 59){
    dMin.innerHTML = 0;
    dHour.innerHTML++;
  }
  if(startBtn.innerHTML === 'stop'){
    setTimeout(() => recursion(), 15)
  }
}