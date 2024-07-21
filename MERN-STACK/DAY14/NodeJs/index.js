const fs = require("fs");
const http = require("http");
const path = require("path");

// Q.1)
// const port = 5000;

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
//             if (err) {
//                 res.setHeader("Content-Type", "text/plain");
//                 res.end("500 - Internal Server Error!");
//                 return;
//             }
//             res.setHeader("Content-Type", "text/html");
//             res.end(data);
//         });
//     } else {
//         res.setHeader("Content-Type", "text/plain");
//         res.end("404 - Not Found!");
//     }
// });
// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });

// Q.2)
// const filePath = path.join(__dirname, "database.json");

// fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }

//     let jsonFile;
//     try {
//         jsonFile = JSON.parse(data);
//     } catch (parseErr) {
//         console.error("Error parsing JSON:", parseErr);
//         return;
//     }

//     const currentTimestamp = new Date().toISOString();
//     jsonFile.forEach(item => {
//         item.lastModified = currentTimestamp;
//     });

//     fs.writeFile(filePath, JSON.stringify(jsonFile, null, 2), "utf8", writeErr => {
//         if (writeErr) {
//             console.error("Error writing file:", writeErr);
//             return;
//         }
//         console.log("File successfully updated!");
//     });
// });

// Q.3)
// const queryString = require("querystring");

// const string = "name=JohnDoe&age=25&address[city]=NewYork&address[zip]=10001&hobbies=sports&hobbies=music";
// const parsedQuery = queryString.parse(string);

// function logKeyValuePairs(obj, parentKey = "") {
//     if (typeof obj === "object" && obj !== null) {
//         for (const key in obj) {
//             if (Object.prototype.hasOwnProperty.call(obj, key)) {
//                 const myKey = parentKey ? `${parentKey}.${key}` : key;
//                 const value = obj[key];
//                 if (typeof value === "object" && value !== null && !Array.isArray(value)) {
//                     logKeyValuePairs(value, myKey);
//                 } else {
//                     console.log(`${myKey}: ${Array.isArray(value) ? value.join(", ") : value}`);
//                 }
//             }
//         }
//     }
// }
// logKeyValuePairs(parsedQuery);

// Q.4)
const url = require("url");

// const sampleUrl = "http://www.example.com/path/name?name=JohnDoe";

// const parsedUrl = new URL(sampleUrl);

// console.log("Protocol:", parsedUrl.protocol);
// console.log("Hostname:", parsedUrl.hostname);
// console.log("Pathname:", parsedUrl.pathname);

// Q.5)
const zlib = require("zlib");

// const inputDir = path.join(__dirname, "input");

// function compressFile(file) {
//     const filePath = path.join(inputDir, file);
//     const gzipPath = filePath + ".gz";

//     const readStream = fs.createReadStream(filePath);
//     const writeStream = fs.createWriteStream(gzipPath);
//     const gzip = zlib.createGzip();

//     readStream.pipe(gzip).pipe(writeStream).on("finish", () => {
//         console.log(`Compressed: ${file} -> ${file}.gz`);
//     });
// }
// fs.readdir(inputDir, (err, files) => {
//     if (err) {
//         console.error("Error reading directory:", err);
//         return;
//     }

//     files.filter(file => path.extname(file) === ".txt").forEach(file => {
//         compressFile(file);
//     });
// });

// Q.6)
// const tar = require("tar");

// const inputDir = path.join(__dirname, "input");
// const outputFilePath = path.join(__dirname, "combined_files.tar.gz");

// tar.c(
//     {
//         gzip: true,
//         file: outputFilePath,
//         cwd: inputDir
//     },
//     ["file1.txt", "file2.txt", "file3.txt"]
// ).then(() => {
//     console.log(`Created archive: ${outputFilePath}`);
// }).catch(err => {
//     console.error("Error creating archive:", err);
// });

// Q.7)
const util = require("util");

// const readFile = util.promisify(fs.readFile);
// const appendFile = util.promisify(fs.appendFile);

// const filePath = path.join(__dirname, "file.txt");

// async function modifyFile() {
//     try {
//         let content = await readFile(filePath, "utf8");
//         console.log("File content before append:\n", content);

//         await appendFile(filePath, "\nAppended content");

//         content = await readFile(filePath, "utf8");
//         console.log("File content after append:\n", content);
//     } catch (err) {
//         console.error("Error:", err);
//     }
// }
// modifyFile();

// Q.8)
// const { URL } = require("url");

// const readFile = util.promisify(fs.readFile);
// const filePath = path.join(__dirname, "url.txt");

// async function parseUrlFromFile() {
//     try {
//         const fileContent = await readFile(filePath, "utf8");
//         const urlString = fileContent.trim(); // trim any whitespace
//         const parsedUrl = new URL(urlString);

//         console.log("Protocol:", parsedUrl.protocol);
//         console.log("Hostname:", parsedUrl.hostname);
//         console.log("Pathname:", parsedUrl.pathname);
//         console.log("Query Parameters:", parsedUrl.searchParams);

//         parsedUrl.searchParams.forEach((value, name) => {
//             console.log(`Query Parameter - ${name}: ${value}`);
//         });

//     } catch (err) {
//         console.error("Error:", err);
//     }
// }
// parseUrlFromFile();

// Q.9)
// const server = http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true);

//     console.log("Request Method:", req.method);
//     console.log("Request URL:", req.url);
//     console.log("Request Headers:", req.headers);
//     console.log("Query Parameters:", parsedUrl.query);

//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Request details logged...\n");
// });
// server.listen(5000, () => {
//     console.log("Server running at port 5000...");
// });

// Q.10)
const port = 4000;
const publicDir = path.join(__dirname, "public");

function getContentType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    switch (ext) {
        case ".html":
            return "text/html";
        case ".css":
            return "text/css";
        case ".js":
            return "application/javascript";
        case ".json":
            return "application/json";
        case ".png":
            return "image/png";
        case ".jpg":
        case ".jpeg":
            return "image/jpeg";
        case ".gif":
            return "image/gif";
        default:
            return "text/plain";
    }
}
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathname = path.join(publicDir, parsedUrl.pathname === "/" ? "index.html" : parsedUrl.pathname);

    fs.stat(pathname, (err, stats) => {
        if (err || !stats.isFile()) {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html");
            fs.createReadStream(path.join(publicDir, "404.html")).pipe(res);
            console.log(`${req.url} - 404`);
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", getContentType(pathname));
            fs.createReadStream(pathname).pipe(res);
            console.log(`${req.url} - 200`);
        }
    });
});
server.listen(port, () => {
    console.log(`Server running at port ${port}...`);
});
