//Typ liczbowy - number

const liczba = 24;
const liczba2 = 75.36;

console.log(liczba);
console.log(liczba2);
console.log(liczba - liczba2);

//Typ tekstowy - string

const pierwszeImie = "Duszan";
const zwierze = "Pies";
const drzewo = 'Sosna';

console.log(pierwszeImie);
console.log(zwierze);
console.log(drzewo);
console.log(pierwszeImie + " pracuje jako " + zwierze);

//Typ logiczny - boolean (przyjmuje wartości tylko 'true' albo 'false)

const kobieta = false;
const mezczyzna = true;

console.log(kobieta);
console.log(mezczyzna);

//Metoda'typeof' - czyli sprawdzenie jakim typem danych jest dana zmienna.

console.log(typeof(kobieta));
console.log(typeof(zwierze));
console.log(typeof(liczba));

//Typ null - brak określonej wartości, w przypadku kiedy np. dana zmienna nie ma jeszcze zdefiniowanej wartości. Nie mylić  z pustym stringiem bo to dwie różne rzeczy!

const kolor = null; //Zmienna typu null (console.log pokaże nam 'null' a typ 'object')
const barwa = ""; //Zmienna z pustym stringiem (console.log pokaże nam pustą przestrzeń)

console.log(kolor);
console.log(barwa);
console.log(typeof(kolor));


let imiePsa; //Zmienna bez określonej wartości - tutaj zobaczymy 'undefined'.

console.log(imiePsa);

//Następnie możemy już późniejszym etapie pisania kodu tą zmienną zdefiniować.

imiePsa = "Azor";

console.log(imiePsa);
console.log(typeof(imiePsa));

//Typ tablice - pojemniki przechowujące jeden lub wiele elementów o dowolnym typie danych. Tablice tworzymy za pomocą nawiasów kwadratowych "[]", jej typ to po prostu 'object' bo jako tako sama w sobie nie ma osobnego typu danych.

const przykladowaTablica = ["Zenon", "Domino", "Zygfryd", 45, true];

console.log(przykladowaTablica);
console.log(przykladowaTablica[2]); //w nawiasach kwadratowych deklarujemy który indeks z tablicy chcemy wyświetlić (w tym przypadku jest to 'Zygfryd' bo liczymy od 0)

console.log(typeof(przykladowaTablica));

//Typ 'obiekt' - obiekty stosuje się w celu modelowania większej ilości danych tj. określamy sobie jakieś wartości np. imię, nazwisko, wzrost itp.

const osoba = {
    imie: "Jonasz",
    wiek: 26,
    kolorOczu: "niebieski",
    plec: "mezczyzna"
}

console.log(osoba);
console.log(osoba.wiek); //Tak jak w przypadku tablic możemy sobie zadeklarować które dane chcemy wyświetlić, tutaj akurat je wypisujemy po kropce.

//Zabawa z typami danych

console.log(pierwszeImie.length) //Weryfikacja długości (liczy ile ma liter) wartości zmiennej 'pierwszeImie'
console.log(osoba.plec.length); //To samo dotyczy obiektów, możemy wybrać tam konkretną daną.
console.log(przykladowaTablica[1].toUpperCase()); //Metoda toUpperCase - przekształcanie wartości zmiennych typu string na duże litery.
console.log(przykladowaTablica[1].toLowerCase()); //Analogiczna metoda dla przekształcenia na małe litery.

//Dodawanie stringa do numbera - dodaje nam obie wartości i przekształca nam typ number na typ string, otrzymujemy '24Pies'.

const wynikDodawania = liczba + zwierze;
console.log(wynikDodawania);
console.log(typeof(wynikDodawania));

//Zaokrąglanie typów number

console.log(liczba2.toFixed(0)); //W nawiasach określamy do ilu liczb po przecinku chcemy zakrąglić - w tym przypadku 0 więc zwróci nam liczbę całkowitą.

console.log(liczba2.toFixed(5)); //Dla kontrastu, wyrównanie do 5 liczb po przecinku.

//Przekształcanie typów zmiennych

console.log(String(liczba)); //Zmiana typu number na string
console.log(typeof(String(liczba)));

const zmiennaLiczbowa = "2314"
console.log(Number(zmiennaLiczbowa));
console.log(typeof(Number(zmiennaLiczbowa)));
