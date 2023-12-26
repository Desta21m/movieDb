const APIlink ='https://api.themoviedb.org/3/discover/movie? sort_by=popularity.desc&api_key=31b4a25736bcae5372e80bb0954e683e&page=1';
const IMGpath ='https://image.tmdb.org/t/p/w1280';
const SEARCHapi="https://api.themoviedb.org/3/search/movie?&api_key=31b4a25736bcae5372e80bb0954e683e&query=";

const place = document.getElementById("section");
const form = document.getElementById("form");
const quary = document.getElementById("qury");

returnMovie(APIlink)

function returnMovie(url) {
    fetch(url).then( res => res.json())
    .then(data => {
        console.log(data);
        showdata(data.results);
  });
}
  function showdata(data){
  data.forEach(element => {
        const div_row = document.createElement('div');
        div_row.setAttribute('class','row');
        const div_col = document.createElement('div');
        div_col.setAttribute('class','col');
        const div_card = document.createElement('div');
        div_card.setAttribute('class','card')
        const imag = document.createElement('img');
        imag.setAttribute('class','thumnal');
        imag.setAttribute('id','image');
        const title = document.createElement('h3');
        title.setAttribute('id','titile');
        const midler = document.createElement('center');

        title.innerHTML=`${element.title}`;
        imag.src=IMGpath+element.poster_path;

        midler.appendChild(imag);
        div_card.appendChild(midler);
        div_card.appendChild(title);
        div_col.appendChild(div_card);
        div_row.appendChild(div_col);

        place.appendChild(div_row);

    });
  }
  
















  form.addEventListener("submit", (e) => {
    e.preventDefault();
    place.innerHTML='';
    const serITEM= quary.value;

    if(serITEM){
        returnMovie(SEARCHapi+serITEM);
        quary.Value="";
    }

  });