async function apiCall(url) {
    
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }
    catch(e){
        console.log(e);
    }

}


function appendArticles(articles,main) {
    console.log("mai article appender hu", articles)
    main.innerHTML = null;
    articles.forEach((el) => {
        // let main = document.getElementById("main");
    
        let card = document.createElement("div")
        card.id = "blog";
        card.onclick = ()=>{
            let article = el;
            localStorage.setItem("article", JSON.stringify(article));
            window.location.href = "./blog.html"
        }

        let title = document.createElement("div");
        title.innerText = el.title;

        let des = document.createElement("div");
        des.innerText = el.description;
        
        let imgd = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.urlToImage;
        imgd.id = "imgd"
        imgd.append(img)

        card.append(title,des,imgd);
        main.append(card);
    });
    

    //add append logic here

}

export { apiCall, appendArticles }