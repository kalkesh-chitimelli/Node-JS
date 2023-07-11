function checkProperty(object, value) {
  if (object === undefined && value === undefined) {
    console.log("Please enter the object and property name to check");
  } else {
    if (value === undefined) {
      console.log("Please enter the property name to check");
    } else {
      let arr = Object.keys(object);
      console.log(arr.includes(value) ? "yes" : "no");
    }
  }
}

checkProperty({ name: "kalkesh", gender: "male" }, "interest");
checkProperty({ name: "shardul", gender: "male" }, "name");
checkProperty({ name: "gaurav", gender: "male" }, "gender");
checkProperty({ name: "krant", gender: "male" }, "hobbies");
checkProperty({ name: "vamshi", gender: "male" });
checkProperty();
