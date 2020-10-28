document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // DOM ELEMENTS
  const movesContainer = document.querySelector("#moves-container")
  const moveButton = document.querySelector("#move-button")

  // EVENT LISTENERS
  document.addEventListener("keydown", logAcceptableKeyPresses)
  moveButton.addEventListener("click", moveRobot)

  // delegation version
  // movesContainer.addEventListener("click", function(event) {
  //   if (event.target.matches("li")) {
  //     event.target.remove()
  //   }
  //   //can remove the UL
  //   // event.target.remove()
  // })

  // EVENT HANDLERS
  function logAcceptableKeyPresses(event) {
    if (event.key.startsWith("Arrow")) {
      const direction = event.key.replace("Arrow", "")
      addMoves(direction)
    }
  }

  function addMoves(direction) {
    const listItem = document.createElement("li")
    listItem.textContent = direction
    movesContainer.append(listItem)
    //nested version
    listItem.addEventListener("click", function() {
      listItem.remove()
    })
  }

  function moveRobot() {
    const intervalID = setInterval(function() {
      const topLiInContainer = document.querySelector("#moves-container li")
      if (topLiInContainer) {
        const direction = topLiInContainer.textContent.toLowerCase()
        move(direction)
        topLiInContainer.remove()
      } else {
        clearInterval(intervalID)
        console.log("No Moves Scheduled")
      }
    }, 1000)
  }
});
