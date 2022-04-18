$(document).ready(function () {
  // $(".slider").slick({
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 2,
  // });
});

const btnp = document.querySelectorAll(".slick-prev");
for (let i = 0; i < btnp.length; i++) {
  console.log(btnp);
  btnp[i].style.background = "rgb(2, 197, 197)";
  btnp[i].innerHTML = '<i class="fa fa-arrow-left"></i>';
  // btnp[i].style.padding = `${5}px`;
  btnp[i].style.width = `${50}px`;
  btnp[i].style.position = "absolute";
  btnp[i].style.left = `${-20}px`;
  btnp[i].style.zIndex = `1`;
  btnp[i].style.height = `${50}px`;
  btnp[i].style.borderRadius = `${50}%`;
  btnp[i].style.border = "none";
}

const btnn = document.querySelectorAll(".slick-next");
for (let i = 0; i < btnn.length; i++) {
  btnn[i].style.background = "rgb(2, 197, 197)";
  btnn[i].innerHTML = '<i class="fa fa-arrow-right"></i>';
  btnn[i].style.width = `${50}px`;
  btnn[i].style.position = "absolute";
  btnn[i].style.right = `${-20}px`;
  btnn[i].style.zIndex = `1`;
  btnn[i].style.height = `${50}px`;
  btnn[i].style.borderRadius = `${50}%`;
  btnn[i].style.border = "none";
}

// const sldr = document.querySelector(".slider");
