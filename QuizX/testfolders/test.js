function Submitdata() {
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("lastname", document.getElementById("d").value);
        // Retrieve
        document.getElementById("result").innerHTML = localStorage.getItem("lastname");
      }
}
