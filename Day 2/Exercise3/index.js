import _ from "lodash";

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

//1.
_.forEach(companies, (value) => {
  console.log(`Company Name : ${value.name}`);
});

//2.
console.log('\nThe company Names that are started after "1987" ');
let arr = _.filter(companies, (company) => {
  return company.start > 1987;
});
_.forEach(arr, (value) => {
  console.log(`Company Name : ${value.name}`);
});

//3.
console.log("\nSorted ascending by end date");
console.log(_.orderBy(companies, ["end"], ["asc"]));

//4.

let Ages = [];
_.forEach(companies, (value) => {
  Ages.push(value.end - value.start);
});
console.log("\nSorted Ages array in descending");
console.log(_.orderBy(Ages, [], ["desc"]));

//5.
console.log("\nsum of Ages using Reduce");
console.log(
  _.reduce(
    Ages,
    function (age, n) {
      return age + n;
    },
    0
  )
);

//6.
let [firstCompany] = companies;
let { name, category } = firstCompany;
const company1 = {
  name1: name,
  category1: category,
};
console.log("\nFirst item of companies array");
console.log(`Name : ${company1.name1}, Category : ${company1.category1}`);

//7.
function sum(...numbers) {
  let total = _.sum(numbers);
  return total;
}

console.log("\nSUM:");
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 6));
console.log(sum(1, 2, 3, 4, 6, 9));
console.log(sum(6, 9));

//8.

var newarr = [];
function returnAnArray(...items) {
  items.forEach((element) => {
    newarr.push(element);
  });
  return newarr;
}

//9.
var count = 0;
function Increment() {
  return (count += 1);
}

console.log("\nIncrement function");
console.log(Increment());
console.log(Increment());
console.log(Increment());

console.log("\nreturn a single Array");
const testArr = [4, 5, "shardul"];
console.log(returnAnArray(1, 2, "kalkesh", 3, "vamshi", ...testArr));

//10.
const destructureQueryurl = (url) => {
  const newUrl = new URL(url);
  let newobj = {};
  newUrl.searchParams.forEach((value, key) => {
    newobj[key] = value;
  });
  return newobj;
};
console.log(destructureQueryurl("http://userlogin.com?id=1&username=Kalkesh"));
