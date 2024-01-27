const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");

function GetOtp() {
  let otpEl = "";
  let digits = "1234567890";
  let latters = "abcdcfghij";
  for (let i = 0; i < 2; i++) {
    otpEl += digits[Math.floor(Math.random() * 10)];
    otpEl += latters[Math.floor(Math.random() * 10)];
    console.log(Math.random());
  }
  return otpEl;
}

btnEl.addEventListener("click", () => {
  // document.getElementById("result").innerHTML = GetOtp();
  resultEl.innerHTML = GetOtp();
});
