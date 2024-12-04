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
        E𝐭𝐚𝐩𝐚 𝐧𝐚𝐭̦𝐢𝐨𝐧𝐚𝐥𝐚̆ 𝐚 𝐎𝐥𝐢𝐦𝐩𝐢𝐚𝐝𝐞𝐢 𝐝𝐞 𝐌𝐚𝐭𝐞𝐦𝐚𝐭𝐢𝐜𝐚̆
      </div>

      <div v-show="showText1" class="animated fadeInUp delay-1s ">
        <p>
          Succesul se construiește prin muncă asiduă, perseverență și încredere în propriile forțe, așa cum o demonstrație matematică are la bază rigurozitate și o serie de pași logici.
          Satisfacția de a depăși obstacole și de a face față provocărilor este neprețuită. Elevii Colegiului Național  „Silvania” Zalău au obținut rezultate deosebite la 𝐨𝐥𝐢𝐦𝐩𝐢𝐚𝐝𝐞𝐥𝐞 𝐬̦𝐢 𝐜𝐨𝐧𝐜𝐮𝐫𝐬𝐮𝐫𝐢𝐥𝐞 𝐝𝐞 𝐦𝐚𝐭𝐞𝐦𝐚𝐭𝐢𝐜𝐚̆.
          Ne mândrim cu elevii noștri 𝐩𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐧𝐭̦𝐢 𝐥𝐚 𝐞𝐭𝐚𝐩𝐚 𝐧𝐚𝐭̦𝐢𝐨𝐧𝐚𝐥𝐚̆ 𝐚 𝐎𝐥𝐢𝐦𝐩𝐢𝐚𝐝𝐞𝐢 𝐝𝐞 𝐌𝐚𝐭𝐞𝐦𝐚𝐭𝐢𝐜𝐚̆:
          𝑭𝒂̆𝒓𝒄𝒂𝒔̦ 𝑨𝒏𝒅𝒓𝒂 (𝑽), 𝑮𝒂̆𝒗𝒓𝒊𝒍𝒖𝒕̦ 𝑨𝒏𝒅𝒓𝒆𝒊 𝑷𝒆𝒕𝒓𝒆 (𝑽𝑰𝑰𝑰), 𝑹𝒂𝒅 𝑽𝒊𝒐𝒓𝒆𝒍𝒂 𝑽𝒂𝒍𝒆𝒏𝒕𝒊𝒏𝒂 (𝑰𝑿), 𝑩𝒂𝒓𝒏𝒂 𝑨𝒍𝒆𝒙𝒂𝒏𝒅𝒓𝒖-𝑴𝒊𝒉𝒂𝒊 (𝑿), 𝑳𝒐𝒈𝒂 𝑷𝒂𝒕𝒓𝒊𝒌 (𝑿𝑰), 𝑩𝒓𝒆𝒋𝒆 𝑵𝒐𝒓𝒂-𝑨𝒍𝒆𝒙𝒂𝒏𝒅𝒓𝒂 (𝑿𝑰), 𝑻𝒖𝒅𝒖𝒄𝒆 𝑺𝒆𝒓𝒈𝒊𝒖 𝑭𝒍𝒐𝒓𝒊𝒂𝒏 (𝑿𝑰𝑰) 𝑵𝒆́𝒎𝒆𝒕𝒉 𝑴𝒂́𝒕𝒚𝒂́𝒔 (𝑯𝒂𝒊𝒎𝒐𝒗𝒊𝒄𝒊 - 𝑰𝑿), 𝑩𝒖𝒃𝒐𝒊 𝑮𝒊𝒖𝒍𝒊𝒂-𝑴𝒂𝒓𝒊𝒂 (𝑯𝒂𝒊𝒎𝒐𝒗𝒊𝒄𝒊 – 𝑿𝑰𝑰),  𝑫𝒆𝒎𝒋𝒆́𝒏 𝑲𝒂𝒕𝒂  (𝑰𝑿)  𝑩𝒐𝒅𝒂 𝑩𝒍𝒂𝒏𝒌𝒂 𝒁𝒔𝒐́𝒇𝒊𝒂 (𝑿), 𝑳𝒐𝒈𝒂 𝑷𝒂𝒕𝒓𝒊𝒌 (𝑿𝑰)
          𝐅𝐞𝐥𝐢𝐜𝐢𝐭𝐚̆𝐫𝐢 𝐞𝐥𝐞𝐯𝐢𝐥𝐨𝐫 𝐬̦𝐢 𝐩𝐫𝐨𝐟𝐞𝐬𝐨𝐫𝐢𝐥𝐨𝐫 care i-au pregătit! Mult succes la competițiile viitoare!
        </p>
      </div>

      <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
        <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText2 = true" @mouseleave="showText2 = false">
          Rezultatele obținute de elevii Colegiului Național ,,Silvania” Zalău la 𝐎𝐥𝐢𝐦𝐩𝐢𝐚𝐝𝐚 𝐝𝐞 𝐋𝐢𝐦𝐛𝐚 𝐆𝐞𝐫𝐦𝐚𝐧𝐚̆ 𝐌𝐨𝐝𝐞𝐫𝐧𝐚̆
        </div>

        <div v-show="showText2" class="animated fadeInUp delay-1s ">
          <p>
            Rezultatele obținute de elevii Colegiului Național ,,Silvania” Zalău la 𝐎𝐥𝐢𝐦𝐩𝐢𝐚𝐝𝐚 𝐝𝐞 𝐋𝐢𝐦𝐛𝐚 𝐆𝐞𝐫𝐦𝐚𝐧𝐚̆ 𝐌𝐨𝐝𝐞𝐫𝐧𝐚̆, etapa județeană:
            𝐏𝐫𝐞𝐦𝐢𝐮𝐥 𝐈𝐈 - nivel C1 - Lehene Alina-Iustina, clasa a IX-a E, 𝐜𝐚𝐥𝐢𝐟𝐢𝐜𝐚𝐭𝐚̆ 𝐥𝐚 𝐞𝐭𝐚𝐩𝐚 𝐧𝐚𝐭̦𝐢𝐨𝐧𝐚𝐥𝐚̆, prof. Széles Beáta
            𝐏𝐫𝐞𝐦𝐢𝐮𝐥 𝐈 - nivel B1 - Horvath Diana Timea, clasa a X-a C, prof. Simon Amalia
            𝐏𝐫𝐞𝐦𝐢𝐮𝐥 𝐈 - nivel C1 - Mitrașca Dara-Ștefana, clasa a XII-a A, prof. Széles Beáta
            𝐏𝐫𝐞𝐦𝐢𝐮𝐥 𝐈𝐈 - nivel A2 - Milaș Patricia Iasmina, clasa a IX-a C, prof. Faragó Elisabeta
            𝐏𝐫𝐞𝐦𝐢𝐮𝐥 𝐈𝐈 - nivel C1 - Szabo Mihaela - Ioana, clasa a XI-a A, prof. Simon Amalia
            𝐏𝐫𝐞𝐦𝐢𝐮𝐥 𝐈𝐈𝐈 - nivel A2 - Coman Maria, clasa a IX-a C, prof. Faragó Elisabeta
            𝐏𝐫𝐞𝐦𝐢𝐮𝐥 𝐈𝐈𝐈 - nivel C1 - Romocean Radu Andrei, clasa a XI-a A, prof. Simon Amalia
            𝐅𝐞𝐥𝐢𝐜𝐢𝐭𝐚̆𝐫𝐢 𝐭𝐮𝐭𝐮𝐫𝐨𝐫 și mult succes la etapa națională! Succesul se construiește prin muncă asiduă, perseverență și încredere în propriile forțe, așa cum o demonstrație matematică are la bază rigurozitate și o serie de pași logici.
            Satisfacția de a depăși obstacole și de a face față provocărilor este neprețuită. Elevii Colegiului Național  „Silvania” Zalău au obținut rezultate deosebite la 𝐨𝐥𝐢𝐦𝐩𝐢𝐚𝐝𝐞𝐥𝐞 𝐬̦𝐢 𝐜𝐨𝐧𝐜𝐮𝐫𝐬𝐮𝐫𝐢𝐥𝐞 𝐝𝐞 𝐦𝐚𝐭𝐞𝐦𝐚𝐭𝐢𝐜𝐚̆.
            Ne mândrim cu elevii noștri 𝐩𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐧𝐭̦𝐢 𝐥𝐚 𝐞𝐭𝐚𝐩𝐚 𝐧𝐚𝐭̦𝐢𝐨𝐧𝐚𝐥𝐚̆ 𝐚 𝐎𝐥𝐢𝐦𝐩𝐢𝐚𝐝𝐞𝐢 𝐝𝐞 𝐌𝐚𝐭𝐞𝐦𝐚𝐭𝐢𝐜𝐚̆:
            𝑭𝒂̆𝒓𝒄𝒂𝒔̦ 𝑨𝒏𝒅𝒓𝒂 (𝑽), 𝑮𝒂̆𝒗𝒓𝒊𝒍𝒖𝒕̦ 𝑨𝒏𝒅𝒓𝒆𝒊 𝑷𝒆𝒕𝒓𝒆 (𝑽𝑰𝑰𝑰), 𝑹𝒂𝒅 𝑽𝒊𝒐𝒓𝒆𝒍𝒂 𝑽𝒂𝒍𝒆𝒏𝒕𝒊𝒏𝒂 (𝑰𝑿), 𝑩𝒂𝒓𝒏𝒂 𝑨𝒍𝒆𝒙𝒂𝒏𝒅𝒓𝒖-𝑴𝒊𝒉𝒂𝒊 (𝑿), 𝑳𝒐𝒈𝒂 𝑷𝒂𝒕𝒓𝒊𝒌 (𝑿𝑰), 𝑩𝒓𝒆𝒋𝒆 𝑵𝒐𝒓𝒂-𝑨𝒍𝒆𝒙𝒂𝒏𝒅𝒓𝒂 (𝑿𝑰), 𝑻𝒖𝒅𝒖𝒄𝒆 𝑺𝒆𝒓𝒈𝒊𝒖 𝑭𝒍𝒐𝒓𝒊𝒂𝒏 (𝑿𝑰𝑰) 𝑵𝒆́𝒎𝒆𝒕𝒉 𝑴𝒂́𝒕𝒚𝒂́𝒔 (𝑯𝒂𝒊𝒎𝒐𝒗𝒊𝒄𝒊 - 𝑰𝑿), 𝑩𝒖𝒃𝒐𝒊 𝑮𝒊𝒖𝒍𝒊𝒂-𝑴𝒂𝒓𝒊𝒂 (𝑯𝒂𝒊𝒎𝒐𝒗𝒊𝒄𝒊 – 𝑿𝑰𝑰),  𝑫𝒆𝒎𝒋𝒆́𝒏 𝑲𝒂𝒕𝒂  (𝑰𝑿)  𝑩𝒐𝒅𝒂 𝑩𝒍𝒂𝒏𝒌𝒂 𝒁𝒔𝒐́𝒇𝒊𝒂 (𝑿), 𝑳𝒐𝒈𝒂 𝑷𝒂𝒕𝒓𝒊𝒌 (𝑿𝑰)
            𝐅𝐞𝐥𝐢𝐜𝐢𝐭𝐚̆𝐫𝐢 𝐞𝐥𝐞𝐯𝐢𝐥𝐨𝐫 𝐬̦𝐢 𝐩𝐫𝐨𝐟𝐞𝐬𝐨𝐫𝐢𝐥𝐨𝐫 care i-au pregătit! Mult succes la competițiile viitoare!
          </p>
        </div>

        <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
          <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText3 = true" @mouseleave="showText3 = false">
            Catedra de 𝐒̦𝐓𝐈𝐈𝐍𝐓̦𝐄 𝐒𝐎𝐂𝐈𝐎-𝐔𝐌𝐀𝐍𝐄
          </div>

          <div v-show="showText3" class="animated fadeInUp delay-1s">
            <p>
              Catedra de 𝐒̦𝐓𝐈𝐈𝐍𝐓̦𝐄 𝐒𝐎𝐂𝐈𝐎-𝐔𝐌𝐀𝐍𝐄 își anunță elevii de pe podium, la etapa județeană, a olimpiadei de profil:
              𝐋𝐨𝐠𝐢𝐜𝐚̆, 𝐜𝐨𝐦𝐮𝐧𝐢𝐜𝐚𝐫𝐞 𝐬̦𝐢 𝐚𝐫𝐠𝐮𝐦𝐞𝐧𝐭𝐚𝐫𝐞:
              𝐏𝐫𝐞𝐦𝐢𝐮𝐥 𝐈PATRICHI IULIA MARIA, clasa a XII-a F, prof. Florian Iulia
              𝐏𝐫𝐞𝐦𝐢𝐮𝐥 𝐚𝐥 𝐈𝐈𝐈-𝐥𝐞𝐚DRĂJAN DIANA MARIA, clasa a X-a F, prof. Florian Iulia
              𝐄𝐜𝐨𝐧𝐨𝐦𝐢𝐞:
              𝐏𝐫𝐞𝐦𝐢𝐮𝐥 𝐈MORAR DORA ESTERA, clasa a XII-a C, prof. Florian Iulia
              𝐅𝐢𝐥𝐨𝐬𝐨𝐟𝐢𝐞:
              𝐏𝐫𝐞𝐦𝐢𝐮𝐥 𝐈BOHA DAMIAN, clasa a X-a F, prof. Chiș Mirela
              𝐏𝐫𝐞𝐦𝐢𝐮𝐥 𝐚𝐥 𝐈𝐈-𝐥𝐞𝐚NĂPRĂDEAN THEODORA, clasa a IX-a A, prof. Chiș Mirela
            </p>
          </div>
          <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
            <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText4 = true" @mouseleave="showText4 = false">
              Rezultatele Colegiului Național ,,Silvania” Zalău la 𝐎𝐥𝐢𝐦𝐩𝐢𝐚𝐝𝐚 𝐍𝐚𝐭𝐢𝐨𝐧𝐚𝐥𝐚 𝐚 𝐒𝐩𝐨𝐫𝐭𝐮𝐥𝐮𝐢 𝐒𝐜𝐨𝐥𝐚𝐫(𝐎𝐍𝐒𝐒)
            </div>

            <div v-show="showText4" class="animated fadeInUp delay-1s">
              <p>
                Rezultatele Colegiului Național ,,Silvania” Zalău la 𝐎𝐥𝐢𝐦𝐩𝐢𝐚𝐝𝐚 𝐍𝐚𝐭𝐢𝐨𝐧𝐚𝐥𝐚 𝐚 𝐒𝐩𝐨𝐫𝐭𝐮𝐥𝐮𝐢 𝐒𝐜𝐨𝐥𝐚𝐫(𝐎𝐍𝐒𝐒):
                𝐁𝐚𝐬𝐜𝐡𝐞𝐭 𝐛𝐚̆𝐢𝐞𝐭̦𝐢
                Locul I , faza județeană, prof.Țârle Monica
                Locul IV, faza zonală, prof.Țârle Monica
                𝐁𝐚𝐬𝐜𝐡𝐞𝐭 𝐟𝐞𝐭𝐞
                Locul II , faza județeană, prof.Țârle Monica
                𝐕𝐨𝐥𝐞𝐢 𝐛𝐚̆𝐢𝐞𝐭̦𝐢
                Locul II, faza județeană, prof.Ciocan Dana
                𝐕𝐨𝐥𝐞𝐢 𝐟𝐞𝐭𝐞
                Locul III, faza județeană, prof.Ciocan Dana
                𝐓𝐞𝐧𝐢𝐬 𝐝𝐞 𝐦𝐚𝐬𝐚̆ 𝐟𝐞𝐭𝐞
                Locul I, faza județeană,  eleva Demjen Eszter - calificată la Faza Națională, prof.Ciocan Dana
                𝐓𝐞𝐧𝐢𝐬 𝐝𝐞 𝐦𝐚𝐬𝐚̆ 𝐛𝐚̆𝐢𝐞𝐭̦𝐢
                Locul II, faza județeană, elevul Bălănean David, prof.Ciocan Dana.
                𝐅𝐨𝐭𝐛𝐚𝐥 𝐛𝐚̆𝐢𝐞𝐭̦𝐢 𝐔𝟏𝟔
                Locul III, faza județeană, prof.Tarr Adorjan
                𝐒̦𝐚𝐡 𝐛𝐚̆𝐢𝐞𝐭̦𝐢
                Locul I, faza județeană, elevul Vegh Bence, prof.Tarr Adorjan, calificat la Faza Națională.
                𝐅𝐞𝐥𝐢𝐜𝐢𝐭𝐚̆𝐫𝐢 𝐭𝐮𝐭𝐮𝐫𝐨𝐫!
              </p>
            </div>
            <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
              <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText5 = true" @mouseleave="showText5 = false">
                𝐎𝐥𝐢𝐦𝐩𝐢𝐚𝐝𝐚 𝐝𝐞 𝐏𝐬𝐢𝐡𝐨𝐥𝐨𝐠𝐢𝐞 - 𝐞𝐭𝐚𝐩𝐚 𝐉𝐮𝐝𝐞𝐭̦𝐞𝐚𝐧𝐚̆
              </div>

              <div v-show="showText5" class="animated fadeInUp delay-1s">
                <p>
                  𝐎𝐥𝐢𝐦𝐩𝐢𝐚𝐝𝐚 𝐝𝐞 𝐏𝐬𝐢𝐡𝐨𝐥𝐨𝐠𝐢𝐞 - 𝐞𝐭𝐚𝐩𝐚 𝐉𝐮𝐝𝐞𝐭̦𝐞𝐚𝐧𝐚̆
                  Eleve ale Colegiului Colegiul Național "Silvania" Zalău au ocupat toate cele 3 locuri ale podiumului:
                  𝐏𝐫𝐞𝐦𝐢𝐮𝐥 𝐈 - Șerban Dumitra, clasa XII F (prof. Morar Monica)
                  𝐏𝐫𝐞𝐦𝐢𝐮𝐥 𝐈𝐈 - Milaș Mihaela, clasa XII F (prof. Morar Monica)
                  𝐏𝐫𝐞𝐦𝐢𝐮𝐥 𝐈𝐈𝐈 - Cozlean Iarina, clasa X F (prof. Morar Monica)
                  Vor reprezenta liceul nostru la Etapa Națională a Olimpiadei de Psihologie elevele Șerban Dumitra și Milaș Mihaela.
                  Felicitări tuturor și mult succes în continuare!
                </p>
              </div>
              <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText6 = true" @mouseleave="showText6 = false">
                  𝐄𝐥𝐞𝐯𝐢 𝐩𝐚𝐬𝐢𝐨𝐧𝐚𝐭̦𝐢 𝐝𝐞 𝐬̦𝐭𝐢𝐢𝐧𝐭̦𝐞
                </div>

                <div v-show="showText6" class="animated fadeInUp delay-1s">
                  <p>
                    𝐄𝐥𝐞𝐯𝐢 𝐩𝐚𝐬𝐢𝐨𝐧𝐚𝐭̦𝐢 𝐝𝐞 𝐬̦𝐭𝐢𝐢𝐧𝐭̦𝐞
                    De elevi pasionați, se știe, colegiul nostru nu duce lipsă. De asemenea, e cunoscut faptul că mulți reușesc să obțină rezultate meritorii la concursurile școlare. Două dintre elevele care ne vor face mândri la etapele naționale ale concursurilor sunt:
                    TOMOLE ALEXIA IRINA (XII C), care a obținut 𝐩𝐫𝐞𝐦𝐢𝐮𝐥 𝐈 la Olimpiada Interdisciplinară "Științele Pământului" sub îndrumarea profesorilor Marian Adriana, Cornea Ioana, Faluvegi Ervin și Abrudan Ioan
                    HORVATH DIANA TIMEA (X C), 𝐩𝐫𝐞𝐦𝐢𝐮𝐥 𝐈 la Olimpiada județeană de fizică, eleva fiind coordonată de profesorii Brișan Marta și Butușină Florin.
                    𝐅𝐞𝐥𝐢𝐜𝐢𝐭𝐚̆𝐫𝐢 𝐭𝐮𝐭𝐮𝐫𝐨𝐫!
                  </p>
                </div>
                <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                  <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText7 = true" @mouseleave="showText7 = false">
                    Concursului Interjudețean de Matematică și Informatică "Grigore Moisil"
                  </div>

                  <div v-show="showText7" class="animated fadeInUp delay-1s">
                    <p>
                      În perioada 22-24 martie 2024 s-a desfășurat la Oradea a XXXVI-a ediție a Concursului Interjudețean de Matematică și Informatică "Grigore Moisil", cel mai important concurs de acest fel din nord-vestul României. La disciplina 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐂𝐀 s-au remarcat prin rezultate următorii elevi:
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
                      concursului internațional de programare InfO(l)Cup
                    </div>

                    <div v-show="showText8" class="animated fadeInUp delay-1s">
                      <p>
                        Rezultat de excepție la Colegiul Național ,,Silvania” – elevul 𝐏𝐄𝐓𝐑𝐄𝐀𝐍 𝐑𝐎𝐋𝐀𝐍𝐃 a obținut  𝗠𝗲𝗱𝗮𝗹𝗶𝗲 𝗱𝗲 𝗮𝘂𝗿 la un concurs 𝗶𝗻𝘁𝗲𝗿𝗻𝗮𝘁𝗶𝗼𝗻𝗮𝗹!
                        Centrul Județean de Excelență Prahova a organizat în perioada 10-11 februarie 2024 ediția a VIII-a a concursului internațional de programare InfO(l)Cup, competiție aflată în Calendarul competițiilor internaţionale pe discipline școlare, la care au participat și elevi români. Concursul este adresat elevilor juniori, școlarizați de Centrele Judetene de Excelență din Romania și unor echipe de elevi din  țări cu  tradiție și rezultate de prestigiu în informatică. Anul acesta, la concurs au participat 132 elevi din 13 țări. InfO(1)Cup este un concurs unic în România în cadrul căruia comisiile științifice și tehnice sunt formate din absolvenți, olimpici internaționali ai României și elevi ai centrului de excelență prahovean, Executive Chairman și coordonatorul comisiei științifice fiind Tamio Vesa Nakajima – doctorand Universitatea Oxford, UK.
                        𝐏𝐄𝐓𝐑𝐄𝐀𝐍 𝐑𝐎𝐋𝐀𝐍𝐃, elev în clasa a IX-a C la CNS, 𝗽𝗿𝗼𝗳𝗲𝘀𝗼𝗿 𝗠𝗼𝗿𝗮𝗿 𝗙𝗹𝗼𝗿𝗶𝗻, a participat la InfO(1)Cup și a obținut 𝗠𝗲𝗱𝗮𝗹𝗶𝗲 𝗱𝗲 𝗮𝘂𝗿, având al cincilea punctaj la nivel internațional.
                        Felicitări, 𝐑𝐎𝐋𝐀𝐍𝐃! Ne mândrim cu tine!
                        Felicitări profesorilor care te pregătesc!
                        Mult succes în continuare!
                      </p>
                    </div>
                    <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                      <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText9 = true" @mouseleave="showText9 = false">
                        Premii și Mențiuni la Concursul Interjudețean de Matematică „Argument”
                      </div>

                      <div v-show="showText9" class="animated fadeInUp delay-1s">
                        <p>
                          Premii și Mențiuni la Concursul Interjudețean de Matematică „Argument”

                          În data de 13 ianuarie 2024,  la Colegiul Național „Gheorghe Șincai”  din Baia Mare, s-a desfășurat cea  de-a XIII-a ediție a Concursului Interjudețean de Matematică „Argument”. De la Colegiul Național „Silvania”  Zalău  a participat un lot de 15 elevi, însoțiți de doamna profesoară Lucaciu Simona.  Au participat  elevi din județele:  Bihor, Bistrița-Năsăud, Maramureș, Satu Mare, Sălaj. Elevii de la CNS  au obținut următoarele rezultate:
                          Premiul I, Rad Viorela-Valentina - clasa a IX-a, prof. Lucaciu Simona
                          Premiul III , Breje Nora - Alexandra-clasa a XI-a, prof. Lucaciu Simona
                          Mențiunea I, Loga Patrik - clasa a XI-a , prof. Turdean Katalin
                          Mențiune, Filip Rareș Ștefan - clasa a V-a, prof. Crișan Gabriela
                          Mențiune, Fărcaș Andra - clasa a V-a, prof. Crișan Gabriela
                          Mențiune, Gaidoș Ana-Nicole - clasa a VI-a, prof. Isa Lavinia
                          Mențiune, Maioș Patricia - clasa a VI-a, prof. Isa Lavinia
                          Mențiune, Onuțan Rihanna Maria- clasa a VII-a , prof. Ilonța Andrei
                          Mențiune, Iacob Maria Teodora - clasa a VIII-a, prof. Isa Lavinia
                          , Găvriluț Andrei - clasa a VIII-a, prof. Isa Lavinia
                          Mențiune, Barna Alexandru-Mihai - clasa a X-a, prof. Lucaciu Simona
                          Felicitări tuturor!
                        </p>
                      </div>
                      <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                        <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText10 = true" @mouseleave="showText10 = false">
                          "Beyond Clever Meet"
                        </div>

                        <div v-show="showText10" class="animated fadeInUp delay-1s">
                          <p>
                            Echipa de robotică a Colegiului Național "Silvania", echipa CNapSys, a participat în data de 13 ianuarie la meet-ul "Beyond Clever Meet" din Baia Mare organizat de echipa Clever Core, unde a câștigat Premiul I cu un highscore de 142 de puncte. Cu această ocazie, echipa de robotică a avut oportunitatea să își îmbogățească cunoștințele și să își îmbunătățească robotul prin intermediul meciurilor și a muncii în echipă, împărtășind spiritul FIRST cu restul concurenților.
                            Felicitări, CNapSys! 💙
                          </p>
                        </div>
                        <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                          <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText11 = true" @mouseleave="showText11 = false">
                            Crăciunul naște speranță
                          </div>

                          <div v-show="showText11" class="animated fadeInUp delay-1s">
                            <p>
                              În cadrul proiectului "Crăciunul naște speranță", desfășurat în această săptămână la Colegiul Național "Silvania", au avut loc și concursuri individuale pentru elevi. Îi felicităm pe toți participanții și premianții!
                              Mulțumim Direct Target, Ioanacrin Comerț,    Concrete Cafe și Frații Vlaic pentru minunatele premii acordate câștigătorilor!
                              Scrisori către Mos Crăciun, secțiunea gimnaziu:
                              Premiul I - COJAN IOANA, clasa a V-a
                              Un gând bun la final de an, secțiunea liceu:
                              Premiul I - CIULE IULIA, clasa a XI-a A
                              Premiul II - CADAR ANDRADA, clasa a XI-a D
                              Premiul III - VĂRGAȘ RALUCA, clasa a XI-a A
                              Mențiune - JULA RĂZVAN, clasa a XI-a C
                              Ce este Crăciunul pentru mine?
                              Premiul I - TALOȘ OANA, clasa a XI-a D
                              Premiul II - DUCA BIANCA, clasa a X-a F
                            </p>
                          </div>
                          <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                            <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText12 = true" @mouseleave="showText12 = false">
                              Globul clasei
                            </div>

                            <div v-show="showText12" class="animated fadeInUp delay-1s">
                              <p>
                                Un alt concurs, Globul clasei, a atras atenția elevilor și ne-au impresionat prin inventivitatea și simțul artistic de care au dat dovadă. Felicităm toți participanții!
                                Premiul I - clasa a V-a, diriginte Ianchiș Alina
                                Premiul II - clasa a VI-a, diriginte Isa Lavinia
                                Premiul III - clasa a XI-a D, diriginte Man Cristian
                                Mențiune - clasa a XI-a G, diriginte Cornea Ioana
                              </p>
                            </div>
                            <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                              <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText13 = true" @mouseleave="showText13 = false">
                                "Crăciunul naște speranță"
                              </div>

                              <div v-show="showText13" class="animated fadeInUp delay-1s">
                                <p>
                                  Unul dintre cele mai savurate momente din proiectul "Crăciunul naște speranță" a fost concursul de decorare a sălilor de clasă. Strădania elevilor a impresionat juriul și le-a făcut misiunea grea. Totuși, premiile au fost împărțite, iar felicitările merg către fiecare clasă și diriginte:
                                  Premiul I - claaa a IX-a D, diriginte Deac Paula
                                  Premiul II - clasa a XI -a A, diriginte Cotoi Alina
                                  Premiul III - clasa a VI-a, diriginte Isa Lavinia
                                  Mențiune - clasa a V-a, diriginte Ianchiș Alina
                                </p>
                              </div>
                              <div class="container mx-auto my-4 px-0 " style="font-family: 'Times New Roman', Times, serif; color: black;">
                                <div class="text-xl font-bold mb-sm animate-fade-in" style="cursor: pointer;" @mouseover="showText14 = true" @mouseleave="showText14 = false">
                                  Olimpiadei Balcanice de Informatică pentru Juniori.
                                </div>

                                <div v-show="showText14" class="animated fadeInUp delay-1s">
                                  <p>
                                    În perioada 25-28.XI.2023 s-a desfășurat la Strumica, Macedonia ediția a XVI-a a Olimpiadei Balcanice de Informatică pentru Juniori.
                                    𝐏𝐞𝐭𝐫𝐞𝐚𝐧 𝐑𝐨𝐥𝐚𝐧𝐝, component al lotului național de juniori al României la informatică, elev în clasa a IX-a C la Colegiul Național "Silvania", profesor Morar Florin, a obținut la această competiție 𝐦𝐞𝐝𝐚𝐥𝐢𝐞 𝐝𝐞 𝐚𝐫𝐠𝐢𝐧𝐭.
                                    Competiția a reunit 64 de concurenți din 9 țări balcanice: Albania, Bulgaria, Bosnia și Herțegovina, Cipru, Grecia, Moldova, Macedonia, România și Serbia.
                                    România a fost reprezentată de 2 echipe care au cucerit 2 medalii de aur, 3 medalii de argint și 3 medalii de bronz. 🥇🥈🥉
                                    Felicitări, Roland!
                                    Felicitări profesorilor care te pregătesc!
                                    Ne mândrim cu tine!
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
