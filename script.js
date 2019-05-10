const btns = document.querySelectorAll('button[name="button"]');
const btnOptions = document.querySelectorAll('button[name="button-search-options"]');
const btnAll = document.querySelector('button[name="button-all"]');
const btnNone = document.querySelector('button[name="button-none"]');
const btnNext = document.querySelector('button[name="bbutton-pagination-next"]');
const btnPrevious = document.querySelector('button[name="button-pagination-previous"]');
const selected = document.querySelector('.selected-items .chosen-options');
const selectedOption = document.createElement('h3');
const selectedItem = document.createElement('div');
$('.search-options').hide();

const objeto = {
  type: '',
  searchOptions: []
}

btns.forEach(item => {
  item.addEventListener('click', (event) => {
    item.classList.toggle('btn-clicked');
    objeto.type = item.innerText;
    selectedOption.innerHTML = item.innerHTML;
    $('.search').hide();
    $('.search-options').show();
    selectedItem.appendChild(selectedOption);
    selected.appendChild(selectedItem);
  });
});

btnOptions.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();

    if (item.classList.contains('btn-clicked')) {
      item.classList.remove('btn-clicked');
      deleteObject(item.innerText);


    } else {
      item.classList.add('btn-clicked');
      objeto.searchOptions.push(item.innerHTML);
      showObject();
    }
  });
});

btnAll.addEventListener('click', () => {
  btnOptions.forEach((item, index) => {
    objeto.searchOptions[index] = item.innerHTML;
    item.classList.add('btn-clicked');
    showObject();
  });
});

btnNone.addEventListener('click', () => {
  btnOptions.forEach((item, index) => {
    if (item.classList.contains('btn-clicked')) {
      item.classList.remove('btn-clicked');
      deleteObject(item.innerHTML);

    } else {
      
    }
  });
});

// btnNext.addEventListener('click', () => {
//   $('.search').hide();
//   $('.search-options').show();
// });

// btnPrevious.addEventListener('click', () => {
//   $('.search-options').hide();
//   $('.search').show();
// });

function showObject() {
  const paragraph = document.createElement('p');

  if (objeto.searchOptions.length !== 0) {

    paragraph.innerHTML = objeto.searchOptions[objeto.searchOptions.length - 1];

    if (!selectedItem.innerHTML.includes(paragraph.innerHTML)) {
      selectedItem.appendChild(paragraph);
      selected.appendChild(selectedItem);
    }

  }

}

function deleteObject(item) {
  objeto.searchOptions.splice(objeto.searchOptions.indexOf(item), 1);
  selectedItem.innerHTML = selectedItem.innerHTML.replace(item, '');
  showObject();
}