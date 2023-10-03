let arr = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

const menu = document.getElementById("menu")
const form = document.getElementById("form")
const above4Radio = document.getElementById('above4Radio');
const below4Radio = document.getElementById('below4Radio');


function createCard(title, rating, timeToCook,src ,Foodtype) {
    // Create the main card div
    const card = document.createElement('div');
    card.classList.add('card');

    // Create the image element
    const img = document.createElement('img');
    img.src = `${src}`;
    
    //create the type (veg or nonveg)
    const type = document.createElement("p")
    type.textContent = `${Foodtype}`
    type.id = "type"

    // Create the card-info div
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    // Create the main-title div
    const mainTitle = document.createElement('div');
    mainTitle.classList.add('main-title');

    // Create the title paragraph
    const titlePara = document.createElement('p');
    titlePara.textContent = title;

    // Create the rating div
    const ratingDiv = document.createElement('div');

    // Create the star image
    const starImg = document.createElement('img');
    starImg.src = 'New folder/Star.svg';

    // Create the rating span
    const ratingSpan = document.createElement('span');
    ratingSpan.textContent = rating;

    // Append star image and rating span to rating div
    ratingDiv.appendChild(starImg);
    
    ratingDiv.appendChild(ratingSpan);

    // Append title paragraph and rating div to main-title div
    mainTitle.appendChild(titlePara);
    mainTitle.appendChild(ratingDiv);

    // Create the timeToCook div
    const timeToCookDiv = document.createElement('div');
    timeToCookDiv.classList.add('timeToCook');

    // Create the timeToCook paragraph
    const timeToCookPara = document.createElement('p');
    timeToCookPara.textContent = timeToCook;

    // Create the like and comments div
    const likeCommentsDiv = document.createElement('div');

    // Create the like image
    const likeImg = document.createElement('img');
    likeImg.src = 'New folder/like.svg';

    // Create the comments image
    const commentsImg = document.createElement('img');
    commentsImg.src = 'New folder/comments.svg';

    // Append like and comments images to likeCommentsDiv
    likeCommentsDiv.appendChild(likeImg);
    likeCommentsDiv.appendChild(commentsImg);

    // Append timeToCook paragraph and likeCommentsDiv to timeToCook div
    timeToCookDiv.appendChild(timeToCookPara);
    timeToCookDiv.appendChild(likeCommentsDiv);

    // Append main-title and timeToCook divs to card-info div
    cardInfo.appendChild(mainTitle);
    cardInfo.appendChild(timeToCookDiv);

    // Append image and card-info div to the main card div
    card.appendChild(img);
    card.appendChild(type);
    card.appendChild(cardInfo);

    return card;
}

/// this function displays only the veg menu when clicked on Veg button
function onlyVeg(){
    menu.innerHTML=""
    for(let i=0;i<arr.length;i++){
        if(arr[i].type==="veg"){
            
            const title = arr[i].name
            const ImgSrc = arr[i].imageSrc
            const rating = arr[i].rating
            const timeToCook = arr[i].time
            const type = arr[i].type
            // console.log(`${name} ${ImgSrc} ${rating} ${timeToCook}`);
        
            const card = createCard(title, rating, timeToCook,ImgSrc,type)
          menu.appendChild(card)
        }
       
    }

    

}

/// this function displays only the Nonveg menu when clicked on NonVeg button

function onlyNonVeg(){
    menu.innerHTML=""
    for(let i=0;i<arr.length;i++){
        if(arr[i].type==="non-veg"){
            
            const title = arr[i].name
            const ImgSrc = arr[i].imageSrc
            const rating = arr[i].rating
            const timeToCook = arr[i].time
            const type = arr[i].type
            // console.log(`${name} ${ImgSrc} ${rating} ${timeToCook}`);
        
            const card = createCard(title, rating, timeToCook,ImgSrc,type)
          menu.appendChild(card)
        }
       
    }

    

}
/// this function displays All menu when clicked on All button
function All(){
    
for(let i=0;i<arr.length;i++){
    const title = arr[i].name
    const ImgSrc = arr[i].imageSrc
    const rating = arr[i].rating
    const timeToCook = arr[i].time
    const type = arr[i].type
    // console.log(`${name} ${ImgSrc} ${rating} ${timeToCook}`);

    const card = createCard(title, rating, timeToCook,ImgSrc,type)
  menu.appendChild(card)
}
}




// filter by rating function

function filterResults() {


   

        if ((above4Radio.checked)) {
            menu.innerHTML=""
            for(let i=0;i<arr.length;i++){
                if(arr[i].rating>=4){
                    const title = arr[i].name
                    const ImgSrc = arr[i].imageSrc
                    const rating = arr[i].rating
                    const timeToCook = arr[i].time
                    const type = arr[i].type
                    // console.log(`${name} ${ImgSrc} ${rating} ${timeToCook}`);
                
                    const card = createCard(title, rating, timeToCook,ImgSrc,type)
                  menu.appendChild(card)
                }
               
            }
        } else {
            menu.innerHTML=""
            for(let i=0;i<arr.length;i++){
                if(arr[i].rating<4){
                    const title = arr[i].name
                    const ImgSrc = arr[i].imageSrc
                    const rating = arr[i].rating
                    const timeToCook = arr[i].time
                    const type = arr[i].type
                    // console.log(`${name} ${ImgSrc} ${rating} ${timeToCook}`);
                
                    const card = createCard(title, rating, timeToCook,ImgSrc,type)
                  menu.appendChild(card)
                }
               
            }
          
        }
    
}



above4Radio.addEventListener('change', filterResults);
below4Radio.addEventListener('change', filterResults);


for(let i=0;i<arr.length;i++){
    const title = arr[i].name
    const ImgSrc = arr[i].imageSrc
    const rating = arr[i].rating
    const timeToCook = arr[i].time
    const type = arr[i].type
    // console.log(`${name} ${ImgSrc} ${rating} ${timeToCook}`);

    const card = createCard(title, rating, timeToCook,ImgSrc,type)
  menu.appendChild(card)
}


