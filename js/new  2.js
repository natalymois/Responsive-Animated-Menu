var selectedClass;

/*table.onclick = function(event) {
  var target = event.target; // где был клик?

  if (target.tagName != 'TD') return; // не на TD? тогда не интересует

  highlight(target); // подсветить TD
};*/

obenMenu.onclick = function(event) {
  var target = event.target;

  // цикл двигается вверх от target к родителям до .ground-menu
  while (target != obenMenu) {
    if (target.className == "sub-li") {
      // нашли элемент, который нас интересует!
      highlight(target);
      return;
    }
    target = target.parentNode;
  }

  // возможна ситуация, когда клик был вне <td>
  // если цикл дошёл до table и ничего не нашёл,
  // то обработчик просто заканчивает работу
}

function highlight(node) {
  if (selectedClass) {
    selectedClass.classList.remove('open');
  }
  selectedClass = node;
  selectedClass.classList.add('open');
}