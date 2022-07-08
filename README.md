</br>

<p align="center">
  <img src="https://github.com/Har-SHAW/One-Mock/blob/master/onemock.png" />
</p>

<br/>

A developer friendly mock server with GUI, Traffic Capturing and many more features.

[![License: MPL 2.0](https://img.shields.io/badge/Download-OneMock-brightgreen.svg)](https://github.com/Har-SHAW/One-Mock/releases/download/One-Mock/onemock-1.0.jar)&emsp;[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-00a2ab.svg)](https://github.com/Har-SHAW/One-Mock/blob/master/LICENSE.txt)&emsp;[![License: MPL 2.0](https://img.shields.io/badge/Docs-One%20Mock-blue.svg)](https://github.com/Har-SHAW/One-Mock/blob/master/LICENSE.txt)&emsp;[![License: MPL 2.0](https://img.shields.io/badge/Author-Harshaw-eb2aae.svg)](https://github.com/Har-SHAW)

## Features

- Create mocks with more than one responses from a single endpoint.
- Traffic can be captured from your application for a better analysis.
- User friendly GUI to configure everything without a single line of code.
- SQLiteDB and Java allows the mocks and capture history portable across the machines.


## Requirements

To run the server, you will need to install the following in your machine.

`Java`


## Run Locally

- Download the `.jar` build file from https://github.com/Har-SHAW/One-Mock/releases/download/One-Mock/onemock-1.0.jar


**Start the Server**
```bash
java -jar onemock-1.0.jar
```
Default port is `8080`

**Start the Server with custom port**
```bash
java -jar -Dserver.port=9001 onemock-1.0.jar
```


## Usage

Access the dashboard at http://localhost:8080/home from any browser.

To use the mock server in any front-end code put the base url as `http://localhost:8080/onemock` and append the rest of the path to this.

**For Example**

```javascript
const base_url = "http://localhost:8080/onemock";

let fetchRes = fetch(base_url + "/todos/1");

fetchRes
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });
```

## Tech Stack

**Dashboard:** React, TailwindCSS

**Server:** Spring Boot, SQLite Database


## Documentation

[Documentation](https://github.com/Har-SHAW/One-Mock)


## License

[MPL-2.0 license](https://github.com/Har-SHAW/One-Mock/blob/master/LICENSE.txt)


## Authors

[Har-SHAW](https://www.github.com/har-shaw)


## Feedback

If you have any feedback, please reach out to us at harshavardhan.gadireddy@gmail.com

