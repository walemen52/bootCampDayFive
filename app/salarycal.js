const salaryCalculator = ()=> {
	let solution = "";
	let name = document.getElementById("name").value;
	let type = document.getElementById("type").value;
	let experience = document.getElementById("years").value;
	let basic = 0;
	let salary = 0;
	if ((experience.length < 1) || (name.length < 1)){
		solution += "invalid Name or Year of experience";
	} else {
		if(type === "executive"){
			basic = 250000;
		}
		else if(type === "director"){
			basic = 300000;
		}
		else if (type === "intern"){
			basic = 100000;
		}
		else if(type === "manager"){
			basic = 200000;
		}
		else if(type === "associate"){
			basic = 150000;
		}
		salary = (basic + (experience/20) * basic);

		solution = "Name: " + name + "\nBasic Salary: " + basic + "\nYears of Experience: " + experience.toString() +' Years \n' +"Total Salary: " + salary;
			alert(solution);
		}
	}