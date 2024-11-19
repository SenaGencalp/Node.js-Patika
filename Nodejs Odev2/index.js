let posts = [
  { title: "Mercedes", content: "Mercedes model araba." },
  { title: "Bugatti", content: "Bugatti model araba." },
  { title: "Volvo", content: "Volvo model araba." },
];

function listPosts() {
  console.log("\n--- Mevcut Postlar ---");
  posts.forEach((post, index) => {
    console.log(`${index + 1}. ${post.title}: ${post.content}`);
  });
  console.log("-----------------------");
}

function addPost(title, content) {
  posts.push({ title, content });
}

console.log("İlk başta postları sıralayalım:");
listPosts();

addPost("Audi", "Audi model araba.");

console.log("\nYeni post eklendikten sonra postları sıralayalım:");
listPosts();
