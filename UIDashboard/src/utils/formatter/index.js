function formatJsonBody(string) {
    return JSON.stringify(JSON.parse(string), null, 4);
}

function formatStringBody(string) {
    return string;
}

export function formatRequestBody(string, format) {
    switch (format) {
        case "application/json":
            return formatJsonBody(string);

        case "text/plain":
            return formatStringBody(string);
    }
}
