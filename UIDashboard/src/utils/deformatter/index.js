function deformatJsonBody(string) {
    return JSON.stringify(JSON.parse(string));
}

function deformatStringBody(string) {
    return string;
}

export function deformatRequestBody(string, format) {
    switch (format) {
        case "application/json":
            return deformatJsonBody(string);

        case "text/plain":
            return deformatStringBody(string);
    }
}
