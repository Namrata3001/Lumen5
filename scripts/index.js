for (let tupel of document.querySelectorAll(".video")) {
  tupel.addEventListener(
    "mouseover",
    (e) => {
      e.target.play();
    },
    false
  );

  tupel.addEventListener(
    "mouseout",
    (e) => {
      e.target.pause();
    },
    false
  );
}
let data = [
  {
    image:
      "https://lumen5.com/learn/wp-content/uploads/2019/05/Video-Marketing-How-to-Get-Started.jpg",
    title: "Video Marketing: How to Get Started [Step by Step]",
  },
  {
    image:
      "https://lumen5.com/learn/wp-content/uploads/2019/08/Host-an-Instagram-Takeover-in-7-Simple-Steps.jpg",
    title: "How to Increase Your Facebook Video Views [Complete Guide]",
  },
  {
    image:
      "https://lumen5.com/learn/wp-content/uploads/2018/10/photo-1518406432532-9cbef5697723.jpeg",
    title: "The Importance of Video in Your Content Strategy",
  },
];
let cont = document.querySelector(".container-3_blogs");
console.log("cont:", cont);

data.forEach((e) => {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = e.image;
  let div2 = document.createElement("div");

  let title = document.createElement("p");
  title.innerText = e.title;

  let blog = document.createElement("p");
  blog.innerText = "BLOG";
  let read = document.createElement("p");
  read.innerText = "Read story";
  div2.append(blog, title, read);
  div.append(image, div2);
  cont.append(div);
});

function myFunction() {
  let value = document.getElementById("myDropdown").style.display;
  console.log(value);
  if (!value  || value==="none") {
    document.getElementById("myDropdown").style.display = "block";
  } else  if(value==="block"){
    document.getElementById("myDropdown").style.display = "none";
  }
}

