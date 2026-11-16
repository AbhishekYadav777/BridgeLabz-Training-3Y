let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mobile", category: "Electronics", price: 20000, stock: 15 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1000, stock: 3 },
    { id: 4, name: "Jeans", category: "Clothing", price: 2000, stock: 10 },
    { id: 5, name: "Mouse", category: "Electronics", price: 500, stock: 2 }
];

function getLowStockProducts() {
    return products.filter(p => p.stock < 5);
}

function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((total, p) => {
        return total + (p.price * p.stock);
    }, 0);
}

function groupByCategory() {
    return products.reduce((groups, p) => {
        if (!groups[p.category]) {
            groups[p.category] = [];
        }

        groups[p.category].push(p);
        return groups;
    }, {});
}

console.log("Low Stock:", getLowStockProducts());

console.log("Sorted Products:", sortProductsByPrice());

console.log("Total Inventory Value:",
    calculateTotalInventoryValue());

console.log("Grouped Products:", groupByCategory());