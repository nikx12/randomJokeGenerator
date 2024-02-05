
const jokeHolder = document.getElementById("joke");
const btn = document.getElementById("btn_joke");

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const handleClick = () => {
    jokeHolder.classList.remove('fade');
        fetch(url)
        .then(data => data.json())
        .then(dataItem => {
            jokeHolder.textContent = `${dataItem.joke}`;
            jokeHolder.classList.add('fade');
            console.log(dataItem)
        })
};

btn.addEventListener("click", handleClick);
handleClick();

// addEventListener("click",handleClick);
// handleClick();