import { DefaultLoadingManager } from "three";
import {
    gewalt,
    waffen,
    korruption,
    freiheit, 
    logo,
    img2011,
    img2012,
    img2013,
    img2014,
    img2015,
    img2016,
    img2017,
    img2018, 
    img2019, 
    img2020, 
    img2021,
    irak, 
    palastina, 
    somalia, 
    southsudan,
    pakistan, 
    nigeria,
    jemen, 
    ukraine, 
    afghanistan,
    chile, 
  
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Syrien",
    },
    {
      id: "video",
      title: "Kurzfilm",
    },
    {
      id: "timeline",
      title: "Kriegsverlauf",
    },
    
    {
      id: "contact",
      title: "Vor&Nach",
    },
  ];
  
  const services = [
    {
      title: "GEWALT REDUZIEREN",
      icon: gewalt,
    },
    {
      title: "BEKÄMPFUNG VON KRIMINALITÄT UND ILLEGALEN WAFFENSTRÖMEN",
      icon: waffen,
    },
    {
      title: "KORRUPTION UND BESTECHUNG REDUZIEREN",
      icon: korruption,
    },
    {
      title: "GRUNDFREIHEITEN SCHÜTZEN",
      icon: freiheit,
    },
  ];
  
  const flags = [
    {
      name: "Irak",
      icon: irak,
    },
    {
      name: "Palastina",
      icon: palastina,
    },
    {
      name: "Somalia",
      icon: somalia,
    },
    {
      name: "Südsudan",
      icon: southsudan,
    },
    {
      name: "Pakistan",
      icon: pakistan,
    },
    {
      name: "Nigeria",
      icon: nigeria,
    },
    {
      name: "Jemen",
      icon: jemen,
    },
    {
      name: "Ukraine",
      icon: ukraine,
    },
    {
      name: "Afghanistan",
      icon: afghanistan,
    },
    {
      name: "Chile",
      icon: chile,
    },
  ];
  
  const experiences = [
    {
      title: "Friedliche Proteste",
      company_name: "2011",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "2011",
      points: [
        "Die friedlichen Proteste im Süden Syriens Anfang 2011 markieren den Beginn des Syrienkonflikts, als sie gewaltsam in Daraa beendet wurden und sich daraufhin auf andere Teile des Landes ausbreiteten.",
        "Schießbefehle gegen friedlich Demonstrierende führen zu einer Militarisierung des Konflikts.",
        "Im türkischen Exil wird die \"Freie Syrische Armee\" gegründet.",
       
      ],
      img : img2011,
      
    },
    {
      title: "Al-Nusra-Front",
      company_name: "2012",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "2012",
      points: [
       "Im Januar 2012 verübt die radikal islamische al-Nusra-Front, eine neue Terrorgruppe und Teil von al-Quaida, eine Reihe von Anschlägen auf syrische Truppen. Damit beteiligt sich neben den Islamisten von Ahrar al-Scham eine weitere religiös motivierte Miliz an den Konflikten in Syrien. Zudem finden immer wieder grausame Massaker an der Zivilbevölkerung statt",
      ],
      img : img2012,
    },
    {
      title: "Chemische Waffen",
      company_name: "2013",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "2013",
      points: [
        "Allen Parteien werden schwere Kriegsverbrechen vorgeworfen.",
        "Die Zahl der Geflüchteten ist bis April 2013 bereits auf eine Million gestiegen.",
        "Zudem wird bekannt, dass die syrische Regierung über chemische Waffen verfügt.",
       
      ],
      img : img2013,
    },
    {
      title: "IS",
      company_name: "2014",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "2014",
      points: [
        "Am 29. Juni 2014 erklärt al-Baghdadi die von der Terrororganisation besetzten Gebiete im Irak und in Syrien zum Kalifat und benennt den \"Islamischen Staat im Irak und in Syrien\" (ISIS) in \"Islamischer Staat\" (IS) um.",
        "Der IS verbreitet grausame Hinrichtungsvideos. Im September 2014 greift Präsident Obama den IS im Irak an und ruft zur internationalen Zusammenarbeit gegen die Terrororganisation auf.",
        
      ],
      img : img2014,
    },

    {
      title: "Syrische Flüchtlinge",
      company_name: "2015",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "2015",
      points: [
        "Im Jahr 2015 forderte der Bürgerkrieg laut den Vereinten Nationen 220.000 Menschenleben. Millionen von Syrern flohen, darunter 7,6 Millionen im eigenen Land und rund 4 Millionen in benachbarte Länder. Zehntausende erreichten im September 2015 Deutschland und Österreich.",
        "Währenddessen tobt der Krieg weiter. Der IS weitet seinen Eroberungsfeldzug zu einer globalen Terrorkampagne aus.",
        
      ],
      img : img2015,
    },

    {
      title: "Friedensverhandlungen für Syrien",
      company_name: "2016",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "2016",
      points: [
        "Friedensverhandlungen 2016 scheiterten, da Assad mit russischer Unterstützung militärische Erfolge erzielte. Waffenruhen wurden aufgekündigt.",
        "Russland startet im November eine Offensive auf Homs, Idlib und Aleppo. Im Dezember 2016 erobert das Assad-Regime mit russischer Unterstützung das von Oppositionellen besetzte Ost-Aleppo zurück.",
        
      ],
      img : img2016,
    },

    {
      title: "kurdische Militärbündnis",
      company_name: "2017",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "2017",
      points: [
        "Am 4. April 2017 wird in Chan Scheichun in Nord-Syrien Sarin eingesetzt. Mindestens 70 Menschen sterben. Die US-Armee bombardiert daraufhin eine syrische Luftwaffenbasis.",
        "Im Mai 2017 rückt die kurdische Militärbündnis in Rakka vor, dem Hauptstützpunkt des IS.",
        "Die SDF erobert im Dezember die letzte IS-Bastion Handschin in Ostsyrien. Der IS ist weitgehend besiegt, kontrolliert aber noch einige Dörfer in der Region.",
        
      ],
      img : img2017,
    },

    {
      title: "Türkische Truppen in Syrien",
      company_name: "2018",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "2018",
      points: [
        "Anfang 2018 erobert die Türkei mit radikal-islamistischen Milizen die Stadt Afrin in Nordsyrien.",
        "Im Mai 2017 rückt die kurdische Militärbündnis in Rakka vor, dem Hauptstützpunkt des IS.",
        "Im Frühjahr 2018 erfolgen Chlorangriffe in Duma. Die Koalition aus Frankreich und Großbritanien und USA greift Chemiewaffenlager an, viele Zivilisten sterben.",
        
      ],
      img : img2018,
    },

    {
      title: "Trumps Traum vom Öl in der Wüste",
      company_name: "2019",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "2019",
      points: [
        "Trump zieht im Oktober die US-Truppen aus Nordsyrien ab, kehrt aber später zurück, um die Ölfelder im Osten zu erobern.",
        "Eine finale Lösung des Konflikts war Ende 2019 aufgrund der Internationalisierung und unterschiedlicher politischer Interessen der beteiligten Akteure nicht in Sicht.",
       
        
      ],
      img : img2019,
    },

    {
      title: "Eskalation in Idlib",
      company_name: "2020",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "2020",
      points: [
        "2020 fokussiert sich der Syrienkonflikt auf Idlib an der türkischen Grenze.",
        "Seit April 2019 fliehen über 950.000 Syrer, darunter über 500.000 Kinder, aufgrund der Offensive der syrischen Armee und ihrer Verbündeten in der Region.",
        "In Idlib kontrolliert HTS die Region. Es ist ein Bündnis von fünf oppositionellen Gruppen, wobei Jabhat Fateh al-Sham den größten Teil ausmacht.",
       
        
      ],
      img : img2020,
    },

    {
      title: "Bashar Al-assad gewinnt die Wahl wieder mit \"95,5%\"",
      company_name: "2021",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "2021",
      points: [
        "Im Mai wird Bashar al-Assad erneut zum Präsidenten gewählt, mit Wahlen in von der Regierung kontrollierten Gebieten und Beteiligung der syrischen Diaspora.",
        "Im Juli und August werden in von protürkischen Gruppen kontrollierten Städten mehrere Angriffe verübt, bei denen zahlreiche Zivilisten getötet und zivile Einrichtungen zerstört werden.",

      ],
      img : img2021,
    },

    

  ];
  
  
  
  export { services, flags, experiences };