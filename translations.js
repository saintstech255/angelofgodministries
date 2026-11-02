/* ============================================================
   TRANSLATIONS — each key has a pair: ["English", "Kiswahili"].
   Edit the text inside the quotes. Keep the keys unchanged.
   Used in HTML via data-i18n="key".
   ============================================================ */
(function () {
  var D = {
    /* ---- common ---- */
    "a.skip": ["Skip to content", "Ruka hadi maudhui"],
    "nav.home": ["Home", "Mwanzo"], "nav.about": ["About", "Kuhusu"], "nav.prophet": ["Our Prophet", "Nabii Wetu"],
    "nav.teachings": ["Teachings", "Mafundisho"], "nav.watch": ["Watch & Listen", "Tazama na Sikiliza"],
    "nav.events": ["Events", "Matukio"], "nav.prayer": ["Prayer", "Maombi"], "nav.testimonies": ["Testimonies", "Ushuhuda"],
    "nav.contact": ["Contact", "Mawasiliano"], "nav.menu": ["Menu", "Menyu"], "nav.lang": ["Language", "Lugha"],
    "badge.draft": ["Draft — to be confirmed", "Rasimu — inasubiri uthibitisho"],
    "badge.sample": ["Sample content", "Maudhui ya mfano"],
    "ph.tbc": ["To be confirmed", "Inasubiri uthibitisho"],
    "ph.photo": ["Photo placeholder — an authorized image will be added", "Nafasi ya picha — picha rasmi itawekwa"],
    "ph.value": ["To be added by the ministry", "Itawekwa na huduma"],
    "btn.contact": ["Contact the ministry", "Wasiliana na huduma"],
    "btn.enquire": ["Make an enquiry", "Uliza kuhusu tukio"],
    "btn.watch1": ["Watch", "Tazama"],
    "btn.yt": ["Visit YouTube channel", "Tembelea channel ya YouTube"],
    "v.empty": ["Videos from the ministry’s verified YouTube channel will appear here once the channel is connected.", "Video kutoka channel rasmi ya YouTube ya huduma zitaonekana hapa mara channel itakapounganishwa."],
    "v.play": ["Play video", "Cheza video"],
    "v.none": ["No videos in this category yet.", "Hakuna video katika kundi hili bado."],
    "intro.skip": ["Skip · Ruka", "Skip · Ruka"],

    /* ---- footer ---- */
    "f.tag": ["Growing in faith. Walking in divine purpose.", "Kukua katika imani. Kutembea katika kusudi la Mungu."],
    "f.leader": ["Led by Prophet David Richard, Tanzania", "Chini ya uongozi wa Nabii David Richard, Tanzania"],
    "f.pages": ["Pages", "Kurasa"],
    "f.notice": ["Independent Website Concept — Prepared by Infinity Holdings.", "Dhana Huru ya Tovuti — Imeandaliwa na Infinity Holdings."],
    "f.by": ["Digital Website Concept by Infinity Holdings", "Dhana ya Tovuti ya Kidijitali na Infinity Holdings"],
    "f.motto": ["Leading Innovation Across Industries.", "Tunaongoza Ubunifu Katika Sekta Mbalimbali."],

    /* ---- page titles ---- */
    "title.home": ["Home", "Mwanzo"], "title.about": ["About the Ministry", "Kuhusu Huduma"],
    "title.prophet": ["Our Prophet", "Nabii Wetu"], "title.teachings": ["Teachings and Sermons", "Mafundisho na Mahubiri"],
    "title.watch": ["Watch and Listen", "Tazama na Sikiliza"], "title.events": ["Events and Services", "Matukio na Ibada"],
    "title.prayer": ["Prayer Requests", "Maombi"], "title.testimonies": ["Testimonies", "Ushuhuda"], "title.contact": ["Contact", "Mawasiliano"],

    /* ---- home ---- */
    "h.title": ["Growing in Faith. Walking in Divine Purpose.", "Kukua Katika Imani. Kutembea Katika Kusudi la Mungu."],
    "h.desc": ["Discover teachings, spiritual inspiration and ministry resources designed to encourage faith and spiritual growth.", "Gundua mafundisho, hamasa ya kiroho na rasilimali za huduma zilizoandaliwa kuimarisha imani na ukuaji wa kiroho."],
    "btn.teach": ["Explore Teachings", "Chunguza Mafundisho"], "btn.watch": ["Watch Messages", "Tazama Jumbe"], "btn.about": ["About the Ministry", "Kuhusu Huduma"],
    "h.i.t": ["A place to grow in faith", "Mahali pa kukua katika imani"],
    "h.i.p1": ["Angels of God Ministries International is a ministry in Tanzania led by Prophet David Richard. This website is being prepared to share teachings, messages and ways to connect.", "Angels of God Ministries International ni huduma iliyopo Tanzania chini ya uongozi wa Nabii David Richard. Tovuti hii inaandaliwa ili kushiriki mafundisho, jumbe na njia za kuwasiliana."],
    "h.i.p2": ["Ministry details will be added as soon as they are confirmed by ministry leadership.", "Taarifa za huduma zitaongezwa mara zitakapothibitishwa na uongozi wa huduma."],
    "h.f.t": ["Featured teachings", "Mafundisho Mashuhuri"],
    "h.f.s": ["Sample topics are shown here. They will be replaced with the ministry’s own messages.", "Hapa kuna mada za mfano. Zitabadilishwa na jumbe halisi za huduma."],
    "h.p.t": ["Prophet David Richard", "Nabii David Richard"],
    "h.p.p": ["Prophet David Richard leads Angels of God Ministries International. His biography will be added once it has been confirmed by the ministry.", "Nabii David Richard anaongoza Angels of God Ministries International. Wasifu wake utaongezwa mara utakapothibitishwa na huduma."],
    "btn.meet": ["Meet the Prophet", "Mfahamu Nabii"],
    "h.l.t": ["Latest messages", "Jumbe za hivi karibuni"],
    "h.e.t": ["Upcoming events", "Matukio yajayo"],
    "h.e.p": ["Dates, times and places will be announced once they are confirmed by ministry leadership.", "Tarehe, saa na mahali pa matukio vitatangazwa mara vitakapothibitishwa na uongozi wa huduma."],
    "btn.events": ["See events and services", "Angalia matukio na ibada"],
    "h.pr.t": ["You do not have to carry it alone", "Si lazima ubebe mzigo peke yako"],
    "h.pr.p": ["Tell us how we can pray with you. Our prayer page explains how to reach the ministry.", "Tuambie tunavyoweza kuombea pamoja nawe. Ukurasa wa maombi unaeleza jinsi ya kuwasiliana na huduma."],
    "btn.prayer": ["Share a prayer request", "Tuma ombi la maombi"],
    "h.inv.t": ["You are welcome here", "Karibu sana"],
    "h.inv.p": ["Whether you are visiting for the first time or returning, we invite you to read, watch and grow with us.", "Iwe unatembelea kwa mara ya kwanza au unarudi, tunakukaribisha kusoma, kutazama na kukua pamoja nasi."],

    /* ---- about ---- */
    "a.t": ["About the Ministry", "Kuhusu Huduma"],
    "a.lead": ["Angels of God Ministries International is a ministry in Tanzania led by Prophet David Richard.", "Angels of God Ministries International ni huduma iliyopo Tanzania chini ya uongozi wa Nabii David Richard."],
    "a.note": ["Sections marked “draft” contain proposed wording only. Nothing here is verified until the ministry confirms it.", "Sehemu zilizoandikwa “rasimu” zina maneno ya pendekezo tu. Hakuna kilichothibitishwa hadi huduma itakapokubali."],
    "a.ov.t": ["Overview", "Muhtasari"],
    "a.ov.p": ["A verified description of the ministry, its beginnings and its work will be placed here by ministry leadership.", "Maelezo yaliyothibitishwa kuhusu huduma, mwanzo wake na kazi yake yatawekwa hapa na uongozi wa huduma."],
    "a.mi.t": ["Mission", "Dhamira"],
    "a.mi.p": ["To help people grow in faith, understand God’s Word and walk in their divine purpose.", "Kuwasaidia watu kukua katika imani, kulielewa Neno la Mungu na kutembea katika kusudi lao la kimungu."],
    "a.vi.t": ["Vision", "Maono"],
    "a.vi.p": ["A community of believers living with faith, wisdom and hope.", "Jamii ya waumini wanaoishi kwa imani, hekima na matumaini."],
    "a.va.t": ["Core values", "Maadili ya msingi"],
    "a.va.1t": ["Faith", "Imani"], "a.va.1p": ["Trusting God in every season.", "Kumtumaini Mungu katika kila msimu."],
    "a.va.2t": ["Prayer", "Maombi"], "a.va.2p": ["Seeking God together and personally.", "Kumtafuta Mungu pamoja na kibinafsi."],
    "a.va.3t": ["Scripture", "Maandiko"], "a.va.3p": ["Teaching grounded in the Bible.", "Mafundisho yaliyojengwa juu ya Biblia."],
    "a.va.4t": ["Love", "Upendo"], "a.va.4p": ["Treating every person with care.", "Kumjali kila mtu kwa heshima."],
    "a.va.5t": ["Excellence", "Ubora"], "a.va.5p": ["Serving God with diligence.", "Kumtumikia Mungu kwa bidii."],
    "a.fo.t": ["Spiritual focus", "Mwelekeo wa kiroho"],
    "a.fo.p": ["The ministry’s spiritual emphasis will be described here in the leadership’s own words.", "Msisitizo wa kiroho wa huduma utaelezwa hapa kwa maneno ya uongozi wenyewe."],
    "a.ac.t": ["Ministry activities", "Shughuli za huduma"],
    "a.ac.1": ["Teaching and preaching", "Kufundisha na kuhubiri"], "a.ac.2": ["Prayer and spiritual support", "Maombi na msaada wa kiroho"],
    "a.ac.3": ["Worship gatherings", "Mikutano ya ibada"], "a.ac.4": ["Media and online messages", "Vyombo vya habari na jumbe za mtandaoni"],
    "a.ac.p": ["Suggested headings only. The ministry will confirm its actual activities.", "Vichwa vya mapendekezo tu. Huduma itathibitisha shughuli zake halisi."],
    "a.ou.t": ["International outreach", "Huduma ya kimataifa"],
    "a.ou.p": ["Information about the ministry’s reach beyond Tanzania will be added once verified.", "Taarifa kuhusu huduma nje ya Tanzania zitaongezwa mara zitakapothibitishwa."],
    "a.g.t": ["Gallery", "Picha"],

    /* ---- prophet ---- */
    "p.t": ["Prophet David Richard", "Nabii David Richard"],
    "p.lead": ["Leader of Angels of God Ministries International, Tanzania.", "Kiongozi wa Angels of God Ministries International, Tanzania."],
    "p.portrait": ["Portrait — an authorized image will be added", "Picha — picha rasmi itawekwa"],
    "p.bio.t": ["Biography", "Wasifu"],
    "p.bio.p": ["Biography to be confirmed by the ministry. No personal history, qualifications or family details are published until they are supplied and approved.", "Wasifu unasubiri uthibitisho wa huduma. Hakuna historia binafsi, sifa za elimu wala taarifa za familia zitakazochapishwa hadi zitakapotolewa na kuidhinishwa."],
    "p.call.t": ["Calling and focus", "Wito na mwelekeo"],
    "p.call.p": ["A description of the ministry calling and focus, in the Prophet’s own approved words, will be placed here.", "Maelezo ya wito na mwelekeo wa huduma, kwa maneno yaliyoidhinishwa na Nabii mwenyewe, yatawekwa hapa."],
    "p.sel.t": ["Selected teachings", "Mafundisho yaliyochaguliwa"],
    "p.sel.p": ["Verified teachings will be listed here. Browse the sample library to see how it will look.", "Mafundisho yaliyothibitishwa yataorodheshwa hapa. Tazama maktaba ya mfano kuona itakavyoonekana."],
    "p.vid.t": ["Video messages", "Jumbe za video"],

    /* ---- teachings ---- */
    "t.t": ["Teachings and Sermons", "Mafundisho na Mahubiri"],
    "t.lead": ["A library of messages to help you grow in faith.", "Maktaba ya jumbe za kukusaidia kukua katika imani."],
    "t.note": ["The titles below are sample content showing how the library will work. They are not the ministry’s real messages and are not attributed to Prophet David Richard.", "Vichwa vilivyo hapa chini ni maudhui ya mfano yanayoonyesha jinsi maktaba itakavyofanya kazi. Si jumbe halisi za huduma wala hazihusishwi na Nabii David Richard."],
    "t.search": ["Search teachings", "Tafuta mafundisho"], "t.sph": ["Search by title or topic", "Tafuta kwa kichwa au mada"],
    "t.cats": ["Categories", "Makundi"], "t.none": ["No teachings match your search.", "Hakuna mafundisho yanayolingana na utafutaji wako."],
    "cat.all": ["All", "Yote"], "cat.growth": ["Spiritual Growth", "Ukuaji wa Kiroho"], "cat.faith": ["Faith", "Imani"],
    "cat.prayer": ["Prayer", "Maombi"], "cat.kingdom": ["The Kingdom of God", "Ufalme wa Mungu"],
    "cat.angels": ["Angels and the Spiritual World", "Malaika na Ulimwengu wa Roho"], "cat.living": ["Christian Living", "Maisha ya Kikristo"],
    "cat.bible": ["Biblical Understanding", "Uelewa wa Biblia"],
    "tc1.t": ["Growing Daily in Faith", "Kukua Kila Siku Katika Imani"], "tc1.d": ["Simple habits that help faith deepen over time.", "Mazoea rahisi yanayosaidia imani kuimarika kadiri muda unavyopita."],
    "tc2.t": ["Faith That Stands Firm", "Imani Inayosimama Imara"], "tc2.d": ["Holding on to trust in God when circumstances change.", "Kuendelea kumwamini Mungu hali zinapobadilika."],
    "tc3.t": ["The Habit of Prayer", "Mazoea ya Kuomba"], "tc3.d": ["Making room for prayer in an ordinary day.", "Kutenga nafasi ya maombi katika siku ya kawaida."],
    "tc4.t": ["Living as Citizens of the Kingdom", "Kuishi Kama Raia wa Ufalme"], "tc4.d": ["What it means to belong to the Kingdom of God.", "Maana ya kuwa sehemu ya Ufalme wa Mungu."],
    "tc5.t": ["Understanding the Spiritual World", "Kuuelewa Ulimwengu wa Roho"], "tc5.d": ["A Bible-centred look at angels and spiritual realities.", "Mtazamo unaotegemea Biblia kuhusu malaika na mambo ya kiroho."],
    "tc6.t": ["Walking in Love and Integrity", "Kutembea Katika Upendo na Uadilifu"], "tc6.d": ["Everyday faith at home, at work and in the community.", "Imani ya kila siku nyumbani, kazini na katika jamii."],
    "tc7.t": ["Reading Scripture with Understanding", "Kusoma Maandiko kwa Uelewa"], "tc7.d": ["Practical ways to study and apply the Bible.", "Njia za vitendo za kujifunza na kutumia Biblia."],

    /* ---- watch ---- */
    "w.t": ["Watch and Listen", "Tazama na Sikiliza"],
    "w.lead": ["Messages and sermons from the ministry’s YouTube channel.", "Jumbe na mahubiri kutoka channel ya YouTube ya huduma."],
    "w.f.t": ["Featured message", "Ujumbe mkuu"],
    "w.l.t": ["Latest messages", "Jumbe za hivi karibuni"],
    "w.a.t": ["Audio teachings", "Mafundisho ya sauti"],
    "w.a.p": ["Audio teachings will be added here when recordings are supplied by the ministry.", "Mafundisho ya sauti yataongezwa hapa mara rekodi zitakapotolewa na huduma."],

    /* ---- events ---- */
    "e.t": ["Events and Services", "Matukio na Ibada"],
    "e.lead": ["Gatherings and meetings of the ministry.", "Mikutano na mikusanyiko ya huduma."],
    "e.ph": ["Details will be announced once confirmed by ministry leadership.", "Taarifa zitatangazwa mara zitakapothibitishwa na uongozi wa huduma."],
    "e.when": ["Date and time to be confirmed", "Tarehe na saa zinasubiri uthibitisho"],
    "e.where": ["Place to be confirmed", "Mahali panasubiri uthibitisho"],
    "e.up": ["Upcoming events", "Matukio yajayo"], "e.conf": ["Ministry conferences", "Makongamano ya huduma"],
    "e.wor": ["Worship gatherings", "Mikutano ya ibada"], "e.spe": ["Special meetings", "Mikutano maalum"], "e.sch": ["Service schedule", "Ratiba ya ibada"],

    /* ---- prayer / forms ---- */
    "pr.t": ["Prayer Requests", "Maombi"],
    "pr.lead": ["You are not alone. Share what is on your heart and let us pray with you.", "Hauko peke yako. Shiriki yaliyo moyoni mwako ili tuombe pamoja nawe."],
    "pr.name": ["Your name (optional)", "Jina lako (si lazima)"], "pr.contact": ["Email or phone (optional)", "Barua pepe au simu (si lazima)"],
    "pr.msg": ["Your prayer request", "Ombi lako la maombi"], "pr.submit": ["Send prayer request", "Tuma ombi la maombi"],
    "pr.priv.t": ["Privacy", "Faragha"],
    "pr.priv.p": ["Prayer requests are never shown publicly on this website. This is a static website with no database, so nothing you type is stored here. Your request is only sent if you choose to open WhatsApp or email, and only once the ministry has published those details.", "Maombi hayaonyeshwi hadharani kwenye tovuti hii. Hii ni tovuti tuli isiyo na hifadhidata, kwa hivyo chochote unachoandika hakihifadhiwi hapa. Ombi lako hutumwa tu ukichagua kufungua WhatsApp au barua pepe, na hilo litawezekana pale huduma itakapochapisha mawasiliano hayo."],
    "fm.req": ["Please write your message before sending.", "Tafadhali andika ujumbe wako kabla ya kutuma."],
    "fm.name": ["Please enter your name.", "Tafadhali weka jina lako."],
    "fm.email": ["Please enter a valid email address.", "Tafadhali weka anwani sahihi ya barua pepe."],
    "fm.wa": ["Opening WhatsApp with your message ready to send.", "Inafungua WhatsApp ukiwa na ujumbe wako tayari kutuma."],
    "fm.mail": ["Opening your email app with your message ready to send.", "Inafungua programu yako ya barua pepe ukiwa na ujumbe wako tayari kutuma."],
    "fm.nocfg": ["This form is not connected to a delivery service yet, so nothing was sent. The ministry’s contact details have not been published.", "Fomu hii bado haijaunganishwa na huduma ya kutuma, kwa hivyo hakuna kilichotumwa. Mawasiliano ya huduma bado hayajachapishwa."],

    /* ---- testimonies ---- */
    "ts.t": ["Testimonies", "Ushuhuda"],
    "ts.lead": ["Stories of God’s faithfulness, shared with consent.", "Hadithi za uaminifu wa Mungu, zinazoshirikiwa kwa ridhaa."],
    "ts.c.t": ["Testimony placeholder", "Nafasi ya ushuhuda"],
    "ts.c.p": ["A real testimony, with the person’s name and photo only where they have agreed, will appear here.", "Ushuhuda halisi, pamoja na jina na picha ya mhusika pale tu alipokubali, utaonekana hapa."],
    "ts.cons.t": ["Published with consent", "Huchapishwa kwa ridhaa"],
    "ts.cons.p": ["We do not publish testimonies without the written permission of the person sharing them. No testimonies are shown until the ministry has verified them.", "Hatuchapishi ushuhuda bila idhini ya maandishi ya mhusika. Hakuna ushuhuda utakaoonyeshwa hadi huduma iuthibitishe."],
    "ts.sub.t": ["Would you like to share a testimony?", "Je, ungependa kushiriki ushuhuda?"],
    "ts.sub.p": ["Contact the ministry to ask how to submit your testimony.", "Wasiliana na huduma kuuliza jinsi ya kuwasilisha ushuhuda wako."],
    "btn.share": ["Ask about sharing a testimony", "Uliza kuhusu kushiriki ushuhuda"],

    /* ---- contact ---- */
    "c.t": ["Contact", "Mawasiliano"],
    "c.lead": ["We would be glad to hear from you.", "Tungefurahi kusikia kutoka kwako."],
    "c.f.t": ["Send a message", "Tuma ujumbe"],
    "c.name": ["Your name", "Jina lako"], "c.email": ["Email (optional)", "Barua pepe (si lazima)"],
    "c.msg": ["Your message", "Ujumbe wako"], "c.send": ["Send message", "Tuma ujumbe"],
    "c.i.t": ["Ministry details", "Taarifa za huduma"],
    "c.wa": ["WhatsApp", "WhatsApp"], "c.mail": ["Email", "Barua pepe"], "c.loc": ["Location", "Mahali"],
    "c.soc": ["Online", "Mtandaoni"],
    "c.enq.t": ["Enquiries", "Maulizo"],
    "c.enq.p": ["Use the form for questions about events, testimonies, partnerships or the ministry. Contact details will be published here once confirmed.", "Tumia fomu kwa maswali kuhusu matukio, ushuhuda, ushirikiano au huduma. Mawasiliano yatachapishwa hapa mara yatakapothibitishwa."]
  };
  var out = { en: {}, sw: {} };
  Object.keys(D).forEach(function (k) { out.en[k] = D[k][0]; out.sw[k] = D[k][1]; });
  window.AOG_I18N = out;
})();
