var arr = [
  {
    name: "Traveling",
    image:
      "https://images.unsplash.com/photo-1707595010951-5903d1a94d88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sunset Serenity",
    image:
      "https://images.unsplash.com/photo-1707850975372-f0e6c12274e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
  {
    name: "Patels of roses",
    image:
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvc2VzfGVufDB8fDB8fHww",
  },
  {
    name: "Crowed Cities",
    image:
      "https://images.unsplash.com/photo-1644128225540-3b0388c7e230?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3Jvd2VkJTIwY2l0aWVzfGVufDB8fDB8fHww",
  },
  {
    name: "Orange Mania",
    image:
      "https://images.unsplash.com/photo-1514936477380-5ea603b9a1ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3Jhbmdlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Winter Wonderland",
    image:
      "https://images.unsplash.com/photo-1610295434223-933f171af446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2ludGVyJTIwV29uZGVybGFuZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Tiger the Beauty",
    image:
      "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Web Design",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Robotics",
    image:
      "https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QUl8ZW58MHx8MHx8fDA%3D",
  },
];

function showTheCards() {
  var clutter = "";
  arr.forEach(function (obj) {
    clutter += `<div class="box">
        <img src="${obj.image}" alt="" class="cursor-pointer">
        <div class="caption">${obj.name}</div>
    </div>`;
  });
  document.querySelector(".container").innerHTML = clutter;
}
function handleSearchFunctionality() {
  var input = document.querySelector("#searchinput");
  input.addEventListener("focus", function () {
    document.querySelector(".overlay").style.display = "block";
  });
  input.addEventListener("blur", function () {
    document.querySelector(".overlay").style.display = "none";
  });
  input.addEventListener("input", function () {
    const filterArray = arr.filter((obj) =>
      obj.name.toLowerCase().startsWith(input.value)
    );
    var clutter = "";
    filterArray.forEach(function (obj) {
      clutter += `<div class="res flex px-8 py-3">
          <i class="ri-search-line font-semibold mr-5"></i>
          <h3 class="font-semibold">${obj.name}</h3>
      </div>`;
    });
    document.querySelector(".searchdata").style.display = "block";
    document.querySelector(".searchdata").innerHTML = clutter;
  });
}
handleSearchFunctionality();
showTheCards();
