/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
class SortableTable {
  constructor(items, titles = ['Name', 'Age', 'Salary', 'City']) {
    this.items = items;
    this.titles = titles;
    this.el = document.createElement('table');
    this.render();
  }

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  sort(column, desc = false) {
    let sortColumn = Object.keys(this.items[0])[column];

    if (sortColumn) {
      this.items = this.items.sort((a, b) =>{
        if (desc){
          return a[sortColumn] > b[sortColumn] ? -1 : 1;
        }
        else {
          return a[sortColumn] > b[sortColumn] ? 1 : -1;
        }

      });

      this.render();
    }
  }

  render() {
    this.el.innerHTML = '';

    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    for (let i = 0 ; i < this.titles.length ; i++) {
      let td = document.createElement('td');
      td.innerHTML = this.titles[i];
      tr.append(td);
    }
    thead.append(tr);
    this.el.append(thead);

    let tbody = document.createElement('tbody');
    for (let i = 0 ; i < this.items.length ; i++) {
      let tr = document.createElement('tr');
      tbody.append(tr);

      for (let key in this.items[i]) {
        let td = document.createElement('td');
        td.innerHTML = this.items[i][key];
        tr.append(td);
      }
    }
    this.el.append(tbody);
  }
}
