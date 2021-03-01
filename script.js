const firstName = document.getElementById("firstname"); 
const startingBid = document.getElementById("startingbid"); 
const education = document.getElementById("education"); 
const networth = document.getElementById("networth"); 
const skills = document.getElementsByClassName("skills"); 
const age = document.getElementsByName("age");
const reputation = document.getElementsByClassName("reputation");
const button = document.getElementById("submit");
const love_letter = document.getElementById("love_letter");


const calculate = () => {
    let name = firstName.value; 
    let price = Number(startingBid.value); 
    let letter = love_letter.value;
    if (name != "") { 
        price = getNewPrice1(price, education);
        price = getNewPrice1(price, networth);
        price = getCheckboxValuesForLoop(skills, price);
        price = getRadioValue(age, price);
        price = getCheckboxValuesForLoop(reputation, price);
//        price = getNewPrice1(price, reputation);
        let person = {
            bride_name: name,
            bride_price: price,
            letter_to_bride: letter
        }
        document.getElementById("result").innerHTML = `Your price for ${person.bride_name} is ${person.bride_price}.<br> Your love letter is: ${person.letter_to_bride}`;
    }
    else {
        alert("Name and starting bid cannot be empty");
    }
}

const getNewPrice1 = (price, criteria) => {
    return price * Number(criteria.value);
}


const getCheckboxValuesForLoop = (html_collection, price) => { 
	for (let i=0; i < html_collection.length; i++) {  
		if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
			price = price + Number(html_collection[i].value)
		}
		else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
			price = price * Number(html_collection[i].value)
		}
	}
	return price;
}

const getCheckboxValuesFilterReduce = (html_collection, price) => { 
    let list = Array.from(html_collection).filter(filteration) 
    let result = list.reduce(reducer, price)
    return result;
}

const reducer = (accumulator, item) => {
    return accumulator + Number(item.value);
}
const filteration = (item) => {
    return item.checked;
}

const getRadioValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}

button.addEventListener("click", calculate)


