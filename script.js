//fucntion logic to pick random dish
let dishes = [];
function randomDishPicker(){
    const randomDish= Math.floor(Math.random() * dishes.length);
    return dishes[randomDish];
}
// function to display added dishes in a list
function displayDishes(){
    const dishItems = document.getElementById("dishItems");
    dishItems.innerHTML ="";

    //loop for displaying added dishes
    for(let i = 0; i<dishes.length ; i++){
        const li = document.createElement("li");//creates new line
        li.textContent = `${i + 1}. ${dishes[i]}`;
        dishItems.appendChild(li);//adds item to line created
    }
}

//even listener to add dish
document.getElementById("addDish").addEventListener("click",function(){
    const dishInput = document.getElementById("dishInput");
    const dish = dishInput.value.trim();
    if(dish){
        dishes.push(dish);
        alert(dish + " has been added");
        dishInput.value = "";
        displayDishes();
    }
    else{
        alert("please enter a dish first!")
    }
})


//event listener for pick random dish button
document.getElementById("pickButton").addEventListener("click",function(){

    if(dishes.length < 1){
        alert("please add some dishes first with the add dish button!")
    }else if(dishes.length < 2){
        alert("add atleast 2 or more dishes for a better randomised pick!")
    }else{
        alert("you should eat " +randomDishPicker());
    }
})