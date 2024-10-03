addToLocalStorage = () => {
    const idInput = document.getElementById("storage-id")
    const id = idInput.value;
    const idValue = document.getElementById("storage-value");
    const value = idValue.value

    sessionStorage.setItem(id, value);
    idInput = ''
    idValue = ''
}

function generateHashtag (str) {
    if(!str) return false;

      const withHash = str.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("")
      return withHash.length > 140 ? false : withHash

  }
  const output = generateHashtag("thsnk for thi s    s fs");
  console.log(output);