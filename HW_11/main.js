//#HmvAfRQM
//
// – взяти https://dummyjson.com/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

// Використовуємо fetch (працює у браузері або в Node.js з node-fetch)


const divForCarts = document.createElement('div');

fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(data => {
        data.carts.forEach(cart => {
            const cartDiv = document.createElement('div');
            cartDiv.innerHTML = `
            <h2>Cart ID: ${cart.id}</h2>
            <p>User ID: ${cart.total}</p>
            <p>Total: ${cart.total}</p>
            <p>Discounted Total: ${cart.userId}</p>
            <p>Total Products: ${cart.totalProducts}</p>
            <p>Total Quantity: ${cart.totalQuantity}</p>

        `
            const ol = document.createElement('ol');
            cart.products.forEach(product => {
                const li = document.createElement('li');
                li.textContent = `${product.title} - ${product.price}`;
                ol.appendChild(li);
            });
            cartDiv.appendChild(ol);
            divForCarts.appendChild(cartDiv);
        });
        document.body.appendChild(divForCarts);
    })
    .catch(error => console.error('Error fetching carts:', error));

// _______________________________________________________________________________________________________________________________________

//#whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.


const divForRec = document.createElement('div');

fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(data => {
        data.recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.innerHTML = `
        <h2>${recipe.name}</h2>
        <p>Difficulty: ${recipe.difficulty}</p>
        <p>Cuisine: ${recipe.cuisine}</p>
        <p>Calories: ${recipe.caloriesPerServing}</p>
      `;

            const ul = document.createElement('ul');
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ul.appendChild(li);
            });

            recipeDiv.appendChild(ul);
            divForRec.appendChild(recipeDiv);
        });

        document.body.appendChild(divForRec);
    })
    .catch(error => console.error('Error fetching recipes:', error));

