let tasks = [
  {
    taskName: "Clean my Home",
    description: "clean all the rooms",
    priority: 0,
    img: "https://plus.unsplash.com/premium_photo-1679501956116-97589191fafb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsZWFuJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D",
    deadline: "20/2/2024",
  },
  {
    taskName: "Go shopping",
    description: " buy new clothes",
    priority: 0,
    img: "https://images.unsplash.com/photo-1475998893297-4da48a6e037d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D",
    deadline: "20/2/2024",
  },
  {
    taskName: "Meet my friends",
    description: "meet my friends before they travel for vacation",
    priority: 0,
    img: "https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldCUyMGZyaWVuZHN8ZW58MHx8MHx8fDA%3D",
    deadline: "20/2/2024",
  },
  {
    taskName: "Go to Opera",
    description: " watch the new preformance",
    priority: 0,
    img: "https://images.unsplash.com/photo-1580809361436-42a7ec204889?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3BlcmF8ZW58MHx8MHx8fDA%3D",
    deadline: "20/2/2024",
  },
  {
    taskName: "end my membership in Gym",
    description: "since 6 months i payed without training",
    priority: 0,
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww",
    deadline: "20/2/2024",
  },
  {
    taskName: "pay my bills",
    description: "dont forget to pay klarna",
    priority: 0,
    img: "https://images.unsplash.com/photo-1593182440959-9d5165b29b59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGF5JTIwYmlsbHN8ZW58MHx8MHx8fDA%3D",
    deadline: "20/2/2024",
  },
  {
    taskName: "visit your neighbour",
    description: "she is old and sick ",
    priority: 0,
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpc2l0JTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D",
    deadline: "20/2/2024",
  },
  {
    taskName: "Attend the car event",
    description: "the winner will take milion dollar",
    priority: 0,
    img: "https://images.unsplash.com/photo-1686997878533-5ecfe00235c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
    deadline: "20/2/2024",
  },
  {
    taskName: "play Football",
    description: "prepare good to play Football ",
    priority: 0,
    img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D",
    deadline: "20/2/2024",
  },
];

function displayTasks(tasks) {
  document.getElementById("result").innerHTML = "";
  for (let val of tasks) {
    document.getElementById("result").innerHTML += `
  <div class= "my-2" style="box-shadow: 3px 3px grey; border:1px solid grey ">

  <button class="btn btn-primary p-1 m-2 bg-info "> Task </button>

<img src="${val.img}" width= "100%" height= "400px" >
<p class="d-flex justify-content-center font-weight-bold">${val.taskName}</p>
<p>${val.description}</p>
<button class="btn btn-light">&#9888; priority level </button>
<span><button class="btn mybtn priority "> ${val.priority}</button> </span>
<p> &#128198; Deadline : ${val.deadline}</p>

</div>`;
  }
}

displayTasks(tasks);

let mybtn = document.querySelectorAll(".mybtn");

mybtn.forEach((val, i) => {
  val.addEventListener("click", function () {
    if (tasks[i].priority < 5) {
      tasks[i].priority++;
      document.querySelectorAll(".priority")[i].innerHTML = tasks[i].priority;

      if (tasks[i].priority == 0) {
        document.querySelectorAll(".priority")[i].style.background = "green";
      } else if (tasks[i].priority == 1) {
        document.querySelectorAll(".priority")[i].style.background = "green";
      } else if (tasks[i].priority == 2) {
        document.querySelectorAll(".priority")[i].style.background = "yellow";
      } else if (tasks[i].priority == 3) {
        document.querySelectorAll(".priority")[i].style.background = "yellow";
      } else if (tasks[i].priority == 4) {
        document.querySelectorAll(".priority")[i].style.background = "red";
      } else if (tasks[i].priority == 5) {
        document.querySelectorAll(".priority")[i].style.background = "red";
      }
    } else {
      alert(" The priorities is at max level");
    }
  });
});

let mysortbtn = document.getElementById("mysortbtn");

mysortbtn.addEventListener("click", function () {
  sortedArray = tasks.sort((a, b) => b.priority - a.priority);
  displayTasks(sortedArray);

  mybtn.forEach((val, i) => {
    document.querySelectorAll(".priority")[i].innerHTML = tasks[i].priority;
    if (tasks[i].priority == 0) {
      document.querySelectorAll(".priority")[i].style.background = "green";
    } else if (tasks[i].priority == 1) {
      document.querySelectorAll(".priority")[i].style.background = "green";
    } else if (tasks[i].priority == 2) {
      document.querySelectorAll(".priority")[i].style.background = "yellow";
    } else if (tasks[i].priority == 3) {
      document.querySelectorAll(".priority")[i].style.background = "yellow";
    } else if (tasks[i].priority == 4) {
      document.querySelectorAll(".priority")[i].style.background = "red";
    } else if (tasks[i].priority == 5) {
      document.querySelectorAll(".priority")[i].style.background = "red";
    }
  });
});
