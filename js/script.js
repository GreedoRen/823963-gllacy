var link = document.querySelector(".feedback-enter");

var popup = document.querySelector(".feedback-popup");
var close = popup.querySelector(".feedback-btn-close");
var login = popup.querySelector("[name=popup-name]");
var email = popup.querySelector("[name=popup-email]");
var form = popup.querySelector("form");

var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("feedback-show");

    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-show");
    popup.classList.remove("feedback-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("feedback-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("feedback-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("feedback-show")) {
        popup.classList.remove("feedback-show");
        popup.classList.remove("feedback-error");
      }
    }
  });

