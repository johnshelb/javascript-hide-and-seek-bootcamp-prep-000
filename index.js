function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  var listItems = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = listItems.length;i<l;i++){
    listItems[i].innerHTML = (parseInt(listItems[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  var grandNode = document.getElementById('grand-node');
  var nodeList = grandNode.querySelectorAll('div');
  return nodeList[nodeList.length-1]
}
