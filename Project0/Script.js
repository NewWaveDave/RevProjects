let btn =document.querySelector(`#btn`);
let btn2 =document.querySelector(`#btn2`);
let DIngred =document.querySelector('#Drinkingred')
let DName =document.querySelector('#drinkname')
const list = document.getElementById("myData");
const Recipe = document.getElementById("myRecipe");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '599f8d5232mshbfa4315f4bb754bp16cfd7jsnbd94dafcb1de',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

btn.addEventListener('click', myfunc)
btn2.addEventListener('click', myfunc2)

DIngred.addEventListener('change' , clearList)
DName.addEventListener('change' , clearRecipe)


function myfunc(){
    let Inputing = DIngred.value;
    console.log(Inputing)
    fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${Inputing}`, options)
	.then(response =>  response.json())
	.then(function (data) {
        var mainContainer = document.getElementById("myData");
        for (var i = 0; i < data.drinks.length; i++) {
            var div =document.createElement("li")
            div.innerHTML= data.drinks[i].strDrink;
            mainContainer.appendChild(div);
        }
    })
}

function clearList() {
    
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
  }

  function clearRecipe() {
    
    while (Recipe.hasChildNodes()) {
        Recipe.removeChild(Recipe.firstChild);
    }
  }

function myfunc2(){
    let Inputing2 = DName.value;
    console.log(Inputing2)
    fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${Inputing2}`, options)
	.then(response =>  response.json())
	.then(function (data2) {
        var mainContainer = document.getElementById("myRecipe");
        console.log(data2)
        for (var i = 0; i < data2.drinks.length; i++) {
            //Image
            var img= document.createElement("div");
            img.innerHTML =`<img src="${data2.drinks[i].strDrinkThumb}" alt="${data2.drinks[i].strDrink}"width="200">`;
            mainContainer.appendChild(img);
            
            //name
            var div1 = document.createElement("div");
            div1.innerHTML =`Name: ${data2.drinks[i].strDrink}`;
            mainContainer.appendChild(div1);
            //glass
            var div2 = document.createElement("div");
            div2.innerHTML =`Glass: ${data2.drinks[i].strGlass}`;
            mainContainer.appendChild(div2);
            //Ingredients and Measurements. 15 possable
            var div4 = document.createElement("div");
            div4.innerHTML =`<br>`;
            mainContainer.appendChild(div4);
            var div5 = document.createElement("div");
            div5.innerHTML =`Ingredients:`;
            mainContainer.appendChild(div5);
           // ingredient 1
            if(data2.drinks[i].strMeasure1 !==null){
                var div6 = document.createElement("div");
                div6.innerHTML =`${data2.drinks[i].strMeasure1} ${data2.drinks[i].strIngredient1}`;
                mainContainer.appendChild(div6);

            }else if(data2.drinks[i].strIngredient1 !==nul){
                var div6 = document.createElement("div");
                div6.innerHTML =`${data2.drinks[i].strIngredient1}`;
                mainContainer.appendChild(div6);
            }
            // ingredient 2
            if(data2.drinks[i].strMeasure1 !==null){
                var div7 = document.createElement("div");
                div7.innerHTML =`${data2.drinks[i].strMeasure2} ${data2.drinks[i].strIngredient2}`;
                mainContainer.appendChild(div7);

            }else if(data2.drinks[i].strIngredient2 !==nul){
                var div7 = document.createElement("div");
                div7.innerHTML =`${data2.drinks[i].strIngredient2}`;
                mainContainer.appendChild(div7);
            }
            // ingredient 3
            if(data2.drinks[i].strMeasure3 !==null){
                var div8 = document.createElement("div");
                div8.innerHTML =`${data2.drinks[i].strMeasure3} ${data2.drinks[i].strIngredient3}`;
                mainContainer.appendChild(div8);

            }else if(data2.drinks[i].strIngredient3 !==nul){
                var div8 = document.createElement("div");
                div8.innerHTML =`${data2.drinks[i].strIngredient3}`;
                mainContainer.appendChild(div8);
            }
            // ingredient 4
            if(data2.drinks[i].strMeasure4 !==null){
                var div9 = document.createElement("div");
                div9.innerHTML =`${data2.drinks[i].strMeasure4} ${data2.drinks[i].strIngredient4}`;
                mainContainer.appendChild(div9);

            }else if(data2.drinks[i].strIngredient4 !==null){
                var div9 = document.createElement("div");
                div9.innerHTML =`${data2.drinks[i].strIngredient4}`;
                mainContainer.appendChild(div9);
            }
            // ingredient 5
            if(data2.drinks[i].strMeasure5 !==null){
                var div10 = document.createElement("div");
                div10.innerHTML =`${data2.drinks[i].strMeasure5} ${data2.drinks[i].strIngredient5}`;
                mainContainer.appendChild(div10);

            }else if(data2.drinks[i].strIngredient5 !==null){
                var div10 = document.createElement("div");
                div10.innerHTML =`${data2.drinks[i].strIngredient5}`;
                mainContainer.appendChild(div10);
            }
            // ingredient 6
            if(data2.drinks[i].strMeasure6 !==null){
                var div11 = document.createElement("div");
                div11.innerHTML =`${data2.drinks[i].strMeasure6} ${data2.drinks[i].strIngredient6}`;
                mainContainer.appendChild(div11);

            }else if(data2.drinks[i].strIngredient6 !==null){
                var div11 = document.createElement("div");
                div11.innerHTML =`${data2.drinks[i].strIngredient6}`;
                mainContainer.appendChild(div11);
            }
            // ingredient 7
            if(data2.drinks[i].strMeasure7 !==null){
                var div12 = document.createElement("div");
                div12.innerHTML =`${data2.drinks[i].strMeasure7} ${data2.drinks[i].strIngredient7}`;
                mainContainer.appendChild(div12);

            }else if(data2.drinks[i].strIngredient7 !== null){
                var div12 = document.createElement("div");
                div12.innerHTML =`${data2.drinks[i].strIngredient7}`;
                mainContainer.appendChild(div12);
            }
            // ingredient 8
            if(data2.drinks[i].strMeasure8 !==null){
                var div13 = document.createElement("div");
                div13.innerHTML =`${data2.drinks[i].strMeasure8} ${data2.drinks[i].strIngredient8}`;
                mainContainer.appendChild(div13);

            }else if(data2.drinks[i].strIngredient8 !==null){
                var div13 = document.createElement("div");
                div13.innerHTML =`${data2.drinks[i].strIngredient8}`;
                mainContainer.appendChild(div13);
            }
            // ingredient 9
            if(data2.drinks[i].strMeasure9 !==null){
                var div14 = document.createElement("div");
                div14.innerHTML =`${data2.drinks[i].strMeasure9} ${data2.drinks[i].strIngredient9}`;
                mainContainer.appendChild(div14);

            }else if(data2.drinks[i].strIngredient9 !==null){
                var div14 = document.createElement("div");
                div14.innerHTML =`${data2.drinks[i].strIngredient9}`;
                mainContainer.appendChild(div14);
            }
            // ingredient 10
            if(data2.drinks[i].strMeasure10 !==null){
                var div15 = document.createElement("div");
                div15.innerHTML =`${data2.drinks[i].strMeasure10} ${data2.drinks[i].strIngredient10}`;
                mainContainer.appendChild(div15);

            }else if(data2.drinks[i].strIngredient10 !==null){
                var div15 = document.createElement("div");
                div15.innerHTML =`${data2.drinks[i].strIngredient10}`;
                mainContainer.appendChild(div15);
            }
        
            //Instructions
            var div97 = document.createElement("div");
            div97.innerHTML =`<br>`;
            mainContainer.appendChild(div97);
            var div98 = document.createElement("div");
            div98.innerHTML =`Instructions:`;
            mainContainer.appendChild(div98);
            var div99 = document.createElement("div");
            div99.innerHTML =`${data2.drinks[i].strInstructions}`;
            mainContainer.appendChild(div99);

            var div100 = document.createElement("div");
            div100.innerHTML =`<br>`;
            mainContainer.appendChild(div100);

        }
    })
}

