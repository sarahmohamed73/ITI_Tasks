// let url = navigation.currentEntry.url.split("?");
let url = location.search.substring(1).split("&");
let queryString = [];
for(let index in url) {
  let key = url[index].split("=")[0];
  let value = url[index].split("=")[1];
  queryString[key] = value;
}
console.log(`Hello ${queryString['nameTxt']}, Your Age Is ${queryString['ageTxt']}`);