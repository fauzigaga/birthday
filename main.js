
  const hal2 = document.querySelector(".hal2");
  const hal3 = document.querySelector(".hal3");
  const hal1 = document.querySelector(".hal1");
  const button2 = document.querySelector(".apa2");
  const button3 = document.querySelector(".apa3");
  document.querySelector('.apa3').onclick = () =>{
    hal2.style.display = 'flex';
    hal3.style.display = 'none';
  }
  document.querySelector('.apa2').onclick = () =>{
    hal1.style.display = 'flex';
    hal2.style.display = 'none';
    button2.style.display = 'none';
    button3.style.display = 'none';
  }