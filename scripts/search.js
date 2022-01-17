//search api
let search_term = JSON.parse(localStorage.getItem("search_term"));
let search_api = `https://gnews.io/api/v4/search?q=${search_term}&token=${api_token}`;


function storeSearchterm(term) {
    let search_term = document.querySelector("#search_box").value;
    localStorage.setItem("search_term", JSON.stringify(search_term));
  window.location.href = "TEMPLATE-U3C4/search.html";

}

export default storeSearchterm