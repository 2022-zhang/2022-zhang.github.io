let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/xjn.jpeg') {
      myImage.setAttribute('src', 'images/xjn2.jpeg');
    } else {
      myImage.setAttribute('src', 'images/xjn.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入ta的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = '想见你，' + myName;
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '想见你，' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }
 