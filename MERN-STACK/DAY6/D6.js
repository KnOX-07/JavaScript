// Q.1)
// function processOrders(orders) {
//     const orderIds = orders.map(order => order.id);
//     const deliveredOrders = orders.filter(order => order.status === 'delivered');
//     const totalDeliveredAmount = deliveredOrders.reduce((total, order) => total + order.amount, 0);

//     const report = {
//         orderIds: orderIds,
//         deliveredOrders: deliveredOrders,
//         totalDeliveredAmount: totalDeliveredAmount
//     };
//     return report;
// }
// const orders = [
//     { id: 1, amount: 50, status: 'pending' },
//     { id: 2, amount: 100, status: 'shipped' },
//     { id: 3, amount: 150, status: 'delivered' },
//     { id: 4, amount: 200, status: 'delivered' }
// ];
// const report = processOrders(orders);
// console.log(report);

// Q.2)
// function analyzeUsers(users) {
//     const userNames = users.map(user => user.name);
//     const activeUsers = users.filter(user => user.posts.some(post => post.likes > 100));

//     let averageAge = 0;
//     if (activeUsers.length > 0) {
//         const totalAge = activeUsers.reduce((total, user) => total + user.age, 0);
//         averageAge = totalAge / activeUsers.length;
//     }
//     const report = {
//         userNames: userNames,
//         activeUsers: activeUsers,
//         averageAgeOfActiveUsers: averageAge
//     };
//     return report;
// }
// const users = [
//     {
//         name: 'Alice',
//         age: 25,
//         posts: [
//             { title: 'Post 1', likes: 50 },
//             { title: 'Post 2', likes: 120 }
//         ]
//     },
//     {
//         name: 'Bob',
//         age: 30,
//         posts: [
//             { title: 'Post 1', likes: 90 },
//             { title: 'Post 2', likes: 180 }
//         ]
//     },
//     {
//         name: 'Charlie',
//         age: 35,
//         posts: [
//             { title: 'Post 1', likes: 80 },
//             { title: 'Post 2', likes: 95 }
//         ]
//     }
// ];
// const report = analyzeUsers(users);
// console.log(JSON.stringify(report, null, 2));

// Q.3)
function manageMessages(messages, specificUser) {
    const messageContents = messages.map(message => message.content);
    const messagesByUser = messages.filter(message => message.sender === specificUser);
    const totalMessages = messages.reduce((count, message) => count + 1, 0);

    const chatSummary = {
        messageContents: messageContents,
        messagesByUser: messagesByUser,
        totalMessages: totalMessages
    };
    return chatSummary;
}
const messages = [
    { content: "Hello!", sender: "Alice" },
    { content: "Hi, how are you?", sender: "Bob" },
    { content: "I'm good, thanks!", sender: "Alice" },
    { content: "Great to hear!", sender: "Bob" }
];
const summary = manageMessages(messages, "Alice");
console.log(summary);