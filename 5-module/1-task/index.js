/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

  for (i = 1 ; i < table.rows.length ; i++) {
    table.rows[i].classList.add(table.rows[i].cells[2].innerHTML === 'm' ? 'male' : 'female');

    if (table.rows[i].cells[3].getAttribute('data-available') === 'true') {
      table.rows[i].classList.add('available');
    }

    if (table.rows[i].cells[3].getAttribute('data-available') === 'false') {
      table.rows[i].classList.add('unavailable');
    }

    if (!table.rows[i].cells[3].hasAttribute('data-available')) {
      table.rows[i].setAttribute('hidden', '');
    }

    if (table.rows[i].cells[1].innerHTML < 18) {
      table.rows[i].style.textDecoration = 'line-through';
    }
  }

}

