/*
 * Complete the 'getResponses' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY valid_auth_tokens
 *  2. 2D_STRING_ARRAY requests
 */

function getResponses(valid_auth_tokens: string[], requests: string[][]): string[] {
    // Helper function to validate CSRF token
    function isValidCSRFToken(csrfToken: string): boolean {
        return /^[a-z0-9]{8,}$/i.test(csrfToken);
    }

    // Helper function to parse URL parameters
    function parseParameters(url: string): string[] {
        const params = new URLSearchParams(url.split('?')[1]);
        const excludedKeys = ['token', 'csrf']; // Add keys you want to exclude here

        return Array.from(params.entries())
            .filter(([key]) => !excludedKeys.includes(key))
            .map(([key, value]) => `${key},${value}`);
    }

    const responses: string[] = [];

    for (const request of requests) {
        const [method, url] = request;
        const urlObject = new URL(url);

        // Extract tokens from URL
        const authToken = urlObject.searchParams.get('token');
        const csrfToken = urlObject.searchParams.get('csrf');

        // Validate authentication token
        if (!valid_auth_tokens.includes(authToken)) {
            responses.push("INVALID");
            continue;
        }

        // Validate CSRF token for POST requests
        if (method === "POST" && (!csrfToken || !isValidCSRFToken(csrfToken))) {
            responses.push("INVALID");
            continue;
        }

        // Parse URL parameters and create response string
        const parameters = parseParameters(url);
        const responseString = ["VALID", ...parameters].join(',');

        responses.push(responseString);
    }

    return responses;
}

// Sample usage
const valid_auth_tokens: string[] = ["ah37j2ha483u", "safh34ywb0p5", "ba34wyi8t902"];
const requests: string[][] = [
    ["GET", "https://example.com/?token=347sd6yk8iu2&name=alex&id=2e3rt"],
    ["GET", "https://example.com/?token=safh34ywb0p5&name=sam"],
    ["POST", "https://example.com/?token=safh34ywb0p5&name=alex"],
    ["POST", "https://example.com/?token=safh34ywb0p5&csrf=ak2sh32dy&name=chris"]
];

const result: string[] = getResponses(valid_auth_tokens, requests);
console.log(result);