/* Unique Business Systems Limited (UBSL) - Core Application Logic */

// Embed compiled product database (No template placeholders!)
const PRODUCTS_DB = [
    {
        "name": "JETCOUNT CURRENCY COUNTERS",
        "category": "Notes Counters",
        "description": "Professional grade high-speed note counter suitable for bank tellers, retail cash offices, and cashier desks.",
        "specs": ["Jetcount Currency Counter", "Counting speeds up to 1,500 notes/minute", "Compact design", "Reliable sheet feed system"]
    },
    {
        "name": "Jetscan 150",
        "category": "Notes Counters",
        "description": "Advanced single-pocket currency scanner that counts and authenticates banknotes at high speeds.",
        "specs": ["Supports multiple currencies", "Advanced counterfeit detection sensors", "Simplifies daily cash processing"]
    },
    {
        "name": "Jetscane IFX I100",
        "category": "Notes Counters",
        "description": "Industry leading bank-grade note scanner and counter with state-of-the-art imaging sensors.",
        "specs": ["High-speed image scanning", "Unparalleled authentication sensors", "Upgradable software for new note versions"]
    },
    {
        "name": "Jetscane IFX I200",
        "category": "Notes Counters",
        "description": "Multi-currency bank-grade note scanner with dual-pocket capability, allowing continuous processing without stops.",
        "specs": ["Continuous counting with reject pocket", "Fast processing for large cash volumes", "Dual CIS image sensors"]
    },
    {
        "name": "Jetscan One Pocket",
        "category": "Notes Counters",
        "description": "Commercial currency counter and authenticator designed for convenience stores, gas stations, and retail back offices.",
        "specs": ["Compact footprint", "High accuracy sorting and counting", "Easy to clean sensor track"]
    },
    {
        "name": "Century Sorter 101",
        "category": "Notes Counters",
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
        "name": "Ceuntury Sorter 301",
        "category": "Notes Counters",
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
        "name": "Jetscan Two Pocket",
        "category": "Notes Counters",
        "description": "Versatile two-pocket currency scanner that processes mixed bills, count, sort and check counterfeit bills concurrently.",
        "specs": ["Continuous operation with dedicated reject pocket", "Identifies note denomination and series", "Durable construction"]
    },
    {
        "name": "Percontra Sortovit",
        "category": "Coin Counters",
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
        "description": "Improve flexibility with the features and options designed for your business needs. Space-saving footprint with massive performance.",
        "specs": [
            "Gain efficiency with processing speeds up to 2,200 coins per minute.",
            "Ensure balanced deposits with 99.995% accuracy.",
            "Gain convenience and space savings with small footprint and front access to containers."
        ]
    },
    {
        "name": "Sortorex",
        "category": "Coin Counters",
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
        "description": "Heavy-duty commercial coin sorter that counts, sorts, and rejects foreign/damaged coins automatically.",
        "specs": ["Next-gen sensor technology", "Highly reliable sorting mechanism", "Modern touchscreen control panel"]
    },
    {
        "name": "SC 350/360",
        "category": "Coin Counters",
        "description": "Premium electronic coin counters with advanced alloy sensor technology for accurate sorting.",
        "specs": ["Processes up to 3,000 coins/minute", "Configurable batch sizes", "Memory storage for multiple count sessions"]
    },
    {
        "name": "CP Active-9",
        "category": "Coin Counters",
        "description": "Intelligent Coin Processing system tailored for high-volume cash centres and vault management operations.",
        "specs": ["Monitors real-time sorting performance", "Optimized profitability and control", "Integrates with vault management systems"]
    },
    {
        "name": "Bankscan",
        "category": "Counterfeit Detectors",
        "description": "Dual 6-Watt UV counterfeit detector with a sturdy metal frame and large aperture for thorough document checking.",
        "specs": [
            "Large aperture to slide complete documents below illumination.",
            "Double 6-Watt UV Fast Start tubes.",
            "Sturdy metal frame with highly reflective shield.",
            "Dimensions: 270 x 185 x 120 mm.",
            "Weight: 1.85 Kg."
        ]
    },
    {
        "name": "Pocket UV Counterfeit Detector",
        "category": "Counterfeit Detectors",
        "description": "Verify Banknotes, Passports, I.D. Cards, Legal Documents, and Credit Cards on the go.",
        "specs": [
            "Compact with built-in torch stand and wrist strap.",
            "Highly portable battery-powered operation.",
            "Verify Banknotes, Passports, I.D. Cards, Legal Documents, and Credit Cards"
        ]
    },
    {
        "name": "BJ-141",
        "category": "Counterfeit Detectors",
        "description": "Professional desk counterfeit detector with UV, Magnetic (MG), Watermark and Magnifier checks.",
        "specs": [
            "UV, MG, Watermark, and Magnifying detecting functions.",
            "Strong high quality double UV tubes.",
            "Integrated banknote-dimension identification ruler.",
            "230 x 7mm interspace for big document checking."
        ]
    },
    {
        "name": "Semi-Auto Strap Machine for 6MM to 15.5MM",
        "category": "Strapping Machines",
        "description": "Versatile tabletop strapping machine for secure packaging of bank boxes, documents, and merchandise.",
        "specs": [
            "Fully RoHS compliant and supplied ready to go with 12mm strapping.",
            "Twelve months return to base warranty, parts and labour.",
            "Adjustable for strap width from 6mm to 15.5mm.",
            "Operates at up to 24 cycles per minute.",
            "Easily operated controls including manual tension adjustment.",
            "Adjustable legs with braked castors (table height 760mm to 930mm).",
            "Dimensions: W902mm x D586mm x H760mm, weight 85kgs."
        ]
    },
    {
        "name": "Semi-Auto Strap Machine with Closed Cabinet",
        "category": "Strapping Machines",
        "description": "Secure closed-cabinet strapping machine protecting mechanical components from dust and debris.",
        "specs": [
            "Closed cabinet layout for safety and dust protection.",
            "Twelve months return to base warranty, parts and labour.",
            "Adjustable for strap width from 6mm to 15.5mm.",
            "On adjustable legs with braked castors.",
            "Dimensions: W902mm x D586mm x H760mm, weight 85kgs."
        ]
    },
    {
        "name": "5MM*0.47MM Strapping Roll",
        "category": "Strapping Machines",
        "description": "High-grade strapping roll with 69kg break strain for automatic packaging systems.",
        "specs": [
            "Quality strap manufactured to machine grade.",
            "Consistent and reliable use with automatic machines.",
            "Break strain: 69kg."
        ]
    },
    {
        "name": "Sirio 18",
        "category": "Coin Wrapping Machines",
        "description": "Automatic coin wrapping machine designed to package coins into secure paper rolls efficiently.",
        "specs": [
            "Speed: 18 rolls per minute.",
            "Hopper capacity: 4,000 coins.",
            "Automatic revolver roll change."
        ]
    },
    {
        "name": "Sirio 30",
        "category": "Coin Wrapping Machines",
        "description": "High-speed industrial coin wrapping machine with automatic coin feeder for heavy-duty banking applications.",
        "specs": [
            "Speed: 20 to 30 rolls per minute.",
            "Hopper capacity: 4,000 to 6,000 coins.",
            "Integrated automatic coin feeder."
        ]
    },
    {
        "name": "Cheque Scanner",
        "category": "Cheque Embossers & Writers",
        "description": "Fast, dynamic countertop cheque scanner for banks, utilities, and commercial organizations.",
        "specs": [
            "Handles business and personal cheques.",
            "Processes rebate cheque cards and envelopes.",
            "Cornerstone for production cheque processing, delivering high performance and image quality."
        ]
    },
    {
        "name": "Cheque Writer",
        "category": "Cheque Embossers & Writers",
        "description": "Secure manual and electronic cheque writers to prevent document alteration using deeply serrated print.",
        "specs": [
            "Dye-based inking provides the ultimate alteration deterrent.",
            "One-key security locking system.",
            "Exclusive replaceable ink ribbon cartridge.",
            "Deeply serrated Paymaster typeface.",
            "Imprints various sized cheques quickly and accurately."
        ]
    },
    {
        "name": "FZA 2155 Embosser",
        "category": "Cheque Embossers & Writers",
        "description": "Premium industrial cheque embosser providing deep stamp relief to secure negotiable documents.",
        "specs": [
            "High performance embossing action.",
            "Durable steel layout for continuous operation.",
            "Supports various cheque designs and layouts."
        ]
    },
    {
        "name": "Change / Float Bag",
        "category": "Security Bags & Seals",
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
        "description": "Specialized cash transport bag configured to fit standard cash drawer tills for retail deposits.",
        "specs": [
            "Secure lock mechanism.",
            "Available in black, green, red, yellow, and transparent mesh."
        ]
    },
    {
        "name": "Document bag",
        "category": "Security Bags & Seals",
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
        "description": "Nylon and polypropylene pull-tight seals for locking cash bags, container doors, and meters.",
        "specs": [
            "Nylon or polypropylene pull-tight seal.",
            "Effective length: 140mm, tail diameter: 3.2mm.",
            "Available in boxes of 1000."
        ]
    },
    {
        "name": "Handheld POS PDA",
        "category": "Thermal Printers",
        "description": "Android-based wireless PDA handheld POS terminal with built-in barcode scanner and thermal printer.",
        "specs": [
            "Built-in 58mm thermal receipt printer.",
            "Barcode scanner camera integration.",
            "3G, Wi-Fi, and Bluetooth wireless connectivity."
        ]
    },
    {
        "name": "POS Thermal Printer",
        "category": "Thermal Printers",
        "description": "Desktop receipt printers integrating with retail and restaurant point-of-sale systems.",
        "specs": [
            "High-speed 80mm thermal printing.",
            "Multiple interfaces: USB, Ethernet (LAN), Wi-Fi, and Bluetooth.",
            "Compatible with popular retail and dining POS softwares."
        ]
    },
    {
        "name": "DTD-23-2Y-250",
        "category": "Exchange Rate Boards",
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
        "category": "Exchange Rate Boards",
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
        "category": "Exchange Rate Boards",
        "description": "Professional LED exchange rate display board optimized for currency exchange bureaus and bank branches.",
        "specs": [
            "Backup memory to keep the latest exchange rates when the power fails.",
            "Ultra-bright numeric LED panels."
        ]
    },
    {
        "name": "Strapping Rolls (Plastic)",
        "category": "Accessories",
        "description": "Machine-grade strapping rolls for securing commercial cargo boxes and heavy paper bundles.",
        "specs": [
            "Superior quality with smooth surface.",
            "Perfect edges preventing strap tearing.",
            "Compatible with standard semi-automatic strapping machines."
        ]
    },
    {
        "name": "Cheque Inkjet Cartridges",
        "category": "Accessories",
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
        "description": "Tamper-evident holographic seal rolls for securing bank envelopes, cash bags, and negotiable documents.",
        "specs": [
            "VOID pattern revealed on attempted removal.",
            "Sequential numbering for audit trail control.",
            "Available in gold and silver foil finishes."
        ]
    },
    {
        "name": "Hologram Applicator",
        "category": "Security Machines",
        "description": "Precision desktop machine for applying holographic security seals to banknotes, passports, and identity documents.",
        "specs": [
            "Consistent pressure application for perfect adhesion.",
            "Adjustable for various document sizes.",
            "Compact footprint suitable for teller counters.",
            "Reduces reliance on manual hologram placement."
        ]
    },
    {
        "name": "Perforating Machine",
        "category": "Security Machines",
        "description": "High-speed document perforating machine used to cancel or void cheques, certificates, and negotiable instruments.",
        "specs": [
            "Micro-perforation pattern prevents re-use or alteration.",
            "Heavy-duty steel chassis for continuous operation.",
            "Processes up to A3 document size.",
            "One-touch foot pedal operation available."
        ]
    },
    {
        "name": "Date Time Stamp Machine",
        "category": "Security Machines",
        "description": "Automatic self-inking date and time stamp for recording receipt or processing time on documents and cheques.",
        "specs": [
            "Automatic advance to next date at midnight.",
            "12/24-hour time format selectable.",
            "Self-inking mechanism â no separate ink pad required.",
            "Prints up to 5,000 impressions per ink refill."
        ]
    }
];

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

        // Category to image mapping
        const categoryImages = {
            "Notes Counters": "assets/product_notes_counter.png",
            "Coin Counters": "assets/product_coin_counter.png",
            "Counterfeit Detectors": "assets/product_counterfeit_detector.png",
            "Strapping Machines": "assets/product_strapping_machine.png",
            "Coin Wrapping Machines": "assets/product_coin_wrapping.png",
            "Cheque Embossers & Writers": "assets/product_cheque_embosser.png",
            "Security Bags & Seals": "assets/product_security_bag.png",
            "Thermal Printers": "assets/product_thermal_printer.png",
            "Exchange Rate Boards": "assets/product_exchange_rate_board.png",
            "Accessories": "assets/product_accessories.png",
            "Security Machines": "assets/product_security_machine.png"
        };

        filtered.forEach(p => {
            const card = document.createElement("div");
            card.className = "product-card animate-fade-in";
            const imgSrc = categoryImages[p.category] || "assets/product_accessories.png";

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
    const categoryImages = {
        "Notes Counters": "assets/product_notes_counter.png",
        "Coin Counters": "assets/product_coin_counter.png",
        "Counterfeit Detectors": "assets/product_counterfeit_detector.png",
        "Strapping Machines": "assets/product_strapping_machine.png",
        "Coin Wrapping Machines": "assets/product_coin_wrapping.png",
        "Cheque Embossers & Writers": "assets/product_cheque_embosser.png",
        "Security Bags & Seals": "assets/product_security_bag.png",
        "Thermal Printers": "assets/product_thermal_printer.png",
        "Exchange Rate Boards": "assets/product_exchange_rate_board.png",
        "Accessories": "assets/product_accessories.png",
        "Security Machines": "assets/product_security_machine.png"
    };
    const modalImg = modal.querySelector("#modal-product-img");
    if (modalImg) {
        modalImg.src = categoryImages[product.category] || "assets/product_accessories.png";
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

        const container = form.parentElement;
        container.innerHTML = `
            <div class="form-success-message animate-fade-in" style="text-align:center; padding: 60px 20px;">
                <div class="form-success-icon" style="width:72px;height:72px;background:rgba(197,160,89,0.12);color:var(--accent);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;margin:0 auto 24px;">ð</div>
                <h2 style="font-size:26px;margin-bottom:12px;">Order Request Submitted!</h2>
                <p style="color:var(--text-muted);margin-bottom:28px;max-width:480px;margin-left:auto;margin-right:auto;">
                    Thank you, <strong>${name}</strong>. Your order request for <strong>${qty}Ã ${product}</strong> has been received.
                    Our sales team will contact you at <strong>${email}</strong> to confirm pricing and delivery details.
                </p>
                <div style="font-size:14px;text-align:left;background:var(--bg-light);padding:20px;border-radius:var(--radius-md);border:1px solid var(--border-color);max-width:420px;margin:0 auto 28px;">
                    <p style="font-weight:700;margin-bottom:10px;">Order Summary:</p>
                    <p style="margin-bottom:5px;">â¢ Product: ${product}</p>
                    <p style="margin-bottom:5px;">â¢ Quantity: ${qty}</p>
                    <p style="margin-bottom:5px;">â¢ Organisation: ${company}</p>
                    <p style="margin-bottom:5px;">â¢ Preferred Delivery: ${delivery.replace('asap','As soon as possible').replace('2weeks','Within 2 weeks').replace('1month','Within 1 month').replace('3months','Within 3 months').replace('flexible','Flexible')}</p>
                    ${location ? `<p style="margin-bottom:5px;">â¢ Location: ${location}</p>` : ""}
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

        const container = form.parentElement;
        container.innerHTML = `
            <div class="form-success-message animate-fade-in" style="text-align:center;padding:60px 20px;">
                <div class="form-success-icon" style="width:72px;height:72px;background:rgba(16,185,129,0.1);color:var(--success);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;margin:0 auto 24px;">â</div>
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

        const container = form.parentElement;
        container.innerHTML = `
            <div class="form-success-message animate-fade-in">
                <div class="form-success-icon">?</div>
                <h2>Message Sent Successfully!</h2>
                <p style="color: var(--text-muted); margin-bottom: 24px;">Thank you for contacting Unique Business Systems. An engineering consultant or account manager will get back to you shortly at <strong>${email}</strong>.</p>
                <div style="font-size: 14px; text-align: left; background-color: var(--bg-light); padding: 20px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
                    <p style="margin-bottom: 8px;"><strong>Summary of details submitted:</strong></p>
                    <p style="margin-bottom: 4px;"> Contact Name: ${name}</p>
                    <p style="margin-bottom: 4px;"> Phone Number: ${tel || "Not provided"}</p>
                    <p style="margin-bottom: 4px;"> Email Address: ${email}</p>
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

        const container = form.parentElement;
        container.innerHTML = `
            <div class="form-success-message animate-fade-in">
                <div class="form-success-icon">?</div>
                <h2>Repair Scheduled Successfully!</h2>
                <p style="color: var(--text-muted); margin-bottom: 24px;">Your maintenance request has been logged. An engineer will contact <strong>${contactPerson}</strong> at <strong>${company}</strong> to confirm the dispatch for <strong>${date}</strong>.</p>
                <div style="font-size: 14px; text-align: left; background-color: var(--bg-light); padding: 20px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
                    <p style="margin-bottom: 8px;"><strong>Service Ticket Details:</strong></p>
                    <p style="margin-bottom: 4px;"> Ticket Status: <span style="color: var(--success); font-weight: 700;">Scheduled</span></p>
                    <p style="margin-bottom: 4px;"> Equipment Type/Model: ${model}</p>
                    <p style="margin-bottom: 4px;"> Date of Visit: ${date}</p>
                    <p style="margin-bottom: 4px;"> Issue Logged: "${issue}"</p>
                </div>
                <button class="btn btn-secondary" style="margin-top: 30px;" onclick="window.location.reload()">Book Another Visit</button>
            </div>
        `;
    });
}
