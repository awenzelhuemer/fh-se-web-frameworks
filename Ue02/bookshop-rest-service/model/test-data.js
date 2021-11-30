const Book = require("./book");

const pictureUrl = 'images/';

const books = [];

let b = new Book();
b.id = "1";
b.author = "Musterman Max";
b.title = "Musterbuch";
b.price = "47.90";
b.publisher = "Muster";
b.year = "2000";
b.description = "...";
b.picture = pictureUrl + "Himmelhorn_Kluftingers_ neuer_Fall.jpg";
books.push(b);

b = new Book();
b.id = "2";
b.author = "Mann Thomas";
b.title = "Die Bekenntnisse des Hochstaplers Felix Krull";
b.price = "9.90";
b.publisher = "Fischer";
b.year = "2000";
b.description = "...";
b.picture = pictureUrl + "Die_Bekenntnisse_des_Hochstaplers_Felix_Krull.jpg";
books.push(b);

b = new Book();
b.id = "3";
b.author = "Buchberger Bruno";
b.title = "Mathematik, Management, Mediation";
b.price = "22.90";
b.publisher = "Molden";
b.year = "2016";
b.description = "Mathematik die Kunst des Denkens Management die Kunst des Handelns Meditation die " +
        "Kunst des Nicht-Denkens und Nicht-Handelns Der vielfach ausgezeichnete Mathematiker, " +
        "Computerwissenschafts-Pionier und Softwarepark-Gründer Bruno Buchberger kondensiert in " +
        "diesem Buch seine Gedanken zu diesen zentralen Aspekten seines Lebens. Dafür wühlt er " +
        "nicht die Form einer klassischen Autobiografie, sondern setzt sich mit Fragen auseinander, " +
        "die ihm in dieser oder ähnlicher Form im Lauf der Jahre in Interviews gestellt wurden. " +
        "Für Eilige formuliert er die Antworten als kurze, mitunter provokante Schlaglichter. " +
        "Für Leser, die in die Tiefe gehen wollen, erarbeitet der Autor die Zusammenhänge in " +
        "umfassenderen Diskursen und Anekdoten. Ein Buch für alle, die denken, handeln und sich " +
        "manchmal nach dem Nicht-Denken und Nicht-Handeln sehnen.";
b.picture = pictureUrl + "Mathematik-Management-Meditation.jpg";
books.push(b);

b = new Book();
b.id = "4";
b.author = "Erik Brynjolfsson";
b.title = "The Second Machine Age: Work, Progress, and Prosperity in a Time of Brilliant Technologies";
b.price = "99.90";
b.publisher = "Springer";
b.year = "2016";
b.description = "In The Second Machine Age MIT s Erik Brynjolfsson and Andrew McAfee two thinkers at" +
        " the forefront of their field reveal the forces driving the reinvention of our lives " +
        "and our economy. As the full impact of digital technologies is felt, we will realize " +
        "immense bounty in the form of dazzling personal technology, advanced infrastructure, " +
        "and near-boundless access to the cultural items that enrich our lives." +
        "Amid this bounty will also be wrenching change. Professions of all kinds from lawyers " +
        "to truck drivers will be forever upended. Companies will be forced to transform or die. " +
        "Recent economic indicators reflect this shift: fewer people are working, and wages are " +
        "falling even as productivity and profits soar.";
b.picture = pictureUrl + "The_Second_Machine_Age.jpg";
books.push(b);

b = new Book();
b.id = "5";
b.author = "Ford Martin";
b.title = "The Rise of the Robots";
b.price = "9.90";
b.publisher = "Oneworld Publications";
b.year = "2015";
b.description = "If a 'robot' could do your job quicker than you and better than you for no pay, would " +
        "you still be employed? Today it's travel agents, data-analyst and paralegals whose jobs " +
        "are under threat. Soon it will be doctors, taxi-drivers and, ironically, even computer " +
        "programmers. Without a radical reassessment of our economic and political structures, we " +
        "risk the implosion of the capitalist economy itself. In a frightening tour of artificial " +
        "intelligence's rapid advances, technology expert Martin Ford draws on a wealth of economic" +
        " data from both the US and the UK to outline the terrifying societal implications of the " +
        "robots' rise. From health and education to finance and technology, his warning is stark: " +
        "any job that is on some level routine is likely to be automated and if we are to see a " +
        "future of prosperity rather than catastrophe we must act now.";
b.picture = pictureUrl + "Rise_of_the_Robots.jpg";
books.push(b);

b = new Book();
b.id = "6";
b.author = "Klüpfel Volker und Kobr Michael";
b.title = "Milchgeld. Kommissar Kluftingers erster Fall";
b.price = "9.90";
b.publisher = "Droemer";
b.year = "2006";
b.description = "Ein Mord in Kommissar Kluftingers beschaulichem Allgäuer Heimatort Altusried - jäh " +
        "verdirbt diese Nachricht sein gemütliches Kässpatzenessen. Ein Lebensmittelchemiker des " +
        "örtlichen Milchwerks ist stranguliert worden. Mit eigenwilligen Ermittlungsmethoden " +
        "riskiert der liebenswert-kantige Kommissar einen Blick hinter die Fassade der Allgäuer " +
        "Postkartenidylle und entdeckt einen scheinbar vergessenen Verrat, dunkle Machenschaften " +
        "und einen handfesten Skandal.";
b.picture = pictureUrl + "Milchgeld_Kluftingers_erster_Fall.jpg";
books.push(b);

b = new Book();
b.id = "7";
b.author = "Klüpfel Volker und Kobr Michael";
b.title = "Erntedank. Kommissar Kluftingers zweiter Fall";
b.price = "9.90";
b.publisher = "Droemer";
b.year = "2007";
b.description = "...";
b.picture = pictureUrl + "Erntedank_Kluftingers_zweiter_Fall.jpg";
books.push(b);

b = new Book();
b.id = "8";
b.author = "Klüpfel Volker und Kobr Michael";
b.title = "Seegrund. Kommissar Kluftingers dritter Fall";
b.price = "9.90";
b.publisher = "Droemer";
b.year = "2008";
b.description = "...";
b.picture = pictureUrl + "Seegrund_Kluftingers_dritter_Fall.jpg";
books.push(b);

b = new Book();
b.id = "9";
b.author = "Klüpfel Volker und Kobr Michael";
b.title = "Laienspiel. Kommissar Kluftingers vierter Fall";
b.price = "9.90";
b.publisher = "Droemer";
b.year = "2009";
b.description = "...";
b.picture = pictureUrl + "Laienspiel_Kluftingers_vierter_Fall.jpg";
books.push(b);

b = new Book();
b.id = "10";
b.author = "Klüpfel Volker und Kobr Michael";
b.title = "Rauhnacht. Kommissar Kluftingers fuenfter Fall";
b.price = "9.90";
b.publisher = "Droemer";
b.year = "2010";
b.description = "...";
b.picture = pictureUrl + "Rauhnacht_Kluftingers_fuenfter_Fall.jpg";
books.push(b);

b = new Book();
b.id = "11";
b.author = "Klüpfel Volker und Kobr Michael";
b.title = "Schutzpatron. Kommissar Kluftingers sechster Fall";
b.price = "9.90";
b.publisher = "Droemer";
b.year = "2011";
b.description = "...";
b.picture = pictureUrl + "Schutzpatron_Kluftingers_sechster_Fall.jpg";
books.push(b);

b = new Book();
b.id = "12";
b.author = "Klüpfel Volker und Kobr Michael";
b.title = "Herzblut. Kommissar Kluftingers siebter Fall";
b.price = "9.90";
b.publisher = "Droemer";
b.year = "2011";
b.description = "...";
b.picture = pictureUrl + "Herzblut_Kluftingers_siebter_Fall.jpg";
books.push(b);

b = new Book();
b.id = "13";
b.author = "Klüpfel Volker und Kobr Michael";
b.title = "Grimbart. Kommissar Kluftingers achter Fall";
b.price = "9.90";
b.publisher = "Droemer";
b.year = "2014";
b.description = "...";
b.picture = pictureUrl + "Grimmbart_Kluftingers_achter_Fall.jpg";
books.push(b);

b = new Book();
b.id = "14";
b.author = "Klüpfel Volker und Kobr Michael";
b.title = "Himmelhorn: Kluftingers neuer Fall";
b.price = "9.90";
b.publisher = "Droemer";
b.year = "2016";
b.description = "Der neunte Fall der Bestseller-Autoren Volker Klüpfel und Michael Kobr führt den Kult-Kommissar Kluftinger " +
        "in die Allgäuer Alpen, genauer gesagt auf das Himmelhorn, einen der gefährlichsten Berge des Allgäus. " +
        "Natürlich liebt Klufti die Berge - wenn sie kässpatzenförmig auf seinem Teller aufragen. Doch der neueste " +
        "Streich von Gesundheitsfetischist Langhammer befördert den Kommissar samt E-Bike tief in die Allgäuer Alpen, " +
        "wo die beiden prompt auf drei Leichen stoßen: ein bekannter Dokumentarfilmer und zwei einheimische Bergführer, " +
        "die einen Film über die Erstbesteigung des Himmelhorns drehen wollten. Wie es scheint, waren sie dem als " +
        "äußerst gefährlich geltenden Gipfel nicht gewachsen. Die Ermittlungen im Umfeld der Toten führt Klufti in " +
        "sehr abgelegene Alpentäler und zu deren starrköpfigen Bewohnern, die noch wortkarger sind als er. ";
b.picture = pictureUrl + "Himmelhorn_Kluftingers_ neuer_Fall.jpg";
books.push(b);

module.exports = books;