// Q.1)
// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok!!");
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 resolve(data);
//             })
//             .catch(error => {
//                 reject("Fetch error: " + error.message);
//             });
//     });
// }
// fetchData("https://jsonplaceholder.typicode.com/users")
//     .then(data => {
//         console.log("Data fetched successfully:", data);
//     }).catch(error => {
//         console.error("Error fetching data:", error);
//     }).finally(() => {
//         console.log("Fetching data finished...");
//     });

// Q.2)
// function createCounter(initialValue, stepSize) {
//     let currentValue = initialValue;

//     return {
//         increment: function () {
//             currentValue += stepSize;
//         },
//         decrement: function () {
//             currentValue -= stepSize;
//         },
//         reset: function () {
//             currentValue = initialValue;
//         },
//         getValue: function () {
//             return currentValue;
//         }
//     };
// }
// const counter = createCounter(10, 5);

// console.log(counter.getValue());
// counter.increment();
// console.log(counter.getValue());
// counter.increment();
// console.log(counter.getValue());
// counter.decrement();
// console.log(counter.getValue());
// counter.reset();
// console.log(counter.getValue());

// Q.3)
// class User {
//     constructor(name) {
//         this.name = name;
//         this.greet = this.greet.bind(this);
//     }
//     greet() {
//         console.log(`Hello, ${this.name}!`);
//     }
// }
// const user = new User("Alice");
// user.greet();

// function myEventListener(callback) {
//     console.log("Button clicked!");
//     callback();
// }
// myEventListener(user.greet);

// Q.4)
// function createDataFetcher(url) {
//     let data = 0;

//     return {
//         fetchData: function () {
//             return fetch(url)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error("Network response was not ok!!");
//                     }
//                     return response.json();
//                 })
//                 .then(fetchedData => {
//                     data = fetchedData;
//                 }).catch(error => {
//                     console.error("Fetch error:", error);
//                 });
//         },
//         getData: function () {
//             return data;
//         }
//     };
// }
// const myAPI = createDataFetcher("https://jsonplaceholder.typicode.com/users");

// myAPI.fetchData().then(() => {
//     console.log("Fetched Data:", myAPI.getData());
// });

// Q.5)
async function fetchDataWithRetry(url, maxRetries) {
    let retryCount = 0;

    async function fetchData() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not OK!!");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            if (retryCount < maxRetries) {
                retryCount++;
                console.log(`Retrying... (${retryCount}/${maxRetries})`);
                return fetchData();
            } else {
                throw new Error("Fetching error!!");
            }
        }
    }
    return fetchData();
}
const url = "https://jsonplaceholder.typicode.com/users";
const maxRetries = 3;

fetchDataWithRetry(url, maxRetries)
    .then(data => {
        console.log("Fetched Data:", data);
    }).catch(error => {
        console.error(error);
    });