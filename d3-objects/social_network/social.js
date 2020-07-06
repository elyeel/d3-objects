const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"],
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"],
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"],
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"],
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"],
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"],
  },
};

function convObj(data) {
  const result = Object.entries(data);
  return result;
}

const biggestFollower = (data) => {
  let follower = 0;
  let name = "";
  Object.entries(data).map((person, index) => {
    if (follower < person[1].follows.length) {
      follower = person[1].follows.length;
      name = person[1].name;
    }
  });
  return name;
};

const mostPopular = (data) => {
  const pop = {};
  let max = 0;
  const popular = Object.entries(data)
    .map((person, index) => {
      if (person[1].follows) {
        return person[1].follows;
      }
    })
    .flat()
    .sort()
    .map((person) => {
      if (pop[data[person].name]) {
        pop[data[person].name] += 1;
      } else {
        pop[data[person].name] = 1;
      }
    });

  const popularPeople = Object.entries(pop).map((name, index) => {
    if (name[1] > max) {
      max = name[1];
    }
  });
  const result = [];
  Object.entries(pop).map((name, index) => {
    if (name[1] === max) {
      result.push(name[0]);
    }
  });
  return result;
};

const printAll = (data) => {
  const result = {};
  const objData = Object.entries(data);
  for (person of objData) {
    result[person[1].name] = {};
    result[person[1].name].age = person[1].age;
    result[person[1].name].follows = person[1].follows.map((following) => {
      return data[following].name;
    });
    result[person[1].name].followers = [];
    objData.map((name) => {
      if (name[1].follows.indexOf(person[0]) >= 0) {
        result[person[1].name].followers.push(name[1].name);
      }
    });
  }
  return result;
};

const unrequitedFollowers = (data) => {
  const feed = Object.entries(printAll(data));
  const result = {};
  for (let person of feed) {
    result[person[0]] = [];
    person[1].follows.map((test) => {
      if (person[1].followers.indexOf(test) < 0) {
        //logic in finding unrequited
        result[person[0]].push(test);
      }
    });
  }
  return result;
};

const mostFollowersOver30 = (data) => {
  const mostPop = mostPopular(data);
  const feed = printAll(data);
  const result = { Category: "Most Followers over 30" };
  result.name = [];

  for (let person of mostPop) {
    if (feed[person].age > 30) {
      result.name.push(person);
    }
  }
  return result;
};

const mostFollowsOver30 = (data) => {
  // const mostPop = mostPopular(data);
  const feed = printAll(data);
  const result = { Category: "Follows Most People over 30" };

  for (let person of Object.entries(feed)) {
    result[person[0]] = [];
    person[1].follows.map((name) => {
      if (feed[name].age > 30) {
        result[person[0]].push(name);
      }
    })
  }
  return result;
};
// console.log(JSON.stringify(printAll(data), null, 2));

const followersReach = (dt) => {
  const feedData = printAll(dt);
  const fd = Object.entries(printAll(dt));
  const result = {"Category": "Reach of Followers"};
  for (let person of fd) {
    result[person[0]] = [];
    person[1].followers.map((name) => {
      result[person[0]].push(name);
      result[person[0]].push(feedData[name].followers);
    })
  }
  return result;
}