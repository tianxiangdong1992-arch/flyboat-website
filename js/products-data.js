window.PRODUCTS_DATA = {

  // ============================================================
  // CATEGORY: Metal Oxide Varistor (slug: metal-oxide-varistor)
  // ============================================================

  "ac-varistor": {
    id: "ac-varistor",
    name: "AC Varistor",
    category: "Metal Oxide Varistor",
    categorySlug: "metal-oxide-varistor",
    shortDesc: "High Voltage Power Surge Protector Metal Oxide Varistor Class I 20S-C U1MA(V): 80-1800 UAC: 60-1000",
    description: "<p>Voltage Power Surge Protector Metal Oxide Varistor Class I. The AC varistor is primarily designed for surge protection in AC power systems.</p>",
    features: [
      "Small figure, large capacitance and energy",
      "Security working, operating easily, ethoxyline resin-enveloped",
      "Response time: <25ns",
      "Using ambient temperature: -40\u00b0C to +85\u00b0C",
      "Insulation resistance: >=500 MOhm",
      "Temperature coefficient of varistor voltage: -0.5%/\u00b0C",
      "Chip diameter: 5, 7, 10, 14, 20, 25, 32, 40mm",
      "Allowable tolerance of varistor voltage: K \u00b110%"
    ],
    applications: [
      "Transistor, diode, IC, thyristor and semiconductor switch element protection",
      "Surge absorption in household appliance, industrial electronics, relay and electromagnetic valve",
      "Electrostatic discharge noise spike suppression",
      "Leakage-protection switch over-voltage protection",
      "Thunderbolt and over-voltage protection on telecommunication apparatus"
    ],
    specs: [
      { label: "Material", value: "Epoxy Resin Coating" },
      { label: "Applicable Fuse", value: "Blade Fuse Glass Fuse" },
      { label: "Color", value: "Blue" },
      { label: "Operating Temperature", value: "-40 to +85\u00b0C" }
    ],
    specTables: [
      {
        title: "20SK Series Technical Parameters",
        headers: ["Type", "U1mA (V)", "Tolerance (%)", "UAC (V)", "UDC (V)", "In (kA)", "Imax (kA)", "UP (V)", "ETM (J)"],
        rows: [
          ["20SK431", "430", "\u00b110", "275", "350", "7", "15", "990", "340"],
          ["20SK471", "620", "\u00b110", "300", "385", "7", "15", "1070", "360"],
          ["20SK511", "430", "\u00b110", "320", "410", "7", "15", "1150", "390"],
          ["20SK561", "620", "\u00b110", "350", "450", "7", "15", "1250", "420"],
          ["20SK621", "430", "\u00b110", "385", "505", "7", "15", "1350", "460"],
          ["20SK681", "620", "\u00b110", "420", "560", "7", "15", "1520", "460"],
          ["20SK711", "430", "\u00b110", "440", "585", "7", "15", "1600", "470"],
          ["20SK751", "620", "\u00b110", "460", "615", "7", "15", "1700", "475"],
          ["20SK781", "430", "\u00b110", "485", "640", "7", "15", "1760", "480"],
          ["20SK821", "431", "\u00b110", "510", "670", "7", "15", "1800", "485"]
        ]
      }
    ],
    image: "images/products/ac-varistor.jpg",
    standards: ["UL 1449", "cUL"]
  },

  "mov-dc": {
    id: "mov-dc",
    name: "MOV DC",
    category: "Metal Oxide Varistor",
    categorySlug: "metal-oxide-varistor",
    shortDesc: "FLYBOAT 34S Protected Varistor Series for DC applications",
    description: "<p>The FLYBOAT 34S protected varistor series comprises a 34mm square format varistor element (MOV) with an integral activated element designed to suppress transient overvoltages.</p>",
    features: [
      "Wide voltage range selection - from 14 VRMS to 680 VRMS",
      "Response time of less than 20 ns",
      "Low standby power",
      "Low capacitance values",
      "High body insulation - ochre coating provides protection up to 2500V",
      "UL 1449 Edition 3 approved",
      "Non-flammable per IEC standards",
      "Non-porous lacquer coating"
    ],
    applications: [
      "Computers",
      "Timers",
      "Amplifiers",
      "Medical analysis equipment",
      "Street lighting",
      "Telecommunications",
      "Automotive",
      "Electronic home appliances",
      "Power supplies",
      "Railway distribution"
    ],
    specs: [
      { label: "Varistor Voltage Range", value: "82-1600V" },
      { label: "Withstanding Surge Current", value: "30000-40000A" },
      { label: "Response Time", value: "<25ns" },
      { label: "Operating Temperature", value: "-40 to +85\u00b0C" },
      { label: "Material", value: "Epoxy Resin Coating" },
      { label: "Color", value: "Blue" }
    ],
    specTables: [
      {
        title: "34S Series Technical Parameters",
        headers: ["Part Number", "Vac (V)", "Vdc (V)", "V1mA (V)", "Ip (A)", "Vc (V)", "I (A)", "Energy (J)", "Cap @1KHz (pF)"],
        rows: [
          ["34S330K", "20", "26", "33 (30-36)", "60", "65", "12000", "50", "43000"],
          ["34S390K", "25", "31", "39 (35-43)", "60", "77", "12000", "65", "31500"],
          ["34S470K", "30", "38", "47 (42-52)", "60", "93", "12000", "75", "28000"],
          ["34S560K", "35", "45", "56 (50-62)", "60", "110", "12000", "90", "24500"],
          ["34S680K", "40", "56", "68 (61-75)", "60", "135", "12000", "110", "21500"],
          ["34S820K", "50", "65", "82 (74-90)", "300", "135", "30000", "135", "19500"],
          ["34S101K", "60", "85", "100 (90-110)", "300", "165", "30000", "165", "15500"],
          ["34S121K", "75", "100", "120 (108-132)", "300", "200", "30000", "200", "13000"],
          ["34S151K", "95", "125", "150 (135-165)", "300", "250", "30000", "260", "11000"],
          ["34S181K", "115", "150", "180 (162-198)", "300", "300", "30000", "300", "9000"],
          ["34S201K", "130", "170", "200 (180-220)", "300", "340", "40000", "330", "8000"],
          ["34S221K", "140", "180", "220 (198-242)", "300", "360", "40000", "360", "7800"],
          ["34S241K", "150", "200", "240 (216-264)", "300", "395", "40000", "390", "7600"],
          ["34S271K", "175", "225", "270 (243-297)", "300", "455", "40000", "420", "7200"],
          ["34S301K", "190", "250", "300 (270-330)", "300", "500", "40000", "460", "7000"],
          ["34S331K", "210", "275", "330 (297-363)", "300", "550", "40000", "500", "6400"],
          ["34S361K", "230", "300", "360 (324-396)", "300", "595", "40000", "510", "6000"],
          ["34S391K", "250", "320", "390 (351-429)", "300", "650", "40000", "530", "4800"],
          ["34S431K", "275", "350", "430 (387-473)", "300", "710", "40000", "600", "4600"],
          ["34S471K", "300", "385", "470 (423-517)", "300", "775", "40000", "650", "4100"],
          ["34S511K", "320", "415", "510 (459-561)", "300", "845", "40000", "700", "4000"],
          ["34S561K", "350", "460", "560 (504-616)", "300", "925", "40000", "730", "3800"],
          ["34S621K", "385", "505", "620 (558-682)", "300", "1025", "40000", "780", "3600"],
          ["34S681K", "420", "560", "680 (612-748)", "300", "1120", "40000", "810", "3300"],
          ["34S751K", "460", "615", "750 (675-825)", "300", "1240", "40000", "850", "3000"],
          ["34S781K", "485", "640", "780 (702-858)", "300", "1290", "40000", "930", "2850"],
          ["34S821K", "510", "670", "820 (738-902)", "300", "1355", "40000", "970", "2700"],
          ["34S911K", "550", "745", "910 (819-1001)", "300", "1500", "40000", "1050", "2100"],
          ["34S951K", "575", "765", "950 (855-1045)", "300", "1570", "40000", "1080", "1900"],
          ["34S102K", "625", "825", "1000 (900-1100)", "300", "1650", "40000", "1120", "1700"],
          ["34S112K", "680", "895", "1100 (990-1210)", "300", "1815", "40000", "1250", "1520"],
          ["34S122K", "750", "990", "1200 (1080-1320)", "300", "1980", "40000", "1340", "1400"],
          ["34S142K", "880", "1140", "1400 (1260-1540)", "300", "2310", "40000", "1400", "1200"],
          ["34S162K", "1000", "1280", "1600 (1440-1760)", "300", "2640", "40000", "1500", "1100"]
        ]
      }
    ],
    image: "images/products/mov-dc.jpg",
    standards: ["UL 1449 Ed.3", "IEC"]
  },

  "class-i-mov": {
    id: "class-i-mov",
    name: "Class I MOV",
    category: "Metal Oxide Varistor",
    categorySlug: "metal-oxide-varistor",
    shortDesc: "34S Square 220V High Power MOV Varistor - Peak current Imax 40kA",
    description: "<p>Peak current is reached the world leading level. It can afford 8/20us impulse, peak current Imax 40kA punch 2 times.</p>",
    features: [
      "34S metal oxide varistor (MOV) with epoxy resin",
      "Diameter and thickness controlled within design scale",
      "Peak current reaches world leading level - 40kA (8/20us impulse, Imax 40kA, punch 2 times)",
      "Thermal stability with 145-degree thermal cutoff",
      "Energy absorption: 2ms impulse at 600A, max capacity >1000J",
      "Lifetime: 83% varistor voltage at 85\u00b0C, voltage change rate <\u00b110%",
      "Power frequency withstand: 1.2x electric load for 5 minutes",
      "Stability: Air exposure one week, varistor voltage and leakage current <\u00b110%"
    ],
    applications: [
      "Transistor, diode, IC, thyristor, semiconductor switch element protection",
      "Electronic equipment protection"
    ],
    specs: [
      { label: "Model Number", value: "34S" },
      { label: "Brand", value: "FLYBOAT" },
      { label: "Series", value: "7D" },
      { label: "Voltage", value: "11-1000V" },
      { label: "Color", value: "BLUE" },
      { label: "Diameter", value: "7mm" },
      { label: "Min Order", value: "100000 Piece" },
      { label: "Delivery Time", value: "7-30 DAYS" },
      { label: "Available Diameters", value: "7MM, 10MM, 14MM, 20MM" },
      { label: "Available Series", value: "5D, 7D, 10D, 14D, 20D, 32D, 34D, 32S, 34S, 40D" }
    ],
    specTables: [],
    image: "images/products/class-i-mov.jpg",
    standards: ["UL 1449", "IEC61643-331.2017"]
  },

  "industrial-high-energy-varistor": {
    id: "industrial-high-energy-varistor",
    name: "Industrial High Energy Varistor",
    category: "Metal Oxide Varistor",
    categorySlug: "metal-oxide-varistor",
    shortDesc: "Metal Oxide Varistor Class I 22S-U-LV U1MA(V):80-1800 UAC:60-1000",
    description: "<p>Metal oxide varistors typically constructed from zinc oxide combined with small additions of other metal oxides such as cobalt, manganese or bismuth.</p>",
    features: [
      "Fast responding to transient over-voltage",
      "Large absorbing transient energy capability",
      "Low clamping ratio and no follow-on current",
      "Meets MSL level 1, per J-STD-020",
      "Wide operating voltage range 11 to 1600 VRMS",
      "High surge current ratings up to 8 kA",
      "No derating up to 85\u00b0C ambient temperature"
    ],
    applications: [
      "Suppression of lightning and high levels of transient energy",
      "Low voltage power supplies in DC circuits",
      "Automotive applications",
      "Capacitor discharges, relay switching, inductive load switching protection",
      "Power supply, Telecommunication, Smart meter, PLC protection",
      "Consumer electronics surge protection",
      "Industrial electronics surge protection"
    ],
    specs: [
      { label: "Operating Temperature", value: "-40\u00b0C to +105\u00b0C (and +125\u00b0C)" },
      { label: "Storage Temperature", value: "-40\u00b0C to +125\u00b0C" },
      { label: "Payment", value: "T/T 50% deposit, 50% before delivery" },
      { label: "Delivery Terms", value: "EXW, FOB, CFR, CIF, DDU" },
      { label: "Lead Time", value: "3-7 days" }
    ],
    specTables: [],
    image: "images/products/industrial-high-energy-varistor.jpg",
    standards: ["UL 1449 4th", "cUL", "CQC"]
  },

  "metal-oxide-square-disc-varistors": {
    id: "metal-oxide-square-disc-varistors",
    name: "Metal Oxide Square Disc Varistors",
    category: "Metal Oxide Varistor",
    categorySlug: "metal-oxide-varistor",
    shortDesc: "Voltage Power Surge Protector Metal Oxide Varistor Class I 25D-C U1MA(V):80-1800",
    description: "<p>Square disc format varistors with accurately defined dimensional tolerances for specialized mounting and application requirements.</p>",
    features: [
      "Wide voltage range - 14 VRMS to 680 VRMS",
      "High energy absorption capability relative to size",
      "Response time <20 ns",
      "Low stand-by power",
      "Low capacitance values for digital switching circuitry",
      "High body insulation - ochre coating up to 2500V",
      "Available on tape with accurate dimensional tolerances",
      "UL 1449 edition 3 approved (file E332800)",
      "Non-flammable per IEC",
      "Non-porous lacquer for humid/toxic environments"
    ],
    applications: [],
    specs: [
      { label: "Manufacturing", value: "9 steps - Milling/mixing, Granulation, Pressing, Firing, Metallization, Attaching leads, Lacquering, Electrical testing (100%), Marking" },
      { label: "Quality", value: "100% final inspection and test, lot testing, periodic sample testing" }
    ],
    specTables: [],
    image: "images/products/metal-oxide-square-disc-varistors.jpg",
    standards: ["UL 1449 Ed.3 (E332800)", "VDE per IEC 61051-1/2", "CSA (219883)", "cUL (E332800)"]
  },

  "high-energy-suppressor-discs": {
    id: "high-energy-suppressor-discs",
    name: "High Energy Suppressor Discs",
    category: "Metal Oxide Varistor",
    categorySlug: "metal-oxide-varistor",
    shortDesc: "MOV Metal Oxide Varistor for SPD - 34R Series",
    description: "<p>FLYBOAT provided varistors for many international SPD brands. FLYBOAT was almost TOP 3 in the world for MOV Metal Oxide Varistor for surge protective device SPD.</p>",
    features: [
      "Lower prices",
      "Low capacitance",
      "High discharge current",
      "Continuous and repeated protection in intense environments"
    ],
    applications: [
      "CCTV supervisory control systems",
      "Video equipment protection",
      "Power, instrumentation, controls, network and data lines protection",
      "Radio antennas, GPS antennas, CATV, CCTV, satellite TV"
    ],
    specs: [
      { label: "Working Voltage", value: "220V/255V/275V/320V/385V/420V/440V/520V" },
      { label: "Normal Discharge", value: "40-80kA" },
      { label: "Max Discharge", value: "80-100kA" },
      { label: "Composite Types", value: "1P, 1P+N, 1+NPE, 2P+N, 3P+N, 3P+NPE" },
      { label: "Response Time", value: "25ns" },
      { label: "Suitable For", value: "TN-S, TN-C-S, TT systems at AC 50/60Hz" }
    ],
    specTables: [
      {
        title: "34R Series MOV Parameters",
        headers: ["Model", "V1.0mA (V)", "VC (V)", "IP (V)", "In 10x (A)", "IMax (kA)", "10/350us kA", "Energy (J)", "Cap (pF)"],
        rows: [
          ["34R241K-1", "150-200", "222", "270", "395", "300", "40/80/15.0", "480", "5650"],
          ["34R271K-1", "180-225", "256", "310", "455", "300", "--", "540", "5100"],
          ["34R301K-1", "190-250", "270", "330", "500", "300", "--", "600", "4510"],
          ["34R331K-1", "210-275", "297", "363", "550", "300", "AC 250 Y", "656", "4150"],
          ["34R361K-1", "230-300", "324", "396", "595", "300", "--", "745", "3750"],
          ["34R391K-1", "250-320", "362", "440", "650", "300", "--", "830", "3500"],
          ["34R431K-1", "275-350", "387", "473", "710", "300", "--", "920", "2950"],
          ["34R471K-1", "300-385", "423", "517", "775", "300", "--", "1000", "2880"],
          ["34R511K-1", "320-415", "459", "561", "845", "300", "AC 250", "1060", "2650"],
          ["34R561K-1", "350-460", "504", "616", "925", "300", "40/80/12.5", "1150", "2450"],
          ["34R621K-1", "385-505", "558", "682", "1025", "300", "--", "1250", "2200"],
          ["34R681K-1", "420-560", "612", "748", "1120", "300", "40/80/10.0", "1250", "2000"],
          ["34R711K-1", "440-585", "644", "786", "1180", "300", "--", "1280", "1950"],
          ["34R751K-1", "460-615", "675", "825", "1240", "300", "40/80/7.5", "1280", "1820"],
          ["34R781K-1", "485-640", "702", "858", "1290", "300", "--", "1350", "1750"]
        ]
      },
      {
        title: "SPD Technical Parameters",
        headers: ["Rated Voltage (V)", "Continuous Voltage Uc (V~)", "Standard Discharge In (KA)", "Max Imax (KA)", "Protection Level (KA~)", "Response Time (ns)"],
        rows: [
          ["220/380", "275/320/385/420", "5", "10", "1.2", "<=25"],
          ["220/380", "275/320/385/420", "10", "20", "1.6", "<=25"],
          ["220/380", "275/320/385/420", "20", "40", "1.8", "<=25"],
          ["220/380", "275/320/385/420", "30", "60", "2.2", "<=25"],
          ["220/380", "275/320/385/420", "60", "100", "2.8", "<=25"],
          ["220/255", "--", "40/60", "60/80", "1.2", "<=100"]
        ]
      }
    ],
    image: "images/products/high-energy-suppressor-discs.jpg",
    standards: ["IEC61643-1", "GB18802.1", "EN 61643-11"]
  },

  "mov-varistor-for-spd": {
    id: "mov-varistor-for-spd",
    name: "MOV Varistor For SPD",
    category: "Metal Oxide Varistor",
    categorySlug: "metal-oxide-varistor",
    shortDesc: "MOV Material Surge Protection Device SPD Working Voltage 220V-520V 25D Type",
    description: "<p>MOV Material Surge Protection Device SPD Working Voltage 220V-520V 25D Type Lightning SPD Surge Arrester.</p>",
    features: [
      "Voltage protection level Up up to 1.8 kV",
      "Pluggable Cartridges",
      "Remote Signaling Contact",
      "Storage temp: -10\u00b0C to +40\u00b0C",
      "Operating temp: -40\u00b0C to +85\u00b0C",
      "Electrode surface: Silering"
    ],
    applications: [],
    specs: [
      { label: "Shape", value: "Square" },
      { label: "Design", value: "Epoxy Coated" },
      { label: "Dimension", value: "42x42mm (excl. terminals)" },
      { label: "Tmax", value: "6.5mm" },
      { label: "Max Terminal Spacing", value: "5.5mm" }
    ],
    specTables: [
      {
        title: "Maximum Ratings",
        headers: ["Parameter", "Value"],
        rows: [
          ["VRMS, VM(AC)(V)", "680"],
          ["VDC, VM(DC)(V)", "895"],
          ["Typ.VN(DC)@1mA(DC)(V)", "1100"],
          ["10/350 us Iimp(kA)", "12.5"],
          ["Vc@Iimp (V)", "2500"],
          ["WTM@Iimp (KJ)", "24.3"],
          ["8/20 us In(kA)", "30"],
          ["Vc@In(V)", "3400"],
          ["IMAX,ITM(kA)", "60"],
          ["Typ.Cap (nF)@1kHz", "1.9"]
        ]
      },
      {
        title: "25D Series Production Range",
        headers: ["Type", "V1mA (V)", "Tolerance", "Uac (V)", "Udc (V)", "Up (V)", "I (A)", "Imax (kA)", "In (kA)", "E (J)"],
        rows: [
          ["25D471K", "470", "\u00b110", "300", "385", "775", "150", "20", "10", "300"],
          ["25D511K", "510", "\u00b110", "320", "415", "845", "150", "20", "10", "310"],
          ["25D561K", "560", "\u00b110", "345", "460", "925", "150", "20", "10", "320"],
          ["25D621K", "620", "\u00b110", "385", "505", "1025", "150", "20", "10", "330"],
          ["25D681K", "680", "\u00b110", "420", "560", "1120", "150", "20", "10", "340"],
          ["25D711K", "710", "\u00b110", "440", "585", "1180", "150", "20", "10", "350"],
          ["25D751K", "750", "\u00b110", "460", "615", "1240", "150", "20", "10", "360"],
          ["25D821K", "820", "\u00b110", "510", "670", "1355", "150", "20", "10", "380"]
        ]
      }
    ],
    image: "images/products/mov-varistor-for-spd.jpg",
    standards: []
  },

  "bare-disc-varistors": {
    id: "bare-disc-varistors",
    name: "Bare Disc Varistors",
    category: "Metal Oxide Varistor",
    categorySlug: "metal-oxide-varistor",
    shortDesc: "MOV LT - 34S911K 550VAc SPD Metal Oxide Varistor Class I 32D-C",
    description: "<p>Customized Bare Disc Varistors - direct replacement of MOV with advanced features. UL1449 4th approved (File No. E319871).</p>",
    features: [
      "Low clamping voltage",
      "No thermal runaway",
      "Very low capacitance",
      "High insulation resistance",
      "Small package for easy mounting",
      "Very long surge life",
      "Very fast response - almost 5x faster than MOV",
      "Very high surge current capacity",
      "UL recognised",
      "Quick thermal response with special thermal disconnector",
      "Wide operating temperature range",
      "Low leakage current",
      "Floating remote signaling contact (50mA, 12Vdc)",
      "Compact size"
    ],
    applications: [
      "AC mains",
      "Service entrance",
      "Heavy industrial"
    ],
    specs: [
      { label: "Trading Terms", value: "FOB" },
      { label: "Min Order", value: "1000" },
      { label: "Port", value: "GZ" },
      { label: "Delivery", value: "3-7 days" }
    ],
    specTables: [],
    image: "images/products/bare-disc-varistors.jpg",
    standards: ["UL1449 4th (E319871)", "IEC 60099-4 2014"]
  },

  "32d-metal-oxide-varistor": {
    id: "32d-metal-oxide-varistor",
    name: "32D Metal Oxide Varistor",
    category: "Metal Oxide Varistor",
    categorySlug: "metal-oxide-varistor",
    shortDesc: "Energy absorption >1000J, Peak current Imax 40kA",
    description: "<p>Energy absorption capacity, applied 2ms impulse, impulse current is 600A, the max energy absorption capacity is more than 1000J.</p>",
    features: [
      "Diameter and thickness controlled within design specs",
      "Peak current at world-leading levels",
      "8/20us impulse; Imax 40kA (2 times)",
      "Thermal stability: 145\u00b0C thermal cutoff",
      "Cutoff time: >=5s at 1A; 3-5s at 1.5A",
      "Lifetime: 83% varistor voltage at 85\u00b0C; voltage change <\u00b110%",
      "Power frequency withstand: 1.2x electric load for 5 minutes",
      "Stability: Air exposure one week, variation <\u00b110%"
    ],
    applications: [],
    specs: [],
    specTables: [
      {
        title: "34SK Series Technical Parameters",
        headers: ["Model", "U1mA (V)", "Tolerance", "UAC (V)", "UDC (V)", "In (kA)", "Imax (kA)", "UP (V)", "ETM (J)"],
        rows: [
          ["34SK101", "100", "\u00b110%", "60", "85", "20", "40", "360", "190"],
          ["34SK121", "120", "\u00b110%", "75", "100", "20", "40", "400", "230"],
          ["34SK151", "150", "\u00b110%", "95", "125", "20", "40", "450", "290"],
          ["34SK181", "180", "\u00b110%", "115", "150", "20", "40", "490", "340"],
          ["34SK201", "200", "\u00b110%", "130", "170", "20", "40", "520", "390"],
          ["34SK221", "220", "\u00b110%", "140", "180", "20", "40", "550", "440"],
          ["34SK241", "240", "\u00b110%", "150", "200", "20", "40", "600", "460"],
          ["34SK271", "270", "\u00b110%", "175", "225", "20", "40", "680", "530"],
          ["34SK301", "300", "\u00b110%", "195", "250", "20", "40", "770", "600"],
          ["34SK331", "330", "\u00b110%", "210", "270", "20", "40", "830", "650"],
          ["34SK361", "360", "\u00b110%", "230", "300", "20", "40", "910", "730"],
          ["34SK391", "390", "\u00b110%", "250", "320", "20", "50", "1000", "800"],
          ["34SK431", "430", "\u00b110%", "275", "350", "20", "50", "1050", "910"],
          ["34SK471", "470", "\u00b110%", "300", "385", "20", "50", "1100", "980"],
          ["34SK511", "510", "\u00b110%", "320", "410", "20", "50", "1150", "1050"],
          ["34SK561", "560", "\u00b110%", "350", "450", "20", "50", "1250", "1140"],
          ["34SK621", "620", "\u00b110%", "385", "505", "20", "50", "1450", "1240"],
          ["34SK621H", "620", "\u00b110%", "385", "505", "25", "60", "1600", "1280"],
          ["34SK681", "680", "\u00b110%", "420", "560", "20", "50", "1650", "1250"],
          ["34SK681H", "680", "\u00b110%", "420", "560", "25", "60", "1700", "1280"],
          ["34SK711", "710", "\u00b110%", "440", "585", "20", "40", "1750", "1260"],
          ["34SK751", "750", "\u00b110%", "460", "615", "20", "40", "1800", "1270"],
          ["34SK781", "780", "\u00b110%", "485", "640", "20", "40", "1750", "1280"],
          ["34SK821", "820", "\u00b110%", "510", "670", "20", "40", "1800", "1350"],
          ["34SK911", "910", "\u00b110%", "550", "745", "20", "40", "2100", "1460"],
          ["34SK951", "950", "\u00b110%", "575", "765", "20", "40", "2200", "1470"],
          ["34SK102", "1000", "\u00b110%", "625", "825", "20", "40", "2400", "1530"],
          ["34SK112", "1100", "\u00b110%", "680", "895", "20", "40", "2700", "1680"],
          ["34SK122", "1200", "\u00b110%", "750", "980", "20", "40", "3000", "1750"],
          ["34SK142", "1400", "\u00b110%", "820", "1120", "20", "40", "3200", "1780"],
          ["34SK152", "1500", "\u00b110%", "850", "1240", "20", "40", "3400", "1880"],
          ["34SK162", "1600", "\u00b110%", "910", "1320", "20", "40", "3600", "1920"],
          ["34SK182", "1800", "\u00b110%", "1000", "1465", "20", "40", "4000", "1980"]
        ]
      }
    ],
    image: "images/products/32d-metal-oxide-varistor.jpg",
    standards: ["UL E335803"]
  },

  "34s-metal-oxide-varistor": {
    id: "34s-metal-oxide-varistor",
    name: "34S Metal Oxide Varistor",
    category: "Metal Oxide Varistor",
    categorySlug: "metal-oxide-varistor",
    shortDesc: "34x34mm Square Shape Epoxy Encapsulated Zinc MOV 34S 40KA For SPD",
    description: "<p>The varistor MOV is mainly used for surge protection of low-voltage electrical appliances, most of which are zinc oxide varistors.</p>",
    features: [
      "Nanometer materials",
      "Power frequency breakdown point controlled technology",
      "2ms surge 100% screening",
      "100% reliability screening for energized ageing",
      "RoHS compliant, REACH, Halogen-free available",
      "Excellent clamping ratio",
      "Bidirectional and symmetrical V/I characteristics",
      "Large withstanding surge current capability",
      "Excellent thermal stability",
      "Operating temp: -40 to +125\u00b0C; Storage: -40 to +150\u00b0C",
      "UL, cUL: UL 1449 4th for SPD type 5"
    ],
    applications: [
      "Power Distribution",
      "Communication power",
      "Antenna",
      "New energy",
      "LED lighting",
      "Rail traffic system",
      "Industrial equipment"
    ],
    specs: [
      { label: "Range", value: "U1MA(V):80-1800 UAC:60-1000" },
      { label: "Size", value: "34x34mm" },
      { label: "Surge", value: "40KA" }
    ],
    specTables: [],
    image: "images/products/34s-metal-oxide-varistor.jpg",
    standards: ["UL 1449 4th", "cUL"]
  },

  // ============================================================
  // CATEGORY: DC SPD OEM (slug: dc-spd)
  // ============================================================

  "surge-protectors-signal-systems": {
    id: "surge-protectors-signal-systems",
    name: "Surge Protectors Signal Systems",
    category: "DC SPD OEM",
    categorySlug: "dc-spd",
    shortDesc: "CE 1000VDC Surge Protector Device DC Surge Suppressors Photovoltaic 2P SPD 20-40kA",
    description: "<p>This surge protector mainly used light volt power distribution system of lightning surge protection or other transient overvoltage. Products built for high voltage dc power supply overheating over-current protection function.</p>",
    features: [
      "Fast Delivery",
      "Quality Assurance",
      "24/7 Customer Service",
      "35mm DIN rail installation",
      "Module can change independently",
      "Remote communication alarm interface (dry contact)",
      "Product Warranty: Five Years"
    ],
    applications: [
      "Lightning surge protection in low voltage power distribution systems",
      "Protection against transient overvoltage in electrical systems",
      "High voltage DC power supply overheating and over-current protection",
      "Grade C transient protection for photovoltaic (PV) power systems",
      "Solar system surge protection",
      "Remote monitoring of surge protection with alarm interface"
    ],
    specs: [],
    specTables: [
      {
        title: "DC SPD Specifications by Voltage",
        headers: ["Parameter", "500V/600V", "1000V", "1200V"],
        rows: [
          ["Nominal PV System Voltage", "500V/600V", "1000V", "1200V"],
          ["MCOV [UCPV]", "630Vdc/700V", "1170Vdc", "1200Vdc"],
          ["Max Discharge Current (8/20us) [Imax]", "40kA", "40kA", "30kA"],
          ["Voltage Protection Level [UP]", "<=2.5kV", "<=4.0kV", "<=4.5kV"],
          ["Protection Level at 5kA [UP]", "<=2.0kV", "<=3.5kV", "<=4.0kV"],
          ["Fuse Breaking Capacity", "30kV/1000Vdc", "30kV/1000Vdc", "30kV/1200Vdc"]
        ]
      },
      {
        title: "Additional Parameters",
        headers: ["Parameter", "Value"],
        rows: [
          ["Technology", "Short-Circuit Interruption (SCI)"],
          ["Operating Temperature", "\u221240\u00b0C to +80\u00b0C"],
          ["Nominal Discharge Current In", "12.5kA"],
          ["Response Time", "<25ns"],
          ["Status Indication", "Green (good)/Red (replace)"],
          ["Min Conductor", "1.5mm\u00b2/14AWG"],
          ["Max Conductor", "35mm\u00b2/2AWG"],
          ["Mounting", "35mm DIN Rail per EN 60715"],
          ["Enclosure Material", "UL 94V0 Thermoplastic"],
          ["Protection", "IP20"],
          ["Capacity", "3 Modules, DIN 43880"]
        ]
      }
    ],
    image: "images/products/surge-protectors-signal-systems.jpg",
    standards: ["IEC 61643-11 Type 2", "IEC 61643-1 Class II"]
  },

  "power-line-spd": {
    id: "power-line-spd",
    name: "Power Line SPD",
    category: "DC SPD OEM",
    categorySlug: "dc-spd",
    shortDesc: "SPD DC 500V 800V 1000V 2P 20KA~40KA Low-voltage Arrester",
    description: "<p>ULTA series SPD is used for power supply system such as IT, TT, TN-C, TN-S, TN-CS for low-voltage AC distribution, for indirect/direct lightning surge protection. Price: 2.5-10 USD.</p>",
    features: [
      "Common mode (MC) protection capability",
      "Hybrid design incorporating both voltage-limiting and voltage-switching components",
      "Status indicator for device condition monitoring",
      "Fast response time to surge events",
      "Available in 1, 2, 3, or 4-pole configurations",
      "Short circuit current capacity up to 10kA (8/20us)",
      "Suitable for single-phase and three-phase power distribution systems"
    ],
    applications: [
      "Protect electric systems from thunder and instantaneous over-voltage",
      "On-loading electrical apparatus protection"
    ],
    specs: [
      { label: "Rated Voltage", value: "230/400V" },
      { label: "Frequency", value: "AC50/60Hz" },
      { label: "System Type", value: "3-phase" },
      { label: "Number of Poles", value: "1-2-3-4" },
      { label: "Short Circuit Current (8/20us)", value: "up to 10kA" }
    ],
    specTables: [],
    image: "images/products/power-line-spd.jpg",
    standards: ["GB/T18802.1/IEC61643-II", "IEC/EN 61643-1"]
  },

  "dc-mov-for-pv-system": {
    id: "dc-mov-for-pv-system",
    name: "DC MOV for PV System",
    category: "DC SPD OEM",
    categorySlug: "dc-spd",
    shortDesc: "4 Phase 100kA SPD Device AC 3P+N 40~80KA 60KA~100KA 385V 420V",
    description: "<p>The P100K385-53 is an extreme duty Type 1+2 designed to protect the entrance of the electrical installation. 'Multi-Varistor' technology allows best possible behavior for LV network (no follow-on current).</p>",
    features: [
      "Type 1+2 unipolar surge protector",
      "Iimp total: 100 kA on 10/350us impulse",
      "Imax: 140 kA on 8/20us impulse",
      "Internal disconnections, status indicators",
      "Remote signaling",
      "Double connection for active conductor",
      "DIN Rail mounted"
    ],
    applications: [
      "First-level lightning protection of equipment systems in areas with high lightning risk",
      "Protect the entrance of electrical installations",
      "Biphase, 3-phase or 3-phase + neutral networks in common mode or common and differential mode"
    ],
    specs: [],
    specTables: [
      {
        title: "P100K385-53 Specifications",
        headers: ["Model", "Uc (V)", "In (kA)", "Imax (kA)", "UP (kV)", "tA (ns)", "Temp Range", "Nominal Voltage", "Peak Withstand"],
        rows: [
          ["P100K385-53 1P", "385", "60", "100", "2.5", "<=25", "\u221240~80\u00b0C", "310V", "25KA/50KA"],
          ["P100K385-53 2P", "385", "60", "100", "2.5", "<=25", "\u221240~80\u00b0C", "310V", "25KA/50KA"],
          ["P100K385-53 4P", "385", "60", "100", "2.5", "<=25", "\u221240~80\u00b0C", "310V", "25KA/50KA"]
        ]
      }
    ],
    image: "images/products/dc-mov-for-pv-system.jpg",
    standards: ["GB/T18802.1/IEC61643-II"]
  },

  "solar-system-1000v": {
    id: "solar-system-1000v",
    name: "Solar System 1000V",
    category: "DC SPD OEM",
    categorySlug: "dc-spd",
    shortDesc: "AC400V surge arrester 50KA-100KA SPD 600V 1000V 1500V switch PV DC SPD",
    description: "<p>SPD designed in parallel module, flame-retardant shell and nice sealing performance with remote signal interface and fault indicating.</p>",
    features: [
      "High energy surge protection",
      "Pluggable replacement module",
      "Standard modular installation",
      "Reaction rate: 10\u207b\u2079 sec",
      "Built-in flash interrupter",
      "Remote alarm interface",
      "Max discharge current 20~80kA (8/20us)",
      "Failure detection indicator",
      "Overheat protection",
      "IP20, UL94 V0",
      "Latest thermal release technology",
      "Large flow capacity, low residual pressure"
    ],
    applications: [
      "First-level lightning protection for equipment systems in high-risk lightning strike areas",
      "TT system protection for low voltage equipment from surge damages",
      "Biphase, 3-phase, or 3-phase + neutral network protection in common or differential mode",
      "Entrance of electrical installations as Type 1+2 protection",
      "Single-phase and three-phase TT/TN/IT power supply systems",
      "220/380V power supply distribution system lightning protection",
      "Harsh environment protection (acid, alkali, dust, salt spray, humidity)"
    ],
    specs: [],
    specTables: [
      {
        title: "XH36CIT Series Specifications",
        headers: ["Parameter", "XH36CIT-15I 4P", "XH36CIT-25I 4P", "XH36CIT-30I 4P", "XH36CIT-50I 4P"],
        rows: [
          ["IEC Class", "I, II", "I, II", "I, II", "I, II"],
          ["Rated Voltage Un", "230V/400V", "230V/400V", "230V/400V", "230V/400V"],
          ["Nominal In (8/20us)", "15kA", "25kA", "30kA", "50kA"],
          ["Max Impact Iimp (10/350us)", "15kA", "25kA", "30kA", "50kA"],
          ["Max Continuous Uc", "275/320/385/440V", "275/320/385/440V", "275/320/385/440V", "275/320/385/440V"],
          ["Protection Level Up", "<=2.0kV", "<=2.2kV", "<=2.2kV", "<=2.5kV"],
          ["Front Fuse", "40A", "80A", "100A", "125A"],
          ["Protection Rating", "IP20", "IP20", "IP20", "IP20"],
          ["Flame Retardant", "UL94 V-0", "UL94 V-0", "UL94 V-0", "UL94 V-0"],
          ["Response Time", "<25ns", "<25ns", "<25ns", "<25ns"],
          ["Operating Temp", "\u221240~+85\u00b0C", "\u221240~+85\u00b0C", "\u221240~+85\u00b0C", "\u221240~+85\u00b0C"],
          ["Humidity", "<=95%", "<=95%", "<=95%", "<=95%"],
          ["Installation", "35mm DIN Rail", "35mm DIN Rail", "35mm DIN Rail", "35mm DIN Rail"],
          ["Housing", "PBT", "PA66", "PA66", "PA66"],
          ["Failure Indication", "Green/Red", "Green/Red", "Green/Red", "Green/Red"]
        ]
      }
    ],
    image: "images/products/solar-system-1000v.jpg",
    standards: ["IEC61643-11", "GB/T18802.11", "UL94 V-0"]
  },

  "1000v-dc-spd": {
    id: "1000v-dc-spd",
    name: "1000V DC SPD",
    category: "DC SPD OEM",
    categorySlug: "dc-spd",
    shortDesc: "60KA 3P 800V DC SPD T2 Level Solar Outdoor Power Protection",
    description: "<p>Installed in parallel on DC networks. High energy MOVs equipped with specific thermal disconnectors and failure indicators. TUV &amp; CE certified.</p>",
    features: [
      "Indicator window (green OK / red failure)",
      "Fully enclosed terminal",
      "PC flame retardant shell",
      "Replaceable module",
      "PPT material cover anti-flame with fire insulation properties",
      "FLYBOAT chip with zinc oxide",
      "Remote control with signal contact",
      "TUV certificate EN50539-11",
      "Common and differential mode protection for DC networks",
      "Installation at both DC line ends (solar panel side and inverter/converter side)"
    ],
    applications: [
      "Protect electrical equipment from lightning/operation/power frequency over-voltage",
      "Front of inverter input and back of inverter output",
      "Parallel in electric circuits",
      "Solar photovoltaic power supply systems",
      "Outdoor power systems with extended line routing"
    ],
    specs: [
      { label: "Voltage Levels", value: "1500V/1200V/1000V/500V" },
      { label: "Configuration", value: "3P" },
      { label: "Discharge", value: "20-60KA" },
      { label: "Response", value: "25-50ns" },
      { label: "Lifespan", value: "50 times" },
      { label: "Cover", value: "PPT anti-flame" },
      { label: "Shell", value: "PC flame retardant" }
    ],
    specTables: [],
    image: "images/products/1000v-dc-spd.jpg",
    standards: ["TUV", "EN50539-11", "CE"]
  },

  // ============================================================
  // CATEGORY: AC SPD OEM (slug: ac-spd)
  // ============================================================

  "ac-surge-protective-device-spd": {
    id: "ac-surge-protective-device-spd",
    name: "AC Surge Protective Device SPD",
    category: "AC SPD OEM",
    categorySlug: "ac-spd",
    shortDesc: "SPD DC 3P 1000V 1500V 20KA~40KA Din Rail Solar Surge Protector",
    description: "<p>AC surge protector (TVSS) designed to protect sensitive electrical equipment from transient voltage spikes. Uses Metal Oxide Varistor (MOV) protection circuits.</p>",
    features: [
      "Failure indication and centralized remote signalling alarm dry contacts",
      "High discharge capacity and low residual voltage",
      "Over-temperature protection",
      "Short-circuit interruption (SCI) overcurrent protection",
      "IP20 rating with UL94 V0 material classification",
      "DIN35mm rail mounting",
      "Single-phase and three-phase configuration options",
      "Protection modes for L-N and N-PE configurations",
      "Response time under 25 nanoseconds"
    ],
    applications: [
      "Protect sensitive electric and electronic equipment from transient voltage",
      "Lightning surge and electrical spike protection",
      "PV/solar power system surge protection",
      "Low-voltage AC power distribution systems"
    ],
    specs: [],
    specTables: [
      {
        title: "Standard AC SPD Specifications",
        headers: ["Parameter", "Value"],
        rows: [
          ["Operating Temperature", "\u221240~+80\u00b0C"],
          ["Relative Humidity", "<=95% (25\u00b0C)"],
          ["Working Frequency", "50/60Hz"],
          ["Rated Working Voltage Uo", "230V/400V"],
          ["Max Continuous Voltage Uc", "275/320/385/420V"],
          ["Nominal Discharge In (8/20us)", "20kA"],
          ["Max Discharge Imax (8/20us)", "40kA"],
          ["Voltage Protection Level Up", "<=1.2kV"],
          ["Max Overcurrent Protection", "80A (gL/gG)"],
          ["Enclosure Material", "PBTV-0"],
          ["Protection", "IP20"],
          ["Mounting", "DIN35mm rails"],
          ["SPD Classification", "IEC 61643-1 Class II"],
          ["SPD Type", "EN 61643-11 Type 2"]
        ]
      },
      {
        title: "ULTIMA PK100 2-Pole",
        headers: ["Parameter", "Value"],
        rows: [
          ["Classification Test", "II"],
          ["Uoc Max", "500V DC"],
          ["Uc", "500V DC"],
          ["In (8/20us)", "20KA"],
          ["Imax (8/20us)", "40KA"],
          ["Up", "2.0KV"],
          ["Protection Class", "IP40"],
          ["Working Temp", "\u221230 to +70\u00b0C"],
          ["Dimensions", "36x90x67.6mm"],
          ["Weight", "0.25kg"]
        ]
      }
    ],
    image: "images/products/ac-surge-protective-device-spd.jpg",
    standards: ["IEC 61643-1 Class II", "EN 61643-11 Type 2", "CE", "RoHS"]
  },

  "ul-ce-spd": {
    id: "ul-ce-spd",
    name: "UL CE SPD",
    category: "AC SPD OEM",
    categorySlug: "ac-spd",
    shortDesc: "P20K385-51 Three Phase Surge Protector with UL & CE Certification",
    description: "<p>Plug in/out style surge protective device with color-coded visible window showing operating status. Double protection of over-heat and over-current.</p>",
    features: [
      "Plug in/out style",
      "Color-coded visible window",
      "Double protection: over-heat and over-current",
      "Remote signaling interface"
    ],
    applications: [
      "PV systems and solar power installations",
      "Household electrical protection",
      "Three-phase surge protection scenarios",
      "DC lightning protection at multiple voltage levels (500V, 800V, 1000V)",
      "Indoor use applications"
    ],
    specs: [
      { label: "Model", value: "P20K385-51" },
      { label: "Brand", value: "Flyboat" },
      { label: "Nominal Discharge", value: "20kA" },
      { label: "Max Continuous Voltage", value: "385V" },
      { label: "Max Discharge", value: "40kA" },
      { label: "Response Time", value: "<=25ns" },
      { label: "Overcurrent Protection", value: "125A gG" },
      { label: "Tolerance", value: "50 kArms" },
      { label: "Operating Temperature", value: "\u221240 to +80\u00b0C" },
      { label: "Protection", value: "IP20" }
    ],
    specTables: [
      {
        title: "DC Lightning Protection Chip Specs",
        headers: ["Parameter", "500V", "800V", "1000V"],
        rows: [
          ["Nominal In (KA 8/20us)", "2", "2", "3"],
          ["Module Width", "36mm", "36mm", "54mm"],
          ["Protection Level", "20/40", "20/40", "20/40"],
          ["Response Time", "2.2/25ns", "2.4/25ns", "2.6/25ns"],
          ["Rated Voltage (VDC)", "500", "800", "1000"],
          ["Continue Work Voltage (VDC)", "550", "880", "1100"],
          ["Leakage Current", "<=20uA", "<=20uA", "<=20uA"],
          ["Working Temp", "\u221240~+85\u00b0C", "\u221240~+85\u00b0C", "\u221240~+85\u00b0C"]
        ]
      }
    ],
    image: "images/products/ul-ce-spd.jpg",
    standards: ["UL", "CE"]
  },

  "imax-40ka-230-400v": {
    id: "imax-40ka-230-400v",
    name: "Imax 40KA 230/400V",
    category: "AC SPD OEM",
    categorySlug: "ac-spd",
    shortDesc: "ULTIMA T2 Surge Protective SPD Uc 255V In 10KA Imax 20KA",
    description: "<p>ULTIMA T2 surge protective SPD with rail installation. Available configurations from 10KA to 60KA.</p>",
    features: [
      "High energy surge protection, ns response speed",
      "Remote alarm interface",
      "High flame retardant, anti-corrosion",
      "Pluggable module design",
      "Built-in flash interrupter device"
    ],
    applications: [
      "Lightning protection systems for AC power distribution",
      "Commercial and industrial electrical installations",
      "Residential surge protection",
      "Three-phase power systems (1P/2P/3P/4P configurations)"
    ],
    specs: [
      { label: "Max Continuous Voltage Uc", value: "420V" },
      { label: "Nominal In", value: "60KA" },
      { label: "Model", value: "LY1-B100" },
      { label: "Max Imax", value: "100KA" },
      { label: "Up", value: "<=2.5KV" },
      { label: "Response", value: "<25ns" },
      { label: "Rated Voltage", value: "220V/380V" },
      { label: "Material", value: "UL94-V0" },
      { label: "Warranty", value: "2 years" },
      { label: "Uc Customizable", value: "220-600V" },
      { label: "Phases", value: "1P/2P/3P/4P" },
      { label: "Dimensions (1P)", value: "18x60x90mm" },
      { label: "Dimensions (2P)", value: "36x60x90mm" },
      { label: "Dimensions (3P)", value: "72x60x90mm" },
      { label: "Dimensions (4P)", value: "144x60x90mm" }
    ],
    specTables: [
      {
        title: "SPD Model Comparison",
        headers: ["SPD Model", "10I", "15I", "20I", "35I", "40I", "50I", "60I"],
        rows: [
          ["Nominal Capacity In", "5KA", "7.5KA", "10KA", "15KA", "20KA", "25KA", "30KA"],
          ["Max Capacity Imax", "10KA", "15KA", "20KA", "35KA", "40KA", "50KA", "60KA"],
          ["Protection Voltage Up", "<=0.7KV", "<=1.0KV", "<=1.2KV", "<=1.4KV", "<=1.5KV", "<=1.8KV", "<=1.9KV"]
        ]
      }
    ],
    image: "images/products/imax-40ka-230-400v.jpg",
    standards: []
  },

  "220v-10-40ka-surge-protector": {
    id: "220v-10-40ka-surge-protector",
    name: "220V 10/40kA Surge Protector",
    category: "AC SPD OEM",
    categorySlug: "ac-spd",
    shortDesc: "AC T2T3 Type 275/385V In 10/40kA 4P Three-Phase Surge Protection",
    description: "<p>100% brand new and high quality house surge protective device suitable for DC 420V 40KA.</p>",
    features: [
      "100% brand new and high quality material with long service life",
      "Stable performance and easy to install",
      "Green/Red window for operational status",
      "Rapid response time under 25 nanoseconds",
      "Fiber glass reinforced plastic shell",
      "Protection mode: L-N/N-PE"
    ],
    applications: [
      "Telecommunications",
      "Railway",
      "Internet",
      "Power supply",
      "Traffic",
      "House electronic surge protection"
    ],
    specs: [
      { label: "Rated Voltage", value: "220V" },
      { label: "Model", value: "2P 40kA" },
      { label: "Uc", value: "~420V" },
      { label: "UP", value: "<2.0KV" },
      { label: "Poles", value: "2" },
      { label: "Size", value: "9x6cm" },
      { label: "Weight", value: "225g" },
      { label: "Max Continuous", value: "385VAC" },
      { label: "Nominal In", value: "20kA (8/20us)" },
      { label: "Max Imax", value: "40kA" },
      { label: "Response", value: "<25ns" },
      { label: "Operating Temperature", value: "\u221240~+85\u00b0C" },
      { label: "Protection", value: "IP20" },
      { label: "Dimensions", value: "72\u00d790\u00d765mm" },
      { label: "Shell Material", value: "Fiber glass reinforced plastic" },
      { label: "Grounding Resistance", value: "\u22644\u03a9" },
      { label: "Live Wire", value: "\u22656mm\u00b2" },
      { label: "Earth Wire", value: "\u226510mm\u00b2" },
      { label: "Protection Mode", value: "L-N/N-PE" },
      { label: "Applicable Power", value: "Three Phase" },
      { label: "Humidity (25\u00b0C)", value: "\u226495%" }
    ],
    specTables: [],
    image: "images/products/220v-10-40ka-surge-protector.jpg",
    standards: ["CE", "TUV", "UL", "IEC 61643-1 Class II/Type 2", "GB18802.1"]
  },

  "220v-lightning-protection-three-phase": {
    id: "220v-lightning-protection-three-phase",
    name: "220V Lightning Protection Three Phase",
    category: "AC SPD OEM",
    categorySlug: "ac-spd",
    shortDesc: "Type 1 Heavy Duty Surge Protectors for Solar DC Systems",
    description: "<p>DS60PV are Type 1 heavy duty surge protectors, recommended when a direct lightning strike is possible. Available in 500- and 1000-VDC operating voltages.</p>",
    features: [
      "Enhanced surge protection",
      "Simplified plug-in modules",
      "Longer life expectancy",
      "Disconnection indicators",
      "Remote signaling of faults",
      "Optimized for TOV"
    ],
    applications: [
      "Solar photovoltaic (PV) systems",
      "DC power supply lines (both solar array side and inverter/converter side)",
      "Combiner box placement (DIN mount)",
      "Primary AC utility power supply protection",
      "Inverter DC input protection",
      "Underground or shielded connections between external PV arrays and control equipment",
      "Equipotential bonding installations"
    ],
    specs: [
      { label: "Pole", value: "2P" },
      { label: "Test", value: "Class II" },
      { label: "Uoc Max", value: "600 VDC" },
      { label: "Uc", value: "600 VDC" },
      { label: "In", value: "20kA" },
      { label: "Imax", value: "40kA" },
      { label: "Up", value: "2kV" },
      { label: "Dimensions", value: "36x90x67.6mm" },
      { label: "Weight", value: "0.24kg" },
      { label: "Ambient Temperature", value: "\u221230 to 70\u00b0C" },
      { label: "Hard Wire Capacity", value: "4\u201325mm\u00b2" },
      { label: "Flexible Wire Capacity", value: "4\u201316mm\u00b2" },
      { label: "Stripping Length", value: "10mm" },
      { label: "Main Circuit Torque", value: "3.5 Nm" },
      { label: "Protection Class (Profile)", value: "IP40" },
      { label: "Connection Port IP Rating", value: "IP20" }
    ],
    specTables: [],
    image: "images/products/220v-lightning-protection-three-phase.jpg",
    standards: ["IEC61643-1"]
  },

  // ============================================================
  // CATEGORY: Protection Modules (slug: protection-module)
  // ============================================================

  "surge-protective-modules": {
    id: "surge-protective-modules",
    name: "Surge Protective Modules",
    category: "Protection Modules",
    categorySlug: "protection-module",
    shortDesc: "UL 1449 4th Ed. Approved with 200kA SCCR Rating",
    description: "<p>The product family is applicable for all common electrical power systems. UL 1449 4rd Ed. Approved with a 200 kA SCCR rating - no additional overcurrent protection needed.</p>",
    features: [
      "Advanced Circuit Interruption (ACI) technology - switch/spark gap combination integrated in protection module",
      "No external backup fuse required due to ACI",
      "Zero leakage current due to galvanic isolation",
      "Energy coordination with Red/Line product family",
      "Vibration/shock tested per EN 60068-2",
      "Plug in/out style",
      "Double protection of over-heat and over-current",
      "Remote signaling interface",
      "200kA SCCR rating"
    ],
    applications: [
      "All common electrical power systems",
      "Type 2 surge arrester applications"
    ],
    specs: [
      { label: "Installation Step 1", value: "Cut off power before installing" },
      { label: "Installation Step 2", value: "Connect fuse/circuit breaker in series" },
      { label: "Installation Step 3", value: "Follow diagram: '+' anode, '-' cathode, PE earthing" },
      { label: "Installation Step 4", value: "Insert module properly after installation" },
      { label: "Installation Step 5", value: "Inspect fault display regularly" },
      { label: "Installation Step 6", value: "Parallel modules: wire short, thick, straight" }
    ],
    specTables: [],
    image: "images/products/surge-protective-modules.jpg",
    standards: ["UL 1449 4th Ed.", "EN 60068-2"]
  },

  "surge-replacement-module": {
    id: "surge-replacement-module",
    name: "Surge Replacement Module",
    category: "Protection Modules",
    categorySlug: "protection-module",
    shortDesc: "SPD 34sp1 Series Surge Protective Device with UL TUV",
    description: "<p>SPD Plastic Parts Copper Parts DC Electric photovoltaic PV surge protector surge arrestor accessory SPD Module 34sp1 Series.</p>",
    features: [
      "Replacement module for SPD devices",
      "Compatible with DC electrical systems",
      "Photovoltaic (PV) system compatible",
      "34SP1 Series design"
    ],
    applications: [
      "DC electrical systems",
      "Photovoltaic (PV) systems",
      "Overvoltage protection applications",
      "Surge protector module replacement"
    ],
    specs: [
      { label: "Model", value: "SPD B10K385/21" }
    ],
    specTables: [],
    image: "images/products/surge-replacement-module.jpg",
    standards: ["UL", "TUV"]
  },

  "onboard-surge-protection-device": {
    id: "onboard-surge-protection-device",
    name: "Onboard Surge Protection Device",
    category: "Protection Modules",
    categorySlug: "protection-module",
    shortDesc: "SPD DC 600V 800V 1000V 1500V Modular Core Din Rail Solar Outdoor",
    description: "<p>Modular core design for DIN rail installation in solar outdoor power protection applications.</p>",
    features: [
      "Patented Product",
      "Miniaturized Size",
      "Horizontal Mounting on PCB",
      "Differential and Common Mode Protections",
      "RoHS & REACH Compliant"
    ],
    applications: [
      "Solar power systems",
      "Outdoor installations",
      "Power protection systems",
      "Din Rail modular installations"
    ],
    specs: [
      { label: "Voltages", value: "DC 600V, 800V, 1000V, 1500V" }
    ],
    specTables: [],
    image: "images/products/onboard-surge-protection-device.jpg",
    standards: []
  },

  "spd-modular": {
    id: "spd-modular",
    name: "SPD Modular",
    category: "Protection Modules",
    categorySlug: "protection-module",
    shortDesc: "Din Rail Adjustable Over Voltage Protective Device 275V 420V 20~40KA",
    description: "<p>SPD Din rail adjustable over voltage protective device protector over current protection AC SPD Replace Module for 275V 420V 20~40KA.</p>",
    features: [
      "Din rail adjustable mounting",
      "Over voltage protection",
      "Over current protection",
      "Replacement module/core for surge protective devices",
      "AC SPD compatible"
    ],
    applications: [
      "AC surge protection replacement modules",
      "Over voltage and over current protection systems"
    ],
    specs: [
      { label: "Voltage", value: "275V/420V" },
      { label: "Discharge", value: "20~40KA" },
      { label: "Mount", value: "Din rail" }
    ],
    specTables: [],
    image: "images/products/spd-modular.jpg",
    standards: []
  },

  "plug-in-surge-arrester": {
    id: "plug-in-surge-arrester",
    name: "Plug-in Surge Arrester",
    category: "Protection Modules",
    categorySlug: "protection-module",
    shortDesc: "SPD Replace Module DC 600V 1000V 1500V 2P 20~40KA B20K385/51",
    description: "<p>Installed in parallel on DC networks. High energy MOVs with specific thermal disconnectors and failure indicators.</p>",
    features: [
      "Common and differential mode protection for DC networks",
      "Recommended placement at both ends of DC power supply line (solar panel side and inverter/converter side), especially for external and long line routing",
      "High-energy metal oxide varistors with thermal disconnectors",
      "Failure indicators included",
      "Replaceable plug-in module design",
      "Remote signal accessory available"
    ],
    applications: [
      "DC power system protection",
      "Solar installations and renewable energy systems",
      "Extended supply line surge suppression",
      "Inverter/converter side protection"
    ],
    specs: [],
    specTables: [
      {
        title: "DC Surge Protective Device Specs",
        headers: ["Parameter", "2P", "3P"],
        rows: [
          ["Code", "FSP-D40", "FSP-D40"],
          ["Voltage", "500/800/1000VDC", "800/900/1000VDC"],
          ["In (8/20us)", "20KA", "20KA"],
          ["Imax (8/20us)", "40KA", "40KA"],
          ["Standard", "IEC/EN61643", "IEC/EN61643"],
          ["Type", "II", "II"],
          ["Working Temp", "\u22125 to +40\u00b0C", "\u22125 to +40\u00b0C"],
          ["Protection", "IP20", "IP20"],
          ["Electrical Life", ">8000 times", ">8000 times"],
          ["Mechanical Life", ">2000 times", ">2000 times"],
          ["Dimensions (WxHxD)", "36x90x68mm", "54x90x68mm"],
          ["Installation", "35MM DIN RAIL", "35MM DIN RAIL"],
          ["Accessory", "Remote signal", "Remote signal"],
          ["Max Altitude", "<=2000M", "<=2000M"]
        ]
      }
    ],
    image: "images/products/plug-in-surge-arrester.jpg",
    standards: ["IEC/EN61643"]
  },

  // ============================================================
  // CATEGORY: Accessories for SPDs (slug: accessories-for-spds)
  // ============================================================

  "surge-protective-components": {
    id: "surge-protective-components",
    name: "Surge Protective Components",
    category: "Accessories for SPDs",
    categorySlug: "accessories-for-spds",
    shortDesc: "Replacement Cartridges for AC SPD 385V 10~20KA, 20~40KA, 30KA~60KA",
    description: "<p>Cartridges available for all discharge currents (40kA and 15kA) with and without condition indication. Allow simple replacement without cutting off power supply.</p>",
    features: [
      "Hot-swappable design - replacement without cutting off power supply",
      "Powerful creepage discharge spark gap technology",
      "Available for all discharge currents (40kA and 15kA) with optional condition indication",
      "Keying system prevents wrong cartridge interchange (line vs neutral)",
      "Neutral cartridges: 65kA discharge capacity",
      "Tool-free replacement via module locking system",
      "Green/red indicator flag for operational status",
      "Live replacement capability - no need to de-energise"
    ],
    applications: [
      "AC SPD replacement cartridges at 385V",
      "Surge protective device module replacement across discharge ranges (10-20kA, 20-40kA, 30-60kA)"
    ],
    specs: [
      { label: "FAQ - Factory Experience", value: "20+ years MOV experience" },
      { label: "FAQ - MOQ", value: "100pcs" },
      { label: "FAQ - Warranty", value: "Free replacement warranty" },
      { label: "FAQ - Shipping", value: "DHL/UPS/TNT/Fedex" },
      { label: "FAQ - Delivery", value: "3-5 working days" }
    ],
    specTables: [],
    image: "images/products/surge-protective-components.jpg",
    standards: []
  },

  "plug-in-spd-block": {
    id: "plug-in-spd-block",
    name: "Plug-in SPD Block",
    category: "Accessories for SPDs",
    categorySlug: "protection-module",
    shortDesc: "Replaceable AC SPD 1P 30KA~60KA 385VAC Low-voltage Arrester",
    description: "<p>SPD Replaceable replacement cartridge inserts 275V AC plug-in protection module.</p>",
    features: [
      "Low residual voltage and quick response",
      "Flame retardant shell material",
      "Metal oxide varistor components with high discharge capacity",
      "Response time: <25ns",
      "Fault indication via red mark in inspection window",
      "Green (normal) / Red (malfunction) status indicator"
    ],
    applications: [
      "Protect electric systems and on-loading electrical apparatus from thunder and instantaneous over-voltage",
      "Low-voltage AC power distribution surge protection",
      "Three-phase power system protection (230/400V AC 50/60Hz)"
    ],
    specs: [
      { label: "Electric", value: "230/400V AC50/60Hz 3-phase" },
      { label: "Standard", value: "IEC/EN 61643-1" },
      { label: "Poles", value: "1-2-3-4" }
    ],
    specTables: [
      {
        title: "Specifications by Class",
        headers: ["Feature", "Class B", "Class C", "Class D"],
        rows: [
          ["Max Continuous Voltage Uc", "275V", "275V", "275V"],
          ["Nominal In (8/20s)", "30KA", "20KA", "10kA"],
          ["Max Imax (8/20s)", "60KA", "40KA", "20KA"],
          ["Voltage Protection Level", "~1.5KV", "~1.3KV", "~1KV"],
          ["Response Time", "<25ns", "<25ns", "<25ns"],
          ["Working Temperature", "\u221240 to +80\u00b0C", "\u221240 to +80\u00b0C", "\u221240 to +80\u00b0C"],
          ["Relative Humidity", "<95%", "<95%", "<95%"],
          ["Fault Indication", "Green/Red", "Green/Red", "Green/Red"]
        ]
      }
    ],
    image: "images/products/plug-in-spd-block.jpg",
    standards: ["IEC/EN 61643-1"]
  },

  "customizable-spd-plastic": {
    id: "customizable-spd-plastic",
    name: "Customizable SPD Plastic",
    category: "Accessories for SPDs",
    categorySlug: "accessories-for-spds",
    shortDesc: "Green Plastic Solar AC DC Surge Protector Accessory",
    description: "<p>40 KA 4P AC Surge Voltage Protector Lightning Surge Protector SPD accessories. CE Certified.</p>",
    features: [
      "35mm standard guide rail installation",
      "Equipotential connection between device and SPD",
      "Customizable color options",
      "Multi-pole configurations (2P, 3P, 4P)"
    ],
    applications: [],
    specs: [
      { label: "Model", value: "DSC07798" },
      { label: "Material", value: "Plastic parts/springs/copper strips/chips/copper parts" },
      { label: "Color", value: "Customizable" },
      { label: "Series", value: "2P/3P/4P" },
      { label: "Nominal In", value: "10KA-20KA" },
      { label: "Protection Level", value: "1.8KV/2.2KV/2.5KV/3.2KV" },
      { label: "Supply Capacity", value: "200000/month" },
      { label: "Lead Time (1-1000)", value: "7 days" },
      { label: "Lead Time (1001-10000)", value: "15 days" },
      { label: "Lead Time (10001-99999)", value: "20 days" },
      { label: "Grounding - Data Lines", value: "Min 2.5mm\u00b2; exceeding 0.5m requires 4mm\u00b2 (YD/T5098-1998)" },
      { label: "Grounding - Phase \u226416mm\u00b2", value: "Ground wire = phase conductor size (GB 50054)" },
      { label: "Grounding - Phase 16-35mm\u00b2", value: "Ground wire = 16mm\u00b2 (GB 50054)" },
      { label: "Grounding - Phase >35mm\u00b2", value: "Ground wire = S/2 (GB 50054)" }
    ],
    specTables: [],
    image: "images/products/customizable-spd-plastic.jpg",
    standards: ["CE", "UL", "TUV", "ISO 9001:2018", "GB 50054", "YD/T5098-1998"]
  },

  "parts-surge-arrestor": {
    id: "parts-surge-arrestor",
    name: "Parts Surge Arrestor",
    category: "Accessories for SPDs",
    categorySlug: "accessories-for-spds",
    shortDesc: "White Plastic SPD Photovoltaic PV Surge Protector Accessory",
    description: "<p>Two-pole surge arrester with base and plug-in protection module. High discharge capacity due to heavy-duty zinc oxide varistor / spark gap combination.</p>",
    features: [
      "High discharge capacity - zinc oxide varistor/spark gap combination",
      "Energy coordination capability",
      "Green/red indicator flag",
      "Narrow modular design per DIN 43880",
      "Easy replacement via module locking system"
    ],
    applications: [],
    specs: [
      { label: "Model", value: "DSC07798" },
      { label: "Material", value: "Plastic parts/springs/copper strips/chips" },
      { label: "Series", value: "2P/3P/4P" },
      { label: "Nominal In", value: "10KA-20KA" },
      { label: "Protection Level", value: "1.8KV/2.2KV/2.5KV/3.2KV" },
      { label: "Supply Capacity", value: "200000/month" },
      { label: "Lead Time (1-1000)", value: "5 days" },
      { label: "Lead Time (1001-10000)", value: "7 days" },
      { label: "Lead Time (10001-99999)", value: "15 days" }
    ],
    specTables: [],
    image: "images/products/parts-surge-arrestor.jpg",
    standards: ["CE", "UL", "TUV", "ISO 9001:2018", "IEC 61643-331:2017", "GB 18802.331:2020"]
  },

  "green-plastic-spd": {
    id: "green-plastic-spd",
    name: "Green Plastic SPD",
    category: "Accessories for SPDs",
    categorySlug: "accessories-for-spds",
    shortDesc: "Factory Original 40KA Surge Protector Accessory Parts",
    description: "<p>Factory original production 40KA surge protector surge arrestor accessory. Heavy-duty zinc oxide varistor / spark gap combination.</p>",
    features: [
      "Two-pole surge arrester with plug-in module",
      "Heavy-duty zinc oxide varistor/spark gap combination",
      "Energy coordination capability",
      "Green/red indicator flag",
      "Modular design per DIN 43880",
      "Replaceable protection modules",
      "35mm standard guide rail (DIN rail) installation",
      "Proper grounding wire sizing required per GB 50054 standards based on phase conductor cross-section"
    ],
    applications: [],
    specs: [
      { label: "Model", value: "DSC07798" },
      { label: "Material", value: "Plastic parts/springs/copper strips/chips" },
      { label: "Series", value: "2P/3P/4P" },
      { label: "Nominal In", value: "10KA-20KA" },
      { label: "Protection Level", value: "1.8KV/2.2KV/2.5KV/3.2KV" },
      { label: "Supply Capacity", value: "200000/month" },
      { label: "Lead Time (1-1000)", value: "1 day" },
      { label: "Lead Time (1001-10000)", value: "5 days" },
      { label: "Lead Time (10001-99999)", value: "15 days" }
    ],
    specTables: [],
    image: "images/products/green-plastic-spd.jpg",
    standards: ["CE", "UL", "TUV", "IEC 61643-331:2017", "GB 18802.331:2020"]
  }

};
