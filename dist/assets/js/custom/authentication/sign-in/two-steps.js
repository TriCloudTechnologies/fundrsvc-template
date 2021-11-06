"use strict";

localStorage.setItem("verification_code", 531894)
setTimeout(() => {
  alert('Your verification code is: 531894')
}, 1500);

var KTSigninTwoSteps = (function () {
  var t, n;
  return {
    init: function () {
      (t = document.querySelector("#kt_sing_in_two_steps_form")),
        (n = document.querySelector(
          "#kt_sing_in_two_steps_submit"
        )).addEventListener("click", function (e) {
          e.preventDefault();
          var i = !0,
            o = [].slice.call(t.querySelectorAll('input[maxlength="1"]'));
          o.map(function (t) {
            ("" !== t.value && 0 !== t.value.length) || (i = !1);
          }),
            !0 === i
              ? (n.setAttribute("data-kt-indicator", "on"),
                (n.disabled = !0),
                setTimeout(function () {
                  n.removeAttribute("data-kt-indicator"),
                    (n.disabled = !1),
                    Swal.fire({
                      text: "You have been successfully verified!",
                      icon: "success",
                      buttonsStyling: !1,
                      confirmButtonText: "Ok, got it!",
                      customClass: { confirmButton: "btn btn-primary" },
                    }).then(function (t) {
                      t.isConfirmed &&
                        o.map(function (t) {
                          t.value = "";
                          window.location.href = "../dist/authentication/sign-up/multi-steps.html"
                        });
                    });
                }, 1e3))
              : swal
                  .fire({
                    text: "Please enter valid securtiy code and try again.",
                    icon: "error",
                    buttonsStyling: !1,
                    confirmButtonText: "Ok, got it!",
                    customClass: {
                      confirmButton: "btn fw-bold btn-light-primary",
                    },
                  })
                  .then(function () {
                    KTUtil.scrollTop();
                  });
        });
    },
  };
})();
KTUtil.onDOMContentLoaded(function () {
  KTSigninTwoSteps.init();
});
