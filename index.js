//1 Finding the last element of arrays
let arr1 = [3,7,34,90,12];
let arr2 = [true, "green", "where",12,56];
let lastItemArray1=arr1[arr1.length-1];
let lastItemArray2=arr2[arr2.length-1];
console.log({lastItemArray1});
console.log({lastItemArray2});

//2 Join array elements into a string
let myPets=["Cow","Bird","Snake","Dog"];
let myPetsString= myPets.join(" ");
console.log({myPetsString})

//3 Sorting array items
var arr3=[-5,9,5,3,2,-3,6,8,4,1];
let sortedArray=arr3.sort((k,l)=>k-l);
console.log({sortedArray});

//4 Removing duplicate from an array
let arr=["boy","man","girl","school","girl","woman"];
let noDuplicatedArray =arr.filter((item,index)=>arr.indexOf(item)===index);
console.log({noDuplicatedArray});
let duplicatedItem =arr.filter((item,index)=>arr.indexOf(item)!==index);
console.log({duplicatedItem});

//5 Searching one word from an array
let arr5=["the","way","x",4];
let myWord="food";
if(arr5.includes(myWord)){
    let myResult=myWord;
    console.log({myResult});
}
else{
    let myResult="the search word was not found";
    console.log({myResult});
}

//6 Sorting a string
let word="renniw";
let splittedWord=word.split("");
let sortedString=splittedWord.sort();
let result=sortedString.join("");
console.log({result});

// Inserting an element in the 5th index of an array
let favoriteFruits=["Banana","Orange","Mango","Strawberry","Avocado","Apple","Grape","Lemon","Papaya","Pinnapple"];
favoriteFruits.splice(4,0, "Tomato");
console.log({favoriteFruits});
