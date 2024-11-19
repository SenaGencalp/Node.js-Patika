const fs = require("fs").promises;

// CREATE - employees.json dosyası oluşturma ve veri ekleme
const createFile = async () => {
  const data = JSON.stringify(
    { name: "Employee 1 Name", salary: 2000 },
    null,
    2
  );
  try {
    await fs.writeFile("employees.json", data);
    console.log("employees.json dosyası başarıyla oluşturuldu.");
  } catch (err) {
    console.error("Dosya oluşturulurken hata oluştu:", err);
  }
};

// READ - employees.json dosyasını okuma
const readFile = async () => {
  try {
    const data = await fs.readFile("employees.json", "utf8");
    console.log("Dosya içeriği:", data);
  } catch (err) {
    console.error("Dosya okunurken hata oluştu:", err);
  }
};

// UPDATE - employees.json dosyasını güncelleme
const updateFile = async () => {
  const updatedData = JSON.stringify(
    { name: "Employee 1 Updated", salary: 3000 },
    null,
    2
  );
  try {
    await fs.writeFile("employees.json", updatedData);
    console.log("employees.json dosyası başarıyla güncellendi.");
  } catch (err) {
    console.error("Dosya güncellenirken hata oluştu:", err);
  }
};

// DELETE - employees.json dosyasını silme
const deleteFile = async () => {
  try {
    await fs.unlink("employees.json");
    console.log("employees.json dosyası başarıyla silindi.");
  } catch (err) {
    console.error("Dosya silinirken hata oluştu:", err);
  }
};

// CRUD İşlemlerini Sırasıyla Çalıştırma
const runCRUDOperations = async () => {
  console.log("CRUD işlemleri başlatılıyor...");

  await createFile(); // CREATE
  await readFile(); // READ
  await updateFile(); // UPDATE
  await readFile(); // Güncellenmiş Veriyi Tekrar Oku
  await deleteFile(); // DELETE
};

runCRUDOperations();
