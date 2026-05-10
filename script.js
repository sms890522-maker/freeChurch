document.querySelectorAll("[data-kakao-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.href.includes("REPLACE_ME")) {
      event.preventDefault();
      alert("카카오톡 1:1대화방 링크를 실제 주소로 교체해 주세요.");
    }
  });
});
