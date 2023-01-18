let masterName = document.getElementById("master-name");
let studentName = document.getElementById("student-name");
let mt_calucation = document.getElementById("calc")
let mt_result = document.getElementById("result")
let mt_input = document.getElementById("input")
let warning = document.querySelector(".message")
let activity_list = document.getElementById("activity_list")
let activity_log =[]
if(masterName)
{
    masterName.textContent = localStorage.getItem("Master_Username");
}
else
{
    studentName.textContent = localStorage.getItem("Student_Username");
}

if(mt_calucation)
{
    mt_result.textContent = 0;
    mt_calucation.onclick = (e) =>
    {
        warning.textContent = ""
        if(mt_input.value)
        {
            activityOnLocal = JSON.parse(localStorage.getItem("Activity_log"))
            if(activityOnLocal)
            {
                activity_log = activityOnLocal
            }
            try
            {
                mt_result.textContent = eval(mt_input.value);
                if(mt_result.textContent)
                {
                    activity_log.push(mt_input.value);
                    localStorage.setItem("Activity_log", JSON.stringify(activity_log));
                }
                
            }
            catch(err)
            {
                if(err)
                {warning.textContent = err.message}
                else
                {
                    warning.textContent = ""
                }
            }
            
            mt_input.value = ""
        }
        else
        {
            warning.textContent = "Input field should not be empty"
        }
    };
}
else if (activity_list)
{
    let list_item = ""
    activityOnLocal = JSON.parse(localStorage.getItem("Activity_log"))
    if(activityOnLocal)
        {
            for (i = 0; i < activityOnLocal.length; i++)
            {
                list_item += `<li>${activityOnLocal[i]}</li>`;
            }
        }
        activity_list.innerHTML = list_item

}


function calculation(num, activity)
{
    if (activity)
    {
        return activity(num);
    }
    else {
        return num;
    }
  }
  
  function zero(activity) {
      return calculation(0,activity);
  }
  function one(activity) {
      return calculation(1,activity);
  }
  function two(activity) {
      return calculation(2,activity);
  }
  function three(activity) {
      return calculation(3,activity);
  }
  function four(activity) {
      return calculation(4,activity);
  }
  function five(activity) {
      return calculation(5,activity);
  }
  function six(activity) {
      return calculation(6,activity);
  }
  function seven(activity) {
      return calculation(7,activity);
  }
  function eight(activity) {
      return calculation(8,activity);
  }
  function nine(activity) {
      return calculation(9,activity);
  }
  
  function plus(right_value) {
    return function(left_vale) { return left_value + right_value; };
  }
  function minus(right_value) {
    return function(left_value) {
          return left_value - right_value;
      };
  }
  function times(right_value) {
    return function(left_value) { return left_value * right_value; };
  }
  function dividedBy(right_value) {
    return function(left_value) { return Math.floor(left_value / right_value); };
  }
  console.log(eight(dividedBy(eight())))