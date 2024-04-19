// Generate a random color 

const randomcolor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++){
      color += hex[Math.floor(Math.random()*16)]
    }
    return color;
  }
  
  let IntervalId
  const startchangingcolor = function(){
    if(!IntervalId){
    IntervalId =  setInterval(setbgcolor,1000)
    }
    function setbgcolor (){
      document.body.style.backgroundColor = randomcolor();
    }
  }
  
  const stopchangingcolor = function(){
    clearInterval(IntervalId)
    IntervalId = null
  }
  
  document.querySelector('#start').addEventListener('click',startchangingcolor)
  document.querySelector('#stop').addEventListener('click',stopchangingcolor)
  