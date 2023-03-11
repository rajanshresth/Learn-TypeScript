// .length is the property which count the each letter and space...!
let language: string = "TypeScript Is Awesome";
let language_length: number = language.length;
console.log(language_length);

// .toUpperCase() & .toLowerCase() is method i.e it is a function...!
let language_uppercase = language.toLocaleUpperCase();
let language_lowercase = language.toLocaleLowerCase();
console.log(language_uppercase)
console.log(language_lowercase)

// .includes is a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate
let word_include = language.includes("Type")
console.log(word_include)

// The search() method executes a search for a match between a regular expression and this String object.
let word_search = language.search("Is")
console.log(word_search)

// .indexOf & .lastIndexOf
let index: string = "TypeScript Is Awesome & Is good language"
let index_f = index.indexOf("Is")
let index_l = index.lastIndexOf("Is")
console.log(index_f,index_l)

// .replace()
let index_replace = index.replace(/Is/g,"are")
console.log(index_replace);

// .slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
let index_slice = index.slice(5,10)
console.log(index_slice)

// .concat() method is used to join two or more strings.
let index_concat = index.concat(" & Is good language")
console.log(index_concat)