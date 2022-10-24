window.addEventListener("load", function () {

let form = this.document.querySelector('form');
form.onsubmit = function(event) {
    event.preventDefault();

    const favFoodInput = document.getElementById("favoriteFood").value;
    const favHobbyInput = document.getElementById("favoriteHobby").value;
    const favColorInput = document.getElementById("favoriteColor").value;
    
    const favArray = [favFoodInput, favHobbyInput, favColorInput];
    

    console.log(favArray[0]);
    let moreFavs = ["vacation", "music","person"]
    moreFavs.push(favArray[1]);
    moreFavs.push(favArray[0]);
    moreFavs.push(favArray[2]);
    console.log(moreFavs);

    const ul = document.createElement("ul");
    ul.setAttribute("id", "myFavs");
    document.querySelector("body").append(ul);
    
    const liOne = document.createElement("li");
    const liTwo = document.createElement("li");
    const liThree = document.createElement("li");
    liOne.append(favArray[0]);
    liTwo.append(favArray[1]);
    liThree.append(favArray[2]);
    document.getElementById("myFavs").append(liOne, liTwo, liThree);



    result = favFoodInput + ", " + favHobbyInput + " and " + favColorInput;
    
  document.getElementById("output").innerText = result;

  };
});