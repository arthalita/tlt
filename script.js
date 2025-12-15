document.addEventListener("DOMContentLoaded", () => {

  const pages = document.querySelectorAll(".page");
  const showPage = id => pages.forEach(p => p.classList.toggle("hidden", p.id !== id));

  // LOGIN
  document.getElementById("loginBtn").onclick = () => {
    const u = document.getElementById("username").value.trim();
    const p = document.getElementById("password").value.trim();
    if(u === "admin" && p === "123") showPage("dashboard");
    else alert("Username atau password salah 😅");
  };

  // LOGOUT
  document.getElementById("logoutBtn").onclick = () => showPage("login");

  // NAVIGASI
  document.getElementById("toCampaign").onclick = () => showPage("campaign");
  document.getElementById("toEdukasi").onclick = () => showPage("edukasi");
  document.querySelectorAll(".backBtn").forEach(btn => btn.onclick = () => showPage("dashboard"));

  // TAMBAH CAMPAIGN
  document.getElementById("addCampaignBtn").onclick = () => {
    const name = document.getElementById("campaignName").value.trim();
    const type = document.getElementById("marketingType").value;
    const img = document.getElementById("imageInput").files[0];
    const list = document.getElementById("campaignList");
    if(!name || !type || !img){ alert("Lengkapi semua data 😊"); return; }

    const reader = new FileReader();
    reader.onload = () => {
      const div = document.createElement("div");
      div.className = "campaign";
      div.innerHTML = `<img src="${reader.result}"><h4>${name}</h4><p>${type}</p>`;
      list.appendChild(div);
    };
    reader.readAsDataURL(img);
  };

});
