function openStory(title, text, image){

  document.getElementById("reader").style.display = "block";

  document.getElementById("readerTitle").innerText = title;

  document.getElementById("readerText").innerHTML = `
    <p>${text}</p>

    <br><br>

    <p>
    Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Nisi dignissimos 
    veritatis beatae doloremque.
    </p>

    <br>

    <p>
    Đây là nơi bạn đăng nội dung truyện.
    Có thể viết rất dài.
    </p>
  `;

  document.getElementById("readerImage").src = image;
}

function closeReader(){
  document.getElementById("reader").style.display = "none";
}

/* Search */

document
.getElementById("search")
.addEventListener("keyup", function(){

  let value = this.value.toLowerCase();

  let cards = document.querySelectorAll(".story-card");

  cards.forEach(card => {

    let title = card
      .querySelector("h2")
      .innerText
      .toLowerCase();

    if(title.includes(value)){
      card.style.display = "block";
    }else{
      card.style.display = "none";
    }

  });

});
