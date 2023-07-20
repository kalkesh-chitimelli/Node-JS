import { readFile } from "node:fs";
import _ from "lodash";

readFile("samples.json", function (err, data) {
  const samples = JSON.parse(data);
  let genderCount = _.countBy(samples, (sample) => {
    return sample.gender === "male";
  });
  console.log(`Male Count : ${genderCount.true}`);
  console.log(`Female Count : ${genderCount.false}`);
  let findUser = _.find(samples, function (sample) {
    return (
      sample.name.firstName === "Vinay" && sample.name.lastName === "Gajjar"
    );
  });
  console.log(findUser);

  let concatMale = [];
  let concatFemale = [];

  _.find(samples, (sample) => {
    if (sample.gender === "male") {
      concatMale.push(sample.id);
    } else {
      concatFemale.push(sample.id);
    }
  });

  console.log("Male Id's :");
  console.log(concatMale);
  console.log("Female Id's :");
  console.log(concatFemale);

  let concatMalename = [];
  let concatFemalename = [];

  _.find(samples, (sample) => {
    if (sample.gender === "male") {
      concatMalename.push(sample.name.firstName + sample.name.lastName);
    } else {
      concatFemalename.push(sample.name.firstName + sample.name.lastName);
    }
  });

  console.log("Male name Array :");
  console.log(concatMalename);
  console.log("Female name Array :");
  console.log(concatFemalename);

  let maleCcount = 0;
  let femaleCcount = 0;

  _.find(samples, (sample) => {
    _.find(sample.interests, (interest) => {
      if (interest === "c" && sample.gender === "male") {
        maleCcount += 1;
      }
      if (interest === "c" && sample.gender === "female") {
        femaleCcount += 1;
      }
    });
  });

  console.log(`No. of Male interest in C  ${maleCcount}`);
  console.log(`No. of Female interest in C  ${femaleCcount}`);

  let sortById = _.orderBy(
    samples,
    [
      function (sample) {
        return sample.id;
      },
    ],
    ["desc"]
  );
  console.log("sort By Id in descending : ");
  console.log(sortById);

  let sortByName = _.orderBy(
    samples,
    [
      function (sample) {
        return sample.name.firstName;
      },
    ],
    ["asc"]
  );
  console.log("sort By Firstname in ascending : ");
  console.log(sortByName);
});
