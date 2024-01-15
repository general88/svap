export const options = [
  {
    value: "1",
    label: "CAS OFFICE",
  },
  {
    value: "2",
    label: "POLICY & PLANS",
  },
  {
    value: "3",
    label: "TRAINING & OPS",
  },
  {
    value: "4",
    label: "AIR INTELLIGENCE",
  },
  {
    value: "5",
    label: "AIRCRAFT ENGINEERING",
  },
  {
    value: "6",
    label: "COMMUNICATION INFORMATION SYSTEM",
  },
  {
    value: "7",
    label: "LOGISTICS",
  },
  {
    value: "8",
    label: "ADMINISTRATION",
  },
  {
    value: "9",
    label: "STAN & EVAL",
  },
  {
    value: "10",
    label: "AIRSEC",
  },
  {
    value: "11",
    label: "MEDICAL SERVICES",
  },
  {
    value: "12",
    label: "ACCOUNT & BUDGET",
  },
];

export const headquaters = [
  {
    value: "cas-office",
    label: "CAS OFFICE",
    subnav: [
      { value: "paso-cas", label: "PASO-CAS" },
      { value: "pimt", label: "PIMT" },
      { value: "ails", label: "AILS" },
      { value: "nafomb", label: "NAFOMB" },
    ],
  },
  {
    value: "policy-plans",
    label: "POLICY & PLANS",
    subnav: [
      { value: "dopol", label: "DOPOL" },
      { value: "doplans", label: "DOPLANS" },
      { value: "dnt", label: "DNT" },
      { value: "doma", label: "DOMA" },
    ],
  },
  {
    value: "training-ops",
    label: "TRAINING & OPS",
    subnav: [
      { value: "doo", label: "DOO" },
      { value: "dot", label: "DOT" },
      { value: "doregt", label: "DOREGT" },
      { value: "dats", label: "DATS" },
      { value: "dcmr", label: "DCMR" },
    ],
  },
  {
    value: "air-inteligence",
    label: "AIR INTELLIGENCE",
    subnav: [
      { value: "dint", label: "DINT" },
      { value: "dcis", label: "DCIS" },

      { value: "disr", label: "DISR" },
      { value: "dtech-int", label: "DTECH INT" },
    ],
  },
  {
    value: "aircraft-engineering",
    label: "AIRCRAFT ENGINEERING",
    subnav: [
      { value: "dae", label: "DAE" },
      { value: "doarm", label: "DOARM" },
      { value: "daqa", label: "DAQA" },
      { value: "dmsm", label: "DMSM" },
    ],
  },
  {
    value: "logistics",
    label: "LOGISTICS",
    subnav: [
      { value: "dol", label: "DOL" },
      { value: "doproc", label: "DOPROC" },
      { value: "dow", label: "DOW" },
      { value: "dos", label: "DOS" },
      { value: "dcats", label: "DCATS" },
    ],
  },
  {
    value: "comms",
    label: "COMMUNICATION INFORMATION SYSTEM",
    subnav: [
      { value: "dcomms", label: "DCOMMS" },
      { value: "dit", label: "DIT" },
      { value: "dradar", label: "DRADAR" },
      { value: "dspace-tech", label: "DSPACE TECH" },
    ],
  },

  {
    value: "administration",
    label: "ADMINISTRATION",
    subnav: [
      { value: "doa", label: "DOA" },
      { value: "dva", label: "DVA" },
      { value: "dap", label: "DAP" },
      { value: "dls", label: "DLS" },
      { value: "dopri", label: "DOPRI" },
      { value: "doedn", label: "DOEDN" },
      { value: "dspe", label: "DSSPE" },
      { value: "dcrc", label: "DC-RC" },
      { value: "dcp", label: "DC-P" },
      { value: "doia", label: "DOIA" },
    ],
  },
  {
    value: "cose",
    label: "STAN & EVAL",
    subnav: [
      { value: "doeval", label: "DOEVAL" },
      { value: "dosaf", label: "DOSAF" },
      { value: "dr&d", label: "DR&D" },
      { value: "dom", label: "DOM" },
    ],
  },
  {
    value: "airsec",
    label: "AIRSEC",
    subnav: [
      { value: "dpm", label: "DPM" },
      { value: "drrr", label: "DRRR" },
    ],
  },
  {
    value: "medical-services",
    label: "MEDICAL SERVICES",
    subnav: [
      { value: "dcs", label: "DCS" },
      { value: "doms", label: "DOMS" },
      { value: "dphhs", label: "DPHHS" },
      { value: "dns", label: "DNS" },
      { value: "dots", label: "DOTS" },
      { value: "dds", label: "DDS" },
      { value: "dmss", label: "DMSS" },
    ],
  },
  {
    value: "account-budget",
    label: "ACCOUNT & BUDGET",
    subnav: [
      { value: "dof", label: "DOF" },
      { value: "dobud", label: "DOBUD" },
      { value: "daccts", label: "DACCTS" },
      { value: "doinsp", label: "DOINSP" },
    ],
  },
];

export const commands = [
  {
    value: "tac",
    label: "TACTICAL AIR COMMAND",
    subnav: [
      {
        label: "101 ADG ",
        value: "101-adg",
      },
      {
        label: "103 STG",
        value: "103-stg",
      },
      {
        label: "105 CG ",
        value: "105-cg",
      },
      {
        label: "107 AMG",
        value: "107-amg",
      },
      {
        label: "109 CRG",
        value: "109-crg",
      },
      {
        label: "115 SOG",
        value: "115-sog",
      },
      {
        label: "119 CG",
        value: "119-cg",
      },
      {
        label: "120 FPG",
        value: "120-fpg",
      },
      {
        label: "131 ENGR GP",
        value: "131-eng-gp",
      },
      {
        label: "141 COMMS GP",
        value: "141-comms-gp",
      },
      {
        label: "151 BSG",
        value: "151-bsg",
      },
      {
        label: "153 BSG",
        value: "153-bsg",
      },
      {
        label: "161 NAFH",
        value: "161-nafh",
      },
      {
        label: "163 NAFH",
        value: "163-nafh",
      },
      {
        label: "HEL DET",
        value: "hel-det",
      },
      {
        label: "NAFRH PH",
        value: "nafrh-ph",
      },
    ],
  },
  {
    value: "soc",
    label: "SPECIAL OPERATIONS COMMAND",
    subnav: [
      {
        label: "201 CG",
        value: "201-cg",
      },
      {
        label: "203  ISR",
        value: "203-isr",
      },
      {
        label: "205 SOG",
        value: "205-sog",
      },
      {
        label: "207 QRG",
        value: "207-qrg",
      },
      {
        label: "211 FPG",
        value: "211-fpg",
      },
      {
        label: "212 FPG",
        value: "212-fpg",
      },
      {
        label: "213 FOB",
        value: "213-fob",
      },
      {
        label: "231 HOD",
        value: "231-hod",
      },
      {
        label: "241 COMMS GP",
        value: "241-comms",
      },
      {
        label: "251 BSG",
        value: "251-bsg",
      },
      {
        label: "261 NAFRH",
        value: "261-nafrh",
      },
      {
        label: "263 NAFRH",
        value: "263-nafrh",
      },
    ],
  },

  {
    value: "mc",
    label: "MOBILITY COMMAND",
    subnav: [
      {
        label: "301 HAG",
        value: "301-hag",
      },
      {
        label: "303 MAG",
        value: "303-mag",
      },
      {
        label: "305 SMG",
        value: "305-smg",
      },
      {
        label: "307 EAG",
        value: "307-eag",
      },
      {
        label: "341 COMMS GP",
        value: "341-comms",
      },
    ],
  },
  {
    value: "atc",
    label: "AIR TRAINING COMMAND",
    subnav: [
      {
        label: "401 FTS",
        value: "401-fts",
      },
      {
        label: "403 FTS",
        value: "403-fts",
      },
      {
        label: "405 HCTG",
        value: "405-hctg",
      },
      {
        label: "407 ACTG",
        value: "407-actg",
      },
      {
        label: "409 IHFS",
        value: "409-ihfs",
      },
      {
        label: "410 CFS",
        value: "410-cfs",
      },
      {
        label: "413 FPG",
        value: "413-fpg",
      },
      {
        label: "431 ENGR GP",
        value: "431-engr",
      },
      {
        label: "441 COMMS GP",
        value: "441-comms",
      },
      {
        label: "453 BSG",
        value: "453-bsg",
      },
      {
        label: "455 BSG",
        value: "455-bsg",
      },
      {
        label: "461 NAFH",
        value: "461-nafh",
      },
      {
        label: "465 NAFH",
        value: "465-nafh",
      },
      {
        label: "ATSTC",
        value: "atstc",
      },
      {
        label: "NAFIS",
        value: "nafis",
      },
      {
        label: "NAFSAINT",
        value: "nafsaint",
      },
      {
        label: "NAF CAOCC",
        value: "nafcaocc",
      },
    ],
  },
  {
    value: "gtc",
    label: "GROUND TRAINING COMMAND",
    subnav: [
      {
        label: "541 COMMS",
        value: "541-comms",
      },
      {
        label: "551 NAF STN",
        value: "551-naf-stn",
      },
      {
        label: "553 BSG",
        value: "553-bsg",
      },
      {
        label: "561 NAFH",
        value: "561-nafh",
      },
      {
        label: "563 NAFH",
        value: "563-nafh",
      },
      {
        label: "APTC",
        value: "aptc",
      },
      {
        label: "MTC",
        value: "mtc",
      },
      {
        label: "NAFIAM",
        value: "nafiam",
      },
      {
        label: "RTC",
        value: "rtc",
      },
    ],
  },
  {
    value: "LC",
    label: "LOGISTICS COMMAND",
    subnav: [
      {
        label: "613 FPG",
        value: "613-fpg",
      },
      {
        label: "631 ACMD",
        value: "631-acmd",
      },
      {
        label: "633 CAD",
        value: "633-cad",
      },
      {
        label: "635 ASG",
        value: "635-asg",
      },
      {
        label: "641 COMMS GP",
        value: "641-comms",
      },
      {
        label: "643 ESD",
        value: "643-esd",
      },
      {
        label: "651 BSG",
        value: "651-bsg",
      },
      {
        label: "653 NAF STN",
        value: "653-naf-stn",
      },
      {
        label: "661 NAFH",
        value: "661-nafh",
      },
      {
        label: "663 M&C HOSP",
        value: "663-mch",
      },
      {
        label: "671 NAF STN",
        value: "671-naf-stn",
      },
    ],
  },
];
export const dru = [
  {
    value: "011-paf",
    label: "011 PAF",
  },
  {
    value: "013-qrf",
    label: "013 QRF",
  },
  {
    value: "015-sig",
    label: "015 SIG",
  },
  {
    value: "041-cis",
    label: "041 CIS DEPOT",
  },
  {
    value: "051-pmg",
    label: "051 PMG",
  },
  {
    value: "053-hq-naf-camp",
    label: "053 HQ NAF CAMP",
  },
  {
    value: "055-naf-camp",
    label: "055 NAF CAMP",
  },
  {
    value: "057-pig",
    label: "057 PIG",
  },
  {
    value: "061-amc",
    label: "061 AMC",
  },
  {
    value: "063-nafh",
    label: "063 NAFH",
  },
  {
    value: "081-pag",
    label: "081 PAG",
  },
  {
    value: "",
    label: "OTHERS",
    subnav: [
      {
        label: "AFIT",
        value: "afit",
      },
      {
        label: "AFRDC",
        value: "afrdc",
      },
      {
        label: "NAFILGC",
        value: "nafilgc",
      },
      {
        label: "NAFILGC",
        value: "nafil",
      },
      {
        label: "NAFILHCC",
        value: "nafilhcc",
      },
      {
        label: "NAFIL PROP",
        value: "nafilprop",
      },
      {
        label: "AWC NAF",
        value: "awc-naf",
      },
      {
        label: "AWC",
        value: "awc",
      },
      {
        label: "NADC",
        value: "nadc",
      },
      {
        label: "NAFWC",
        value: "nafwc",
      },
      {
        label: "AETSL",
        value: "aetsl",
      },
      {
        label: "NAFRC",
        value: "nafrc",
      },
      {
        label: "NAFSMSAM",
        value: "nafsmsam",
      },
      {
        label: "NAFCONS",
        value: "nafcons",
      },
      {
        label: "IAPS",
        value: "iaps",
      },
      {
        label: "NAFSFA",
        value: "nafsfa",
      },
    ],
  },
];


export const headquatersUnits = [
  {
    value: "cas-office",
    label: "CAS OFFICE",
  },
  { value: "paso-cas", label: "PASO-CAS" },
  { value: "pimt", label: "PIMT" },
  { value: "ails", label: "AILS" },
  { value: "nafomb", label: "NAFOMB" },

  {
    value: "policy-plans",
    label: "POLICY & PLANS",
  },
  { value: "dopol", label: "DOPOL" },
  { value: "doplans", label: "DOPLANS" },
  { value: "dnt", label: "DNT" },
  { value: "doma", label: "DOMA" },
  {
    value: "training-ops",
    label: "TRAINING & OPS",
  },
  { value: "doo", label: "DOO" },
  { value: "dot", label: "DOT" },
  { value: "doregt", label: "DOREGT" },
  { value: "dats", label: "DATS" },
  { value: "dcmr", label: "DCMR" },
  {
    value: "air-inteligence",
    label: "AIR INTELLIGENCE",
  },
  { value: "dint", label: "DINT" },
  { value: "dcis", label: "DCIS" },

  { value: "disr", label: "DISR" },
  { value: "dtech-int", label: "DTECH INT" },
  {
    value: "aircraft-engineering",
    label: "AIRCRAFT ENGINEERING",
  },
  { value: "dae", label: "DAE" },
  { value: "doarm", label: "DOARM" },
  { value: "daqa", label: "DAQA" },
  { value: "dmsm", label: "DMSM" },
  //logistics branch and units
  {
    value: "logistics",
    label: "LOGISTICS",
  },
  { value: "dol", label: "DOL" },
  { value: "doproc", label: "DOPROC" },
  { value: "dow", label: "DOW" },
  { value: "dos", label: "DOS" },
  { value: "dcats", label: "DCATS" },

  //CIS
  {
    value: "comms",
    label: "COMMUNICATION INFORMATION SYSTEM",
  },
  { value: "dcomms", label: "DCOMMS" },
  { value: "dit", label: "DIT" },
  { value: "dradar", label: "DRADAR" },
  { value: "dspace-tech", label: "DSPACE TECH" },

  //Admin
  {
    value: "administration",
    label: "ADMINISTRATION",
  },
  { value: "doa", label: "DOA" },
  { value: "dva", label: "DVA" },
  { value: "dap", label: "DAP" },
  { value: "dls", label: "DLS" },
  { value: "dopri", label: "DOPRI" },
  { value: "doedn", label: "DOEDN" },
  { value: "dspe", label: "DSSPE" },
  { value: "dcrc", label: "DC-RC" },
  { value: "dcp", label: "DC-P" },
  { value: "doia", label: "DOIA" },
  {
    value: "cose",
    label: "STAN & EVAL",
  },
  { value: "doeval", label: "DOEVAL" },
  { value: "dosaf", label: "DOSAF" },
  { value: "dr&d", label: "DR&D" },
  { value: "dom", label: "DOM" },
  {
    value: "airsec",
    label: "AIRSEC",
  },
  { value: "dpm", label: "DPM" },
  { value: "drrr", label: "DRRR" },
  {
    value: "medical-services",
    label: "MEDICAL SERVICES",
  },
  { value: "dcs", label: "DCS" },
  { value: "doms", label: "DOMS" },
  { value: "dphhs", label: "DPHHS" },
  { value: "dns", label: "DNS" },
  { value: "dots", label: "DOTS" },
  { value: "dds", label: "DDS" },
  { value: "dmss", label: "DMSS" },
  -{
    value: "account-budget",
    label: "ACCOUNT & BUDGET",
  },
  { value: "dof", label: "DOF" },
  { value: "dobud", label: "DOBUD" },
  { value: "daccts", label: "DACCTS" },
  { value: "doinsp", label: "DOINSP" },
];

export const commandsUnits = [
  //TAC Units
  {
    value: "tac",
    label: "TACTICAL AIR COMMAND",
  },
  {
    label: "101 ADG ",
    value: "101-adg",
  },
  {
    label: "103 STG",
    value: "103-stg",
  },
  {
    label: "105 CG ",
    value: "105-cg",
  },
  {
    label: "107 AMG",
    value: "107-amg",
  },
  {
    label: "109 CRG",
    value: "109-crg",
  },
  {
    label: "115 SOG",
    value: "115-sog",
  },
  {
    label: "119 CG",
    value: "119-cg",
  },
  {
    label: "120 FPG",
    value: "120-fpg",
  },
  {
    label: "131 ENGR GP",
    value: "131-eng-gp",
  },
  {
    label: "141 COMMS GP",
    value: "141-comms-gp",
  },
  {
    label: "151 BSG",
    value: "151-bsg",
  },
  {
    label: "153 BSG",
    value: "153-bsg",
  },
  {
    label: "161 NAFH",
    value: "161-nafh",
  },
  {
    label: "163 NAFH",
    value: "163-nafh",
  },
  {
    label: "HEL DET",
    value: "hel-det",
  },
  {
    label: "NAFRH PH",
    value: "nafrh-ph",
  },

  //SOC Units
  {
    value: "soc",
    label: "SPECIAL OPERATIONS COMMAND",
  },
  {
    label: "201 CG",
    value: "201-cg",
  },
  {
    label: "203  ISR",
    value: "203-isr",
  },
  {
    label: "205 SOG",
    value: "205-sog",
  },
  {
    label: "207 QRG",
    value: "207-qrg",
  },
  {
    label: "211 FPG",
    value: "211-fpg",
  },
  {
    label: "212 FPG",
    value: "212-fpg",
  },
  {
    label: "213 FOB",
    value: "213-fob",
  },
  {
    label: "231 HOD",
    value: "231-hod",
  },
  {
    label: "241 COMMS GP",
    value: "241-comms",
  },
  {
    label: "251 BSG",
    value: "251-bsg",
  },
  {
    label: "261 NAFRH",
    value: "261-nafrh",
  },
  {
    label: "263 NAFRH",
    value: "263-nafrh",
  },

  //MC Units
  {
    value: "mc",
    label: "MOBILITY COMMAND",
  },
  {
    label: "301 HAG",
    value: "301-hag",
  },
  {
    label: "303 MAG",
    value: "303-mag",
  },
  {
    label: "305 SMG",
    value: "305-smg",
  },
  {
    label: "307 EAG",
    value: "307-eag",
  },
  {
    label: "341 COMMS GP",
    value: "341-comms",
  },

  //ATC Units
  {
    value: "atc",
    label: "AIR TRAINING COMMAND",
  },
  {
    label: "401 FTS",
    value: "401-fts",
  },
  {
    label: "403 FTS",
    value: "403-fts",
  },
  {
    label: "405 HCTG",
    value: "405-hctg",
  },
  {
    label: "407 ACTG",
    value: "407-actg",
  },
  {
    label: "409 IHFS",
    value: "409-ihfs",
  },
  {
    label: "410 CFS",
    value: "410-cfs",
  },
  {
    label: "413 FPG",
    value: "413-fpg",
  },
  {
    label: "431 ENGR GP",
    value: "431-engr",
  },
  {
    label: "441 COMMS GP",
    value: "441-comms",
  },
  {
    label: "453 BSG",
    value: "453-bsg",
  },
  {
    label: "455 BSG",
    value: "455-bsg",
  },
  {
    label: "461 NAFH",
    value: "461-nafh",
  },
  {
    label: "465 NAFH",
    value: "465-nafh",
  },
  {
    label: "ATSTC",
    value: "atstc",
  },
  {
    label: "NAFIS",
    value: "nafis",
  },
  {
    label: "NAFSAINT",
    value: "nafsaint",
  },
  {
    label: "NAF CAOCC",
    value: "nafcaocc",
  },

  //GTC Units
  {
    value: "gtc",
    label: "GROUND TRAINING COMMAND",
  },
  {
    label: "541 COMMS",
    value: "541-comms",
  },
  {
    label: "551 NAF STN",
    value: "551-naf-stn",
  },
  {
    label: "553 BSG",
    value: "553-bsg",
  },
  {
    label: "561 NAFH",
    value: "561-nafh",
  },
  {
    label: "563 NAFH",
    value: "563-nafh",
  },
  {
    label: "APTC",
    value: "aptc",
  },
  {
    label: "MTC",
    value: "mtc",
  },
  {
    label: "NAFIAM",
    value: "nafiam",
  },
  {
    label: "RTC",
    value: "rtc",
  },

  //Logistics Unit
  {
    value: "LC",
    label: "LOGISTICS COMMAND",
  },
  {
    label: "613 FPG",
    value: "613-fpg",
  },
  {
    label: "631 ACMD",
    value: "631-acmd",
  },
  {
    label: "633 CAD",
    value: "633-cad",
  },
  {
    label: "635 ASG",
    value: "635-asg",
  },
  {
    label: "641 COMMS GP",
    value: "641-comms",
  },
  {
    label: "643 ESD",
    value: "643-esd",
  },
  {
    label: "651 BSG",
    value: "651-bsg",
  },
  {
    label: "653 NAF STN",
    value: "653-naf-stn",
  },
  {
    label: "661 NAFH",
    value: "661-nafh",
  },
  {
    label: "663 M&C HOSP",
    value: "663-mch",
  },
  {
    label: "671 NAF STN",
    value: "671-naf-stn",
  },
];

export const druUnits = [
  {
    value: "011-paf",
    label: "011 PAF",
  },
  {
    value: "013-qrf",
    label: "013 QRF",
  },
  {
    value: "015-sig",
    label: "015 SIG",
  },
  {
    value: "041-cis",
    label: "041 CIS DEPOT",
  },
  {
    value: "051-pmg",
    label: "051 PMG",
  },
  {
    value: "053-hq-naf-camp",
    label: "053 HQ NAF CAMP",
  },
  {
    value: "055-naf-camp",
    label: "055 NAF CAMP",
  },
  {
    value: "057-pig",
    label: "057 PIG",
  },
  {
    value: "061-amc",
    label: "061 AMC",
  },
  {
    value: "063-nafh",
    label: "063 NAFH",
  },
  {
    value: "081-pag",
    label: "081 PAG",
  },
  {
    label: "AFIT",
    value: "afit",
  },
  {
    label: "AFRDC",
    value: "afrdc",
  },
  {
    label: "NAFILGC",
    value: "nafilgc",
  },
  {
    label: "NAFILGC",
    value: "nafil",
  },
  {
    label: "NAFILHCC",
    value: "nafilhcc",
  },
  {
    label: "NAFIL PROP",
    value: "nafilprop",
  },
  {
    label: "AWC NAF",
    value: "awc-naf",
  },
  {
    label: "AWC",
    value: "awc",
  },
  {
    label: "NADC",
    value: "nadc",
  },
  {
    label: "NAFWC",
    value: "nafwc",
  },
  {
    label: "AETSL",
    value: "aetsl",
  },
  {
    label: "NAFRC",
    value: "nafrc",
  },
  {
    label: "NAFSMSAM",
    value: "nafsmsam",
  },
  {
    label: "NAFCONS",
    value: "nafcons",
  },
  {
    label: "IAPS",
    value: "iaps",
  },
  {
    label: "NAFSFA",
    value: "nafsfa",
  },
];

export const mergedUnits = [...headquatersUnits, ...commandsUnits, ...druUnits];
