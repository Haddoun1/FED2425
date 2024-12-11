# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur: 
  Naoufal Haddouzi
  #### Je startniveau: 
  Blauw

  #### Je focus: 
  Surface Plane
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht: 

  link naar de website die je gaat namaken óf de naam/omschrijving van je eigen ontwerp

  https://www.snickers.nl/


  #### Screenshot(s) van de eerste pagina (small screen): 
  Home Pagina

  <img src="readme-images/home.jpg" width="375px" alt="Screenshot van de home pagina op de snickers website">

  #### Screenshot(s) van de tweede pagina (small screen):
  Stukje Geschiedenis Pagina

  <img src="readme-images/geschiedenis.jpg" width="375px" alt="Screenshot van de geschiedenis pagina op de snickers website">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details open>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  - H2 element boven de H1 element
  - Website gebruikt geen complexe afbeeldingen
  - Videos kunnen gestopt worden in de website zelf
  - Geen darkmode support
  - Sommige afbeeldingen bewegen een kleinbeetje
  - Elke afbeelding heeft een ALT tekst
  - Perfecte kleuren contrast

</details>



## Breakdownschets (week 1)

<details open>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 

  Een logo rechts boven met een dropdown menu aan de zijkant, vervolgens een advertentie er onder, waar ook nog een button is om door te gaan naar een andere scherm. Ook nog alle verschillende Snickers die worden verkocht op dit moment.

  <img src="readme-images/volledigescreen.jpg" width="375px" alt="Een logo rechts boven met een dropdown menu aan de zijkant, vervolgens een advertentie er onder, waar ook nog een button is om door te gaan naar een andere scherm. Ook nog alle verschillende Snickers die worden verkocht op dit moment.">

  Meer advertenties en een footer met algemene informatie

  <img src="readme-images/volledigescreen2.jpg" width="375px" alt="Meer advertenties en een footer met algemene informatie">

  ### dynamisch deel: 

  Als het scherm een telefoon is, zal de navigatie bar een dropdown menu worden.

  <img src="readme-images/menu.jpg" width="375px" alt="Als het scherm een telefoon is, zal de navigatie bar een dropdown menu worden.">

  ### wellicht nog een dynamisch deel: 

  Afbeelding beweegt en de button highlight wanneer er op wordt gehoverd, met een kleine pauze. Ook zit er een video in.

  <img src="readme-images/button.jpg" width="375px" alt="Afbeelding beweegt en de button highlight wanneer er op wordt gehoverd, met een kleine pauze">

</details>





## Voortgang 1 (week 2)

<details open>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken

  Ik heb begonnen met alle content in mijn code te zetten. De tekst-inhoud was wel vanzelfsprekend. Wel waren sommmige headers niet logisch ingedeelt (dit staat ook in mijn bevindingen), dus ik heb besproken met de docent en gekeken wat nu het beste optie zou zijn qua headers.
  
Screenshots van nieuwe headers en tekst:

 <img src="readme-images/headers.png" width="375px" alt="Headers aangepast in code">


  Bij de afbeeldingen heb ik een nieuwe mapje gemaakt genaamd "images". Toch ging het mis met een paar afbeeldingen die ik direct uit de website heb gehaald. Soms waren ze niet compleet dus er misten een stukje of het moment dat het maar 1px was en helemaal niet kon gebruiken. Dit kwam blijkbaar door dat sommige afbeeldingen vast zaten in hun eigen database. Ik heb toen gezocht naar andere afbeeldingen die ik kon gebruiken.

Screenshots van afbeeldingen en foute pogingen:

<img src="readme-images/Images.png" width="375px" alt="Alle afbeeldingen in mijn mapje">
 <img src="readme-images/1pxfotogoede.png" width="375px" alt="De goede afbeelding die 1px is">
 <img src="readme-images/1pxfoto.png" width="375px" alt="foute poging 1px afbeelding">


  Er zat ook een video in mijn gekozen website. Dit viel wel mee op uiteindelijk in mijn code te zetten alleen moest ik gebruik maken van de "video" tag. 

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - In mijn website was de H1 niet helemaal logisch dus ik had nagevraagd wat ik de H1 zou maken. Ik kreeg te horen dat de logo het beste is om H1 te maken. Dus ik heb dat aangepast.
  - Bespreken of een hamburger menu handig is in mijn site. Uiteindelijk zijn we daar voor gegaan.
  - Ik had een section zonder header dus ik kreeg een "info" op mijn html van we w3school validation. Dit moet ik gaan aanpassen omdat de screenreader het ook niet lezen.
  - Taal van Engels naar Nederlands omdat alle content in het Nederlands is. Dit helpt ook met de screenreader.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken

  Ik ben begonnen met het maken van een header en footer en het alvast creeren van mijn tweede pagina. 

  Tijdens het creeren van mijn footer en header heb ik gemerkt dat ze allebij niet tegen de zijkanten kwamen. Douwe heeft me gelukkig daarbij geholpen en het lag aan dat de universal selector niet de padding en margin op "0" had. Sommige browsers zijn daar vervelend mij inclusief Firefox. 

  Ik ben begonnen met het opstellen van mijn css. Ik heb een Root gemaakt. Dit eigenlijk gewoon een stylesheet waar je verschillende kleuren, font-sizes etc al kan maken en dan gemakkelijk kan toevoegen op andere elementen. Ik had hier een beetje moeite mee omdat ik steeds in de war raakten met welke namen ik heb gebruikt. 

  Over namen gesproken, ik kreeg een goede tip van Anouk dat ik de namen van mijn images moest veranderen. Ik had overal een hoofdletter bij het begin en dit maakt niet perse uit maar het maakt het wel makkelijker als je die regel zelf voor je zet.
  
  Ik ben ook wat meer gaan focussen op flexbox en wat het allemaal inhoud. Ik heb Flexbox Froggy gespeeld en heb wat kennis opgedaan. Ik kon op 
  




  ### Agenda voor meeting
  

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>