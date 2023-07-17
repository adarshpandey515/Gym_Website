let no_of_bookmarks=prompt('how many bookmars do you want to enter');
for(let i=0;i<no_of_bookmarks;i++){
    let name=prompt('Enter the name of bookmar  : ' +(i+1))
    let link=prompt('Enter the link of website : '+(i+1))
    first.insertAdjacentHTML('beforeend','    <a href="'+link+'"><button class="violet">'+name+'</button></a>')
    alert('Bookmark created');

}
