function ado() {
  const input = document.querySelector(".search"),
    btn = document.querySelector(".searchbtn"),
    repos = document.querySelector(".repos"),
    followers = document.querySelector(".followers"),
    following = document.querySelector(".following"),
    online = document.querySelector(".online"),
    bio = document.querySelector(".bio"),
    username = document.querySelector(".username"),
    name = document.querySelector(".name"),
    acc_rasmcha = document.querySelector(".div1"),
    location = document.querySelector(".location"),
    twitter = document.querySelector(".twitter"),
    link = document.querySelector(".link"),
    home = document.querySelector(".home");



  btn.addEventListener("click", () => {
    RandomQuote();
  });

  const RandomQuote = () => {
    let input_v = input.value;
    let API = `https://api.github.com/users/${input_v}`;
    console.log(API);
    console.log(input_v);
    document.querySelector('.infopage').style.display='flex'
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        // let capital = data[0].capital[0];
        // let continent = data[0].continents;
        // let flags = data[0].flags.png;
        let avatar_url =data.avatar_url
        let followers_ = data.followers
        let following_ = data.following
        let public_repos = data.public_repos
        let bio_ = data.bio
        let blog = data.blog
        let location_ = data.location
        let twitter_username = data.twitter_username
        let created_at = data.created_at
        let login = data.login
        let company = data.company
        //Install html
        if(public_repos ===null){

            repos.innerHTML ="Bo'sh"

        }else{

            repos.innerHTML = public_repos
        }

        if(avatar_url ===null){
            acc_rasmcha.innerHTML =`Rasm joylamagan`

        }else{
            acc_rasmcha.innerHTML =`<img src="${avatar_url}" alt="" class="rasmcha">`
        }

        if(followers_ ===null){
            followers.innerHTML ="Bo'sh"

        }else{
            followers.innerHTML = followers_
        }

        if(following_ ===null){
            following.innerHTML = "Bo'sh"

        }else{
            following.innerHTML = following_
        }

        if(bio_ ===null){
            bio.innerHTML ="Bo'sh"

        }else{
            bio.innerHTML = bio_
        }

        if(name ===null){
            name.innerHTML="Bo'sh"

        }else{
            name.innerHTML=data.name
        }

        if(login ===null){
            username.innerHTML ="Bo'sh"

        }else{
            username.innerHTML = login
        }


        if(location_ ===null){
            location.innerHTML="Bo'sh"

        }else{
            location.innerHTML=location_
        }

        if(blog===null){
            link.innerHTML='Bo"sh'

        }else{
            link.innerHTML=blog
        }

        if(twitter_username ===null){
            twitter.innerHTML="Bo'sh"

        }else{
            twitter.innerHTML=twitter_username
        }
        if(company ===null){
            home.innerHTML="Bo'sh"

        }else{
            home.innerHTML=company
        }
        online.innerHTML =`Last online :${created_at}`


        console.log(data);
      })

      .catch((error) => {
        (name.innerHTML = `Xatolik yuz berdi`), error;
      });
  };
}
//Dark mode 
const modebtn = document.querySelector('.colorchange');


const gado = document.querySelector('body')

modebtn.addEventListener('click' , () =>{
    gado.classList.toggle('darkmode')
    document.querySelector('.y1').classList.toggle('darkmode')
    
    document.querySelector('.colorchange').classList.toggle('darkmode')
    document.querySelector('.container').classList.toggle('darkmode')
    document.querySelector('.search').classList.toggle('darkmode')
    document.querySelector('.searchpage').classList.toggle('darkmode')
    document.querySelector('.searchpage').style.border='2px solid white'
    document.querySelector('.qism1').classList.toggle('darkmode')
    document.querySelector('.name').classList.toggle('darkmode')
    document.querySelector('.obunachi').classList.toggle('darkmode')
    document.querySelector('.home').classList.toggle('darkmode')
    document.querySelector('.link').classList.toggle('darkmode')
    document.querySelector('.twitter').classList.toggle('darkmode')
    document.querySelector('.location').classList.toggle('darkmode')
    document.querySelector('.y5').classList.toggle('darkmode')
    document.querySelector('.y55').classList.toggle('darkmode')
    document.querySelector('.y56').classList.toggle('darkmode')
    document.querySelector('.repos').classList.toggle('darkmode')
    document.querySelector('.followers').classList.toggle('darkmode')  
    document.querySelector('.following').classList.toggle('darkmode')
    document.querySelector('.infopage').style.border='2px solid white'
    document.querySelector('.online').classList.toggle('darkmode')
    document.querySelector('.bio').classList.toggle('darkmode')    
    // if(10 != 'Dark'){
    //     document.querySelector('.yy').innerHTML='Day'
    //     document.querySelector('.gaday').src='./images/002-sun.svg'
    // }else{
    //     document.querySelector('.yy').innerHTML='Dark'
    //     document.querySelector('.gaday').src='./images/moon.svg' 
    // }
    //ss
    if(modebtn.className=="colorchange"){

        document.querySelector('.yy').innerHTML='Dark'
        document.querySelector('.gaday').src='./images/moon.svg' 
      }
    else {
        document.querySelector('.yy').innerHTML='Day'
        document.querySelector('.gaday').src='./images/002-sun.svg'
    }
})

