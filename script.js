const loadAllPost = async (data) => {
    // console.log(`https://openapi.programming-hero.com/api/retro-forum/posts${data?`?category=${data}`:""}`);


    // if(data){
    //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${data}`);
    // } else{
    //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    // }


    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${data?`?category=${data}`:""}`)
    const data = await response.json();
    console.log(data.posts);
}

loadAllPost();

const handeSearchByCategory = () => {
    const searchText = document.getElementById('search-text').value;
    loadAllPost(searchText)
}