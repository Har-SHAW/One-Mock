</br>

<p align="center">
  <img src="https://github.com/Har-SHAW/One-Mock/blob/master/onemock.png" />
</p>

<br/>

[![Download](https://img.shields.io/badge/Download-One%20Mock-00c735.svg)](https://github.com/Har-SHAW/One-Mock/releases/download/One-Mock/onemock-v1.1.jar)&emsp;[![Release](https://img.shields.io/badge/Latest-Release%20v1.1-af40ff.svg)](https://github.com/Har-SHAW/One-Mock/releases/download/One-Mock/onemock-v1.1.jar)&emsp;[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-00a2ab.svg)](https://github.com/Har-SHAW/One-Mock/blob/master/LICENSE.txt)&emsp;[![Documentation](https://img.shields.io/badge/Docs-One%20Mock-blue.svg)](https://github.com/Har-SHAW/One-Mock/blob/master/LICENSE.txt)&emsp;[![Author](https://img.shields.io/badge/Author-Harshaw-eb2aae.svg)](https://github.com/Har-SHAW)&emsp;[![Contact](https://img.shields.io/badge/Contact-%40Gmail.com-red)](mailto:harshavardhan.gadireddy@gmail.com)

A developer friendly mock server with GUI, Traffic Capturing and with many more features. This gives boost in your front-end development without any actual production server.

## Run Locally

- Download the `onemock-v1.1.jar` build file from the latest release, click [here](https://github.com/Har-SHAW/One-Mock/releases/download/One-Mock/onemock-v1.1.jar) to download.


**Start the Server**
```bash
java -jar onemock-v1.1.jar
```
Default port is `8080`

**Start the Server with custom port**
```bash
java -jar -Dserver.port=9001 onemock-v1.1.jar
```

## Features

- Create mocks with more than one responses from a single endpoint.
- Traffic can be captured from your application for a better analysis.
- User friendly GUI to configure everything without a single line of code.
- SQLiteDB and Java allows the mocks and capture history portable across the machines.


## Requirements

To run the server, you will need to install the following in your machine.

`Java`

## Usage

Access the dashboard at `http://localhost:8080/home` from any browser.

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

**Dashboard:**&ensp;&ensp;&ensp;React, TailwindCSS

**Server:** &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Spring Boot, SQLite DB


## Documentation

[Documentation](https://github.com/Har-SHAW/One-Mock)


## License

[MPL-2.0 license](https://github.com/Har-SHAW/One-Mock/blob/master/LICENSE.txt)


## Authors

[Har-SHAW](https://www.github.com/har-shaw)


## Feedback

If you have any feedback, please reach out to me at harshavardhan.gadireddy@gmail.com

