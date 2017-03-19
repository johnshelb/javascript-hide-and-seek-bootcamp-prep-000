// function getFirstSelector(selector) {
//   return document.querySelector(selector)
// }
//
// function nestedTarget() {
//   return document.getElementsByClassName('target')[0]
// }
//
// function increaseRankBy(n) {
//   var listItems = document.querySelectorAll('ul.ranked-list li')
//   for (let i = 0, l = listItems.length;i<l;i++){
//     listItems[i].innerHTML = (parseInt(listItems[i].innerHTML) + n).toString()
//   }
// }
//
// function deepestChild() {
//   var grandNode = document.getElementById('grand-node');
//   var nodeList = grandNode.querySelectorAll('div');
//   return nodeList[nodeList.length-1]
// }

function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const x = document.querySelectorAll('.ranked-list li')
  for(let i = 0; i <x.length; i++){
    x[i].innerHTML = parseInt(x[i].innerHTML) + n
  }
}

function deepestChild() {
  const grandNode = document.querySelector('#grand-node')
  const divList = grandNode.querySelectorAll('div')
  debugger;
  return divList[divList.length - 1]
}
