// //#1
// const account = {
//     owner: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['order-1', 'order-2', 'order-3'],
//     changeDiscount(value) {
//         this.discount = value;
//     },
//     showOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost;
//         this.orders.push(order);
//     },
// };
//
// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15
//
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']
//
// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// //#2
// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//         inventory.items.push(itemName)
//         console.log(`Adding ${itemName} to inventory`);
//     },
//     remove(itemName) {
//         inventory.items = inventory.items.filter(item => item !== itemName);
//         console.log(`Removing ${itemName} from inventory`);
//     },
// };
//
//
//
// const invokeInventoryAction = function(itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action(itemName);
// };
//
// invokeInventoryAction('Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory
//
// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
//
// invokeInventoryAction('Gas mask', inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory
//
// console.log(inventory.items); // ['Knife', 'Medkit']

//#2-2
const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
        this.items.push(itemName)
        console.log(`Adding ${itemName} to inventory`);
    },
    remove(itemName) {
        this.items = this.items.filter(item => item !== itemName);
        console.log(`Removing ${itemName} from inventory`);
    },
};

const bindAdd = inventory.add.bind(inventory);
const bindRemove = inventory.remove.bind(inventory);

const invokeInventoryAction = function(itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action(itemName);
};

invokeInventoryAction('Medkit', bindAdd);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', bindRemove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']