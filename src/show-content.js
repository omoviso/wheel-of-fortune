function showContent(index) {
  //Show contents of section pointed to on the wheel
  let contents = document.querySelector(".contents");
  let title = document.querySelector(".title");
  let images = document.querySelector(".images");
  let back = document.querySelector(".back");
  contents.classList.add("active");
  title.style.opacity = 1;
  title.style.background = `${wheelContents.color[index]}`;
  title.innerHTML = wheelContents.content[index];
  images.style.opacity = 1;
  images.style.backgroundImage = `url(${urls[index]})`;
  back.style.display = "inline-block";
  setTimeout(() => {
    back.style.opacity = 1;
  }, 1);
}
