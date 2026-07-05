/* Unique Business Systems Limited (UBSL) - Core Application Logic */

// Embed compiled product database (No template placeholders!)
const PRODUCTS_DB = [
    // 1. Note Counters (Vacuum - FDJ, YC 100, TC 500)
    {
        "name": "FDJ",
        "category": "Note Counters",
        "image": "assets/fdj.png",
        "description": "Professional grade high-speed note counter suitable for bank tellers, retail cash offices, and cashier desks.",
        "specs": ["Vacuum suction Note Counter", "Counting speeds up to 1,500 notes/minute", "Compact design", "Reliable sheet feed system"]
    },
    {
        "name": "YC 100",
        "category": "Note Counters",
        "image": "assets/yc_100.png",
        "description": "Advanced single-pocket currency scanner that counts and authenticates banknotes at high speeds.",
        "specs": ["Vacuum suction Note Counter", "Supports multiple currencies", "Advanced counterfeit detection sensors", "Simplifies daily cash processing"]
    },
    {
        "name": "TC 500",
        "category": "Note Counters",
        "image": "assets/tc_500.png",
        "description": "Industry leading bank-grade note scanner and counter with state-of-the-art imaging sensors.",
        "specs": ["Vacuum suction Note Counter", "High-speed image scanning", "Unparalleled authentication sensors", "Upgradable software for new note versions"]
    },

    // 2. Note Sorters (LS-200, Century 101, BC 55, Glory GFS 220, LS-100, BNC, BCS 165)
    {
        "name": "LS-200",
        "category": "Note Sorters",
        "image": "assets/ls_200.png",
        "description": "Multi-currency bank-grade note scanner with dual-pocket capability, allowing continuous processing without stops.",
        "specs": ["Continuous counting with reject pocket", "Fast processing for large cash volumes", "Dual CIS image sensors"]
    },
    {
        "name": "Century 101",
        "category": "Note Sorters",
        "image": "assets/century_101.png",
        "description": "High performance infrared based digital bank-grade currency sorter designed for heavy-duty sorting.",
        "specs": [
            "Easy to install",
            "Low maintenance",
            "Fine finishing",
            "Top performance",
            "Longer working life",
            "Launching infrared based digital sorter atm sorter.",
            "Dual C.I.S based (cute, taped notes sort).",
            "Options to sort out 2005 separately.",
            "Software upgradeable.",
            "Atm sorting options.",
            "Authentication",
            "Accurate",
            "Fitness Sorting",
            "High Speed",
            "Serial Number Capturing of each Note.",
            "Image Scan of Currency"
        ]
    },
    {
        "name": "BC 55",
        "category": "Note Sorters",
        "image": "assets/bc_55.png",
        "description": "Versatile two-pocket currency scanner that processes mixed bills, count, sort and check counterfeit bills concurrently.",
        "specs": ["Continuous operation with dedicated reject pocket", "Identifies note denomination and series", "Durable construction"]
    },
    {
        "name": "Glory GFS 220",
        "category": "Note Sorters",
        "image": "assets/glory_gfs_220.png",
        "description": "High-speed professional currency sorter offering advanced scanning, fitness sorting, and reliability.",
        "specs": [
            "Advanced dual CIS scanning sensors",
            "Fitness sorting for bank and ATM replenishment",
            "Counts and sorts up to 1,200 notes/minute",
            "Multi-currency processing and serial number printing"
        ]
    },
    {
        "name": "LS-100",
        "category": "Note Sorters",
        "image": "assets/ls_100.png",
        "description": "Commercial currency counter and authenticator designed for convenience stores, gas stations, and retail back offices.",
        "specs": ["Compact footprint", "High accuracy sorting and counting", "Easy to clean sensor track"]
    },
    {
        "name": "BNC",
        "category": "Note Sorters",
        "image": "assets/bnc.png",
        "description": "Multi-pocket premium currency sorter offering full bank-grade fitness sorting and serial number tracking.",
        "specs": [
            "Easy to install",
            "Low maintenance",
            "Fine finishing",
            "Top performance",
            "Longer working life",
            "Launching infrared based digital sorter atm sorter.",
            "Dual C.I.S based (cute, taped notes sort).",
            "Options to sort out 2005 separately.",
            "Software upgradeable.",
            "Atm sorting options.",
            "Authentication",
            "Accurate",
            "Fitness Sorting",
            "High Speed",
            "Serial Number Capturing of each Note.",
            "Image Scan of Currency"
        ]
    },
    {
        "name": "BCS 165",
        "category": "Note Sorters",
        "image": "assets/bcs_165.png",
        "description": "Advanced multi-pocket currency sorter for high-volume banking cash centers.",
        "specs": [
            "High speed multi-pocket currency fitness sorter",
            "Advanced counterfeit detection and image scanners",
            "Sorts by denomination, face, orientation, and fitness",
            "User-friendly interface with touchscreen display"
        ]
    },

    // 3. Four Pocket Note Sorters (NC 9500)
    {
        "name": "NC 9500",
        "category": "Four Pocket Note Sorters",
        "image": "assets/nc_9500.png",
        "description": "Professional 4-pocket currency sorter designed for heavy-duty cash room environments, featuring high throughput and deep fitness sorting. Specs: input 100-240 VAC, 3.7A, 50/60Hz.",
        "specs": [
            "Input voltage: 100-240 VAC, 3.7A, 50/60Hz",
            "4 exit pockets and 1 dedicated reject pocket",
            "ATM fitness sorting, denomination sorting, face/orient sorting",
            "Equipped with advanced multi-wavelength IR and CIS sensors"
        ]
    },

    // 4. Shredders (Cobra, Atlas)
    {
        "name": "Cobra",
        "category": "Shredders",
        "image": "assets/cobra.png",
        "description": "Heavy-duty paper and document shredder with high-security cross-cut layout for corporate offices.",
        "specs": [
            "Cross-cut security shredding",
            "Quiet motor operation",
            "Automatic start and stop sensors",
            "Heavy-duty blades that handle staples and paperclips"
        ]
    },
    {
        "name": "Atlas",
        "category": "Shredders",
        "image": "assets/atlas.png",
        "description": "High-capacity commercial shredder designed for continuous shredding of documents, CDs, and credit cards.",
        "specs": [
            "Large bin capacity for heavy paper load",
            "Shreds credit cards, CDs, and paper sheets",
            "Overload protection and jam-proof technology",
            "Durable casters for mobility in office settings"
        ]
    },

    // 5. Cheque Printers (Sysgraf AD 410, FZA 2155 Cheque Scanner, Cheque Scanner)
    {
        "name": "Sysgraf AD 410",
        "category": "Cheque Printers",
        "image": "assets/sysgraf_ad_410.png",
        "description": "Specialized high-security inkjet cheque printer for precise personalization, encoding, and bank document printing.",
        "specs": [
            "High precision personalization encoder",
            "MICR E13B and CMC7 font printing",
            "Durable print head for high volume cheque books",
            "Seamless integration with banking application systems"
        ]
    },
    {
        "name": "FZA 2155 Cheque Scanner",
        "category": "Cheque Printers",
        "image": "assets/fza scanner.png",
        "description": "A Fast, Dynamic, High volume Cheque Scanner. It is the cornerstone for production cheque processing, delivering high performance, reliability and image quality.",
        "specs": [
            "Efficient countertop design capable of meeting the toughest challenges.",
            "Improves efficiency of payment processes and treasury management.",
            "Handles business and personal cheques, and thicker items such as rebate cards and envelopes."
        ]
    },
    {
        "name": "Cheque Scanner",
        "category": "Cheque Printers",
        "image": "assets/cheque scanner.png",
        "description": "A Fast, Dynamic, High volume Cheque Scanner delivering high performance, reliability and image quality.",
        "specs": [
            "Efficient countertop design.",
            "Improves efficiency of payment processes and treasury management.",
            "Handles wide variety of items: business/personal cheques, cards, envelopes."
        ]
    },

    // 6. Embossers (Cheque Writer)
    {
        "name": "Cheque Writer",
        "category": "Embossers",
        "image": "assets/cheque writer.png",
        "description": "The ultimate in 'contemporary' check writing security with a deeply serrated Paymaster typeface.",
        "specs": [
            "One-key security system.",
            "Exclusive replaceable ink ribbon cartridge.",
            "Deeply serrated Paymaster typeface.",
            "Imprints various sized checks quickly and accurately.",
            "Dye based inking provides the ultimate alteration deterrent."
        ]
    },

    // 7. Coin Wrappers (Sirio 18, Sirio 30)
    {
        "name": "Sirio 18",
        "category": "Coin Wrappers",
        "image": "assets/sirio 18.png",
        "description": "Automatic coin wrapping machine designed to package coins into secure paper rolls efficiently.",
        "specs": [
            "Speed: 18 rolls per minute.",
            "Hopper capacity: 4,000 coins.",
            "Automatic revolver roll change."
        ]
    },
    {
        "name": "Sirio 30",
        "category": "Coin Wrappers",
        "image": "assets/sirio 30.png",
        "description": "High-speed industrial coin wrapping machine with automatic coin feeder for heavy-duty banking applications.",
        "specs": [
            "Speed: 20 to 30 rolls per minute.",
            "Hopper capacity: 4,000 to 6,000 coins.",
            "Integrated automatic coin feeder."
        ]
    },

    // 8. Coin Counters (Uni, Scan Coin, Jetsort 1000, Sortorex, SC 303/313, DTC, SC 350/360, CP Active-9)
    {
        "name": "Uni",
        "category": "Coin Counters",
        "image": "assets/uni.png",
        "description": "High-speed coin counting and sorting machine designed for banks, supermarkets, and cash offices.",
        "specs": [
            "Accurate mechanical counting and sorting",
            "Batching and accumulation options",
            "Durable design built for continuous operation",
            "Handles local currency coins and tokens"
        ]
    },
    {
        "name": "SCAN COIN",
        "category": "Coin Counters",
        "image": "assets/scan_coin.png",
        "description": "Speed up your coin processing while keeping it totally accurate. With this machine you get the highest possible accuracy in counting, sorting and batching.",
        "specs": [
            "Off-sort counterfeit, foreign and damaged coins accurately.",
            "Choose among five different models to best suit your needs.",
            "High processing speed for mixed currency batches."
        ]
    },
    {
        "name": "Jetsort 1000",
        "category": "Coin Counters",
        "image": "assets/jetsort_1000.png",
        "description": "Improve flexibility with the features and options designed for your business needs. Space-saving footprint with massive performance.",
        "specs": [
            "Gain efficiency with processing speeds up to 2,200 coins per minute.",
            "Ensure balanced deposits with 99.995% accuracy.",
            "Gain convenience and space savings with small footprint."
        ]
    },
    {
        "name": "Sortorex",
        "category": "Coin Counters",
        "image": "assets/sortorex.png",
        "description": "Heavy-duty coin sorter for large-scale cash centers and vending operators dealing in mixed batches of coins.",
        "specs": [
            "Count up to 3,500 coins per minute.",
            "Handles up to 16 denominations in two currencies.",
            "Robust industrial steel chassis."
        ]
    },
    {
        "name": "SC 303/313",
        "category": "Coin Counters",
        "image": "assets/sc_303_313.png",
        "description": "Compact and easy-to-use coin counters. Just adjust the coin diameter and thickness and you are up and running.",
        "specs": [
            "Easy adjustment controls for coin specifications",
            "Highly portable with integrated carry handle",
            "Quiet operation suitable for front-office use"
        ]
    },
    {
        "name": "DTC, The New Ultimate Coin Sorter",
        "category": "Coin Counters",
        "image": "assets/dtc_ultimate.png",
        "description": "Heavy-duty commercial coin sorter that counts, sorts, and rejects foreign/damaged coins automatically.",
        "specs": ["Next-gen sensor technology", "Highly reliable sorting mechanism", "Modern touchscreen control panel"]
    },
    {
        "name": "SC 350/360",
        "category": "Coin Counters",
        "image": "assets/sc_350_360.png",
        "description": "Premium electronic coin counters with advanced alloy sensor technology for accurate sorting.",
        "specs": ["Processes up to 3,000 coins/minute", "Configurable batch sizes", "Memory storage for multiple count sessions"]
    },
    {
        "name": "CP Active-9",
        "category": "Coin Counters",
        "image": "assets/cp_active_9.png",
        "description": "Intelligent Coin Processing system tailored for high-volume cash centres and vault management operations.",
        "specs": ["Monitors real-time sorting performance", "Optimized profitability and control", "Integrates with vault management systems"]
    },

    // 9. Strapping Machines (Packer tt 201/202, Signode ttx, Strapping Roll)
    {
        "name": "Packer tt 201",
        "category": "Strapping Machines",
        "image": "assets/semi auto strapping machine.png",
        "description": "Fully RoHS compliant semi-automatic open-cabinet strapping machine set for and fitted with 12mm strapping.",
        "specs": [
            "Adjustable for strap width from 6mm to 15.5mm.",
            "Can operate at up to 24 cycles per minute.",
            "Easily operated controls including manual tension adjustment.",
            "On adjustable legs with braked castors (table height 760mm to 930mm).",
            "Dimensions: W902mm x D586mm x H760mm, weight 85kgs."
        ]
    },
    {
        "name": "Packer tt 202",
        "category": "Strapping Machines",
        "image": "assets/strap machine.png",
        "description": "Heavy-duty semi-automatic closed-cabinet strapping machine protecting components from dust and debris.",
        "specs": [
            "Closed cabinet layout for safety and dust protection.",
            "Twelve months return to base warranty, parts and labour.",
            "Adjustable for strap width from 6mm to 15.5mm.",
            "On adjustable legs with braked castors.",
            "Dimensions: W902mm x D586mm x H760mm, weight 85kgs."
        ]
    },
    {
        "name": "Signode ttx",
        "category": "Strapping Machines",
        "image": "assets/semi auto strapping machine.png",
        "description": "Premium automatic strapping machine designed for high-speed industrial packaging applications.",
        "specs": [
            "High-speed automatic strapping cycle",
            "Minimal wear and tear parts",
            "Perfect strap tension and seal strength",
            "Ideal for sorting rooms and courier depots"
        ]
    },
    {
        "name": "5MM*0.47MM Strapping Roll",
        "category": "Strapping Machines",
        "image": "assets/strapping roll.png",
        "description": "Quality strap manufactured to machine grade for consistent and reliable use with PACKER automatic and semi-automatic machines.",
        "specs": [
            "Dimensions: 5MM * 0.47MM strapping roll.",
            "Break strain capacity: 69kg.",
            "Consistent and reliable use with PACKER automatic machines."
        ]
    },

    // 10. Rate Boards (DTD-23-2Y-250, ERB-2806B+MS, ERB-2806B+MS-NP)
    {
        "name": "DTD-23-2Y-250",
        "category": "Rate Boards",
        "image": "assets/dtd_23_2y_250.png",
        "description": "Compact digital exchange rate board with LED panels for clear display of current currency conversion rates.",
        "specs": [
            "Accurate digital date and time display.",
            "Easy operation via local keypad or PC.",
            "Non-reflective acrylic front panel.",
            "Backup memory to retain data during power failure."
        ]
    },
    {
        "name": "ERB-2806B+MS Board",
        "category": "Rate Boards",
        "image": "assets/erb_2806b_ms.png",
        "description": "Large corporate exchange rate board featuring 16 rows of LED rate listings and a programmable scrolling ticker.",
        "specs": [
            "Includes 16x128 matrix digital moving Arabic/English sign.",
            "Infrared remote controller for updating rates.",
            "Changeable magnetic labels for currency name and logo.",
            "Built-in RS232 interface for PC communication.",
            "Backup memory to protect current exchange data."
        ]
    },
    {
        "name": "ERB-2806B+MS-NP",
        "category": "Rate Boards",
        "image": "assets/erb_2806b_ms_np.png",
        "description": "Professional LED exchange rate display board optimized for currency exchange bureaus and bank branches.",
        "specs": [
            "Backup memory to keep the latest exchange rates when the power fails.",
            "Ultra-bright numeric LED panels."
        ]
    },

    // 11. Perforators (Perfostar I/D Perforating Machine)
    {
        "name": "Perfostar I/D Perforating Machine",
        "category": "Perforators",
        "image": "assets/perforator.png",
        "description": "With our perforator Perfostar I/D you can easily perforate dates with 6 number wheels. Each wheel is equipped with a fixed lever for rapid change of the date.",
        "specs": [
            "8-digit adjustable date/numbers perforation with fixed letters at upper/lower line.",
            "Manual lever selection type.",
            "Punching capacity: 15 sheets (64gm).",
            "Size (L x W x H mm): 295 x 214 x 229 (486 incl. handle), Weight: 14.7kg.",
            "Die-block: 905L-207."
        ]
    },

    // 12. ATMs (NCR SelfServ, Diebold Nixdorf)
    {
        "name": "NCR SelfServ ATM",
        "category": "ATMs",
        "image": "assets/ncr_selfserv_atm.png",
        "description": "Reliable lobby cash dispenser ATM system designed for continuous service and high transaction volume.",
        "specs": [
            "High capacity cash dispensing cassettes",
            "Sleek user-friendly interface with touch controls",
            "Advanced card reader and security sensors",
            "Industry-proven reliability and longevity"
        ]
    },
    {
        "name": "Diebold Nixdorf ATM",
        "category": "ATMs",
        "image": "assets/diebold_nixdorf_atm.png",
        "description": "Through-the-wall advanced intelligent cash deposit and dispensing ATM terminal.",
        "specs": [
            "Advanced cash deposit and recycling module",
            "Through-the-wall configuration for 24/7 client access",
            "High security safe housing",
            "Full compliance with EMV and PCI standards"
        ]
    },

    // 13. Counterfeit Detectors (Bankscan, Pocket UV, SLD-16)
    {
        "name": "Bankscan",
        "category": "Counterfeit Detectors",
        "image": "assets/bankscan.png",
        "description": "Large aperture with the ability to slide a complete document below the illumination for thorough examination.",
        "specs": [
            "Double 6 Watt UV Fast Start Counterfeit Detector.",
            "Manufactured from a sturdy metal frame with large opening.",
            "Highly reflective tube shield to maximise the UV output.",
            "Dimensions: 270 x 185 x 120 mm, Weight: 1.85 Kg."
        ]
    },
    {
        "name": "Pocket UV Counterfeit Detector",
        "category": "Counterfeit Detectors",
        "image": "assets/pocket uv detectors.png",
        "description": "Compact counterfeit detector with built-in torch stand and wrist strap to verify banknotes, passports, and credit cards.",
        "specs": [
            "Compact With Built In Torch Stand And Wrist Strap.",
            "Verify Banknotes, Passports, I.D. Cards, Legal Documents, and Credit Cards."
        ]
    },
    {
        "name": "SLD-16 Currency Authenticator",
        "category": "Counterfeit Detectors",
        "image": "assets/currency authenticator.png",
        "description": "Professional counterfeit detector with simple switch controls for UV lamp and white lamp checking.",
        "specs": [
            "Switch located on the front has three positions: UV lamp / off / white lamp.",
            "Sturdy desk design for teller and retail use.",
            "Easy operation: plug in and turn on."
        ]
    },

    // 14. Security Bags & Seals (Change/Float Bag, Till Draw Bag, Document Bag, Security Seals)
    {
        "name": "Change / Float Bag",
        "category": "Security Bags & Seals",
        "image": "assets/change_float_bag.png",
        "description": "Re-usable security bag for transporting change, cash float, and small deposits safely.",
        "specs": [
            "Tough PVC/canvas construction.",
            "Tamper-evident locking chamber.",
            "Available in blue, green, yellow, and red."
        ]
    },
    {
        "name": "Till Draw Bag",
        "category": "Security Bags & Seals",
        "image": "assets/till_draw_bag.png",
        "description": "Specialized cash transport bag configured to fit standard cash drawer tills for retail deposits.",
        "specs": [
            "Secure lock mechanism.",
            "Available in black, green, red, yellow, and transparent mesh."
        ]
    },
    {
        "name": "Document bag",
        "category": "Security Bags & Seals",
        "image": "assets/document_bag.png",
        "description": "Heavy-duty tamper-proof bag for courier transport of sensitive bank documents, vouchers, and cheques.",
        "specs": [
            "A4/A3 size capacity.",
            "Address viewing window.",
            "Available in blue, green, yellow, and red."
        ]
    },
    {
        "name": "Security Seals",
        "category": "Security Bags & Seals",
        "image": "assets/seals.png",
        "description": "Nylon or polypropylene pull tight seals for securing bank cash bags, container doors, and meters.",
        "specs": [
            "Nylon or polypropylene pull tight seal.",
            "Effective length: 140mm, Tail diameter: 3.2mm.",
            "Available in boxes of 1000."
        ]
    },

    // 15. Thermal Printers (Handheld POS PDA, POS Thermal Printer)
    {
        "name": "Handheld POS PDA",
        "category": "Thermal Printers",
        "image": "assets/handheld pos.png",
        "description": "Mini Pos thermal printer Barcode Scanner Handheld POS Terminal wireless bluetooth wifi Android PDA 3G Distribution.",
        "specs": [
            "Built-in 58mm thermal receipt printer.",
            "Integrated Barcode Scanner.",
            "Wireless Bluetooth, Wi-Fi, and 3G Android PDA."
        ]
    },
    {
        "name": "POS Thermal Printer",
        "category": "Thermal Printers",
        "image": "assets/thermal printers.png",
        "description": "Thermal receipt printers integrate with retail and restaurant point-of-sale (POS) systems to print customer receipts for completed sales.",
        "specs": [
            "Connects via USB, Ethernet (LAN), Wi-Fi wireless (WLAN) and Bluetooth.",
            "Suitable for small businesses in terms of price, functionality and popular POS compatibility."
        ]
    },

    // 16. Security Machines (Hologram Applicator, Date Time Stamp Machine)
    {
        "name": "Hologram Applicator",
        "category": "Security Machines",
        "image": "assets/hologram_applicator.png",
        "description": "Precision desktop machine for applying holographic security seals to banknotes, passports, and identity documents.",
        "specs": [
            "Consistent pressure application for perfect adhesion.",
            "Adjustable for various document sizes.",
            "Compact footprint suitable for teller counters.",
            "Reduces reliance on manual hologram placement."
        ]
    },
    {
        "name": "Date Time Stamp Machine",
        "category": "Security Machines",
        "image": "assets/date_time_stamp_machine.png",
        "description": "Automatic self-inking date and time stamp for recording receipt or processing time on documents and cheques.",
        "specs": [
            "Automatic advance to next date at midnight.",
            "12/24-hour time format selectable.",
            "Self-inking mechanism — no separate ink pad required.",
            "Prints up to 5,000 impressions per ink refill."
        ]
    },

    // 17. Accessories
    {
        "name": "Strapping Roll",
        "category": "Accessories",
        "image": "assets/strapping roll.png",
        "description": "Quality strap manufactured to machine grade for consistent and reliable use with PACKER automatic machines.",
        "specs": [
            "Strapping roll dimensions: 5MM * 0.47MM.",
            "Break strain capacity: 69kg.",
            "Compatible with PACKER automatic and semi-automatic machines."
        ]
    },
    {
        "name": "Cheque Inkjet Cartridges",
        "category": "Accessories",
        "image": "assets/cheque_inkjet_cartridges.png",
        "description": "High-durability replacement ink cartridges for document embossers, writers, and scanners.",
        "specs": [
            "Rich dye-based ink for bank-level legibility.",
            "Long print life cycle.",
            "Compatible with popular cheque printer brands."
        ]
    },
    {
        "name": "Edge Binding Tapes",
        "category": "Accessories",
        "image": "assets/edge_binding_tapes.png",
        "description": "Heavy-duty edge band tapes for reinforcing cash drawers, counters, and document desks.",
        "specs": [
            "Prevents material edges from scratching or tearing.",
            "Available in varying sizes, colors, and dimensions.",
            "Highly adhesive and heat resistant."
        ]
    },
    {
        "name": "Journal Rolls",
        "category": "Accessories",
        "image": "assets/journal_rolls.png",
        "description": "High-quality thermal journal rolls for ATM and POS machine audit trail printing.",
        "specs": [
            "Archival-grade thermal paper for long-lasting records.",
            "Compatible with all major ATM and cash register brands.",
            "Available in standard widths: 57mm, 76mm, 80mm."
        ]
    },
    {
        "name": "UV Replacement Tubes",
        "category": "Accessories",
        "image": "assets/uv_replacement_tubes.png",
        "description": "Genuine replacement UV tubes for Bankscan and BJ-141 counterfeit detectors.",
        "specs": [
            "365nm peak wavelength for optimal fluorescent detection.",
            "6-Watt fast-start design.",
            "Compatible with UBSL-supplied UV detector range."
        ]
    },
    {
        "name": "Coin Wrapping Rolls",
        "category": "Accessories",
        "image": "assets/coin_wrapping_rolls.png",
        "description": "Pre-formed paper coin wrapping rolls for use with Sirio and other coin wrapping machines.",
        "specs": [
            "Pre-formed to standard denomination sizes.",
            "Durable paper grade resists tearing under machine tension.",
            "Available in UGX, KES, TZS, USD denominations."
        ]
    },
    {
        "name": "Plastic Stripping Rolls",
        "category": "Accessories",
        "image": "assets/plastic_stripping_rolls.png",
        "description": "Polypropylene plastic stripping rolls for semi-automatic strapping machines.",
        "specs": [
            "Width: 6mm to 15.5mm options available.",
            "High tensile strength: break strain up to 69kg.",
            "UV-resistant for outdoor cargo applications."
        ]
    },
    {
        "name": "Printer Ribbons",
        "category": "Accessories",
        "image": "assets/printer_ribbons.png",
        "description": "OEM-compatible printer ribbons for dot-matrix receipt and document printers used in banking environments.",
        "specs": [
            "Available for Epson, Oki, and Canon dot-matrix models.",
            "High ink yield for extended print runs.",
            "Delivers sharp, smear-resistant characters."
        ]
    },
    {
        "name": "Thermal Paper Rolls",
        "category": "Accessories",
        "image": "assets/thermal_paper_rolls.png",
        "description": "BPA-free thermal receipt paper for POS terminals, ATM machines, and handheld PDA printers.",
        "specs": [
            "Available widths: 57mm and 80mm.",
            "BPA-free coating for compliance with handling regulations.",
            "100m length rolls for high-volume environments."
        ]
    },
    {
        "name": "Hologram Seal Rolls",
        "category": "Accessories",
        "image": "assets/hologram_seal_rolls.png",
        "description": "Tamper-evident holographic seal rolls for securing bank envelopes, cash bags, and negotiable documents.",
        "specs": [
            "VOID pattern revealed on attempted removal.",
            "Sequential numbering for audit trail control.",
            "Available in gold and silver foil finishes."
        ]
    }];

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
    // 1. Theme Toggle Setup
    initThemeToggle();

    // 2. Mobile Menu Setup
    initMobileMenu();

    // 3. Product Catalog Engine (If on products.html)
    if (document.getElementById("products-catalog-root")) {
        initProductCatalog();
    }

    // 4. Order & Inquiry Forms (If on order.html)
    if (document.getElementById("order-form")) {
        initOrderForm();
    }
    if (document.getElementById("inquiry-form")) {
        initInquiryForm();
    }

    // 5. Contact Form Validation (If on contact.html)
    if (document.getElementById("contact-form")) {
        initContactForm();
    }

    // 6. Service Booking Form (If on service.html)
    if (document.getElementById("booking-form")) {
        initBookingForm();
    }
});

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

    // Calculate count badges for categories in the sidebar
    categoryButtons.forEach(btn => {
        const catName = btn.dataset.category;
        const badge = btn.querySelector("span");
        if (badge) {
            const count = catName === "All" 
                ? PRODUCTS_DB.length 
                : PRODUCTS_DB.filter(p => p.category === catName).length;
            badge.textContent = count;
        }
    });

    // Render loop
    function renderCatalog() {
        grid.innerHTML = "";
        
        const filtered = PRODUCTS_DB.filter(p => {
            const matchesCat = activeCategory === "All" || p.category === activeCategory;
            const matchesSearch = searchQuery === "" || 
                p.name.toLowerCase().includes(searchQuery) ||
                p.description.toLowerCase().includes(searchQuery) ||
                p.specs.some(s => s.toLowerCase().includes(searchQuery));
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
                <div class="product-img-placeholder" style="padding: 0; overflow: hidden;">
                    <img src="${imgSrc}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
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

    // Initial render
    renderCatalog();
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
    
    if (product.specs && product.specs.length > 0) {
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

/* Helper to save form submissions to LocalStorage */
function saveSubmission(type, data) {
    const rawSubmissions = JSON.parse(localStorage.getItem("ubsl_submissions") || "[]");
    
    // Generate unique ID based on type
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
