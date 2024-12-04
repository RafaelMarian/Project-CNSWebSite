<script>
export default {
  data() {
    return {
      showText1: false,
      showText2: false,
      showText3: false,
      showText4: false,
      showText5: false,
      showText6: false,
      showText7: false,
      showText8: false,
      showText9: false,
      showText10: false,
      showText11: false,
      showText12: false,
      showText13: false,
      showText14: false,

    }
  },
}
</script>

<template>
  <div class="container mx-auto my-4 px-0" style="font-family: 'Times New Roman', Times, serif; color: black;">
    <div class="flex justify-around items-center mb-8">
      <img src="/image1.png" alt="Image 1" class="w-40 h-40 border-4 border-white hover:shadow-lg transition duration-300 animate-fade-in">
      <img src="/image2.png" alt="Image 2" class="w-40 h-40 border-4 border-white hover:shadow-lg transition duration-300 animate-fade-in">
      <img src="/image3.png" alt="Image 3" class="w-40 h-40 border-4 border-white hover:shadow-lg transition duration-300 animate-fade-in">
    </div>
    <div class="container mx-auto my-4 px-0" style="font-family: 'Times New Roman', Times, serif; color: black;">
      <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText1 = true" @mouseleave="showText1 = false">
        Primăria Municipiului Zalău și Casa Municipală de Cultură Zalău
      </div>

      <div v-show="showText1" class="animated fadeInUp delay-1s">
        <p>
          Primăria Municipiului Zalău și Casa Municipală de Cultură Zalău  în parteneriat cu Colegiul Național "Silvania" Zalău și Liceul de Arta "Ioan Sima" Zalau, organizează un eveniment literar-muzical:🇷🇴 " Ziua Culturii Naționale sub semnul lui Mihai Eminescu"🇷🇴, susținut de elevi și profesori, în acompaniamentul Orchestrei Ansamblului Artistic Profesionist  "Porolissum" condusă de dirijor Ionuț Dârjan
          Elevii sunt coordonați de profesorii: Dan Clara, Dospinescu Liana, Pop Mariana, Ianchiș Alina, Chința Imelda, Tuduce Ioana, Rodica Pop Seling
          Coordonatorii evenimentului: Rodica Pop Seling,  Morar Florin, Câmpean Titus și Tuduce Ioana
          Spectacolul va fi prezentat de elevul Iustin Mitrașca
          Va așteptăm cu drag!
        </p>
      </div>

      <div class="container mx-auto my-4 px-0" style="font-family: 'Times New Roman', Times, serif; color: black;">
        <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText2 = true" @mouseleave="showText2 = false">
          Activități locale - Romania - Colegiul Național "Silvania" Zalău - 31 septembrie - 31 decembrie 2023
        </div>

        <div v-show="showText2" class="animated fadeInUp delay-1s">
          <p>
            Activități locale - Romania - Colegiul Național "Silvania" Zalău - 31 septembrie - 31 decembrie 2023
            Proiectul a început în școala noastră prin promovarea lui în cadrul primului Consiliu Profesoral al liceului nostru, la începutul lunii septembrie 2023. La sfârșitul lunii noiembrie, coordonatoarea proiectului a lansat apelul de selecție a elevilor și a cadrelor didactice din echipa de proiect, intrând în fiecare clasă. Ea a prezentat criteriile de selecție, obiectivele proiectului, partenerii, bugetul proiectului, etapele de selecție a membrilor din proiect și a prezentat procedura de selecție.
            La data începerii proiectului, 1 decembrie 2023, toți profesorii și elevii au fost informați despre existența proiectului în școală. Au depus cereri 67 de elevi și 6 profesori și toți elevii și toți profesorii au fost acceptați în echipă după analiza dosarelor de către comisia de selecție. Comisia de selecție a întocmit un proces-verbal cu lista elevilor echipei de proiect și a anunțat-o pe pagina de Facebook a liceului și către diriginții elevilor și direcțiunea a aprobat o decizie cu responsabilitățile fiecărui profesor din echipa de proiect.
            Am avut loc și lansarea proiectului în liceul nostru cu prezentarea celor mai importante informații ale proiectului la care au participat toți membrii proiectului și directorul liceului.
            https://app.genial.ly/editor/6564cb3f01cfe10015dc67eb
            Activitățile din școala noastră au loc după programul școlar de la 15:00 la 17:00, marțea și miercurea. Primele întâlniri de lucru au avut loc în luna  decembrie. În cadrul acestor întâlniri au fost stabilite responsabilitățile echipelor de elevi din cadrul proiectului și s-a făcut pregătirea activităților întâlnirii internaționale care a avut loc în luna decembrie. În această lună am început să lucrăm la logo-uri pentru competiția națională de logo-uri.
            prof. Turcu Anca, coordonator proiect Erasmus+ „Iot et IoRt dans l’éducation”
          </p>
        </div>

        <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
          <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText3 = true" @mouseleave="showText3 = false">
            Concert de colinde la CNS
          </div>

          <div v-show="showText3" class="animated fadeInUp delay-1s">
            <p>
              Concert de colinde la CNS
              În liniștea dată de atmosfera specifică de sărbători, profesorii de la CNS, plus o parte din foștii dascăli ai liceului, au fost colindați de elevi ai școlii coordonați de colegii Gârboan Mihaela și Fazakas Istvan. A fost minunat, vă mulțumim!
            </p>
          </div>
          <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
            <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText4 = true" @mouseleave="showText4 = false">
              Târg Petale-n Vânt
            </div>

            <div v-show="showText4" class="animated fadeInUp delay-1s">
              <p>
                Târg Petale-n Vânt
                Ieri, 21 decembrie 2023, a avut loc târgul de produse hand-made din cadrul proiectului caritabil ”Petale-n Vânt”. Produsele parcă au fost mai frumoase ca niciodată, elevii dovedind dăruire și minuțioziate în realizarea unor mici miracole. Banii adunați - 3553 de lei la acest târg doar - vor fi donați la finalul proiectului Asociaței ”Dăruiește Viață”. Felicitări tuturor!
              </p>
            </div>
            <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
              <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText5 = true" @mouseleave="showText5 = false">
                Activitatea de astăzi, din a treia zi a Săptămânii Altfel
              </div>

              <div v-show="showText5" class="animated fadeInUp delay-1s">
                <p>
                  Activitatea de astăzi, din a treia zi a Săptămânii Altfel, a fost desfășurată în colaborare cu Bratner Salaj. Au participat clasele de gimnaziu, însoțite de doamnele diriginte Ianchiș Alina, Isa Lavinia, Pop Mariana, Dospinescu Liana și doamna profesoară de biologie Pop Emilia. Elevii au aflat lucruri interesante despre colectarea selectiva și despre reciclare. Au înțeles că prin faptele lor responsabile, au posibilitatea să trăiască într-un mediu mai curat.
                </p>
              </div>
              <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText6 = true" @mouseleave="showText6 = false">
                  Abemiel
                </div>

                <div v-show="showText6" class="animated fadeInUp delay-1s">
                  <p>
                    E un prilej, poate unic, de a fi parte într-un dialog inedit cu o argentiniană și de a afla cât mai multe lucruri despre țara ei natală și despre pasiunile ei.
                    Carolina este din Argentina și le-a povestit elevilor, cu mari emoții, despre țara ei, despre Crăciunul petrecut la 20°C și obiceiurile specifice, dar și despre locuri dragi. În schimb, a primit multe informații despre cum petrecem noi Crăciunul.
                    Mulțumim, Carolina #Abemiel!
                  </p>
                </div>
                <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                  <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText7 = true" @mouseleave="showText7 = false">
                    EPAS!
                  </div>

                  <div v-show="showText7" class="animated fadeInUp delay-1s">
                    <p>
                      Am dat startul selecției pentru formarea unei noi echipe EPAS!
                      Suntem Școală-ambasador a Parlamentului European din anul 2019 și obiectivul principal din acest an școlar este să descoperim cât mai multe informații despre Parlamentul European și despre Alegerile Europarlamentare din 2024. În perioada 22-24 martie 2024 s-a desfășurat la Oradea a XXXVI-a ediție a Concursului Interjudețean de Matematică și Informatică "Grigore Moisil", cel mai important concurs de acest fel din nord-vestul României. La disciplina 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐂𝐀 s-au remarcat prin rezultate următorii elevi:
                      𝐂𝐈𝐔𝐑𝐁𝐄 𝐁𝐎𝐆𝐃𝐀𝐍 𝐑𝐀𝐃𝐔, clasa a VI-a – 𝐏𝐑𝐄𝐌𝐈𝐔𝐋 𝐈  (profesori îndrumători Vlaicu Cristina, Deac Paula Cristina)
                      𝐎𝐏𝐑𝐈𝐒 𝐂𝐀𝐋𝐄𝐁 𝐒𝐄𝐁𝐀𝐒𝐓𝐈𝐀𝐍, clasa a VIII-a – 𝐌𝐄𝐍𝐓𝐈𝐔𝐍𝐄 (profesor îndrumător Deac Paula-Cristina)
                      𝐏𝐄𝐓𝐑𝐄𝐀𝐍 𝐑𝐎𝐋𝐀𝐍𝐃, clasa a IX-a - 𝐏𝐑𝐄𝐌𝐈𝐔𝐋 𝐈 (profesor îndrumător Morar Florin)
                      𝐁𝐔𝐓 𝐀𝐍𝐃𝐑𝐄𝐈 𝐈𝐎𝐍𝐔𝐓, clasa  a X-a – 𝐌𝐄𝐍𝐓𝐈𝐔𝐍𝐄 (profesori îndrumători Morar Florin, Revnic Gheorghe)
                      𝐅𝐀𝐙𝐀𝐂𝐀𝐒 𝐌𝐈𝐇𝐀𝐈 𝐓𝐔𝐃𝐎𝐑, clasa a XII-a,  𝐏𝐑𝐄𝐌𝐈𝐔𝐋 𝐈𝐈𝐈 (profesori îndrumători Revnic Gheorghe, Morar Florin)
                      Felicitări, dragi elevi! Ne mândrim cu voi!
                      Felicitări, stimați colegi!
                    </p>
                  </div>
                  <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                    <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText8 = true" @mouseleave="showText8 = false">
                      Azi, a doua zi de activități desfășurate în cadrul programului "Școala Altfel"
                    </div>

                    <div v-show="showText8" class="animated fadeInUp delay-1s">
                      <p>
                        Azi, a doua zi de activități desfășurate în cadrul programului "Școala Altfel", voluntarii Crucii Roșii, eleve în clasa a X-a G la Colegiul Național " Silvania", Filip Serena, Pușcaș Jennifer și Chința Teodora, au ținut un curs de prim-ajutor elevilor din clasele a V-a, a VII-a, a IX-a E și a X-a D. Cursul a vizat atât noțiuni teoretice, dar și activități practice! Elevii au fost implicați activ în demonstrații, manifestând interes pe tot parcursul activității! Așadar, încă o zi interactivă și reușită! Mulțumiri sincere Crucii Roșii, filiala Sălaj, pentru implicare, conducerii Colegiului Național "Silvania" pentru susținere, voluntarilor, elevilor și profesorilor participanți!
                      </p>
                    </div>
                    <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                      <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText9 = true" @mouseleave="showText9 = false">
                        "Săptămâna altfel"
                      </div>

                      <div v-show="showText9" class="animated fadeInUp delay-1s">
                        <p>
                          "Săptămâna altfel" a început azi la Colegiul Național "Silvania" cu o serie de activități interesante și interactive. În sala festivă a avut loc o întâlnire cu jurnaliștii Daniel Săuca, Daniel Mureșan, Sebastian Olaru și elevii claselor a VII-a, a IX-a G, a X-a E, a X-a F și a XII-a F. S-au abordat diferite subiecte precum: rolul presei în viața adolescenților, cum distingem o știre falsă de una adevărată, din câte surse ar trebui să ne informăm sau câte surse consultă un jurnalist înainte de a difuza un material. Elevii și-au manifestat curiozitatea intrând în dialog cu invitații jurnaliști, întâlnirea fiind apreciată pozitiv. Mulțumim tuturor celor implicați și conducerii colegiului pentru găzduire!
                          Sărbători binecuvântate, cu lumină și speranță!
                        </p>
                      </div>
                      <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                        <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText10 = true" @mouseleave="showText10 = false">
                          Săptămâna Altfel (18 - 22.12.2023) la Colegiul Național
                        </div>

                        <div v-show="showText10" class="animated fadeInUp delay-1s">
                          <p>
                            Săptămâna Altfel (18 - 22.12.2023) la Colegiul Național ,,Silvania" dă startul bucuriei de a întâmpina voioși Sărbătorile de Iarnă.
                            Faptele bune se țin lanț și nu contenim cu pregătirile... campanii de voluntariat, ateliere handmade, excursii la târguri de profil din țară, Târg de Crăciun ,,Petale-n vânt", activități de recreere și descoperiri de noutăți. Partenerii noștri aduc spre noi nu numai activități ci și premii pregătite cu mult drag pentru elevii colegiului care vor participa la concursurile propuse pentru săptămâna aceasta. Vom fi Moș, vom fi spiriduși, vom fi gazde primitoare ce își gătesc casa pentru Crăciun.
                            Cu fiecare zi ce trece, vom reveni cu detalii, sa trăiți alături de noi bucuria Sărbătorilor de Iarnă!
                          </p>
                        </div>
                        <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                          <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText11 = true" @mouseleave="showText11 = false">
                            Activitate Internațională – Proiect Erasmus+ „Iot et IoRt dans l’éducation”
                          </div>

                          <div v-show="showText11" class="animated fadeInUp delay-1s">
                            <p>
                              Activitate Internațională – Proiect Erasmus+ „Iot et IoRt dans l’éducation”
                              Kick-off Meeting
                              Platforma: Google Meet
                              Toți cei 4 parteneri au participat la întâlnire cu echipa lor de elevi și de profesori. Partenerii s-au conectat dintr-o sală de clasă.
                              Întâlnirea a debutat cu prezentarea echipelor de profesori și de elevi din fiecare țară.
                              Am continuat cu prezentarea informațiilor importante despre proiect de către cei 4 parteneri. Turcu Mihaela Anca, coordonatoarea proiectului – România, a prezentat obiectivele, grupul țintă, partenerii, Duygu Tuna, partenera din Turcia a prezentat activitățile locale ale proiectului în școlile partenere, Anabela Amaral, partenera din Portugalia a prezentat activitățile internaționale și echipa din Macedonia a prezentat produsele finale. Profesorii au prezentat informațiile folosind prezentări PPT și Genially.
                              Următoarea activitate a implicat elevii prezenți la întâlnire care bazându-se pe informațiile prezentate de cei 4 parteneri, au răspuns la întrebările unui quiz pregătit în prealabil de o echipă mixtă de 8 elevi din școlile partenere pe platforma Quizziz.
                            </p>
                          </div>
                          <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                            <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText12 = true" @mouseleave="showText12 = false">
                              "𝐈𝐧 𝟐𝟎𝟐𝟑, 𝐄𝐔 𝐬𝐮𝐧𝐭 𝐌𝐨𝐬𝐮𝐥"
                            </div>

                            <div v-show="showText12" class="animated fadeInUp delay-1s">
                              <p>
                                În cadrul proiectului județean "𝐈𝐧 𝟐𝟎𝟐𝟑, 𝐄𝐔 𝐬𝐮𝐧𝐭 𝐌𝐨𝐬𝐮𝐥", în colaborare cu Asociatia Împreună-I vom face Fericiți și sub deviza "Încalță un copil, de iarnă"! ne-am propus să adunăm cât mai multe perechi de încălțăminte, pentru a ajuta copiii cu mai puține posibilități, din județul nostru.
                                Elevii noștri au spus 𝐩𝐫𝐞𝐳𝐞𝐧𝐭 și de data aceasta și s-au implicat într-un număr mare în această acțiune caritabilă! 🙏
                                Vă mulțumim tuturor celor implicați!
                                Faptele bune continuă și săptămâna viitoare la Colegiul Național "Silvania" Zalău.
                              </p>
                            </div>
                            <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                              <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText13 = true" @mouseleave="showText13 = false">
                                ,,Fii Moș Nicolae pentru o zi"
                              </div>

                              <div v-show="showText13" class="animated fadeInUp delay-1s">
                                <p>
                                  Voluntarii de la Colegiul Național "Silvania" Zalău, alături de  Crucea Roșie Sălaj, în cadrul  proiectului ,,Fii Moș Nicolae pentru o zi" au adunat produse neperisabile și produse de igienă personală, donate de elevii școlii noastre.
                                  Mulțumim elevilor și părinților pentru implicare!
                                  "𝐹𝑖𝑖 𝑏𝑢𝑛 𝑑𝑒 𝑐𝑎𝑡𝑒 𝑜𝑟𝑖 𝑠𝑒 𝑝𝑜𝑎𝑡𝑒! 𝑆𝑖 𝑖𝑛𝑡𝑜𝑡𝑑𝑒𝑎𝑢𝑛𝑎 𝑠𝑒 𝑝𝑜𝑎𝑡𝑒!" (𝐷𝑎𝑙𝑎𝑖 𝐿𝑎𝑚𝑎)
                                </p>
                              </div>
                              <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                                <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText14 = true" @mouseleave="showText14 = false">
                                  Ziua de 1 decembrie, sărbătorită la CNS
                                </div>

                                <div v-show="showText14" class="animated fadeInUp delay-1s">
                                  <p>
                                    Ziua de 1 decembrie, sărbătorită la CNS
                                    Într-o atmosferă caldă, încărcată de emoție, elevii colegiului nostru au sărbătorit Ziua Națională a României. Au fost poezii recitate cu patos și simțire, dar și melodii care au completat perfect momentele lirice, cântate de niște copii talentați de la CNS, acompaniați de Ionuț și Marian Albert. Copiii clasei a V-a au creat mesaje adresate României, iar citirea lor a fost un deliciu. Toți cei implicați au simțit românește și au fost pătrunși, măcar pentru moment, deși noi sperăm că pentru totdeauna, de acel patriotism pe care vrem să îl insuflăm, care ține de tradiții, istorie și oameni, iar nu ură împotriva altora. Chiar și momentele de nesiguranță, mici replici uitate, au sporit naturalețea evenimentului. Nimeni nu s-a agitat, ni se întâmplă tuturor, suntem oameni, nu roboți. Pentru roboți apelați cu încredere la clubul nostru, CNapSys. Doamnele profesoare Ioana Tuduce, Alina Ianchiș și Diana Vaida au coordonat elevii, care credem că merită menționați aici: Larisa Criste, David Crăciunaș, Cristian Lesuțan, Dragoș Știrb, Denisa Gudea, Crista Silvia Pop, Angelina Opriș, Daria Opriș, Antonia Remeș, Ariana Marian, Raluca Moisi, Evelin Roșan, Nicoleta Terheșiu. După atâția ani de colindat prin ploaie, în ultimii ani, un mic miracol s-a înfăptuit spre final, colindele care au răsunat în sala festivă au fost acompaniate afară de o ninsoare liniștită și liniștitoare. Domnul director Florin Morar a concluzionat, spunând că România are viitor, prin tinerii care ne-au făcut să simțim românește, și ”noi suntem România”. Iar felul în care a arătat reprezentarea României prin elevii de la CNS poate fi caracterizat printr-un cuvânt: ”frumos”. ”Fain”, în Ardeal.
                                    La mulți ani, România!
                                  </p>
                                </div>

                                <div class="text-lg">
                                  Link-uri utile
                                </div>
                                <ul>
                                  <li><a href="https://www.cnszalau.ro/.ro/">https://www.cnszalau.ro/</a> CNS Zalau</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

    <style scoped>
 img:hover {
    box-shadow: 10px 10px 10px rgb(50, 50, 50);
}
.animated {
      animation-duration: 1s;
      animation-fill-mode: both;
    }

    .fadeInUp {
      animation-name: fadeInUp;
    }

    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .delay-1s {
      animation-delay: 1s; /* 5 seconds delay */
    }
    </style>
