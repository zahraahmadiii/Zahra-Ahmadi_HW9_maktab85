let john = { name: "john", surname: "Smith", id: 1 };
let pete = { name: "pete", surname: "Hunt", id: 2 };
let mary = { name: "mary", surname: "key", id: 3 };

let users = [john, pete, mary];

let usersInformations = (users) => {
  return users.map((item) => {
    return { fullName: `${item.name + item.surname}`, id: `${item.id}` };
  });
};
let usersMapped = usersInformations(users);
console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);