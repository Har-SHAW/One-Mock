function syntaxHighlight(json) {
    if (typeof json != "string") {
        json = JSON.stringify(json);
    }
    json = json
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    return json.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        function (match) {
            var cls = "number";
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = "key";
                } else {
                    cls = "string";
                }
            } else if (/true|false/.test(match)) {
                cls = "boolean";
            } else if (/null/.test(match)) {
                cls = "null";
            }
            return '<span class="' + cls + '">' + match + "</span>";
        }
    );
}
function coloredFormatJsonBody(string) {
    var json = syntaxHighlight(
        JSON.stringify(JSON.parse(string), undefined, 4)
    );
    var html =
        "<head><style>pre { padding: 5px; margin: 5px; } .string { color: green; } ";
    html +=
        " .number { color: darkorange; } .boolean { color: blue; } .null { color: magenta; } .key { color: red; }</style></head><body>";
    html += "<pre>" + json + "</pre>";
    return html;
}

function formatStringBody(string) {
    return string;
}

function coloredFormatXmlBody(xml, colorize, indent) {
    function esc(s) {
        return s.replace(/[-\/&<> ]/g, function (c) {
            // Escape special chars
            return c == " " ? "&nbsp;" : "&#" + c.charCodeAt(0) + ";";
        });
    }
    var sm = '<div class="xmt">',
        se = '<div class="xel">',
        sd = '<div class="xdt">',
        sa = '<div class="xat">',
        tb = '<div class="xtb">',
        tc = '<div class="xtc">',
        ind = indent || "    ",
        sz = "</div>",
        tz = "</div>",
        re = "",
        is = "",
        ib,
        ob,
        at,
        i;
    if (!colorize) sm = se = sd = sa = sz = "";
    xml.match(/(?<=<).*(?=>)|$/s)[0]
        .split(/>\s*</)
        .forEach(function (nd) {
            ob = ("<" + nd + ">").match(/^(<[!?\/]?)(.*?)([?\/]?>)$/s); // Split outer brackets
            ib = ob[2].match(/^(.*?)>(.*)<\/(.*)$/s) || ["", ob[2], ""]; // Split inner brackets
            at = ib[1].match(/^--.*--$|=|('|").*?\1|[^\t\n\f \/>"'=]+/g) || [
                "",
            ]; // Split attributes
            if (ob[1] == "</") is = is.substring(ind.length); // Decrease indent
            re +=
                tb +
                tc +
                esc(is) +
                tz +
                tc +
                sm +
                esc(ob[1]) +
                sz +
                se +
                esc(at[0]) +
                sz;
            for (i = 1; i < at.length; i++)
                re +=
                    (at[i] == "="
                        ? sm + "=" + sz + sd + esc(at[++i])
                        : sa + " " + at[i]) + sz;
            re += ib[2]
                ? sm +
                  esc(">") +
                  sz +
                  sd +
                  esc(ib[2]) +
                  sz +
                  sm +
                  esc("</") +
                  sz +
                  se +
                  ib[3] +
                  sz
                : "";
            re += sm + esc(ob[3]) + sz + tz + tz;
            if (ob[1] + ob[3] + ib[2] == "<>") is += ind; // Increase indent
        });
    return re;
}

function formatJsonBody(string) {
    return JSON.stringify(JSON.parse(string), undefined, 4);
}

function formatXmlBody(sourceXml) {
    var xmlDoc = new DOMParser().parseFromString(sourceXml, "application/xml");
    var xsltDoc = new DOMParser().parseFromString(
        [
            // describes how we want to modify the XML - indent everything
            '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">',
            '  <xsl:strip-space elements="*"/>',
            '  <xsl:template match="para[content-style][not(text())]">', // change to just text() to strip space in text nodes
            '    <xsl:value-of select="normalize-space(.)"/>',
            "  </xsl:template>",
            '  <xsl:template match="node()|@*">',
            '    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
            "  </xsl:template>",
            '  <xsl:output indent="yes"/>',
            "</xsl:stylesheet>",
        ].join("\n"),
        "application/xml"
    );

    var xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsltDoc);
    var resultDoc = xsltProcessor.transformToDocument(xmlDoc);
    var resultXml = new XMLSerializer().serializeToString(resultDoc);
    console.log(resultXml);
    return resultXml;
}

export function formatRequestBody(string, format) {
    switch (format) {
        case "application/json":
            return formatJsonBody(string);

        case "text/plain":
            return formatStringBody(string);

        case "application/xml":
            return formatXmlBody(string);
    }
}

export function coloredFormatRequestBody(string, format) {
    switch (format) {
        case "application/json":
            return coloredFormatJsonBody(string);

        case "text/plain":
            return formatStringBody(string);

        case "application/xml":
            return coloredFormatXmlBody(string, true);

        default:
            return string;
    }
}

export function nonColoredFormatRequestBody(string, format) {
    switch (format) {
        case "application/json":
            return "<pre>" + formatJsonBody(string) + "</pre>";

        case "text/plain":
            return "<pre>" + formatStringBody(string) + "</pre>";

        case "application/xml":
            return "<pre>" + formatXmlBody(string) + "</pre>";
    }
}
