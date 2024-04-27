import img from "@/img/WechatIMG1.jpg";

function show(content: string) {
  const root = document.getElementById("app");
  root!.innerText = "Hello," + content;
  const myImg = new Image();
  myImg.src = img;
  root!.appendChild(myImg);
}

export default show;
