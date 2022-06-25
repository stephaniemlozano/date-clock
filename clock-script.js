function currentTime() {
  let date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let seconds = date.getSeconds()
  let timeOfDay = 'AM'

  if (hour == 0) {
    hour = 12
  }

  if (hour > 12) {
    hour = hour - 12
    timeOfDay = 'PM'
  }

  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute
  seconds = seconds < 10 ? '0' + seconds : seconds

  let time = `Current time: ${hour} : ${minute} : ${seconds} ${timeOfDay}`

  document.getElementById('clock').innerText = time
  let t = setTimeout(function () {
    currentTime()}, 1000)
}

currentTime()


function currentDate() {
  let today = new Date()

  month = today.getMonth()
  day = today.getDate()
  year = today.getFullYear()

  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day

  let date = `Today's date is: ${month}/${day}/${year}`
  
  document.getElementById('date').innerText = date
  let d = setTimeout(function () {currentDate()}, 12)
}

currentDate()






// function displayTime () {
//     //Phase 1: get the current time
//     const currentDate = new Date()

//     // 1. retrieve the hour from current date
//     let hour = currentDate.getHours() //this will return military time

//     // 2. retrieve the minute from current date
//     let minute = currentDate.getMinutes()

//     // 3. retrieve the seconds from current date
//     let seconds = currentDate.getSeconds()

//     //Phase 2: convert military time to 12hr time
//     let timeOfDay = 'am'
//     if (hour === 0) {
//         hour == 12
//     } else if (hour > 11) {
//         timeOfDay = 'pm'
//         hour = hour === 12 ? 12 : hour - 12
//     }
//     // display it in 00:00:00

//     let hourString = hour < 10 ? `0${hour}` : `${hour}`
//     let minuteString = minute < 10 ? `0${minute}` : `${minute}`
//     let secondString = seconds < 10 ? `0${seconds}` : `${seconds}`

//     const timeString = `${hourString} : ${minuteString} : ${secondString} ${timeOfDay}`
//     console.log(timeString)

//     //Phase 3: use DOM to update the HTML element
//     const myClock = document.getElementById('digital-clock')
//     myClock.innerHTML = timeString
//     //Phase 4: reun the function every 1 second

//     //this is in milliseconds; 1 second = 1000 milliseconds
//     setTimeout(displayTime, 1000)
// }

// displayTime()
