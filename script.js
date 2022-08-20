// (c) 2022 Ayush Agnihotri

const now = new Date()

const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');
const C1 = document.querySelector('.C1');
const Q1 = document.querySelector('.Q1');
const C2 = document.querySelector('.C2');
const Q2 = document.querySelector('.Q2');
const C3 = document.querySelector('.C3');
const Q3 = document.querySelector('.Q3');

c1.addEventListener('click', () => {
    C1.classList.toggle('C1');
    Q1.classList.toggle('Q1');
    C3.classList.add('C3');
    Q3.classList.add('Q3');
    C2.classList.add('C2');
    Q2.classList.add('Q2');
    const now = new Date().getHours()
    const min = new Date().getMinutes()
    const distance = now + ":" + min;
    const blogList = document.querySelector(".time1");
    blogList.innerHTML = distance;
});

c2.addEventListener('click', () => {
    C2.classList.toggle('C2');
    Q2.classList.toggle('Q2');
    C1.classList.add('C1');
    Q1.classList.add('Q1');
    C3.classList.add('C3');
    Q3.classList.add('Q3');
    const now = new Date().getHours()
    const min = new Date().getMinutes()
    const distance = now + ":" + min;
    const blogList = document.querySelector(".time2");
    blogList.innerHTML = distance;
});

c3.addEventListener('click', () => {
    C3.classList.toggle('C3');
    Q3.classList.toggle('Q3');
    C1.classList.add('C1');
    Q1.classList.add('Q1');
    C2.classList.add('C2');
    Q2.classList.add('Q2');
    const now = new Date().getHours()
    const min = new Date().getMinutes()
    const distance = now + ":" + min;
    const blogList = document.querySelector(".time3");
    blogList.innerHTML = distance;
});