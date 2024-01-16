# IBM Code Test January2024

During January 2024. I got an interview for the company IBM. Then I received a code test with the following problem description (Three problems). 

The answer for such questions are in the file Answer1 Answer2 Answer 3. All in react typescript. 

It is funny that such a company make this test(s) when today we have technology to automatize the code written process. Just Make no sense. Any way. Here are the questions (Please find answers in the files).  

# First

The process of initiating an action on a server is done through HTTP requests which are messages sent by the client. The two most commonly used HTTP requests are GET and POST. This task involves validating requests and parsing URL parameters as a comma-separated string. Authentication tokens for both GET and POST requests are sent as a URL parameter named "token". For validation of authentication, the tokens must be in a set of valid authentication tokens. In the case of a POST request, a CSRF (cross-site request forgery) token must also be provided. A POST request is considered valid if its authentication token is valid and its CSRF token is an alphanumeric value consisting only of lowercase letters and/or numbers with a minimum length of 8. Once a request is validated, the URL parameters must be parsed as a comma-separated string.
URL parameters are identified by the portion of the URL that comes after a question mark (?). They consist of a key and a value, separated by an equal sign (=). Multiple parameters are separated by an ampersand (&).
Implementation a request parser prototype. Given an array of strings, valid_auth_tokens, representing the valid authentication tokens, and a 2D array of strings, requests, representing the request types and URLs, for each request, return the request status ("VALID" or "INVALID"). If VALID, include a comma-separated string of parameters, i.e. "VALID,<param1_key>, <param1_value>,<param2_key>,
<param2_value>".
Example
valid_auth_tokens = ["ah37j2ha483u", "safh34ywb0p5", "ba34wyi8t902"]
requests = [["GET", "https://example.com/? token=347sd6yk8iu2&name=alex"], ["GET",
"https://example.com/?
token=safh34ywb0p5&name=sam"], ["POST",
"https://example.com/?
token=safh34ywb0p5&name=alex"], ["POST",
"https://example.com/?
token=safh34ywb0p5&csrf=ak2sh32dy&name=
chris"]].
In the first request, the auth_token = 347sd6yk8iu2, which is not in the list of given tokens, so the request is INVALID. The string to be returned is "INVALID".
• In the fourth request, the auth_token =
safh34ywb0p5, which is in the list of valid tokens, but since the request is a POST request, it must have a valid CSRF token. CSRF_token = ak2sh32dy. It is an alphanumeric string with length 9 (>=8), so the given request is VALID. The request parameters are - name = chris. The string to be returned is "VALID,name,chris".
The responses returned are ["INVALID", "VALID,name,sam", "INVALID",
"VALID,name,chris"].
Function Description
Complete the function getResponses in the editor below.
getResponses has the following parameter(s): string valid_auth_tokens[m]: The list of valid authentication tokens the requests
string requests[n][2]: The list of requests made, their types and the associated URLs.
Returns
string[n]: the responses for each request
Constraints
• 1≤m≤2*103
• 1≤n≤5*103
size(valid_auth_token[i]) = 12
• size(requests[i][1]) < 200
/*
 * Complete the 'getResponses' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY valid_auth_tokens
 *  2. 2D_STRING_ARRAY requests
 */
function getResponses(valid_auth_tokens: string[], requests: string[][]): string[] {
    // Write your code here
}
function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);
    const valid_auth_tokensCount: number = parseInt(readLine().trim(), 10);
    let valid_auth_tokens: string[] = [];
    for (let i: number = 0; i < valid_auth_tokensCount; i++) {
        const valid_auth_tokensItem: string = readLine();
        valid_auth_tokens.push(valid_auth_tokensItem);
    }
    const requestsRows: number = parseInt(readLine().trim(), 10);
    const requestsColumns: number = parseInt(readLine().trim(), 10);
    let requests: string[][] = Array(requestsRows);
    for (let i: number = 0; i < requestsRows; i++) {
        requests[i] = readLine().replace(/\s+$/g, '').split(' ');
    }
    const result: string[] = getResponses(valid_auth_tokens, requests);
    ws.write(result.join('\n') + '\n');
    ws.end();
}

# Second

Given an integer, convert it to its Roman
numeral equivalent.
Given an integer, convert it to its Roman numeral equivalent.
Example
numbers = [1, 49, 23]
Looking at the conversions above, 1 is represented as /(capital i), 49 is 40 +9, so XLIX, and 23 is XXIII. The return array is ['I', 'XLIX', 'XXIII'].
Function Description
Complete the function romanizer in the editor below. The function must return an array of strings that represent the integers as their Roman numeral equivalents.
romanizer has the following parameter(s): int numbers[n]: an array of integers
Returns
string[n]: an array of strings that represent the integers as their Roman numeral equivalents.
Constraints
• 1 ≤ n ≤ 1000
• 1 ≤ numbers[i] < 1000
Explanation 0
We perform the following n = 5 conversions on the array [1, 2, 3, 4, 5]:
0. numbers[0] = 1 corresponds to Roman numeral /.
1. numbers[1] = 2 corresponds to Roman numeral //.
2. numbers[2]= 3 corresponds to Roman numeral ///.
3. numbers[3] = 4 corresponds to Roman numeral /V.
4. numbers[4] = 5 corresponds to Roman numeral V.
Return the array ["I", "II", "II", "IV", "V"] as the answer.

Please do this in typescript. 
Complete the following function.
function romanizer(numbers: number[]): string[] {

}

# Third

In react typescript. 1. FizzBuzz 
Given a number n, for each integer iin the range from / to n inclusive, print one value per line as follows: 
• If i is a multiple of both 3 and 5, print FizzBuzz. • If i is a multiple of 3(but not 5), print Fizz. • If i is a multiple of 5(but not 3), print Buzz. • If i is not a multiple of 3 or 5, print the value of I 
Function Description Complete the function fizzBuzz in the editor below. 
fizzBuzz has the following parameter(s): int n: upper limit of values to test (inclusive) Returns: NONE Prints: The function must print the appropriate response for each value i in the set {7, 2, ... n) in ascending order, each on a separate line. :

Complete the following code: 

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}


/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n: number): void {

}
function main() {



