$(document).ready(function () {
  $("#email").click(function () {
    $("#emailfield").show();
    $("#telephonefield").hide();
    document
          .querySelector('input[type="text"]')
          .parentNode.classList.remove("error-n");
  });

  $("#telephone").click(function () {
    $("#telephonefield").show();
    $("#emailfield").hide();
    document
          .querySelector('input[type="text"]')
          .parentNode.classList.remove("error-m");
  });

  $("#btn-search").on("click", function (e) {
    e.preventDefault();
    localStorage.clear(); //Clears storage for next request

    if ($('input:radio')[0].checked) {
      const email = $('input[type="text"]').val().toLowerCase();
      console.log($('input[type="text"]'), "input");
      const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

      let x;

      if (email.match(regEx)) {
        x = true;
      } else {
        x = false;
      }

      if (x === true) {
        document
          .querySelector('input[type="text"]')
          .parentNode.classList.remove("error-m");
        const proxyurl = "";
        const url =
          "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=" +
          email;
        fetch(proxyurl + url)
          .then((response) => response.text())
          .then(function (contents) {
            localStorage.setItem("userObject", contents);
            window.location.href = "result.html";
          })
          .catch((error) => console.log(error));
      } else if (x !== true) {
        document
          .querySelector('input[type="text"]')
          .parentNode.classList.add("error-m");
      }
    }

    if ($('input:radio')[1].checked) {
      const number = $('input[name="number"]').val();
      const regEx = /^\d{10}$/;

      let x;

      if (number.match(regEx)) {
        x = true;
      } else {
        x = false;
      }
      if (x === true) {
        document
          .querySelector('input[type="text"]')
          .parentNode.classList.remove("error-n");
        const proxyurl = "";
        const url =
          "https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=" +
          number;
        fetch(proxyurl + url)
          .then((response) => response.text())
          .then(function (contents) {
            localStorage.setItem("userObject", contents);
            window.location.href = "result.html";
          })
          .catch((error) => console.log(error));
      } else if (x !== true) {
        document
          .querySelector('input[name="number"]')
          .parentNode.classList.add("error-n");
      }
    }
  });

  // $('input[type="text"]').keypress(function (event) {
  //   const email = $('input[type="text"]').val().toLowerCase();
  //   const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  //   if (email.match(regEx)) {
  //     x = true;
  //     document.querySelector('input[type="text"]').parentNode.classList.remove("error");
  //   } else {
  //     x = false;
  //   }
  //   let keycode = (event.keyCode ? event.keyCode : event.which);
  //   if (keycode === '13') {
  //     /**
  //      * Makes a request to ltv API to search an specific email address.
  //      * If there's a response, it gets stored in the local storage and redirects to results page
  //      */
  //     event.preventDefault();
  //     localStorage.clear(); //Clears storage for next request

  //     let x;

  //     if (x === true) {
  //       const proxyurl = "";
  //       const url =
  //         'https://ltv-data-api.herokuapp.com/api/v1/records.json?email=' + email;
  //       fetch(proxyurl + url)
  //         .then((response) => response.text())
  //         .then(function (contents) {
  //           localStorage.setItem("userObject", contents);
  //           window.location.href = "result.html";
  //         })
  //         .catch((e) => console.log(e));
  //     } else if (x !== true) {
  //       document.querySelector('input[type="text"]').parentNode.classList.add("error");
  //     }
  //   }
  // });
});
