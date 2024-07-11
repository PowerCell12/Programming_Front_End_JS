function attachEventsListeners() {

  let daysbut = document.getElementById("daysBtn")

  let hoursbut = document.getElementById("hoursBtn")

  let minutesbut = document.getElementById("minutesBtn")

  let secondsbut = document.getElementById("secondsBtn")

  
  daysbut.addEventListener("click", () => {

    let value = daysbut.parentElement.children[1].value;

    hoursbut.parentElement.children[1].value = value * 24

    minutesbut.parentElement.children[1].value = value * 24 * 60

    secondsbut.parentElement.children[1].value = value * 24 * 60 * 60
    
  })

  hoursbut.addEventListener("click", () => {

    let value = hoursbut.parentElement.children[1].value;

    daysbut.parentElement.children[1].value = value / 24

    minutesbut.parentElement.children[1].value = value *  60

    secondsbut.parentElement.children[1].value = value * 60 * 60

  })


  minutesbut.addEventListener("click", () => {

    let value = minutesbut.parentElement.children[1].value;

    daysbut.parentElement.children[1].value = value / 60 / 24

    hoursbut.parentElement.children[1].value = value / 60

    secondsbut.parentElement.children[1].value = value * 60
  })

  secondsbut.addEventListener("click", () => {

    let value = secondsbut.parentElement.children[1].value;

    daysbut.parentElement.children[1].value = value / 60 / 60 / 24

    hoursbut.parentElement.children[1].value = value / 60 / 60

    minutesbut.parentElement.children[1].value = value / 60

  })


}
