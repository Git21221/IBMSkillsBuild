function openRocket() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/rocket.html", true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.documentElement.innerHTML = xhr.responseText;
      setTimeout(() => {
        window.location.href = "/sec-page/second.html";
      }, 25000);
    }
  };
  xhr.send();
}
