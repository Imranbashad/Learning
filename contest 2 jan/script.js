// Function to fetch and display menu
function getMenu() {
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
        .then(response => response.json())
        .then(data => {
            const menuDiv = document.getElementById('menu');
            data.forEach(item => {
                const foodItem = document.createElement('div');
                foodItem.textContent = `${item.name} - ${item.price}`;
                menuDiv.appendChild(foodItem);
            });
        })
        .catch(error => console.error('Error fetching menu:', error));
}

// Function to simulate taking order
function takeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const order = {
                items: ['Burger1', 'Burger2', 'Burger3'], // Simulate selecting random burgers
            };
            resolve(order);
        }, 2500);
    });
}

// Function to simulate order preparation
function orderPrep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

// Function to simulate payment processing
function payOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

// Function to display thank you message
function thankYouFnc() {
    const thankYouDiv = document.getElementById('thankYou');
    thankYouDiv.textContent = 'Thank you for eating with us today!';
}

// Function to handle promises sequentially
async function handleOrderFlow() {
    try {
        await getMenu();
        console.log('Menu displayed');

        const order = await takeOrder();
        console.log('Order taken:', order);

        const prepStatus = await orderPrep();
        console.log('Order prepared:', prepStatus);

        const paymentStatus = await payOrder();
        console.log('Order paid:', paymentStatus);

        if (paymentStatus.paid) {
            thankYouFnc();
        }
    } catch (error) {
        console.error('Error in order flow:', error);
    }
}

// Run on page load
window.onload = handleOrderFlow;
