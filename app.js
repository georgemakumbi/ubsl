/* Unique Business Systems Limited (UBSL) - Core Application Logic */

// Embed compiled product database (No template placeholders!)
 const PRODUCTS_DB = [
    {
        "name": "FDJ",
        "category": "Vacuum Note Counters",
        "image": "assets/fdj.jpeg",
        "description": "Professional grade high-speed vacuum note counter suitable for bank tellers, retail cash offices, and cashier desks.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Counting Method", "value": "Vacuum suction (air pressure)" },
                    { "label": "Counting Speed", "value": "Up to 1,500 notes/min" },
                    { "label": "Hopper Capacity", "value": "Up to 200 notes" }
                ]
            },
            {
                "section": "2. Physical & Environmental",
                "items": [
                    { "label": "Net Weight", "value": "FDJ-106: 20 kg | FDJ-116: 37 kg | FDJ-126: 31 kg" },
                    { "label": "Power Supply", "value": "220V/50Hz & 110V/60Hz" },
                    { "label": "Form Factor", "value": "Compact desktop design" }
                ]
            }
        ]
    },
    {
        "name": "VC 100",
        "category": "Vacuum Note Counters",
        "image": "assets/VC.jpeg",
        "description": "Advanced single-pocket currency scanner that counts and authenticates banknotes at high speeds.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Counting Method", "value": "Vacuum suction" },
                    { "label": "Currency Support", "value": "Supports multiple currencies" }
                ]
            },
            {
                "section": "2. Detection & Sensors",
                "items": [
                    { "label": "Counterfeit Detection", "value": "Advanced counterfeit detection sensors" }
                ]
            },
            {
                "section": "3. Features",
                "items": [
                    { "label": "Workflow", "value": "Simplifies daily cash processing" }
                ]
            }
        ]
    },
    {
        "name": "TC 500",
        "category": "Vacuum Note Counters",
        "image": "assets/TC-5500.jpeg",
        "description": "Industry leading bank-grade note scanner and counter with state-of-the-art imaging sensors.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Counting Method", "value": "Vacuum suction" },
                    { "label": "Image Scanning", "value": "High-speed image scanning" }
                ]
            },
            {
                "section": "2. Detection & Sensors",
                "items": [
                    { "label": "Authentication", "value": "Unparalleled authentication sensors" }
                ]
            },
            {
                "section": "3. Software & Upgrades",
                "items": [
                    { "label": "Software", "value": "Upgradable software for new note versions" }
                ]
            }
        ]
    },
    {
        "name": "Talaris Brandt 8672",
        "category": "Note Counters",
        "image": "assets/TALARIS.png",
        "description": "A classic, heavily armored desktop currency counter that delivers counterfeit authentication at speeds reaching up to 1,750 notes per minute.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Counting Speed", "value": "Adjustable: 600 – 1,750 notes/min" }
                ]
            },
            {
                "section": "2. Capacity & Handling",
                "items": [
                    { "label": "Hopper Capacity", "value": "Up to 1,000 notes (top feed)" },
                    { "label": "Stacker Capacity", "value": "Up to 200 notes" },
                    { "label": "Document Size", "value": "51×102 mm – 108×241 mm" }
                ]
            },
            {
                "section": "3. Physical & Environmental",
                "items": [
                    { "label": "Dimensions", "value": "381 mm (H) × 391 mm (W) × 267 mm (D)" },
                    { "label": "Net Weight", "value": "10.2 kg (22.5 lbs)" },
                    { "label": "Power Consumption", "value": "87 Watts (peak)" },
                    { "label": "Power Supply", "value": "100 – 264V AC, 50/60Hz (auto-switching)" }
                ]
            }
        ]
    },
    {
        "name": "LS-200",
        "category": "Note Sorters",
        "image": "assets/ls 200.jpeg",
        "description": "Multi-currency bank-grade note scanner with dual-pocket capability, allowing continuous processing without stops.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Counting Speed", "value": "1,000 – 1,200 notes/min (Value/Sorting) | 1,500 notes/min (Free Counting)" },
                    { "label": "Supported Currencies", "value": "Up to 48 currencies with auto-recognition & full-color image processing" },
                    { "label": "Operating System", "value": "Linux" },
                    { "label": "Display / Control", "value": "4-inch TFT Touchscreen" },
                    { "label": "Sorting Capabilities", "value": "Bank fitness sorting & Network Management Solution support" }
                ]
            },
            {
                "section": "2. Capacity & Handling",
                "items": [
                    { "label": "Hopper Capacity", "value": "500 notes" },
                    { "label": "Stacker Capacity", "value": "200 notes" },
                    { "label": "Reject Pocket Capacity", "value": "100 notes" }
                ]
            },
            {
                "section": "3. Detection & Sensors",
                "items": [
                    { "label": "Counterfeit Detection", "value": "Advanced multi-sensor array using UV, MG, IR, and CIS sensors" }
                ]
            },
            {
                "section": "4. Connectivity & Interfaces",
                "items": [
                    { "label": "USB Ports", "value": "1× USB" },
                    { "label": "Network Ports", "value": "2× LAN" },
                    { "label": "Serial Ports", "value": "4× Serial RS-232" }
                ]
            },
            {
                "section": "5. Physical & Environmental",
                "items": [
                    { "label": "Net Weight", "value": "13 kg" },
                    { "label": "Power Supply", "value": "100–240V AC, 50/60Hz" },
                    { "label": "Operating Temperature", "value": "10°C – 35°C" },
                    { "label": "Operating Humidity", "value": "20% – 90% RH" },
                    { "label": "Expected Product Lifespan", "value": "5 Years" }
                ]
            }
        ]
    },
    {
        "name": "Century 101",
        "category": "Note Sorters",
        "image": "assets/century sorter 101.png",
        "description": "Century Sorter is a professional, bank-grade 2-pocket banknote counter designed for continuous, high-volume cash handling. It allows operators to sort, count, and authenticate mixed bills completely uninterrupted",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Counting Speed", "value": "1,000 notes/min (Standard) | 900 notes/min (Mixed Denomination Valuation)" },
                    { "label": "Sorting Capabilities", "value": "Denomination, face, and orientation sorting" }
                ]
            },
            {
                "section": "2. Capacity & Handling",
                "items": [
                    { "label": "Hopper Capacity", "value": "800 notes" },
                    { "label": "Stacker Capacity", "value": "200 notes" },
                    { "label": "Reject Pocket Capacity", "value": "100 notes" },
                    { "label": "Accepted Note Lengths", "value": "110 – 190 mm length | 60 – 90 mm width" }
                ]
            },
            {
                "section": "3. Detection & Sensors",
                "items": [
                    { "label": "Image Scanning", "value": "Dual CIS and IR scanners for exact note imagery and denomination reading" },
                    { "label": "Counterfeit Detection", "value": "UV, FL, MG, and MT sensors — flags fakes without stopping" }
                ]
            },
            {
                "section": "4. Physical & Environmental",
                "items": [
                    { "label": "Net Weight", "value": "13 kg" },
                    { "label": "Dimensions", "value": "33 cm × 30 cm × 37 cm" }
                ]
            }
        ]
    },
    {
        "name": "BCS 165",
        "category": "Note Sorters",
        "image": "assets/bcs.PNG",
        "description": "Ribao BCS-165 is a high-speed, professional mixed denomination banknote counter and sorter. It features a compact front-opening design and utilizes advanced optical recognition to process multi-currency cash flows continuously.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Counting Speed", "value": "Up to 1,200 bills/min" },
                    { "label": "Supported Currencies", "value": "Up to 32 currencies simultaneously" },
                    { "label": "Display / Control", "value": "4.3-inch color touchscreen" },
                    { "label": "Sorting Modes", "value": "Denomination, Issue Series, Face, and Orientation" }
                ]
            },
            {
                "section": "2. Capacity & Handling",
                "items": [
                    { "label": "Hopper Capacity", "value": "600 bills" },
                    { "label": "Stacker Capacity", "value": "250 bills" },
                    { "label": "Reject Pocket Capacity", "value": "100 bills" }
                ]
            },
            {
                "section": "3. Detection & Sensors",
                "items": [
                    { "label": "Image Scanning", "value": "Dual CIS and IR scanners" },
                    { "label": "Counterfeit Detection", "value": "UV, MG, and MT sensors; serial number tracking" }
                ]
            },
            {
                "section": "4. Connectivity & Interfaces",
                "items": [
                    { "label": "Connectivity", "value": "Full PC and printer connectivity ports" }
                ]
            },
            {
                "section": "5. Physical & Environmental",
                "items": [
                    { "label": "Mechanical Path", "value": "Front-opening design for easy maintenance" }
                ]
            }
        ]
    },
    {
        "name": "Glory GFS 220",
        "category": "Note Sorters",
        "image": "assets/gfs 220.jpeg",
        "description": "High-speed professional currency sorter offering advanced scanning and reliability.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Counting Speed", "value": "1,300 notes/min (Standard) | 1,200 notes/min (Mixed Denomination)" },
                    { "label": "Supported Currencies", "value": "Up to 40 currencies simultaneously" },
                    { "label": "Serial Number Capture", "value": "Advanced OCR logs and tracks serial numbers instantly" }
                ]
            },
            {
                "section": "2. Capacity & Handling",
                "items": [
                    { "label": "Hopper Capacity", "value": "500 notes" },
                    { "label": "Stacker Capacity", "value": "250 notes" },
                    { "label": "Reject Pocket Capacity", "value": "100 notes" }
                ]
            },
            {
                "section": "3. Detection & Sensors",
                "items": [
                    { "label": "Image Scanning", "value": "Full-width dual CIS — visible, infrared (IR), and green spectra" }
                ]
            },
            {
                "section": "4. Connectivity & Interfaces",
                "items": [
                    { "label": "Connectivity", "value": "Network, PC, and receipt printer ports" }
                ]
            },
            {
                "section": "5. Physical & Environmental",
                "items": [
                    { "label": "Dimensions", "value": "303 mm × 347 mm × 316 mm" }
                ]
            }
        ]
    },
    {
        "name": "LS-100",
        "category": "Note Sorters",
        "image": "assets/ls 100.jpeg",
        "description": "Commercial currency counter and authenticator designed for convenience stores, gas stations, and retail back offices.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Counting Accuracy", "value": "High accuracy sorting and counting" }
                ]
            },
            {
                "section": "2. Physical & Environmental",
                "items": [
                    { "label": "Form Factor", "value": "Compact footprint for retail and teller counters" }
                ]
            },
            {
                "section": "3. Maintenance",
                "items": [
                    { "label": "Sensor Track", "value": "Easy to clean sensor track for reliable performance" }
                ]
            }
        ]
    },
    {
        "name": "BNC",
        "category": "Note Sorters",
        "image": "assets/bcs-165.jpeg",
        "description": "Multi-pocket premium currency sorter offering full bank-grade fitness sorting and serial number tracking.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Sorting Speed", "value": "High speed operation" },
                    { "label": "Sorting Modes", "value": "ATM sorting, fitness sorting, face/orientation sorting" },
                    { "label": "Serial Number Capture", "value": "Per-note serial number capturing and image scan" },
                    { "label": "Sorting Options", "value": "Separate 2005 series; ATM fitness sorting available" }
                ]
            },
            {
                "section": "2. Detection & Sensors",
                "items": [
                    { "label": "Image Scanning", "value": "Dual CIS (handles taped and cute notes)" },
                    { "label": "Authentication", "value": "Infrared-based digital sorter; accurate counterfeit detection" }
                ]
            },
            {
                "section": "3. Software & Upgrades",
                "items": [
                    { "label": "Software", "value": "Software upgradeable for new note versions" }
                ]
            },
            {
                "section": "4. Physical & Environmental",
                "items": [
                    { "label": "Build Quality", "value": "Fine finishing, low maintenance, longer working life" },
                    { "label": "Installation", "value": "Easy to install" }
                ]
            }
        ]
    },
    {
        "name": "BCS 160",
        "category": "Note Sorters",
        "image": "assets/bcs-165.jpeg",
        "description": "Advanced multi-pocket currency sorter for high-volume banking cash centers.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Counting Speed", "value": "Up to 1,200 notes/min with 99.9% accuracy" },
                    { "label": "Supported Currencies", "value": "Up to 20 countries" },
                    { "label": "Display / Control", "value": "4-inch TFT Touchscreen" },
                    { "label": "Sorting Modes", "value": "Denomination, face, orientation, and fitness sorting" },
                    { "label": "Serial Number Capture", "value": "Yes" }
                ]
            },
            {
                "section": "2. Capacity & Handling",
                "items": [
                    { "label": "Hopper Capacity", "value": "600 notes" },
                    { "label": "Stacker Capacity", "value": "200 notes" }
                ]
            },
            {
                "section": "3. Detection & Sensors",
                "items": [
                    { "label": "Counterfeit Detection", "value": "UV, MG, IR, and CIS sensors" }
                ]
            }
        ]
    },
    {
        "name": "NC 7100",
        "category": "Note Sorters",
        "image": "assets/NC.jpeg",
        "description": "Professional 4-pocket currency sorter designed for heavy-duty cash room environments, featuring high throughput and deep fitness sorting.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Sorting Modes", "value": "ATM fitness sorting, denomination sorting, face/orientation sorting" }
                ]
            },
            {
                "section": "2. Capacity & Handling",
                "items": [
                    { "label": "Exit Pockets", "value": "4 exit pockets + 1 dedicated reject pocket" }
                ]
            },
            {
                "section": "3. Detection & Sensors",
                "items": [
                    { "label": "Sensors", "value": "Advanced multi-wavelength IR and CIS sensors" }
                ]
            },
            {
                "section": "4. Physical & Environmental",
                "items": [
                    { "label": "Power Supply", "value": "100–240V AC, 3.7A, 50/60Hz" }
                ]
            }
        ]
    },
    {
        "name": "NC 9500",
        "category": "Four Pocket Note Sorters",
        "image": "assets/nc-9500.png",
        "description": "Professional 4-pocket currency sorter designed for heavy-duty cash room environments, featuring high throughput and deep fitness sorting.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Sorting Modes", "value": "ATM fitness sorting, denomination sorting, face/orientation sorting" }
                ]
            },
            {
                "section": "2. Capacity & Handling",
                "items": [
                    { "label": "Exit Pockets", "value": "4 exit pockets + 1 dedicated reject pocket" }
                ]
            },
            {
                "section": "3. Detection & Sensors",
                "items": [
                    { "label": "Sensors", "value": "Advanced multi-wavelength IR and CIS sensors" }
                ]
            },
            {
                "section": "4. Physical & Environmental",
                "items": [
                    { "label": "Power Supply", "value": "100–240V AC, 3.7A, 50/60Hz" }
                ]
            }
        ]
    },
    {
        "name": "Kobra",
        "category": "Shredders",
        "image": "assets/kobra shredder.jpeg",
        "description": "Heavy-duty paper and document shredder with high-security cross-cut layout for corporate offices.",
        "specSections": [
            {
                "section": "1. Shredding",
                "items": [
                    { "label": "Cut Type", "value": "Cross-cut high-security shredding" },
                    { "label": "Media Handled", "value": "Paper sheets, staples, and paperclips" },
                    { "label": "Feed Direction", "value": "Forward and backward movement during operation" }
                ]
            },
            {
                "section": "2. Operation",
                "items": [
                    { "label": "Motor", "value": "Quiet motor operation" },
                    { "label": "Automation", "value": "Automatic start and stop sensors" }
                ]
            }
        ]
    },
    {
        "name": "Atlas",
        "category": "Shredders",
        "image": "assets/atlas_shredder.PNG",
        "description": "High-capacity commercial shredder designed for continuous shredding of documents, CDs, and credit cards.",
        "specSections": [
            {
                "section": "1. Shredding",
                "items": [
                    { "label": "Media Handled", "value": "Paper sheets, credit cards, and CDs" },
                    { "label": "Bin Capacity", "value": "Large bin capacity for heavy paper loads" }
                ]
            },
            {
                "section": "2. Operation",
                "items": [
                    { "label": "Protection", "value": "Overload protection and jam-proof technology" },
                    { "label": "Mobility", "value": "Durable casters for easy movement in office settings" }
                ]
            }
        ]
    },
    {
        "name": "Sysgraf AD 410",
        "category": "Cheque Printers",
        "image": "assets/adc-410 check printer.png",
        "description": "Specialized high-security inkjet cheque printer for precise personalization, encoding, and bank document printing.",
        "specSections": [
            {
                "section": "1. Printing",
                "items": [
                    { "label": "Font Support", "value": "MICR E13B and CMC7" },
                    { "label": "Print Head", "value": "Durable head designed for high-volume cheque books" },
                    { "label": "Personalization", "value": "High precision encoder for bank-grade personalization" }
                ]
            },
            {
                "section": "2. Connectivity",
                "items": [
                    { "label": "Integration", "value": "Seamless integration with banking application systems" }
                ]
            }
        ]
    },
    {
        "name": "FZA 2155 Cheque Scanner",
        "category": "Cheque Printers",
        "image": "assets/Cheque Personalisation FZA-2155.jpeg",
        "description": "A Fast, Dynamic, High volume Cheque Scanner. It is the cornerstone for production cheque processing, delivering high performance, reliability and image quality.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Design", "value": "Efficient countertop design for high-volume production" },
                    { "label": "Media Handled", "value": "Business/personal cheques, rebate cards, and envelopes" }
                ]
            },
            {
                "section": "2. Features",
                "items": [
                    { "label": "Process Improvement", "value": "Improves efficiency of payment processes and treasury management" }
                ]
            }
        ]
    },
    {
        "name": "Cheque Scanner",
        "category": "Cheque Printers",
        "image": "assets/cheque scanner.png",
        "description": "A fast and accurate scanning of cheques and financial documents. It captures high-resolution images for electronic processing, verification, and archival.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Design", "value": "Efficient countertop design" },
                    { "label": "Media Handled", "value": "Business/personal cheques, cards, and envelopes" },
                    { "label": "Image Capture", "value": "High-resolution image capture for electronic processing" }
                ]
            },
            {
                "section": "2. Features",
                "items": [
                    { "label": "Process Improvement", "value": "Improves efficiency of payment processes and treasury management" }
                ]
            }
        ]
    },
    {
        "name": "Cheque Writer",
        "category": "Embossers",
        "image": "assets/cheque writer.png",
        "description": "The ultimate in 'contemporary' check writing security with a deeply serrated Paymaster typeface.",
        "specSections": [
            {
                "section": "1. Security",
                "items": [
                    { "label": "Lock System", "value": "One-key security system" },
                    { "label": "Typeface", "value": "Deeply serrated Paymaster typeface" },
                    { "label": "Alteration Deterrence", "value": "Dye-based inking provides the ultimate alteration deterrent" }
                ]
            },
            {
                "section": "2. Operation",
                "items": [
                    { "label": "Ink System", "value": "Exclusive replaceable ink ribbon cartridge" },
                    { "label": "Compatibility", "value": "Imprints various sized checks quickly and accurately" }
                ]
            }
        ]
    },
    {
        "name": "Sirio 18",
        "category": "Coin Wrappers",
        "image": "assets/sirio 18.png",
        "description": "Automatic coin wrapping machine designed to package coins into secure paper rolls efficiently.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Wrapping Speed", "value": "18 rolls per minute" },
                    { "label": "Hopper Capacity", "value": "4,000 coins" },
                    { "label": "Roll Change", "value": "Automatic revolver roll change" }
                ]
            }
        ]
    },
    {
        "name": "Sirio 30",
        "category": "Coin Wrappers",
        "image": "assets/sirio 30.png",
        "description": "High-speed industrial coin wrapping machine with automatic coin feeder for heavy-duty banking applications.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Wrapping Speed", "value": "20 – 30 rolls per minute" },
                    { "label": "Hopper Capacity", "value": "4,000 – 6,000 coins" },
                    { "label": "Coin Feeder", "value": "Integrated automatic coin feeder" }
                ]
            }
        ]
    },
    {
        "name": "Uni",
        "category": "Coin Counters",
        "image": "assets/CS-10 COIN COUNTER.jfif",
        "description": "High-speed coin counting and sorting machine designed for banks, supermarkets, and cash offices.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Counting Method", "value": "Accurate mechanical counting and sorting" },
                    { "label": "Batching", "value": "Batching and accumulation options" },
                    { "label": "Currency Support", "value": "Handles local currency coins and tokens" }
                ]
            },
            {
                "section": "2. Physical & Environmental",
                "items": [
                    { "label": "Build", "value": "Durable design built for continuous operation" }
                ]
            }
        ]
    },
    {
        "name": "SCAN COIN",
        "category": "Coin Counters",
        "image": "assets/scan_coin.png",
        "description": "Speed up your coin processing while keeping it totally accurate. With this machine you get the highest possible accuracy in counting, sorting and batching.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Processing Speed", "value": "High speed for mixed currency batches" },
                    { "label": "Accuracy", "value": "Highest possible accuracy in counting, sorting and batching" },
                    { "label": "Models", "value": "Five different models to suit various needs" }
                ]
            },
            {
                "section": "2. Detection",
                "items": [
                    { "label": "Reject Handling", "value": "Off-sorts counterfeit, foreign, and damaged coins accurately" }
                ]
            }
        ]
    },
    {
        "name": "Jetsort 1000",
        "category": "Coin Counters",
        "image": "assets/JETSORT.jpg",
        "description": "Improve flexibility with the features and options designed for your business needs. Space-saving footprint with massive performance.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Processing Speed", "value": "Up to 2,200 coins per minute" },
                    { "label": "Accuracy", "value": "99.995%" }
                ]
            },
            {
                "section": "2. Physical & Environmental",
                "items": [
                    { "label": "Form Factor", "value": "Small footprint for space savings" }
                ]
            }
        ]
    },
    {
        "name": "Sortorex",
        "category": "Coin Counters",
        "image": "assets/SORTOREX.jpg",
        "description": "Heavy-duty coin sorter for large-scale cash centers and vending operators dealing in mixed batches of coins.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Processing Speed", "value": "Up to 3,500 coins per minute" },
                    { "label": "Denomination Support", "value": "Up to 16 denominations in two currencies" }
                ]
            },
            {
                "section": "2. Physical & Environmental",
                "items": [
                    { "label": "Chassis", "value": "Robust industrial steel chassis" }
                ]
            }
        ]
    },
    {
        "name": "SC 303/313",
        "category": "Coin Counters",
        "image": "assets/SC COIN COUNTER.jfif",
        "description": "Compact and easy-to-use coin counters. Just adjust the coin diameter and thickness and you are up and running.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Configuration", "value": "Easy adjustment controls for coin diameter and thickness" },
                    { "label": "Noise Level", "value": "Quiet operation suitable for front-office use" }
                ]
            },
            {
                "section": "2. Physical & Environmental",
                "items": [
                    { "label": "Portability", "value": "Highly portable with integrated carry handle" }
                ]
            }
        ]
    },
    {
        "name": "DTC, The New Ultimate Coin Sorter",
        "category": "Coin Counters",
        "image": "assets/DTC 9 COIN SORTER.jfif",
        "description": "Heavy-duty commercial coin sorter that counts, sorts, and rejects foreign/damaged coins automatically.",
        "specSections": [
            {
                "section": "1. Detection & Sensors",
                "items": [
                    { "label": "Sensor Technology", "value": "Next-gen sensor technology for accurate sorting" }
                ]
            },
            {
                "section": "2. Operation",
                "items": [
                    { "label": "Control Panel", "value": "Modern touchscreen control panel" },
                    { "label": "Reliability", "value": "Highly reliable sorting mechanism" }
                ]
            }
        ]
    },
    {
        "name": "Coin Counter SC-360",
        "category": "Coin Counters",
        "image": "assets/COIN COUNTER SC 360.jpg",
        "description": "A high-performance coin counting and sorting machine designed to improve cash handling efficiency by accurately counting mixed denominations.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Processing Speed", "value": "Up to 600 coins/minute" },
                    { "label": "Hopper Capacity", "value": "Approximately 1,000 coins" },
                    { "label": "Counting Modes", "value": "Continuous, Batch, Add" },
                    { "label": "Power Supply", "value": "AC 110–240V, 50/60Hz" }
                ]
            },
            {
                "section": "2. Features",
                "items": [
                    { "label": "Speed", "value": "High-speed counting" },
                    { "label": "Coin Size Compatibility", "value": "Supports various coin sizes and denominations" },
                    { "label": "User Interface", "value": "Easy-to-read digital display with intuitive controls" }
                ]
            }
        ]
    },
    {
        "name": "CP Active-9",
        "category": "Coin Counters",
        "image": "assets/ICPActive-9_SCAN-COIN_Front.webp",
        "description": "Intelligent Coin Processing system tailored for high-volume cash centres and vault management operations.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Monitoring", "value": "Real-time sorting performance monitoring" },
                    { "label": "Integration", "value": "Integrates with vault management systems" }
                ]
            },
            {
                "section": "2. Features",
                "items": [
                    { "label": "Profitability", "value": "Optimized profitability and operational control" }
                ]
            }
        ]
    },
    {
        "name": "Packer tt 201",
        "category": "Strapping Machines",
        "image": "assets/semi auto strapping machine.png",
        "description": "Fully RoHS compliant semi-automatic open-cabinet strapping machine set for and fitted with 12mm strapping.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Cycle Speed", "value": "Up to 24 cycles per minute" },
                    { "label": "Strap Width", "value": "Adjustable: 6 mm – 15.5 mm" },
                    { "label": "Tension Adjustment", "value": "Manual tension adjustment controls" }
                ]
            },
            {
                "section": "2. Physical & Environmental",
                "items": [
                    { "label": "Dimensions", "value": "W 902 mm × D 586 mm × H 760 mm" },
                    { "label": "Net Weight", "value": "85 kg" },
                    { "label": "Table Height", "value": "Adjustable legs: 760 mm – 930 mm with braked castors" },
                    { "label": "Compliance", "value": "Fully RoHS compliant" }
                ]
            }
        ]
    },
    {
        "name": "Packer tt 202",
        "category": "Strapping Machines",
        "image": "assets/strap machine.png",
        "description": "Heavy-duty semi-automatic closed-cabinet strapping machine protecting components from dust and debris.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Cabinet Type", "value": "Closed cabinet for dust and debris protection" },
                    { "label": "Strap Width", "value": "Adjustable: 6 mm – 15.5 mm" }
                ]
            },
            {
                "section": "2. Physical & Environmental",
                "items": [
                    { "label": "Dimensions", "value": "W 902 mm × D 586 mm × H 760 mm" },
                    { "label": "Net Weight", "value": "85 kg" },
                    { "label": "Mobility", "value": "Adjustable legs with braked castors" }
                ]
            },
            {
                "section": "3. Warranty",
                "items": [
                    { "label": "Warranty", "value": "12 months return-to-base, parts and labour" }
                ]
            }
        ]
    },
    {
        "name": "Signode ttx",
        "category": "Strapping Machines",
        "image": "assets/semi auto strapping machine.png",
        "description": "Premium automatic strapping machine designed for high-speed industrial packaging applications.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Operation", "value": "High-speed automatic strapping cycle" },
                    { "label": "Strap Tension", "value": "Perfect strap tension and seal strength" },
                    { "label": "Ideal Use", "value": "Sorting rooms and courier depots" }
                ]
            },
            {
                "section": "2. Physical & Environmental",
                "items": [
                    { "label": "Wear Parts", "value": "Minimal wear and tear parts" }
                ]
            }
        ]
    },
    {
        "name": "5MM*0.47MM Strapping Roll",
        "category": "Strapping Machines",
        "image": "assets/strapping roll.png",
        "description": "Quality strap manufactured to machine grade for consistent and reliable use with PACKER automatic and semi-automatic machines.",
        "specSections": [
            {
                "section": "1. Specifications",
                "items": [
                    { "label": "Dimensions", "value": "5 mm × 0.47 mm" },
                    { "label": "Break Strain", "value": "69 kg" },
                    { "label": "Compatibility", "value": "PACKER automatic and semi-automatic machines" }
                ]
            }
        ]
    },
    {
        "name": "DTD-23-2Y-250",
        "category": "Rate Boards",
        "image": "assets/DTD RATE BOARD.webp",
        "description": "Compact digital exchange rate board with LED panels for clear display of current currency conversion rates.",
        "specSections": [
            {
                "section": "1. Display & Control",
                "items": [
                    { "label": "Display", "value": "Accurate digital date and time display" },
                    { "label": "Panel", "value": "Non-reflective acrylic front panel" },
                    { "label": "Operation", "value": "Easy operation via local keypad or PC" }
                ]
            },
            {
                "section": "2. Features",
                "items": [
                    { "label": "Memory Backup", "value": "Retains data during power failure" }
                ]
            }
        ]
    },
    {
        "name": "ERB-2806B+MS Board",
        "category": "Rate Boards",
        "image": "assets/ERB-Ms board.webp",
        "description": "Large corporate exchange rate board featuring 16 rows of LED rate listings and a programmable scrolling ticker.",
        "specSections": [
            {
                "section": "1. Display & Control",
                "items": [
                    { "label": "Rate Rows", "value": "16 rows of LED rate listings" },
                    { "label": "Scrolling Sign", "value": "16×128 matrix digital moving Arabic/English sign" },
                    { "label": "Currency Labels", "value": "Changeable magnetic labels for currency name and logo" },
                    { "label": "Remote Control", "value": "Infrared remote controller for rate updates" }
                ]
            },
            {
                "section": "2. Connectivity",
                "items": [
                    { "label": "Interface", "value": "Built-in RS232 interface for PC communication" }
                ]
            },
            {
                "section": "3. Features",
                "items": [
                    { "label": "Memory Backup", "value": "Retains current exchange data during power failure" }
                ]
            }
        ]
    },
    {
        "name": "ERB-2806B+MS-NP",
        "category": "Rate Boards",
        "image": "assets/ERB-MS-NP.webp",
        "description": "Professional LED exchange rate display board optimized for currency exchange bureaus and bank branches.",
        "specSections": [
            {
                "section": "1. Display & Control",
                "items": [
                    { "label": "Panels", "value": "Ultra-bright numeric LED panels" }
                ]
            },
            {
                "section": "2. Features",
                "items": [
                    { "label": "Memory Backup", "value": "Retains latest exchange rates during power failure" }
                ]
            }
        ]
    },
    {
        "name": "Perfostar I/D Perforating Machine",
        "category": "Perforators",
        "image": "assets/perforator.png",
        "description": "With our perforator Perfostar I/D you can easily perforate dates with 6 number wheels. Each wheel is equipped with a fixed lever for rapid change of the date.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Perforation", "value": "8-digit adjustable date/numbers with fixed letters at upper/lower line" },
                    { "label": "Operation Type", "value": "Manual lever selection" },
                    { "label": "Punching Capacity", "value": "15 sheets (64 gsm)" }
                ]
            },
            {
                "section": "2. Physical & Environmental",
                "items": [
                    { "label": "Dimensions", "value": "295 × 214 × 229 mm (486 mm incl. handle)" },
                    { "label": "Net Weight", "value": "14.7 kg" },
                    { "label": "Die-Block", "value": "905L-207" }
                ]
            }
        ]
    },
    {
        "name": "NCR SelfServ ATM",
        "category": "ATMs",
        "image": "assets/ncr_selfserv_82_resized-1.webp",
        "description": "Reliable lobby cash dispenser ATM system designed for continuous service and high transaction volume.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Cash Dispensing", "value": "High capacity cash dispensing cassettes" },
                    { "label": "Interface", "value": "Sleek user-friendly touch controls" }
                ]
            },
            {
                "section": "2. Security",
                "items": [
                    { "label": "Card Reader", "value": "Advanced card reader and security sensors" }
                ]
            },
            {
                "section": "3. Reliability",
                "items": [
                    { "label": "Build", "value": "Industry-proven reliability and longevity" }
                ]
            }
        ]
    },
    {
        "name": "Cash Recycling Machine - CASH80ALG",
        "category": "ATMs",
        "image": "assets/CRS.png",
        "description": "CRS is a multi-function integrated through-the-wall machine, it provides Cash deposit, Cash withdrawal, Cash deposit and withdrawal nonrecycling & cash recycling. It also provides RFID card top-up and other non-cash services including distributing tickets, coupons, lotteries, etc synchronously.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Functions", "value": "Cash deposit, withdrawal, recycling, RFID card top-up, ticket/coupon/lottery dispensing" },
                    { "label": "Configuration", "value": "Through-the-wall for 24/7 client access" }
                ]
            },
            {
                "section": "2. Security",
                "items": [
                    { "label": "Housing", "value": "High security safe housing" },
                    { "label": "Compliance", "value": "Full compliance with EMV and PCI standards" }
                ]
            },
            {
                "section": "3. Features",
                "items": [
                    { "label": "Cash Module", "value": "Advanced cash deposit and recycling module" }
                ]
            }
        ]
    },
    {
        "name": "Bankscan",
        "category": "Counterfeit Detectors",
        "image": "assets/bankscan.png",
        "description": "Large aperture with the ability to slide a complete document below the illumination for thorough examination.",
        "specSections": [
            {
                "section": "1. Detection",
                "items": [
                    { "label": "UV Output", "value": "Double 6-Watt UV fast-start tubes" },
                    { "label": "Shield", "value": "Highly reflective tube shield to maximise UV output" }
                ]
            },
            {
                "section": "2. Physical & Environmental",
                "items": [
                    { "label": "Build", "value": "Sturdy metal frame with large opening" },
                    { "label": "Dimensions", "value": "270 × 185 × 120 mm" },
                    { "label": "Net Weight", "value": "1.85 kg" }
                ]
            }
        ]
    },
    {
        "name": "Pocket UV Counterfeit Detector",
        "category": "Counterfeit Detectors",
        "image": "assets/pocket uv detectors.png",
        "description": "Compact counterfeit detector with built-in torch stand and wrist strap to verify banknotes, passports, and credit cards.",
        "specSections": [
            {
                "section": "1. Detection",
                "items": [
                    { "label": "Documents Verified", "value": "Banknotes, passports, ID cards, legal documents, and credit cards" }
                ]
            },
            {
                "section": "2. Physical & Environmental",
                "items": [
                    { "label": "Form Factor", "value": "Compact with built-in torch stand and wrist strap" }
                ]
            }
        ]
    },
    {
        "name": "SLD-16 Currency Authenticator",
        "category": "Counterfeit Detectors",
        "image": "assets/currency authenticator.png",
        "description": "Professional counterfeit detector with simple switch controls for UV lamp and white lamp checking.",
        "specSections": [
            {
                "section": "1. Detection",
                "items": [
                    { "label": "Lamp Modes", "value": "UV lamp / Off / White lamp (front switch)" }
                ]
            },
            {
                "section": "2. Operation",
                "items": [
                    { "label": "Setup", "value": "Plug in and turn on — no configuration required" },
                    { "label": "Design", "value": "Sturdy desk design for teller and retail use" }
                ]
            }
        ]
    },
    {
        "name": "Change / Float Bag",
        "category": "Security Bags & Seals",
        "image": "assets/FLOAT BAG.PNG",
        "description": "Re-usable security bag for transporting change, cash float, and small deposits safely.",
        "specSections": [
            {
                "section": "1. Construction",
                "items": [
                    { "label": "Material", "value": "Tough PVC/canvas construction" },
                    { "label": "Security", "value": "Tamper-evident locking chamber" },
                    { "label": "Available Colours", "value": "Blue, green, yellow, and red" }
                ]
            }
        ]
    },
    {
        "name": "Document bag",
        "category": "Security Bags & Seals",
        "image": "assets/security bag.jpg",
        "description": "Heavy-duty tamper-proof bag for courier transport of sensitive bank documents, vouchers, and cheques.",
        "specSections": [
            {
                "section": "1. Construction",
                "items": [
                    { "label": "Capacity", "value": "A4/A3 size" },
                    { "label": "Features", "value": "Address viewing window" },
                    { "label": "Available Colours", "value": "Blue, green, yellow, and red" }
                ]
            }
        ]
    },
    {
        "name": "Security Seals",
        "category": "Security Bags & Seals",
        "image": "assets/seals.png",
        "description": "Nylon or polypropylene pull tight seals for securing bank cash bags, container doors, and meters.",
        "specSections": [
            {
                "section": "1. Specifications",
                "items": [
                    { "label": "Material", "value": "Nylon or polypropylene pull tight seal" },
                    { "label": "Effective Length", "value": "140 mm" },
                    { "label": "Tail Diameter", "value": "3.2 mm" },
                    { "label": "Pack Size", "value": "Available in boxes of 1,000" }
                ]
            }
        ]
    },
    {
        "name": "Handheld POS PDA",
        "category": "Thermal Printers",
        "image": "assets/handheld pos.png",
        "description": "Mini Pos thermal printer Barcode Scanner Handheld POS Terminal wireless bluetooth wifi Android PDA 3G Distribution.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Printer", "value": "Built-in 58 mm thermal receipt printer" },
                    { "label": "Scanner", "value": "Integrated barcode scanner" }
                ]
            },
            {
                "section": "2. Connectivity",
                "items": [
                    { "label": "Wireless", "value": "Bluetooth, Wi-Fi, and 3G" },
                    { "label": "Operating System", "value": "Android PDA" }
                ]
            }
        ]
    },
    {
        "name": "POS Thermal Printer",
        "category": "Thermal Printers",
        "image": "assets/thermal printers.png",
        "description": "Thermal receipt printers integrate with retail and restaurant point-of-sale (POS) systems to print customer receipts for completed sales.",
        "specSections": [
            {
                "section": "1. Connectivity",
                "items": [
                    { "label": "Interfaces", "value": "USB, Ethernet (LAN), Wi-Fi (WLAN), and Bluetooth" }
                ]
            },
            {
                "section": "2. Features",
                "items": [
                    { "label": "Compatibility", "value": "Suitable for small businesses — compatible with popular POS systems" }
                ]
            }
        ]
    },
    {
        "name": "Hologram Applicator",
        "category": "Security Machines",
        "image": "assets/HOLOGRAM APPLICATOR.PNG",
        "description": "Precision desktop machine for applying holographic security seals to banknotes, passports, and identity documents.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Application", "value": "Consistent pressure for perfect hologram adhesion" },
                    { "label": "Document Sizes", "value": "Adjustable for various document sizes" }
                ]
            },
            {
                "section": "2. Physical & Environmental",
                "items": [
                    { "label": "Form Factor", "value": "Compact footprint suitable for teller counters" }
                ]
            },
            {
                "section": "3. Features",
                "items": [
                    { "label": "Efficiency", "value": "Reduces reliance on manual hologram placement" }
                ]
            }
        ]
    },
    {
        "name": "Amano PIX-200 Date & Time Stamp",
        "category": "Security Machines",
        "image": "assets/date time stamp.jfif",
        "description": "An electronic time stamping machine that automatically prints the current date and time on documents with precision and consistency.",
        "specSections": [
            {
                "section": "1. Performance & Operation",
                "items": [
                    { "label": "Date Advance", "value": "Automatic advance to next date at midnight" },
                    { "label": "Time Format", "value": "12/24-hour selectable" },
                    { "label": "Ink Yield", "value": "Up to 5,000 impressions per ink refill" },
                    {"label": "Power Supply", "value": "AC 110–240V, 50/60Hz" }
                ]
            },
            {
                "section": "2. Features",
                "items": [
                    { "label": "Ink System", "value": "Self-inking — no separate ink pad required" },
                    { "label": "Durability", "value": "Long-lasting construction for high-volume stamping" },
                    { "label": "Ease of Use", "value": "Simple operation with minimal training required and back up battery." }
                ]
            }
        ]
    },
    {
        "name": "Strapping Roll",
        "category": "Accessories",
        "image": "assets/strapping roll.png",
        "description": "Quality strap manufactured to machine grade for consistent and reliable use with PACKER automatic machines.",
        "specSections": [
            {
                "section": "1. Specifications",
                "items": [
                    { "label": "Dimensions", "value": "5 mm × 0.47 mm" },
                    { "label": "Break Strain", "value": "69 kg" },
                    { "label": "Compatibility", "value": "PACKER automatic and semi-automatic machines" }
                ]
            }
        ]
    },
    {
        "name": "Cheque Inkjet Cartridges",
        "category": "Accessories",
        "image": "assets/cheque inkjet cartridge.jpg",
        "description": "High-quality replacement ink cartridge designed for cheque printing systems. It produces sharp, permanent characters and graphics on financial documents while ensuring consistent print quality and reliable performance",
        "specSections": [
            {
                "section": "1. Specifications",
                "items": [
                    { "label": "Ink Type", "value": "Quick-drying, permanent ink" },
                    { "label": "Print Life", "value": "Long print life cycle" },
                    { "label": "Compatibility", "value": "Compatible with popular cheque printer brands" },
                    { "label": "Compatibility", "value": "Compatible with cheque printing systems using matching cartridge models" },
                    { "label": "Print Resolution", "value": "Produces sharp, permanent characters and graphics on financial documents" }
                ]
            },
            {
                "section": "2. Features",
                "items": [
                    { "label": "Consistent Print Quality", "value": "Ensures consistent print quality and reliable performance" }
                ]
            },
            {
                "section": "3. Applications",
                "items": [
                    { "label": "Places", "value": "Banks" },
                    { "label": "Places", "value": "Financial institutions" },
                    { "label": "Places", "value": "Corporate offices" },
                ]
            }
        ]
    },
    {
        "name": "Edge Binding Tapes",
        "category": "Accessories",
        "image": "assets/edge banding tape.jpg",
        "description": "Heavy-duty edge band tapes for reinforcing cash drawers, counters, and document desks.",
        "specSections": [
            {
                "section": "1. Specifications",
                "items": [
                    { "label": "Function", "value": "Prevents material edges from scratching or tearing" },
                    { "label": "Options", "value": "Available in varying sizes, colours, and dimensions" },
                    { "label": "Properties", "value": "Highly adhesive and heat resistant" }
                ]
            }
        ]
    },
    {
        "name": "Journal Rolls",
        "category": "Accessories",
        "image": "assets/journal-tape-702992.webp",
        "description": "High-quality thermal journal rolls for ATM and POS machine audit trail printing.",
        "specSections": [
            {
                "section": "1. Specifications",
                "items": [
                    { "label": "Paper Grade", "value": "Archival-grade thermal paper for long-lasting records" },
                    { "label": "Available Widths", "value": "57 mm, 76 mm, 80 mm" },
                    { "label": "Compatibility", "value": "Compatible with all major ATM and cash register brands" }
                ]
            }
        ]
    },
    {
        "name": "UV Replacement Tubes",
        "category": "Accessories",
        "image": "assets/uv replacement tube.webp",
        "description": "Genuine replacement UV tubes for Bankscan and BJ-141 counterfeit detectors.",
        "specSections": [
            {
                "section": "1. Specifications",
                "items": [
                    { "label": "Peak Wavelength", "value": "365 nm for optimal fluorescent detection" },
                    { "label": "Power", "value": "6-Watt fast-start design" },
                    { "label": "Compatibility", "value": "UBSL-supplied UV detector range" }
                ]
            }
        ]
    },
    {
        "name": "Coin Wrapping Rolls",
        "category": "Accessories",
        "image": "assets/coin wrapping machine.png",
        "description": "Pre-formed paper coin wrapping rolls for use with Sirio and other coin wrapping machines.",
        "specSections": [
            {
                "section": "1. Specifications",
                "items": [
                    { "label": "Form", "value": "Pre-formed to standard denomination sizes" },
                    { "label": "Material", "value": "Durable paper grade resists tearing under machine tension" },
                    { "label": "Currency Support", "value": "UGX, KES, TZS, USD denominations" }
                ]
            }
        ]
    },
    {
        "name": "Plastic Stripping Rolls",
        "category": "Accessories",
        "image": "assets/stripping rolls.jpg",
        "description": "Polypropylene plastic stripping rolls for semi-automatic strapping machines.",
        "specSections": [
            {
                "section": "1. Specifications",
                "items": [
                    { "label": "Width Options", "value": "6 mm – 15.5 mm" },
                    { "label": "Break Strain", "value": "Up to 69 kg" },
                    { "label": "Properties", "value": "UV-resistant for outdoor cargo applications" }
                ]
            }
        ]
    },
    {
        "name": "Printer Ribbons",
        "category": "Accessories",
        "image": "assets/printer ribbons.jpg",
        "description": "OEM-compatible printer ribbons for dot-matrix receipt and document printers used in banking environments.",
        "specSections": [
            {
                "section": "1. Specifications",
                "items": [
                    { "label": "Compatibility", "value": "Epson, Oki, and Canon dot-matrix models" },
                    { "label": "Ink Yield", "value": "High yield for extended print runs" },
                    { "label": "Print Quality", "value": "Sharp, smear-resistant characters" }
                ]
            }
        ]
    },
    {
        "name": "Thermal Paper Rolls",
        "category": "Accessories",
        "image": "assets/thermal-roll-paper.PNG",
        "description": "BPA-free thermal receipt paper for POS terminals, ATM machines, and handheld PDA printers.",
        "specSections": [
            {
                "section": "1. Specifications",
                "items": [
                    { "label": "Available Widths", "value": "57 mm and 80 mm" },
                    { "label": "Coating", "value": "BPA-free for compliance with handling regulations" },
                    { "label": "Roll Length", "value": "100 m for high-volume environments" }
                ]
            }
        ]
    },
    {
        "name": "Hologram Seal Rolls",
        "category": "Accessories",
        "image": "assets/hologramseal.jfif",
        "description": "Tamper-evident holographic seal rolls for securing bank envelopes, cash bags, and negotiable documents.",
        "specSections": [
            {
                "section": "1. Security",
                "items": [
                    { "label": "Tamper Evidence", "value": "VOID pattern revealed on attempted removal" },
                    { "label": "Numbering", "value": "Sequential numbering for audit trail control" },
                    { "label": "Finish", "value": "Available in gold and silver foil finishes" }
                ]
            }
        ]
    },
    {
        "name": "UBSL Cheque Ordering Software",
        "category": "Software Solutions",
        "image": "assets/cheque software.jpg",
        "description": "Secure end-to-end solutions providing financial institutions with software for requesting cheques, followed by high-security printing and direct supply.",
        "specSections": [
            {
                "section": "1. Features",
                "items": [
                    { "label": "Ordering", "value": "Automated cheque ordering and tracking" },
                    { "label": "Platform", "value": "Secure cloud-based platform with multi-user access" },
                    { "label": "Reporting", "value": "Customizable reporting and analytics dashboards" }
                ]
            }
        ]
    }
    ];

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
    // 1. Theme Toggle Setup
    initThemeToggle();

    // 2. Mobile Menu Setup
    initMobileMenu();

    // 3. Logo Slider — clone track once for seamless infinite scroll (no HTML duplicates needed)
    initLogoSlider();

    // 4. Product Catalog Engine (If on products.html)
    if (document.getElementById("products-catalog-root")) {
        initProductCatalog();
    }

    // 5. Order & Inquiry Forms (If on order.html)
    if (document.getElementById("order-form")) {
        initOrderForm();
    }
    if (document.getElementById("inquiry-form")) {
        initInquiryForm();
    }

    // 6. Contact Form Validation (If on contact.html)
    if (document.getElementById("contact-form")) {
        initContactForm();
    }

    // 7. Service Booking Form (If on service.html)
    if (document.getElementById("booking-form")) {
        initBookingForm();
    }

    // 8. Quote Calculator Form (If on calculator.html)
    if (document.getElementById("calc-form")) {
        initCalculator();
    }

    // 9. Lightbox Preview Setup
    initLightboxPreview();
});

/* Logo Slider — seamless infinite scroll without HTML duplication
 * How it works:
 *   1. The HTML contains one set of logos (the "original" set).
 *   2. At runtime we clone those children and append them with aria-hidden="true".
 *   3. The CSS animates translateX(-50%), which lands exactly at the start of the
 *      clone — making the loop invisible to the eye.
 *   4. Adding logos in the future only requires one HTML change; JS handles the rest.
 */
function initLogoSlider() {
    document.querySelectorAll(".logo-slider-track").forEach(track => {
        // Collect original children (snapshot before mutation)
        const origItems = Array.from(track.children);
        if (origItems.length === 0) return;

        // Build a document fragment with clones
        const frag = document.createDocumentFragment();
        origItems.forEach(item => {
            const clone = item.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            frag.appendChild(clone);
        });
        track.appendChild(frag);
    });
}


/* Theme Toggle Module */
function initThemeToggle() {
    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-theme");
        updateThemeIcons("dark");
    }

    toggleBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            const isDark = document.body.classList.contains("dark-theme");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            updateThemeIcons(isDark ? "dark" : "light");
        });
    });
}

function updateThemeIcons(theme) {
    const icons = document.querySelectorAll(".theme-toggle-btn svg");
    icons.forEach(icon => {
        if (theme === "dark") {
            // Display Sun Icon
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />';
        } else {
            // Display Moon Icon
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';
        }
    });
}

/* Mobile Menu Module */
function initMobileMenu() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");
    
    if (burger && nav) {
        burger.addEventListener("click", () => {
            nav.classList.toggle("active");
            burger.classList.toggle("toggle");
        });

        // Close menu when clicking links
        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                burger.classList.remove("toggle");
            });
        });
    }
}

/* Product Catalog Module */
function initProductCatalog() {
    const grid = document.getElementById("products-catalog-root");
    const searchInput = document.getElementById("catalog-search");
    const categoryButtons = document.querySelectorAll(".filter-btn");
    const modal = document.getElementById("product-detail-modal");
    
    let activeCategory = "All";
    let searchQuery = "";
    let adminProducts = []; // Admin-created products from db layer

    // Merge static base + admin-created products
    function getAllProducts() {
        return [...PRODUCTS_DB, ...adminProducts];
    }

    // Update category badge counts after product list changes
    function updateCategoryBadges() {
        const all = getAllProducts();
        categoryButtons.forEach(btn => {
            const catName = btn.dataset.category;
            const badge = btn.querySelector("span");
            if (badge) {
                const count = catName === "All"
                    ? all.length
                    : all.filter(p => p.category === catName).length;
                badge.textContent = count;
            }
        });
    }

    // Render loop
    function renderCatalog() {
        grid.innerHTML = "";
        const all = getAllProducts();
        
        const filtered = all.filter(p => {
            const matchesCat = activeCategory === "All" || p.category === activeCategory;
            const matchesSearch = searchQuery === "" || 
                p.name.toLowerCase().includes(searchQuery) ||
                p.description.toLowerCase().includes(searchQuery) ||
                (p.specs && p.specs.some(s => s.toLowerCase().includes(searchQuery)));
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                    <svg style="width: 48px; height: 48px; opacity: 0.5; margin-bottom: 16px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4>No products found</h4>
                    <p>Try refining your search text or category filter.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(p => {
            const card = document.createElement("div");
            card.className = "product-card animate-fade-in";
            const imgSrc = p.image || "assets/product_accessories.png";

            card.innerHTML = `
                <div class="product-img-placeholder">
                    <img src="${imgSrc}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: contain; display: block;">
                </div>
                <div class="product-category">${p.category}</div>
                <h3>${p.name}</h3>
                <p>${p.description}</p>
                <div class="product-card-footer">
                    <span class="product-action-link">View Specifications 
                        <svg style="width:14px; height:14px; display:inline;" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    </span>
                </div>
            `;

            card.addEventListener("click", () => showProductModal(p));
            grid.appendChild(card);
        });
    }

    // Category button clicks
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.dataset.category;
            renderCatalog();
        });
    });

    // Search bar filtering
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderCatalog();
        });
    }
    // Modal close hooks
    if (modal) {
        const closeBtn = modal.querySelector(".modal-close");
        closeBtn.addEventListener("click", () => modal.classList.remove("active"));
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.classList.remove("active");
        });
    }

    // Check URL parameters for starting category filter
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get("category");
    if (catParam) {
        const decodedCat = decodeURIComponent(catParam).trim().toLowerCase();
        const matchingBtn = Array.from(categoryButtons).find(btn => {
            const btnCat = btn.dataset.category.trim().toLowerCase();
            return btnCat === decodedCat || btnCat.replace(/\s+/g, '+') === decodedCat;
        });
        if (matchingBtn) {
            categoryButtons.forEach(b => b.classList.remove("active"));
            matchingBtn.classList.add("active");
            activeCategory = matchingBtn.dataset.category;
        }
    }

    // Load admin products from db, then do initial render
    // db is available because db.js is always loaded before app.js
    if (typeof db !== "undefined" && db.getProducts) {
        db.getProducts(products => {
            adminProducts = products;
            updateCategoryBadges();
            renderCatalog();
        });
    } else {
        // Fallback: just render static products
        updateCategoryBadges();
        renderCatalog();
    }
}


function showProductModal(product) {
    const modal = document.getElementById("product-detail-modal");
    if (!modal) return;

    modal.querySelector(".modal-title").textContent = product.name;
    modal.querySelector(".modal-category").textContent = product.category;
    modal.querySelector(".modal-desc").textContent = product.description;

    // Set modal product image
    const modalImg = modal.querySelector("#modal-product-img");
    if (modalImg) {
        modalImg.src = product.image || "assets/product_accessories.png";
        modalImg.alt = product.name;
    }

    const specsList = modal.querySelector(".modal-specs-list");
    specsList.innerHTML = "";

    if (product.specSections && product.specSections.length > 0) {
        // Render structured grouped spec sections
        product.specSections.forEach(group => {
            const sectionEl = document.createElement("li");
            sectionEl.className = "spec-section";
            sectionEl.innerHTML = `<span class="spec-section-heading">${group.section}</span>`;
            const table = document.createElement("table");
            table.className = "spec-table";
            group.items.forEach(item => {
                const tr = document.createElement("tr");
                tr.innerHTML = `<td class="spec-label">${item.label}</td><td class="spec-value">${item.value}</td>`;
                table.appendChild(tr);
            });
            sectionEl.appendChild(table);
            specsList.appendChild(sectionEl);
        });
    } else if (product.specs && product.specs.length > 0) {
        product.specs.forEach(spec => {
            const li = document.createElement("li");
            li.textContent = spec;
            specsList.appendChild(li);
        });
    } else {
        specsList.innerHTML = `<li>Full operational training and setup instructions provided.</li>
                               <li>Comprehensive warranty support options available.</li>
                               <li>Direct field support engineer coverage.</li>`;
    }

    const orderLink = modal.querySelector("#modal-order-link");
    if (orderLink) {
        orderLink.href = `order.html?tab=order&product=${encodeURIComponent(product.name)}`;
    }
    const inquireLink = modal.querySelector("#modal-inquire-link");
    if (inquireLink) {
        inquireLink.href = `order.html?tab=inquiry&product=${encodeURIComponent(product.name)}&subject=${encodeURIComponent('Inquiry about: ' + product.name)}`;
    }

    modal.classList.add("active");
}

/* Helper to save form submissions and trigger Netlify Forms notification */
function saveSubmission(type, data) {
    if (typeof db !== 'undefined' && db.saveSubmission) {
        db.saveSubmission(type, data);
    } else {
        console.warn("Database adapter not loaded, falling back to basic localStorage.");
        const rawSubmissions = JSON.parse(localStorage.getItem("ubsl_submissions") || "[]");
        const prefix = type === "Order" ? "ORD" : 
                       type === "Booking" ? "BKG" : 
                       type === "Inquiry" ? "INQ" : "CON";
        const id = `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
        const newSubmission = {
            id: id,
            type: type,
            timestamp: new Date().toISOString(),
            status: "Pending Review",
            data: data
        };
        rawSubmissions.push(newSubmission);
        localStorage.setItem("ubsl_submissions", JSON.stringify(rawSubmissions));
    }

    // Submit to Netlify forms for email notifications
    const formName = type === "Order" ? "order-form" :
                     type === "Booking" ? "booking-form" :
                     type === "Inquiry" ? "inquiry-form" : "contact-form";
    submitToNetlify(formName, data);
}

/* Helper to POST form data to Netlify for email alerts */
function submitToNetlify(formName, data) {
    const bodyParams = new URLSearchParams();
    bodyParams.append("form-name", formName);
    for (const key in data) {
        bodyParams.append(key, data[key]);
    }

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: bodyParams.toString()
    })
    .then(() => console.log(`UBSL Notifications: Netlify Form [${formName}] submitted successfully.`))
    .catch(err => console.error("UBSL Notifications: Netlify Form submission failed:", err));
}

/* Order Form Module */
function initOrderForm() {
    const form = document.getElementById("order-form");
    if (!form) return;

    // Pre-fill from URL params (when opened from product modal)
    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get("product");
    const tabParam = urlParams.get("tab");

    // Switch to correct tab if directed from modal
    if (tabParam === "inquiry" && typeof switchTab === "function") {
        switchTab("inquiry");
    }

    // Pre-fill the product field
    if (productParam) {
        const productField = document.getElementById("order-product");
        if (productField) productField.value = productParam;
        // Show the banner
        const banner = document.getElementById("order-product-banner");
        const bannerName = document.getElementById("order-product-name");
        if (banner && bannerName) {
            bannerName.textContent = productParam;
            banner.classList.add("visible");
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("order-name").value.trim();
        const company = document.getElementById("order-company").value.trim();
        const email = document.getElementById("order-email").value.trim();
        const phone = document.getElementById("order-phone").value.trim();
        const product = document.getElementById("order-product").value.trim();
        const qty = document.getElementById("order-qty").value;
        const delivery = document.getElementById("order-delivery").value;
        const location = document.getElementById("order-location").value.trim();
        const notes = document.getElementById("order-notes").value.trim();

        if (!name || !company || !email || !phone || !product) {
            alert("Please fill in all required fields (*).");
            return;
        }

        saveSubmission("Order", {
            name,
            company,
            email,
            phone,
            product,
            quantity: qty,
            delivery,
            location,
            notes
        });

        const container = form.parentElement;
        container.innerHTML = `
            <div class="form-success-message animate-fade-in" style="text-align:center; padding: 60px 20px;">
                <div class="form-success-icon" style="width:72px;height:72px;background:rgba(197,160,89,0.12);color:var(--accent);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;margin:0 auto 24px;">🛒</div>
                <h2 style="font-size:26px;margin-bottom:12px;">Order Request Submitted!</h2>
                <p style="color:var(--text-muted);margin-bottom:28px;max-width:480px;margin-left:auto;margin-right:auto;">
                    Thank you, <strong>${name}</strong>. Your order request for <strong>${qty}× ${product}</strong> has been received.
                    Our sales team will contact you at <strong>${email}</strong> to confirm pricing and delivery details.
                </p>
                <div style="font-size:14px;text-align:left;background:var(--bg-light);padding:20px;border-radius:var(--radius-md);border:1px solid var(--border-color);max-width:420px;margin:0 auto 28px;">
                    <p style="font-weight:700;margin-bottom:10px;">Order Summary:</p>
                    <p style="margin-bottom:5px;">• Product: ${product}</p>
                    <p style="margin-bottom:5px;">• Quantity: ${qty}</p>
                    <p style="margin-bottom:5px;">• Organisation: ${company}</p>
                    <p style="margin-bottom:5px;">• Preferred Delivery: ${delivery.replace('asap','As soon as possible').replace('2weeks','Within 2 weeks').replace('1month','Within 1 month').replace('3months','Within 3 months').replace('flexible','Flexible')}</p>
                    ${location ? `<p style="margin-bottom:5px;">• Location: ${location}</p>` : ""}
                </div>
                <a href="products.html" class="btn btn-primary">Continue Browsing Products</a>
            </div>
        `;
    });
}

/* Inquiry Form Module */
function initInquiryForm() {
    const form = document.getElementById("inquiry-form");
    if (!form) return;

    // Pre-fill from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get("product");
    const subjectParam = urlParams.get("subject");
    const tabParam = urlParams.get("tab");

    if (tabParam === "inquiry" && typeof switchTab === "function") {
        switchTab("inquiry");
    }

    if (subjectParam) {
        const subjectField = document.getElementById("inq-subject");
        if (subjectField) subjectField.value = subjectParam;
    }

    if (productParam) {
        // Show banner
        const banner = document.getElementById("inquiry-product-banner");
        const bannerName = document.getElementById("inquiry-product-name");
        if (banner && bannerName) {
            bannerName.textContent = productParam;
            banner.classList.add("visible");
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("inq-name").value.trim();
        const email = document.getElementById("inq-email").value.trim();
        const subject = document.getElementById("inq-subject").value.trim();
        const message = document.getElementById("inq-message").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill in all required fields (*).");
            return;
        }

        saveSubmission("Inquiry", {
            name,
            email,
            subject,
            message
        });

        const container = form.parentElement;
        container.innerHTML = `
            <div class="form-success-message animate-fade-in" style="text-align:center;padding:60px 20px;">
                <div class="form-success-icon" style="width:72px;height:72px;background:rgba(16,185,129,0.1);color:var(--success);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;margin:0 auto 24px;">✓</div>
                <h2 style="font-size:26px;margin-bottom:12px;">Inquiry Sent!</h2>
                <p style="color:var(--text-muted);margin-bottom:28px;max-width:460px;margin-left:auto;margin-right:auto;">
                    Thank you, <strong>${name}</strong>. We've received your inquiry: <em>"${subject}"</em>.
                    An expert from our team will reply to <strong>${email}</strong> within one business day.
                </p>
                <a href="products.html" class="btn btn-primary">Back to Products</a>
            </div>
        `;
    });
}

/* Contact Form Module */
function initContactForm() {
    const form = document.getElementById("contact-form");
    
    // Auto-prepopulate parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get("subject");
    const detailsParam = urlParams.get("details");
    
    if (subjectParam && document.getElementById("contact-subject")) {
        document.getElementById("contact-subject").value = subjectParam;
    }
    if (detailsParam && document.getElementById("contact-message")) {
        document.getElementById("contact-message").value = detailsParam;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const tel = document.getElementById("contact-phone").value.trim();
        const message = document.getElementById("contact-message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all required fields (Name, Email, Message).");
            return;
        }

        saveSubmission("Contact", {
            name,
            email,
            phone: tel,
            message
        });

        const container = form.parentElement;
        container.innerHTML = `
            <div class="form-success-message animate-fade-in">
                <div class="form-success-icon">✉</div>
                <h2>Message Sent Successfully!</h2>
                <p style="color: var(--text-muted); margin-bottom: 24px;">Thank you for contacting Unique Business Systems. An engineering consultant or account manager will get back to you shortly at <strong>${email}</strong>.</p>
                <div style="font-size: 14px; text-align: left; background-color: var(--bg-light); padding: 20px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
                    <p style="margin-bottom: 8px;"><strong>Summary of details submitted:</strong></p>
                    <p style="margin-bottom: 4px;">• Contact Name: ${name}</p>
                    <p style="margin-bottom: 4px;">• Phone Number: ${tel || "Not provided"}</p>
                    <p style="margin-bottom: 4px;">• Email Address: ${email}</p>
                </div>
                <button class="btn btn-primary" style="margin-top: 30px;" onclick="window.location.reload()">Send Another Message</button>
            </div>
        `;
    });
}

/* Service Booking Module */
function initBookingForm() {
    const form = document.getElementById("booking-form");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const company = document.getElementById("booking-company").value.trim();
        const contactPerson = document.getElementById("booking-name").value.trim();
        const email = document.getElementById("booking-email").value.trim();
        const model = document.getElementById("booking-model").value;
        const issue = document.getElementById("booking-issue").value.trim();
        const date = document.getElementById("booking-date").value;

        if (company === "" || contactPerson === "" || email === "" || issue === "" || date === "") {
            alert("Please fill in all required fields.");
            return;
        }

        saveSubmission("Booking", {
            company,
            contactPerson,
            email,
            model,
            issue,
            date
        });

        const container = form.parentElement;
        container.innerHTML = `
            <div class="form-success-message animate-fade-in">
                <div class="form-success-icon">🔧</div>
                <h2>Repair Scheduled Successfully!</h2>
                <p style="color: var(--text-muted); margin-bottom: 24px;">Your maintenance request has been logged. An engineer will contact <strong>${contactPerson}</strong> at <strong>${company}</strong> to confirm the dispatch for <strong>${date}</strong>.</p>
                <div style="font-size: 14px; text-align: left; background-color: var(--bg-light); padding: 20px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
                    <p style="margin-bottom: 8px;"><strong>Service Ticket Details:</strong></p>
                    <p style="margin-bottom: 4px;">• Ticket Status: <span style="color: var(--success); font-weight: 700;">Scheduled</span></p>
                    <p style="margin-bottom: 4px;">• Equipment Type/Model: ${model}</p>
                    <p style="margin-bottom: 4px;">• Date of Visit: ${date}</p>
                    <p style="margin-bottom: 4px;">• Issue Logged: "${issue}"</p>
                </div>
                <button class="btn btn-secondary" style="margin-top: 30px;" onclick="window.location.reload()">Book Another Visit</button>
            </div>
        `;
    });
}

/* Quote & Pricing Estimator Module */
function initCalculator() {
    const form = document.getElementById("calc-form");
    if (!form) return;

    const calcType = document.getElementById("calc-type");
    const calcCategory = document.getElementById("calc-category");
    const calcQty = document.getElementById("calc-qty");
    const calcDuration = document.getElementById("calc-months");
    const calcSupport = document.getElementById("calc-support");
    const calcCustom = document.getElementById("calc-custom-check");

    const durationLabel = document.getElementById("calc-duration-label");
    const resultNormal = document.getElementById("calc-result-normal");
    const resultCustom = document.getElementById("calc-result-custom");
    const breakdownPurchase = document.getElementById("breakdown-purchase");
    const breakdownLease = document.getElementById("breakdown-lease");

    const basePrices = {
        "Notes Counters": 800,
        "Coin Counters": 1200,
        "Counterfeit Detectors": 150,
        "Strapping & Wrapping": 2500,
        "Cheque Embossers": 1800,
        "Exchange Rate Boards": 900,
        "Accessories & Others": 100
    };

    function calculate() {
        if (calcCustom.checked || calcQty.value > 50) {
            resultNormal.style.display = "none";
            resultCustom.style.display = "block";
            return;
        } else {
            resultNormal.style.display = "flex";
            resultCustom.style.display = "none";
        }

        const type = calcType.value;
        const category = calcCategory.value;
        let qty = parseInt(calcQty.value) || 1;
        let duration = parseInt(calcDuration.value) || 1;
        const support = calcSupport.value;

        const basePrice = basePrices[category] || 1000;
        let slaRateMultiplier = 0.1; 
        if (support === "premium") slaRateMultiplier = 0.125;
        if (support === "enterprise") slaRateMultiplier = 0.14;

        if (type === "purchase") {
            durationLabel.textContent = "SLA Term (Years)";
            breakdownPurchase.style.display = "flex";
            breakdownLease.style.display = "none";

            const unitCost = basePrice;
            const subtotal = unitCost * qty;
            const annualSLAUnit = unitCost * slaRateMultiplier;
            const totalSLA = annualSLAUnit * qty * duration;

            document.getElementById("res-purchase-unit").textContent = "$" + unitCost.toFixed(2);
            document.getElementById("res-purchase-subtotal").textContent = "$" + subtotal.toFixed(2);
            document.getElementById("res-sla-unit").textContent = "$" + annualSLAUnit.toFixed(2);
            document.getElementById("res-purchase-discounts").textContent = qty > 10 ? "Bulk 5% Applied" : "None";

            let finalSubtotal = subtotal;
            if (qty > 10) finalSubtotal = subtotal * 0.95;

            document.getElementById("res-total-label").textContent = "Total Equipment Outlay:";
            document.getElementById("res-monthly-total").textContent = "$" + finalSubtotal.toFixed(2);
            document.getElementById("res-contract-label").textContent = "Annual Support Cost (All Units):";
            document.getElementById("res-contract-total").textContent = "$" + (annualSLAUnit * qty).toFixed(2);
        } else {
            durationLabel.textContent = "Lease Term (Months)";
            breakdownPurchase.style.display = "none";
            breakdownLease.style.display = "flex";

            const monthlyRateBase = basePrice * 0.05; 
            const supportMonthly = (basePrice * slaRateMultiplier) / 12;
            const unitMonthly = monthlyRateBase + supportMonthly;

            document.getElementById("res-base-rate").textContent = "$" + unitMonthly.toFixed(2);
            document.getElementById("res-qty").textContent = qty;
            document.getElementById("res-months").textContent = duration + " months";
            document.getElementById("res-discounts").textContent = qty > 10 ? "Bulk 5% Applied" : "None";

            let totalMonthly = unitMonthly * qty;
            if (qty > 10) totalMonthly *= 0.95;

            document.getElementById("res-total-label").textContent = "Total Monthly Lease:";
            document.getElementById("res-monthly-total").textContent = "$" + totalMonthly.toFixed(2);
            document.getElementById("res-contract-label").textContent = "Total Contract Value:";
            document.getElementById("res-contract-total").textContent = "$" + (totalMonthly * duration).toFixed(2);
        }
    }

    form.addEventListener("input", calculate);
    calcType.addEventListener("change", calculate);
    calcCategory.addEventListener("change", calculate);
    calcSupport.addEventListener("change", calculate);
    
    calculate();

    const reqBtn = document.getElementById("request-custom-btn");
    if (reqBtn) {
        reqBtn.addEventListener("click", () => {
            window.location.href = `order.html?product=${encodeURIComponent(calcCategory.value + (calcType.value === 'lease' ? ' (Lease)' : ' (Purchase)'))}`;
        });
    }
}

/* Lightbox Image Preview Module */
function initLightboxPreview() {
    // Create the lightbox markup dynamically if it doesn't exist
    if (!document.getElementById("global-lightbox")) {
        const lightbox = document.createElement("div");
        lightbox.id = "global-lightbox";
        lightbox.className = "lightbox-overlay";
        lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Close preview">&times;</button>
            <div class="lightbox-img-wrapper">
                <img class="lightbox-img" src="" alt="Preview">
            </div>
            <div class="lightbox-caption"></div>
        `;
        document.body.appendChild(lightbox);

        // Click to close
        lightbox.addEventListener("click", (e) => {
            if (e.target.className === "lightbox-overlay" || e.target.className === "lightbox-close") {
                closeLightbox();
            }
        });
    }

    const lightbox = document.getElementById("global-lightbox");
    const lightboxImg = lightbox.querySelector(".lightbox-img");
    const lightboxCaption = lightbox.querySelector(".lightbox-caption");

    function openLightbox(src, captionText) {
        lightboxImg.src = src;
        lightboxCaption.textContent = captionText || "";
        lightbox.classList.add("active");
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
    }

    // Delegate click events on body to handle dynamically added catalog product images and modal images
    document.body.addEventListener("click", (e) => {
        // If it's a product card image or detail modal image
        if (e.target.matches(".product-img-placeholder img") || e.target.id === "modal-product-img") {
            const src = e.target.src;
            if (src && !src.includes("data:image/svg")) {
                e.stopPropagation();
                // Find title
                let titleText = "";
                if (e.target.id === "modal-product-img") {
                    const modalTitle = document.querySelector(".modal-title");
                    if (modalTitle) titleText = modalTitle.textContent;
                } else {
                    const card = e.target.closest(".product-card");
                    if (card) {
                        const cardTitle = card.querySelector("h3");
                        if (cardTitle) titleText = cardTitle.textContent;
                    }
                }
                openLightbox(src, titleText);
            }
        }
    });
}
