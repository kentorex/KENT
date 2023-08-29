// // finding elements 
// // using id
const cta = document.getElementById('cta');
// console.log(cta);

// // using tag name
// const allP = document.getElementsByTagName('img');
// const ctaH5 = cta.getElementsByTagName('h5');
// console.log(allP);
// console.log(ctah5);

// // using className
//  const jerry = document.getElementsByClassName('cta1');
//  console.log(jerry);

// // finding element using query selector: this can be used to select a class, id or tag
// const meal = document.querySelector("#top-meal");
// console.log(meal);
// // we use querySelectorAll to target all the class, element etc
// const all_sections = document.querySelectorAll('section');
// console.log(all_sections);

// navigating through the DOM TREE
// using parentElement to find the parent node of a childnode

const ctah5 = cta.querySelector('h5');
let h5parent = ctah5.parentElement;

const newLocal = `
<div class = 'col-6'>
  <h4> using adjacent html <h4>
  <h2> using adjacent html <h2>
</div>
`;
// //finding children
// let h5parent2 = h5parent.children;

// //finding the first and last child of a  parent element
// let firstC = h5parent.firstElementChild;
// let lastC = h5parent.lastElementChild;

// // finding siblings using next Elementsibling
// let nextsib = firstC.nextElementSibling;
// let cta5 = ctah5.parentElement.parentElement.parentElement;
// // finding nextSibling and previousSibling
// let categorysection = cta5.previousElementSibling;
// let body = categorysection.parentElement;

// console.log(h5parent);
// console.log(h5parent2);
// console.log(firstC);
// console.log(lastC);
// console.log(nextsib);
// console.log(cta5);
// console.log(categorysection)
// console.log(body);


// using getAttributes; he used the nextsib
// let nextsib_a = nextsib.getAttribute("href") // you can target an attribute using id and class
//  console.log(nextsib)

// // setting an attribute to an element; this is used to set an atrribute to an element
// nextsib.setAttribute('id', 'new_id');
// console.log(nextsib)

// // // setting  the src and adding image

// const img = nextsib.nextElementSibling;
// img.setAttribute('src', 'img/png-1.png');

// //changing styles in DOM; it accepts all the css style and properties

// // Img.style.width = '20px';
// nextsib.style.background = 'yellow';
// h5parent.style.background = 'green';
// h5parent.style.border = '2px dashed black';
// h5parent.style.borderRadius = '7px';
// h5parent.style.height = ' 400px';
// h5parent.style.color = 'white';

// // dom manipulation
// // creating a new element using createElement
// let newdiv = document.createElement('div');
// console.log(newdiv);
// // creating a new text node using createTextNodes
// let p = document.createTextNode('hey human na me be thuis');
// let p2 = document.createTextNode('hello world what a day it is');
// console.log(p)
// console.log(p2);
// //  using appendchild to append 
// newdiv.appendChild(p);
// newdiv.setAttribute('id', 'dd')
// // console.log(newdiv);

// // //  removing a html Element using removeChild
// // newdiv.removeChild(p);
// // // //newdiv.remove(p);
// // console.log(newdiv);

// //replacing a html element or node
// newdiv.replaceChild(p2, p);

// console.log(newdiv);


// nextsib.append(newdiv);
// document.write(nextsib);

// insert
// //beforeBegin
// beforeEnd
// afterBegin
// afterEnd

const element = newLocal
// h5parent.insertAdjacentHTML("beforeEnd", element);
// h5parent.insertAdjacentHTML("beforeBegin", element);
// h5parent.insertAdjacentHTML("AfterEnd", element);
// h5parent.insertAdjacentHTML("afterBegin", element);

// html events
// onclick
// ondblclick
// onmousedown

// addEventListener
// removeEventListener
// click
// keyup
// keydown
// mouseenter
// mouseleave
// dblclick

cta.style.background = 'turquoise';
cta.addEventListener('mouseenter', function(e){
  const element = e.target;
  element.style.background = "green";
});

cta.addEventListener('mouseleave', function(e){
  const element = e.target;
  element.style.background = "turquoise";
});


var parent = document.getElementById('parent');
parent.addEventListener('mouseenter', function(event) {
  if (event.target.classList.contains('col')) {
    var children = parent.getElementsByClassName('col');
    for (var i = 0; i < children.length; i++) {
      children[i].classList.remove('brown-bg');
    }
    event.target.classList.add('brown-bg');
  }
});

// Timing
// setTimeout
// setInterval

// setTimeout(function(){
//   alert('ready')
// },2000);

// let a = 0

// function done(){
//   console.log('done here');
// }
// const interval = setInterval(function(){
//   console.log('done');
//   console.log(a++);
//   done();
// },5000)

// clearInterval(interval);
// clearTimeout

// $(document).ready(function(){
//   $('.picture').hover(function(){
//     $(this).find('.overlay').addClass('animate_ _fadeIn');
//   function() {
//     $(this).find('.overlay').removeClass('animate_ _fadeIn');
//   }
//   })
// })

// working for the kitchen site

$(document).ready(function(){
  $(document).on('scroll', function(){
    if(window.scrollY > 600){
      $('.navbar').addClass('custom-sticky')
    }else{
      $('.navbar').removeClass("custom-sticky");
    }

    // for scroll up
    if(window.scollY > 1000){
      $('.top').css('display', 'block');
    }else{
      $('.top').css('display', 'none');
    }

    $('.top').on('click', function(){
      $('html, body').animation({
        scrollTop: 0
      })
      return false;
    })
  })
})