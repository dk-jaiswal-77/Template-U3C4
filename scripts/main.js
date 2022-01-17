//  // news headline api
//  let api_token = "c3bc9da2755db159120ffdc58c71b956";
//  let headline_api = `https://gnews.io/api/v4/top-headlines?country=in&lang=en&max=20&token=${api_token}`;

//  //search api
//  let search_term = JSON.parse(localStorage.getItem("search_term"));
//  let search_api = `https://gnews.io/api/v4/search?q=${search_term}&token=${api_token}`;

 async function apiCall(url) {


    //add api call logic here
    try{
        let response = await fetch(url);
        let response_data = await response.json();
        // console.log(response_data.articles);
        // response_data.articles.forEach(appendArticles);
        let main = document.querySelector("#main");
        main.innerHTML = "";
        for(let i = 0; i < response_data.articles.length; i++)
        {
            appendArticles(response_data.articles[i], main);
        }
    }
    catch(error)
    {
        console.log(error);
    }


}


function appendArticles(articles, main) {

    //add append logic here
    console.log(articles);

    let div = document.createElement("div");
    // div.class = "parent";
    
    let div1 = document.createElement("div");
    div1.addEventListener("click", findArticle);

    let div2 = document.createElement("div");
    div2.addEventListener("click", findArticle);

    let image = document.createElement("img");
    image.addEventListener("click", findArticle);
    
    div1.textContent = articles.title;
    image.src = articles.image;
    div2.textContent = articles.content;

    div.append(div1, image, div2);
    main.append(div);

}

function findArticle (event_obj)
{
    let article = {
        title : event_obj.target.parentNode.firstElementChild.textContent,
        content : event_obj.target.parentNode.firstElementChild.nexElementSibling.textContent,
        image : event_obj.target.parentNode.lastElementChild.src,
    }
    localStorage.setItem("article", JSON.stringify(article));
    window.location.href = "./news.html";
}

export { apiCall, appendArticles , findArticle}