function makeFriendsList(friends) {
  let list = document.createElement("ul");

  for (let element of friends) {
    list.append(document.createElement("li"));
    list.lastElementChild.innerText = `${element.firstName + element.lastName}`;
  }

  return list;
}
