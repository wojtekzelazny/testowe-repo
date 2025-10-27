//Nauka instrukcji warunkowych


const plec = "robot"; //mezczyzna, albo kobieta
const wiek = 46;
const zwierze = "pies";

//Warunek if

if(plec == "kobieta") {
    console.log("Hej! Wiem, że jesteś kobietą!")
}

if(plec == "mezczyzna") { //jeśli ten warunek jest niespełniony (bo plec = kobieta a nie mezczyzna) to console log nic nie wyświetli.
    console.log("Hej! Wiem, że jesteś mężczyzną!")
}


//Warunek else (w przypadku dwóch wartości)

if(plec == "kobieta") {
    console.log("Hej! Wiem, że jesteś kobietą!")
} else {
    console.log("Hej! Wiem, że jesteś mężczyzną!")
}

//Warunek else if (w przypadku więcej niż dwóch wartości)

if(plec == "kobieta") {
    console.log("Hej! Kobieta!")
} else if(plec == "mezczyzna"){
    console.log("Hej! Mezczyzna!")
} else if(plec == "robot") {
    console.log("Hej! Robot!")
}

//Instrukcja warunkowa w której muszą być spełnione dwa warunki (użycie operatora &&)

if(wiek > 30 && zwierze == "pies"){ //tutaj użyty został operator && czyli po prostu 'i'.
    console.log("Jesteś seniorem!") // czyli aby wyświetlić ten console log muszą zostać spełniona oba warunki - tj. wiek musi być większy niż 30 a zwierzę musi być równe wartości 'pies'
} else {
    console.log("Warunek nie został spełniony!") // w przeciwnym razie jeżeli któreś lub oba warunki nie zostaną spełnione, wyświetlamy ten console log.
}


//Drugi przykład dla kontrastu wyświetlenia niespełnionego warunku

if (wiek < 41 && zwierze == "kot") {
    console.log("Jesteś boomerem!")
} else {
    console.log("Warunek nie został spełniony!")
}

//Instrukcja warunkowa w której musi być spełniony jeden z warunków (użycie operatora ||)

if (wiek > 33 || zwierze == "pies") {
    console.log("Jesteś koks!")
}  else {
    console.log("Warunek nie został spełniony!")
}

//Warunek niespełniony

if (wiek < 12 || zwierze == "papuga") {
    console.log("Jesteś dzieciaczkiem!")
} else {
    console.log("Warunek niespełniony!")
}