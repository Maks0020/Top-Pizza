// burger-menu
const burgerBtn = document.querySelector('.burger');
const menu = document.querySelector('.menu-open');

function opop() { menu.style.display = 'none'};

burgerBtn.addEventListener('click', function(){
      burgerBtn.classList.toggle('open');
      menu.classList.toggle('menu-open');
})



const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  document.querySelector('.threee').style.width = '36px';
});

// burger-menu


// size-&-prise




// pizza cheese
const sizeCheese = document.querySelectorAll('.size-cheese');
const priceCheese = document.querySelector('.pp-cheese');

sizeCheese.forEach(size => {
  size.addEventListener('click', () => {
    sizeCheese.forEach(size => size.classList.remove('activeTwo')); // удалить класс у всех size
    size.classList.add('activeTwo'); // добавить на кликнутый size
    // изменение цены в зависимости от размера пиццы
    if (size.classList.contains('size-s')) {
      priceCheese.textContent = '319 р'; // цена для size-s
    } else if (size.classList.contains('size-m')) {
      priceCheese.textContent = '369 р'; // цена для size-m
    } else if (size.classList.contains('size-l')) {
      priceCheese.textContent = '399 р'; // цена для size-l
    }

    document.querySelector('.btn-cheese').style.width ='200px';
    document.querySelector('.btn-cheese').style.opacity ='unset';
  });
});


// pizza barbecue chicken
const sizeBarbecueChicken = document.querySelectorAll('.size-barbecue-chicken');
const priceBarbecueChicken = document.querySelector('.pizza-barbecue-chicken');

sizeBarbecueChicken.forEach(size => {
  size.addEventListener('click', () => {
    sizeBarbecueChicken.forEach(size => size.classList.remove('activeTwo')); // удалить класс у всех size
    size.classList.add('activeTwo'); // добавить на кликнутый size
    // изменение цены в зависимости от размера пиццы
    if (size.classList.contains('size-s')) {
      priceBarbecueChicken.textContent = '389 р'; // цена для size-s
    } else if (size.classList.contains('size-m')) {
      priceBarbecueChicken.textContent = '439 р'; // цена для size-m
    } else if (size.classList.contains('size-l')) {
      priceBarbecueChicken.textContent = '479 р'; // цена для size-l
    }

    document.querySelector('.btn-barbecue-chicken').style.width ='200px';
    document.querySelector('.btn-barbecue-chicken').style.opacity ='unset';
  });
});


// pizza cheese chicken
const sizeCheeseChicken = document.querySelectorAll('.size-cheese-chicken');
const priceCheeseChicken = document.querySelector('.price-cheese-chicken');

sizeCheeseChicken.forEach(size => {
  size.addEventListener('click', () => {
    sizeCheeseChicken.forEach(size => size.classList.remove('activeTwo')); // удалить класс у всех size
    size.classList.add('activeTwo'); // добавить на кликнутый size
    // изменение цены в зависимости от размера пиццы
    if (size.classList.contains('size-s')) {
      priceCheeseChicken.textContent = '419 р'; // цена для size-s
    } else if (size.classList.contains('size-m')) {
      priceCheeseChicken.textContent = '449 р'; // цена для size-m
    } else if (size.classList.contains('size-l')) {
      priceCheeseChicken.textContent = '489 р'; // цена для size-l
    }

    document.querySelector('.btn-cheese-chicken').style.width ='200px';
    document.querySelector('.btn-cheese-chicken').style.opacity ='unset';
  });
});


// pizza fresh pepperoni
const sizeFreshPepperoni = document.querySelectorAll('.size-fresh-pepperoni');
const priceFreshPepperoni = document.querySelector('.pizza-fresh-pepperoni');

sizeFreshPepperoni.forEach(size => {
  size.addEventListener('click', () => {
    sizeFreshPepperoni.forEach(size => size.classList.remove('activeTwo')); // удалить класс у всех size
    size.classList.add('activeTwo'); // добавить на кликнутый size
    // изменение цены в зависимости от размера пиццы
    if (size.classList.contains('size-s')) {
      priceFreshPepperoni.textContent = '379 р'; // цена для size-s
    } else if (size.classList.contains('size-m')) {
      priceFreshPepperoni.textContent = '419 р'; // цена для size-m
    } else if (size.classList.contains('size-l')) {
      priceFreshPepperoni.textContent = '459 р'; // цена для size-l
    }

    document.querySelector('.btn-fresh-pepperoni').style.width ='200px';
    document.querySelector('.btn-fresh-pepperoni').style.opacity ='unset';
  });
});


// pizza meat
const sizeMeat = document.querySelectorAll('.size-meat');
const priceMeat = document.querySelector('.price-meat');

sizeMeat.forEach(size => {
  size.addEventListener('click', () => {
    sizeMeat.forEach(size => size.classList.remove('activeTwo')); // удалить класс у всех size
    size.classList.add('activeTwo'); // добавить на кликнутый size
    // изменение цены в зависимости от размера пиццы
    if (size.classList.contains('size-s')) {
      priceMeat.textContent = '439 р'; // цена для size-s
    } else if (size.classList.contains('size-m')) {
      priceMeat.textContent = '469 р'; // цена для size-m
    } else if (size.classList.contains('size-l')) {
      priceMeat.textContent = '489 р'; // цена для size-l
    }

    document.querySelector('.btn-meat').style.width ='200px';
    document.querySelector('.btn-meat').style.opacity ='unset';
  });
});


// pizza pepperoni
const sizePepperoni = document.querySelectorAll('.size-pepperoni');
const pricePepperoni = document.querySelector('.price-pepperoni');

sizePepperoni.forEach(size => {
  size.addEventListener('click', () => {
    sizePepperoni.forEach(size => size.classList.remove('activeTwo')); // удалить класс у всех size
    size.classList.add('activeTwo'); // добавить на кликнутый size
    // изменение цены в зависимости от размера пиццы
    if (size.classList.contains('size-s')) {
      pricePepperoni.textContent = '369 р'; // цена для size-s
    } else if (size.classList.contains('size-m')) {
      pricePepperoni.textContent = '399 р'; // цена для size-m
    } else if (size.classList.contains('size-l')) {
      pricePepperoni.textContent = '429 р'; // цена для size-l
    }

    document.querySelector('.btn-pepperoni').style.width ='200px';
    document.querySelector('.btn-pepperoni').style.opacity ='unset';
  });
});



// pizza chicken ranch
const sizeChickenRanch = document.querySelectorAll('.size-chicken-ranch');
const priceChickenRanch = document.querySelector('.price-chicken-ranch');

sizeChickenRanch.forEach(size => {
  size.addEventListener('click', () => {
    sizeChickenRanch.forEach(size => size.classList.remove('activeTwo')); // удалить класс у всех size
    size.classList.add('activeTwo'); // добавить на кликнутый size
    // изменение цены в зависимости от размера пиццы
    if (size.classList.contains('size-s')) {
      priceChickenRanch.textContent = '399 р'; // цена для size-s
    } else if (size.classList.contains('size-m')) {
      priceChickenRanch.textContent = '439 р'; // цена для size-m
    } else if (size.classList.contains('size-l')) {
      priceChickenRanch.textContent = '459 р'; // цена для size-l
    }

    document.querySelector('.btn-chicken-ranch').style.width ='200px';
    document.querySelector('.btn-chicken-ranch').style.opacity ='unset';
  });
});


// pizza margarita
const sizeMargarita = document.querySelectorAll('.size-margarita');
const pricMargarita = document.querySelector('.price-margarita');

sizeMargarita.forEach(size => {
  size.addEventListener('click', () => {
    sizeMargarita.forEach(size => size.classList.remove('activeTwo')); // удалить класс у всех size
    size.classList.add('activeTwo'); // добавить на кликнутый size
    // изменение цены в зависимости от размера пиццы
    if (size.classList.contains('size-s')) {
      pricMargarita.textContent = '489 р'; // цена для size-s
    } else if (size.classList.contains('size-m')) {
      pricMargarita.textContent = '529 р'; // цена для size-m
    } else if (size.classList.contains('size-l')) {
      pricMargarita.textContent = '569 р'; // цена для size-l
    }

    document.querySelector('.btn-margarita').style.width ='200px';
    document.querySelector('.btn-margarita').style.opacity ='unset';
  });
});


// pizza vegetables mushrooms
const sizeVegetablesMushrooms = document.querySelectorAll('.size-vegetables-mushrooms');
const priceVegetablesMushrooms = document.querySelector('.price-vegetables-mushrooms');

sizeVegetablesMushrooms.forEach(size => {
  size.addEventListener('click', () => {
    sizeVegetablesMushrooms.forEach(size => size.classList.remove('activeTwo')); // удалить класс у всех size
    size.classList.add('activeTwo'); // добавить на кликнутый size
    // изменение цены в зависимости от размера пиццы
    if (size.classList.contains('size-s')) {
      priceVegetablesMushrooms.textContent = '419 р'; // цена для size-s
    } else if (size.classList.contains('size-m')) {
      priceVegetablesMushrooms.textContent = '469 р'; // цена для size-m
    } else if (size.classList.contains('size-l')) {
      priceVegetablesMushrooms.textContent = '499 р'; // цена для size-l
    }

    document.querySelector('.btn-vegetables-mushrooms').style.width ='200px';
    document.querySelector('.btn-vegetables-mushrooms').style.opacity ='unset';
  });
});


// pizza home
const sizeHome = document.querySelectorAll('.size-home');
const priceHome = document.querySelector('.price-home');

sizeHome.forEach(size => {
  size.addEventListener('click', () => {
    sizeHome.forEach(size => size.classList.remove('activeTwo')); // удалить класс у всех size
    size.classList.add('activeTwo'); // добавить на кликнутый size
    // изменение цены в зависимости от размера пиццы
    if (size.classList.contains('size-s')) {
      priceHome.textContent = '409 р'; // цена для size-s
    } else if (size.classList.contains('size-m')) {
      priceHome.textContent = '439 р'; // цена для size-m
    } else if (size.classList.contains('size-l')) {
      priceHome.textContent = '479 р'; // цена для size-l
    }

    document.querySelector('.btn-homee').style.width ='200px';
    document.querySelector('.btn-homee').style.opacity ='unset';
  });
});


// pizza chicken curry
const sizeChickenCurry = document.querySelectorAll('.size-chicken-curry');
const priceChickenCurry = document.querySelector('.price-chicken-curry');

sizeChickenCurry.forEach(size => {
  size.addEventListener('click', () => {
    sizeChickenCurry.forEach(size => size.classList.remove('activeTwo')); // удалить класс у всех size
    size.classList.add('activeTwo'); // добавить на кликнутый size
    // изменение цены в зависимости от размера пиццы
    if (size.classList.contains('size-s')) {
      priceChickenCurry.textContent = '469 р'; // цена для size-s
    } else if (size.classList.contains('size-m')) {
      priceChickenCurry.textContent = '499 р'; // цена для size-m
    } else if (size.classList.contains('size-l')) {
      priceChickenCurry.textContent = '549 р'; // цена для size-l
    }

    document.querySelector('.btn-chicken-curry').style.width ='200px';
    document.querySelector('.btn-chicken-curry').style.opacity ='unset';
  });
});







const hend = document.querySelectorAll('.hend');
const pizzaSizes = document.querySelectorAll('.pizza-size');

hend.forEach(function(item) {
  item.addEventListener('click', function() {
    pizzaSizes.forEach(function(size) {
      size.classList.toggle('leftRightTog');
    });
  });
});































// size-&-prise -- coffee
let poleCoffee = document.getElementById("number-diet-coffee");

let plusCoffee = document.getElementsByClassName("js-plus-btn-coffee")[0];

let minusCoffee = document.getElementsByClassName("js-minus-btn-coffee")[0];

plusCoffee.addEventListener("click", function(){poleCoffee.value = parseInt(poleCoffee.value) + 1;});

minusCoffee.addEventListener("click", function(){if(parseInt(poleCoffee.value) > 1)poleCoffee.value = parseInt(poleCoffee.value) -+ 1;});


// size-&-prise -- ice cream
let poleIceCream = document.getElementById("number-diet-ice-cream");

let plusIceCream = document.getElementsByClassName("js-plus-btn-ice-cream")[0];

let minusIceCream = document.getElementsByClassName("js-minus-btn-ice-cream")[0];

plusIceCream.addEventListener("click", function(){poleIceCream.value = parseInt(poleIceCream.value) + 1;});

minusIceCream.addEventListener("click", function(){if(parseInt(poleIceCream.value) > 1)poleIceCream.value = parseInt(poleIceCream.value) -+ 1;});


// size-&-prise -- donate
let poleDonut = document.getElementById("number-diet-donut");

let plusDonut = document.getElementsByClassName("js-plus-btn-donut")[0];

let minusDonut = document.getElementsByClassName("js-minus-btn-donut")[0];

plusDonut.addEventListener("click", function(){poleDonut.value = parseInt(poleDonut.value) + 1;});

minusDonut.addEventListener("click", function(){if(parseInt(poleDonut.value) > 1)pole.value = parseInt(poleDonut.value) -+ 1;});





// coffee
const sizeCoffee = document.querySelectorAll('.size-coffee');
const priceCoffee = document.querySelector('.price-additives-coffee');

sizeCoffee.forEach(size => {
  size.addEventListener('click', () => {
    sizeCoffee.forEach(size => size.classList.remove('activeTwo')); // удалить класс у всех size
    size.classList.add('activeTwo'); // добавить на кликнутый size
    // изменение цены в зависимости от размера пиццы
    if (size.classList.contains('size-s-additives-coffee')) {
      priceCoffee.textContent = '99 р'; // цена для size-s
    } else if (size.classList.contains('size-m-additives-coffee')) {
      priceCoffee.textContent = '129 р'; // цена для size-m
    } else if (size.classList.contains('size-l-additives-coffee')) {
      priceCoffee.textContent = '159 р'; // цена для size-l
    }

    document.querySelector('.btn-coffee').style.opacity ='unset';    
  });
});








// ice cream

const sizeIceCream = document.querySelectorAll('.size-ice-cream');
const priceIceCream = document.querySelector('.price-additives-ice-cream');

sizeIceCream.forEach(size => {
  size.addEventListener('click', () => {
    sizeIceCream.forEach(size => size.classList.remove('activeTwo')); // удалить класс у всех size
    size.classList.add('activeTwo'); // добавить на кликнутый size
    // изменение цены в зависимости от размера пиццы
    if (size.classList.contains('size-s-additives-ice-cream')) {
      priceIceCream.textContent = '69 р'; // цена для size-s
    } else if (size.classList.contains('size-m-additives-ice-cream')) {
      priceIceCream.textContent = '99 р'; // цена для size-m
    } else if (size.classList.contains('size-l-additives-ice-cream')) {
      priceIceCream.textContent = '119 р'; // цена для size-l
    }

    document.querySelector('.btn-ice-cream').style.opacity ='unset';
  });
});





// donut
const sizeDonut = document.querySelectorAll('.size-donut');
const priceDonut = document.querySelector('.price-additives-donut');

sizeDonut.forEach(size => {
  size.addEventListener('click', () => {
    sizeDonut.forEach(size => size.classList.remove('activeTwo')); // удалить класс у всех size
    size.classList.add('activeTwo'); // добавить на кликнутый size
    // изменение цены в зависимости от размера пиццы
    if (size.classList.contains('size-s-additives-donut')) {
      priceDonut.textContent = '79 р'; // цена для size-s
    } else if (size.classList.contains('size-m-additives-donut')) {
      priceDonut.textContent = '109 р'; // цена для size-m
    } else if (size.classList.contains('size-l-additives-donut')) {
      priceDonut.textContent = '129 р'; // цена для size-l
    }

    document.querySelector('.btn-donut').style.opacity ='unset';
  });
});








//  more additives 
const moreAdditivesBtn = document.querySelector('.text-more-additives');
const cardsAdditives = document.querySelector('.more-additives-cards-off');

function additives() {
  if (cardsAdditives.style.display === 'flex') { // если элемент уже открыт
    cardsAdditives.style.display = 'none'; // скрываем элемент
  }
}

moreAdditivesBtn.addEventListener('click', () => {
  if (cardsAdditives.style.display === 'none') { // если элемент закрыт
    cardsAdditives.style.display = 'flex'; // открываем элемент
    moreAdditivesBtn.classList.toggle('rrr');
  } else {
    cardsAdditives.style.display = 'none'; // иначе скрываем элемент
    moreAdditivesBtn.classList.toggle('rrr');
  }
}); 

