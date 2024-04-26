function Card() {
  // 使用js创建一个卡片
  const card = document.createElement("div");
  // 设置卡片内容
  card.innerText = "Hello World";
  document.getElementById("app")!.appendChild(card);
  return card;
}

export default Card;
