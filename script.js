const loadAllPost = async (category) => {
  // console.log(`https://openapi.programming-hero.com/api/retro-forum/posts${data?`?category=${data}`:""}`);


  // if(data){
  //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${data}`);
  // } else{
  //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts`)
  // }
  const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category ? `?category=${category}` : ""}`)
  const data = await response.json();
  displayAllPosts(data.posts);
  console.log(data.post);
}

const displayAllPosts = (posts) => {

  const postContainer = document.getElementById('post-container')

  posts.forEach(post => {
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="flex items-start gap-4">
        <img src=${post.image} alt="thumbnail" class="rounded-lg w-16 h-16" />
        <div class="flex-1">
          <p class="text-sm text-gray-500"> ${post.category} | &nbsp; Author: <span class="text-black">${post.author.name}</span>
          </p>
          <h3 class="text-xl font-semibold">Title: ${post.title}</h3>
          <p class="text-gray-600 text-sm mb-3">${post.description}</p>
          <div class="flex items-center text-sm text-gray-500 gap-4 mt-2 border-t pt-2">
            <span>💬 ${post.comment_count}</span>
            <span>👁️ ${post.view_count}</span>
            <span>🕒 ${post.posted_time} Min</span>
            <button onClick="markAsRead('${post.description}', ${post.view_count})" class="ml-auto text-green-500 hover:text-green-700">🗨️</button>
          </div>
        </div>
      </div>
        `
    postContainer.appendChild(div)
  });
}

loadAllPost();

const markAsRead = (description, view_count) => {
  console.log('hello');
  const markAsReadContainer = document.getElementById('mark-as-read-container');
  const div = document.createElement('div');
  div.innerHTML = `
      <div class="flex justify-between items-center mb-2">
      <p class="text-gray-600 mb-2">${description}</p>

      <div class="flex items-center gap-1 text-gray-500">
      <span>👁</span>
      <span>${view_count}</span>
      </div>

      </div> 
  `
  markAsReadContainer.appendChild(div);

  handleCount()

}


const handleCount = () => {
  const prevCount = document.getElementById('markAsReadCounter').innerText;
  const convertedCounter = parseInt(prevCount);
  const sum = convertedCounter + 1;
  document.getElementById('markAsReadCounter').innerText = sum;
}

const handleSearchByCategory = () => {
  const searchText = document.getElementById('search-text').value;
  loadAllPost(searchText)
}