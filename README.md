# stringManipulation

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)]()

[![Releases](https://img.shields.io/github/v/release/sahilchandna60/StringManipulation)](https://github.com/sahilchandna60/StringManipulation/tree/main)
[![Build Status](https://badgen.net/badge/Build/V1.0/green?icon=github)](https://github.com/sahilchandna60/StringManipulation/releases/tag/V1.0)
[![MIT Licence](https://img.shields.io/github/license/sahilchandna60/stringmanipulation?style=plastic)](https://github.com/sahilchandna60/StringManipulation/blob/main/LICENSE)

A custom Lib. for JS String Methods
- Ready to use for performing Different String Functions in Js
## Functions Included
- length
- indexOf
- substr
- split
- replace
- replaceall
- concat
- match
- trim
- capitalize
- capitalizeall
- decapitalize
- decapitalizeall
## Installation
To integrate lib. in your project 
add script src 
```
https://cdn.jsdelivr.net/gh/sahilchandna60/StringManipulation@latest/scripts/StringManipulation.js
```
><script src="https://cdn.jsdelivr.net/gh/sahilchandna60/StringManipulation@latest/scripts/StringManipulation.js"></script>
## Implementation
To call class use
```
new StringManipulation("Your-string-or-variable-containing string")
```
>const str = new StringManipulation("Your-string-or-variable-containing string");
### length
To use Length Function 
```
str.length()
```
>console.log("Lemgth : ", str.length());
### indexOf
To use indexOf Function 
```
str.indexOf("index-to-be-found")
```
>console.log("IndexOf: ", str.indexOf("m"));
### substr
To use substr Function 
```
str.substr(inital,final)
```
>console.log("Substr: ", str.substr(5, 14));
### split
To use split Function 
```
str.split("separator")
```
>console.log("Split: ", str.split(" "));
### replace
To use replace Function 
```
str.replace("to-replace","new-word")
```
>console.log("Replace:", str.replace("Javascript", "VBscript"));
### replaceall
To use replaceall Function 
```
str.replaceall("to-replace","new-word")
```
>console.log("ReplaceAll:", str.replaceall("script", "new"));
### concat
To use concat Function 
```
str.concat("")
```
>console.log("Concat:", str.concat(""));
### match
To use match Function 
```
str.match("to be match","function to be performed")
```
>console.log("Match:", str.match(/as/, "gi"));
### trim
To use trim Function 
```
str.trim()
```
>console.log("Trim: ", str.trim());
### capitalize
To use capitalize Function 
```
str.capitalize()
```
>console.log("Capitalize: ", str.capitalize());
### capitalizeall
To use capitalizeall Function 
```
str.capitalizeall()
```
>console.log("CapitalizeAll  :", str.capitalizeall());
### decapitalize
To use decapitalize Function 
```
str.decapitalize()
```
>console.log("deCapitalize: ", str.decapitalize());
### decapitalizeall
To use decapitalizeall Function 
```
str.decapitalizeall()
```
>console.log("deCapitalizeAll: ", str.decapitalizeall());





## Contributions

This is an open-source project anyone can PR to add more functions





