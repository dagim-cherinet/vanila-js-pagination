// document.addEventListener("DOMContentLoaded", async () => {
//     display_house();

// });
history.scrollRestoration = "manual";
const house_list = [
  {
    image_src: "../assets/house_place_holder.png",
    number_of_rooms: 3,
    rent_fee: 3500,
  },
  {
    image_src: "../assets/house_place_holder.png",
    number_of_rooms: 3,
    rent_fee: 3500,
  },
  {
    image_src: "../assets/house_place_holder.png",
    number_of_rooms: 3,
    rent_fee: 3500,
  },
  {
    image_src: "../assets/house_place_holder.png",
    number_of_rooms: 3,
    rent_fee: 3500,
  },
  {
    image_src: "../assets/house_place_holder.png",
    number_of_rooms: 3,
    rent_fee: 3500,
  },
  {
    image_src: "../assets/house_place_holder.png",
    number_of_rooms: 3,
    rent_fee: 3500,
  },
  {
    image_src: "../assets/house_place_holder.png",
    number_of_rooms: 3,
    rent_fee: 3500,
  },
  {
    image_src: "../assets/house_place_holder.png",
    number_of_rooms: 3,
    rent_fee: 3500,
  },
  {
    image_src: "../assets/house_place_holder.png",
    number_of_rooms: 3,
    rent_fee: 3500,
  },
  {
    image_src: "../assets/house_place_holder.png",
    number_of_rooms: 3,
    rent_fee: 3500,
  },
  {
    image_src: "../assets/house_place_holder.png",
    number_of_rooms: 3,
    rent_fee: 3500,
  },
];
const housesDOM = document.querySelector(".houses");
const search_formDOM = document.querySelector(".search-form");
const search_based_onDOM = document.querySelector(".search-based-on");
const serch_term_DOM = document.querySelector("#search-term");
const page_number_DOM = document.querySelector(".page_number");

//a function that display the search result
search_formDOM.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("searching..........");
  const search_based_on = search_based_onDOM.value;
  const search_term = serch_term_DOM.value;
  console.log(search_based_on, search_term);
  housesDOM.innerHTML = `<div class="house">
          <div class="house_image_container">
            <img src= '${house_list[0].image_src}' alt="" />
          </div>
          <div class="card_content">
            <p class="card_title text--medium">
              Here is the title of this awesome house
            </p>
            <div class="card_info">
              <p class="text--medium">${house_list[0].number_of_rooms} rooms</p>
              <p class="rent_fee text--medium">$${house_list[0].rent_fee}</p>
            </div>
          </div>
        </div>`;
});

const display_house = (house_array, houses_per_page, page) => {
  page--;
  let start = page * houses_per_page;

  let end = start + houses_per_page;
  let paginated_array = house_array.slice(start, end);

  const htmlString = paginated_array
    .map((item) => {
      return `<div class="house">
           <div class="house_image_container">
             <img src= '${item.image_src}' alt="" />
           </div>
           <div class="card_content">
             <p class="card_title text--medium">
               Here is the title of this awesome house
             </p>
             <div class="card_info">
               <p class="text--medium">${item.number_of_rooms} rooms</p>
               <p class="rent_fee text--medium">$${item.rent_fee}</p>
             </div>
           </div>
         </div>`;
    })
    .join("");

  housesDOM.innerHTML = htmlString;
};
//a function that manages the page number
const page_number_hadler = (house_array, houses_per_page) => {
  let page_count = Math.ceil(house_array.length / houses_per_page);
  for (let i = 1; i <= page_count; i++) {
    let button = create_button(i);
    page_number_DOM.appendChild(button);
  }
};
//-------a function that creates a button for the pages
const create_button = (page_num) => {
  let button = document.createElement("button");
  button.classList.add("btn", "btn-page");

  button.innerText = page_num;
  if (current_page == page_num) button.classList.add("active");
  button.addEventListener("click", () => {
    display_house(house_list, 3, page_num);
    document.querySelector(".active").classList.remove("active");
    button.classList.add("active");
  });
  return button;
};
//----------calling area of functions that display result and paginations
let current_page = 1;
display_house(house_list, 3, current_page);
page_number_hadler(house_list, 3);
// const residentialLink = document.getElementById("residential");
// const allHouseLink = document.getElementById("all-houses");
// const commercialLink = document.getElementById("commercial");
// //function that shows the result-------------//may be the search result
// const showResult = (result) => {
//   const htmlString = result
//     .map((item) => {
//       const { id, image, info, name, price } = item;
//       return `<img src=${image} name=${name} />
//                  <footer>
//         <div class="tour-info">
//           <h4>${name}</h4>
//           <h4 class="tour-price">${price}</h4>
//         </div>
//         <p id="p-${id}">

//            ${readMore ? info : info.substring(0, 200)}...
//           <button id=${id} data-id =${id} onClick="setReadMore(this)">
//            read more
//           </button>
//         </p>

//       </footer>`;
//     })
//     .join("");
//   document.querySelector(".single-tour").innerHTML = htmlString;
// };
// //global variable
// const readMore = false;
// const setReadMore = (btn) => {
//   // const id = btn.dataset.id;

//   if (!localStorage.getItem("token") == "" || !localStorage.getItem("token")) {
//     alert("you have to login first");
//     location.href = "./register/register.html";
//   }

//   if (btn.innerHTML == "read more") {
//     btn.innerHTML = "see less";
//   } else {
//     btn.innerHTML = "read more";
//   }
//   console.log("toggle");

//   // const pElement = document.getElementById(`p-${id}`);
// };
// document.addEventListener("DOMContentLoaded", async () => {
//   const response = await fetch("https://course-api.com/react-tours-project");
//   const result = await response.json();
//   console.log(result);
//   showResult(result);
// });
// //------------RESIDENTIAL LINK
// residentialLink.addEventListener("click", async () => {
//   if (localStorage.getItem("token") == "" || !localStorage.getItem("token")) {
//     alert("you have to login first");
//     // location.href = "./register_page/register_page.html";
//     document.querySelector(".underline").classList.toggle("underline");

//     document
//       .querySelector(".residential-not-active")
//       .classList.add("underline");
//     const response = await fetch("https://course-api.com/react-tours-project");
//     const result = await response.json();
//     console.log(result);

//     showResult(result);
//   }
// });

// //--------------ALL HOUSE LINK
// allHouseLink.addEventListener("click", async () => {
//   // location.href = "./register_page/register_page.html";
//   document.querySelector(".underline").classList.toggle("underline");
//   document.querySelector(".all-houses").classList.add("underline");

//   const response = await fetch("https://course-api.com/react-tours-project");
//   const result = await response.json();
//   console.log(result);

//   showResult(result);
// });

// //-------------commercial link
// commercialLink.addEventListener("click", async () => {
//   document.querySelector(".underline").classList.toggle("underline");
//   document.querySelector(".commercial-not-active").classList.add("underline");

//   const response = await fetch("https://course-api.com/react-tours-project");
//   const result = await response.json();
//   console.log(result);
//   showResult(result);
// });

// //------------------------LOGIN handler function
