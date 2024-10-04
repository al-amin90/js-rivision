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
    console.log(!str.trim());

      const withHash = "#" + str.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("")
      return withHash.length > 140 ? false : withHash

  }
  const output = generateHashtag("");

  const greet = "hello world";
  const phonecall = greet.substring(5, 2);
  // console.log(phonecall);
  const phonecall2 = greet.slice( 5, 2);
  // console.log(phonecall2);

  const id = 3;
  const fillId = id.toString().padStart(6, "0");
  // console.log(fillId);

  const orderNo = 1;
  const firstOrder = orderNo.toString().padStart(4, "0")

  const secondOrder = Number(firstOrder.substring(3)) +1;
  const secondOrderId = secondOrder.toString().padStart(4, "0")
  console.log(secondOrderId);