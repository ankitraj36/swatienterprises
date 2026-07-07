// ============================================================
// ADPL PRODUCT DATA – Extracted from product images
// ============================================================
const PRODUCTS = [
    // 1. Castor Oil I.P.
    {
        id: "castor-oil",
        name: "Castor Oil I.P.",
        category: "Digestive Health",
        description: "Used to treat constipation. It helps in nourishing hair and increasing the growth of hair, especially for dark and dense eyebrows in infants, kids.",
        composition: "Castor Oil",
        usage: "Add 2-3 tablespoons of oil in lukewarm milk. Consume orally at night.",
        variants: [
            { size: "25 mL", price: 46 },
            { size: "50 mL", price: 74 },
            { size: "100 mL", price: 118 },
            { size: "200 mL", price: 210 },
            { size: "400 mL", price: 404 },
            { size: "5 Lit.", price: 4000 }
        ],
        inStock: true,
        image: "Images/castoroil.jpg",   // <-- add this line
        uploadedImage: null,
        icon: "💊"
    },

    {
    id: "eleesa-suppositories-adult",
    name: "Eleesa Suppositories Adult",
    category: "Rectal Care",
    description: "Adult glycerin suppositories formulated to provide quick relief from occasional constipation by stimulating bowel movement.",
    composition: "Sodium Stearate IP 15% w/w, Glycerin IP 80% w/w, Purified Water IP q.s. to 100% w/w",
    usage: "Wash hands thoroughly. Moisten the suppository with water. Lie on one side, insert the suppository into the rectum towards the stomach, and remain lying for about 15 minutes.",
    variants: [
        { size: "10 Pieces", price: 76 }
    ],

    inStock: true,
    image: "Images/adultt.jpg",
    uploadedImage: null,
    icon: "💊"
    },

    {
    id: "mandls-paint-bpc-68",
    name: "Mandl's Paint B.P.C. '68",
    category: "Oral Care",
    description: "Antiseptic throat paint used for sore throat, pharyngitis, laryngitis, and tonsillitis. Its viscous nature helps the medicine stay longer on the affected area.",
    composition: "Iodine IP 1.25% w/v, Potassium Iodide IP 2.5% w/v, Purified Water IP 2.5% w/v, Peppermint Oil IP 0.4% v/v, Anise Oil IP 4.0% v/v, Glycerin IP 100% v/v, Alcohol IP 3.6% v/v",
    usage: "Apply to the affected throat area using a clean finger or applicator. Avoid eating or drinking for 15–20 minutes after application.",
    variants: [
        { size: "20 g", price: 84 },
        { size: "250 g", price: 480 },
        { size: "400 g", price: 712 }
    ],

    inStock: true,
    image: "Images/man.jpg",
    uploadedImage: null,
    icon: "🫗"
    },

    {
    id: "weak-iodine-solution-ip-66",
    name: "Weak Iodine Solution I.P. '66",
    category: "Antiseptic",
    description: "Topical antiseptic iodine solution used for disinfecting minor cuts, wounds, and skin infections.",
    composition: "Iodine IP 2.0% w/v, Potassium Iodide IP 2.5% w/v, Alcohol (50%) q.s.",
    usage: "Apply directly over the affected area using sterile cotton or gauze.",
    variants: [
        { size: "15 mL", price: 42 },
        { size: "50 mL", price: 102 },
        { size: "100 mL", price: 182 },
        { size: "400 mL", price: 632 }
    ],

    inStock: true,
    image: "Images/weak.jpg",
    uploadedImage: null,
    icon: "🩹"
    },

    {
    id: "eleesa-suppositories-child",
    name: "Eleesa Suppositories Child",
    category: "Pediatric Care",
    description: "Child glycerin suppositories specially formulated for safe and effective relief from occasional constipation in children.",
    composition: "Sodium Stearate IP 15% w/w, Glycerin IP 80% w/w, Purified Water IP q.s. to 100% w/w",
    usage: "Moisten the suppository with water before insertion. Insert approximately 2 cm into the rectum and keep the child lying down for about 15 minutes.",
    variants: [
        { size: "10 Pieces", price: 70 }
    ],

    inStock: true,
    image: "Images/baby.jpg",
    uploadedImage: null,
    icon: "👶"
    },


    {
    id: "zinc-oxide-ip",
    name: "Zinc Oxide I.P.",
    category: "Skin Care",
    description: "Pure Zinc Oxide powder used as a topical protectant and mild astringent for various skin care applications.",
    composition: "Zinc Oxide IP",
    usage: "Sprinkle a small amount of Zinc Oxide powder evenly over the affected area.",
    variants: [
        { size: "20 g", price: 62 },
        { size: "400 g", price: 740 }
    ],

    inStock: true,
    image: "Images/zinc.jpg",
    uploadedImage: null,
    icon: "🧴"
    },
    // 2. Bleaching Powder
    {
        id: "bleaching-powder",
        name: "Bleaching Powder",
        category: "Disinfectants",
        description: "Used to disinfect Water, Surface and equipment. Spread at open spaces to prevent from flies and mosquitoes.",
        composition: "Bleaching Powder",
        usage: "Not for internal use. Spread at open spaces to prevent from flies and mosquitoes.",
        warning: "POISON (Non-Medicinal)",
        variants: [
            { size: "300 g", price: 108 },
            { size: "500 g (Jar)", price: 180 }
        ],
        inStock: true,
        image: "Images/bp.jpg",
        uploadedImage: null,
        icon: "🧹"
    },

   

    // 4. French Chalk
    {
        id: "french-chalk",
        name: "French Chalk",
        category: "Personal Care",
        description: "Absorbing perspiration on hands. Used on the gloves to maintain them.",
        composition: "French Chalk",
        usage: "Apply on hands/gloves as needed.",
        variants: [
            { size: "400 g", price: 48 }
        ],
        inStock: true,
        image: "Images/fc.jpg",
        uploadedImage: null,
        icon: "🧴"
    },

    // 5. Ciprit
    {
        id: "ciprit",
        name: "Ciprit",
        category: "Antiseptics",
        description: "Helps prevent infection. Used as a surface disinfectant to disinfect hospital surfaces. Used as Antiseptic to sanitize in clinics and hospitals.",
        composition: "Isopropyl Alcohol IP 70% v/v, Purified water IP qs to 100% v/v",
        usage: "Use a cotton swab soaked in CIPRIT. Clean the skin surface thoroughly.",
        variants: [
            { size: "50 mL", price: 34 },
            { size: "100 mL", price: 60 },
            { size: "200 mL", price: 110 },
            { size: "400 mL", price: 200 },
            { size: "500 mL", price: 250 },
            { size: "1 Ltr", price: 500 },
            { size: "4 Ltr", price: 2000 },
            { size: "5 Ltr", price: 2500 }
        ],
        inStock: true,
        image: "Images/ciprit.jpg",
        uploadedImage: null,
        icon: "🧪"
    },

    {
    id: "ad-sore-borax-glycerin",
    name: "AD-Sore (Borax Glycerin)",
    category: "Oral Care",
    description: "Borax Glycerin solution used for the treatment of mouth ulcers. Helps soothe irritation and promotes healing of oral sores.",
    composition: "Borax IP 12% w/w, Glycerin IP 88% w/w",
    usage: "Spread thoroughly over the affected mouth ulcer and allow it to remain for 5–7 minutes. Spit out the collected saliva. Repeat 3–4 times daily or as directed by a physician.",
    variants: [
        { size: "10 g", price: 24 },
        { size: "25 g", price: 38 },
        { size: "50 g", price: 66 },
        { size: "100 g", price: 106 },
        { size: "300 g", price: 300 },
        { size: "400 g", price: 388 }
    ],
    inStock: true,
    image: "Images/ad.jpg",
    uploadedImage: null,
    icon: "👄"
    },

    // 6. Compound Benzopin Tincture
    {
        id: "compound-benzopin-tincture",
        name: "Compound Benzopin Tincture",
        category: "Wound Care",
        description: "Used as a patient to prevent blood oozing out from the open wounds. Use as a wet soap with a medical cotton pad swab. Treats minor cuts and wounds.",
        composition: "Alcohol contents 70 to 77% v/v",
        usage: "Use as a wet soap with a medical cotton pad swab.",
        variants: [
            { size: "50 ml", price: 42 },
            { size: "100 ml", price: 102 },
            { size: "400 ml", price: 162 }
        ],
        inStock: true,
        image: "Images/compund.jpg",
        uploadedImage: null,
        icon: "🩹"
    },

    // 7. Silver Nitrate Stik
    {
        id: "silver-nitrate-stik",
        name: "Silver Nitrate Stik",
        category: "Wound Care",
        description: "Germicidal activity. Antiseptic activity.",
        composition: "Silver nitrate",
        usage: "Apply directly to the affected area.",
        variants: [
            { size: "1 Stick", price: 0 }
        ],
        inStock: true,
        image: "Images/silver.jpg",
        uploadedImage: null,
        icon: "🩹"
    },

    // 8. Glucern Lichthammol
    {
        id: "glucern-lichthammol",
        name: "Glucern Lichthammol",
        category: "Skin Care",
        description: "Treats Psoriasis, Seborrheic dermatitis, Eczema, Burn wounds. Kills bacteria. Treats ear infection.",
        composition: "Ichthammol 10% w/w, Glycerin 90% w/w",
        usage: "Use as paint for treatment of Chronic eczema and psoriasis. Apply directly on infected area.",
        variants: [
            { size: "10 ml", price: 18 },
            { size: "30 ml", price: 30 },
            { size: "400 ml", price: 240 }
        ],
        inStock: true,
        image: "Images/go.jpg",
        uploadedImage: null,
        icon: "🧴"
    }
,
    // 9. German Violet Solution
    {
        id: "gentian-violet-solution",
        name: "Gentian Violet Solution",
        category: "Antiseptics",
        description: "Treats bacterial infections and fungal infections.",
        composition: "Solution of German Violet 28% w/v",
        usage: "Used as paint for fungal skin infection and to treat wounds on human and animal skin. Apply directly on skin as lotion/paint.",
        variants: [
            { size: "10 ml", price: 18 },
            { size: "30 ml", price: 30 },
            { size: "400 ml", price: 240 }
        ],
        inStock: true,
        image: "Images/gen.jpg",
        uploadedImage: null,
        icon: "🧪"
    },

    // 10. Liquid Paraffin IP (Heavy)
    {
        id: "liquid-paraffin-ip-heavy",
        name: "Liquid Paraffin IP (Heavy)",
        category: "Digestive Health",
        description: "Mainly used to cure constipation. Used as a moisturizer.",
        composition: "Liquid paraffin IP (Heavy)",
        usage: "Take the prescribed dose/quantity of Liquid Paraffin by mouth using the measuring cup.",
        variants: [
            { size: "25 ml", price: 35 },
            { size: "50 ml", price: 50 },
            { size: "100 ml", price: 86 },
            { size: "200 ml", price: 150 },
            { size: "400 ml", price: 280 },
            { size: "5 Ltr", price: 2560 }
        ],
        inStock: true,
        image: "Images/liq.jpg",
        uploadedImage: null,
        icon: "💧"
    },

    // 11. Sodium Bicarbonate
    {
        id: "sodium-bicarbonate",
        name: "Sodium Bicarbonate",
        category: "Health Supplements",
        description: "Used to relieve heartburn, sour stomach, or acid indigestion by neutralizing excess stomach acid. Widely used as an authentic baking soda in food preparations.",
        composition: "Sodium Bicarbonate I.P.",
        usage: "Use as directed for relief of acid indigestion.",
        variants: [
            { size: "20 g", price: 20 },
            { size: "300 g", price: 21 }
        ],
        inStock: true,
        image: "Images/so.jpg",
        uploadedImage: null,
        icon: "🍋"
    },

    // 12. Adurin Lotion
    {
        id: "adurin-lotion",
        name: "Adurin Lotion",
        category: "Skin Care",
        description: "Treats Ringworm, Itches, Scabies, Eczema, Fungal Infection between fingers & toes, Rashes, and Skin allergy.",
        composition: "Salicylic Acid I.P. 7.31% w/v, Benzoic Acid I.P. 2.44% w/v, Alcohol 78-82% v/v",
        usage: "Apply directly on infected areas as drops or with cotton buds for treating ringworms, eczema and infections in toenails and fingers.",
        variants: [
            { size: "10 ml", price: 25 }
        ],
        inStock: true,
        image: "Images/adurin.jpg",
        uploadedImage: null,
        icon: "🧴"
    },

    

    // 14. Hexinol Antiseptic Liquid
    {
        id: "hexinol-antiseptic-liquid",
        name: "Hexinol Antiseptic Liquid",
        category: "Antiseptics",
        description: "Chlorhexidine Gluconate Solution IP. For cleaning and disinfection.",
        composition: "Chlorhexidine Gluconate Solution IP 0.3% w/v",
        usage: "Apply this antiseptic liquid with the help of cotton pad for cleaning. Use as common antiseptic lotion.",
        variants: [
            { size: "100 mL", price: 44 },
            { size: "1 L", price: 280 },
            { size: "4.5 Lit.", price: 800 }
        ],
        inStock: true,
        image: "Images/hex.jpg",
        uploadedImage: null,
        icon: "🧪"
    },

    // 15. Potassium Permanganate Pure
    {
        id: "potassium-permanganate-pure",
        name: "Potassium Permanganate Pure",
        category: "Disinfectants",
        description: "Treats Infected eczema. Cures Superficial wounds, dermatitis, Athlete's foot, Impetigo. Protection from germs and infections. Purifies Water. Treats skin infections. Also has Antiseptic properties.",
        composition: "Potassium Permanganate Pure",
        usage: "Used to cure fungal infection. Used to clean utensils for disinfection with a pinch of powder dissolved in cleaning water. Rinse with clean water afterwards.",
        variants: [
            { size: "10g", price: 34 },
            { size: "20g", price: 56 },
            { size: "400 g", price: 590 }
        ],
        inStock: true,
        image: "Images/pot.jpg",
        uploadedImage: null,
        icon: "🧪"
    },

    // 16. Eleesa Jelly I.P.
    {
        id: "elesa-jelly-ip",
        name: "Eleesa Jelly I.P.",
        category: "Skin Care",
        description: "Moisturizes your face, hand and more. Softens dry, cracked heels when used regularly.",
        composition: "Hard Paraffin IP: 18% w/w, Microcrystalline Wax IP: 15% w/w, Light Liquid Paraffin qs to: 100% w/w",
        usage: "Apply to skin directly as often required.",
        variants: [
            { size: "400 g", price: 308 },
            { size: "500 g", price: 360 },
            { size: "800 g", price: 576 },
            { size: "1 Kg", price: 690 },
            { size: "4 Kg", price: 2400 },
            { size: "10 Kg", price: 5160 },
            { size: "15 Kg", price: 6900 }
        ],
        inStock: true,
        image: "Images/255.jpg",
        uploadedImage: null,
        icon: "🧴"
    },

    // 17. Phyiso-Ald (Paraffin Wax)
    {
        id: "phyiso-ald",
        name: "Phyiso-Ald",
        category: "Pain Relief",
        description: "Relax muscles. Paraffin wax also treats spinal pain and injuries.",
        composition: "Paraffin Wax 45-50% w/w",
        usage: "Melt by warming on flame and use as paraffin wax bath to reduce pain in muscle and joints for treatment.",
        variants: [
            { size: "400 g", price: 0 },
            { size: "800 g", price: 0 }
        ],
        inStock: true,
        image: "Images/wax.jpg",
        uploadedImage: null,
        icon: "🔥"
    },


   

    // 20. Boric Acid Ear drops
    {
        id: "boric-acid-ear-drops",
        name: "Boric Acid Ear drops",
        category: "Ear Care",
        description: "Treat for ear infection & Pain. Treat external & secondary inflammation of the ear like congestion & Trauma.",
        composition: "Boric acid: 0.183g, Alcohol (95%): 2.08 ml, Purified water: 10 ml",
        usage: "Instill 2-3 drops in infected ear to treat bacterial and fungal infections in the external ear.",
        variants: [
            { size: "10 ml", price: 64 }
        ],
        inStock: true,
        image: "Images/boric.jpg",
        uploadedImage: null,
        icon: "👂"
    },

    // 21. Formaline Solution
    {
        id: "formaline-solution",
        name: "Formaline Solution",
        category: "Disinfectants",
        description: "As Analytical reagent. Used as an antiseptic. Used for preserving biological and anatomical specimens.",
        composition: "Formaldehyde 34% - 38%",
        usage: "Used as disinfectant. Fumigation agent in OT's, Bakeries etc.",
        variants: [
            { size: "400 g", price: 100 },
            { size: "5 Kg", price: 950 }
        ],
        inStock: true,
        image: "Images/form.jpg",
        uploadedImage: null,
        icon: "🧪"
    },

    // 22. Merbromin Solution
    {
        id: "merbromin-solution",
        name: "Merbromin Solution",
        category: "Antiseptics",
        description: "Antiseptic. Prevent infection.",
        composition: "Merbromin 2% w/v, Benzethonium 6.1%",
        usage: "Apply directly on open wound, commonly known as lid dermal.",
        variants: [
            { size: "N/A", price: 0 }
        ],
        inStock: true,
        image: "Images/meo.jpg",
        uploadedImage: null,
        icon: "🩹"
    },

    // 23. E.C. Solution
    {
        id: "ec-solution",
        name: "E.C. Solution",
        category: "Wound Care",
        description: "Marvelous Wet dressing/cleaning solution in case of burns/Wounds etc.",
        composition: "Chlorinated Lime & Boric acid",
        usage: "Pour directly on the infected area followed by antiseptic lotion.",
        variants: [
            { size: "100 ml", price: 42 },
            { size: "200 ml", price: 52 },
            { size: "400 ml", price: 108 }
        ],
        inStock: true,
        image: "Images/ec.jpg",
        uploadedImage: null,
        icon: "🩹"
    },

    // 24. Lysol I.P.
    {
        id: "lysol-ip",
        name: "Lysol I.P.",
        category: "Disinfectants",
        description: "Powerful surface cleaning agent. Sanitizes soft surfaces. For Bathroom, Kitchen and Home Cleaning.",
        composition: "50% v/v",
        usage: "Dilute to 1.5 ratio with water for cleaning surface (Floor) and common household cleaner.",
        variants: [
            { size: "400 ml", price: 632 },
            { size: "5 lit", price: 6400 }
        ],
        inStock: true,
        image: "Images/lysol.jpg",
        uploadedImage: null,
        icon: "🧹"
    },

    // 25. Turpentine Oil
    {
        id: "turpentine-oil",
        name: "Turpentine Oil",
        category: "Hair Care",
        description: "Used to prevent hair loss.",
        composition: "Turpentine Oil",
        usage: "Apply directly to hair.",
        variants: [
            { size: "25 ml", price: 44 },
            { size: "50 ml", price: 66 },
            { size: "100 ml", price: 114 }
        ],
        inStock: true,
        image: "Images/tpa.jpg",
        uploadedImage: null,
        icon: "💇"
    },

    // 26. Magnesium Sulphate IP
    {
        id: "magnesium-sulphate-ip",
        name: "Magnesium Sulphate IP",
        category: "Health Supplements",
        description: "As osmotic laxative. Cleaning agent. In treatment of electrolyte deficiency. Athlete's foot. Treat toenail fungus. Soothe sprains and bruises. Ease discomfort of gout. Remove foot odour.",
        composition: "Magnesium Sulphate IP (Epsom Salt)",
        usage: "Used to control low blood levels of magnesium. Use as prescribed by physician.",
        variants: [
            { size: "300 g", price: 0 }
        ],
        inStock: true,
        image: "Images/mag.jpg",
        uploadedImage: null,
        icon: "💊"
    },

 

    // 28. Glerol-Os
    {
        id: "glerol-os",
        name: "Glerol-Os",
        category: "Medical",
        description: "Treats acute Glaucoma. Treats Trigeminal neuralgia.",
        composition: "Glycerol IP 85% w/w, Flavour 0.01% w/w, Purified water IP qs to 100% w/w",
        usage: "To be used under medical supervision for treatment of Glaucoma and Neurosurgical ailments.",
        variants: [
            { size: "100 g", price: 112 },
            { size: "200 g", price: 202 },
            { size: "300 g", price: 294 },
            { size: "400 g", price: 364 },
            { size: "500 g", price: 430 },
            { size: "1 Kg", price: 756 },
            { size: "5 Kg", price: 3700 }
        ],
        inStock: true,
        image: "Images/gle.jpg",
        uploadedImage: null,
        icon: "💉"
    },

 

    // 30. Adtizer Hand Sanitizer (WHO)
    {
        id: "adtizer-hand-sanitizer-who",
        name: "Adtizer Hand Sanitizer (WHO)",
        category: "Antiseptics",
        description: "Used to clean hands without water. Used to disinfect your hands and your surroundings.",
        composition: "Ethanol Alcohol 80.00% v/v, Glycerin IP, Hydrogen peroxide, Purified water IP & Perfume",
        usage: "Put enough sanitizer on your hands to cover all surfaces. Rub your hands together until they feel dry.",
        variants: [
            { size: "60 mL", price: 30 },
            { size: "120 mL", price: 60 },
            { size: "200 mL", price: 100 },
            { size: "500 mL", price: 250 },
            { size: "5 Ltr", price: 2500 }
        ],
        inStock: true,
        image: "Images/san.jpg",
        uploadedImage: null,
        icon: "🧴"
    },

 

    // 32. Hypochlorite
    {
        id: "hypochlorite",
        name: "Sodium Hypochlorite",
        category: "Disinfectants",
        description: "Disinfectant solution for cleaning and sanitization.",
        composition: "Hypochlorite",
        usage: "Use as directed for disinfection.",
        variants: [
            { size: "5 lt", price: 810 }
        ],
        inStock: true,
        image: "Images/last.jpg",
        uploadedImage: null,
        icon: "🧹"
    }
];

// Expose PRODUCTS globally (top-level const/let does NOT attach to window,
// but shop.html and other pages rely on window.PRODUCTS to render the grid,
// filters, cart, and quick-view — this was the reason nothing appeared).
window.PRODUCTS = PRODUCTS;

// ============================================================
// IMAGE STORAGE SYSTEM
// ============================================================

class ImageStorage {
    constructor() {
        this.storageKey = 'adpl_product_images';
        this.loadFromStorage();
    }

    loadFromStorage() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            if (saved) {
                const parsed = JSON.parse(saved);
                PRODUCTS.forEach(product => {
                    if (parsed[product.id]) {
                        product.uploadedImage = parsed[product.id];
                    }
                });
            }
        } catch (e) {
            console.warn('Failed to load images from storage:', e);
        }
    }

    saveToStorage() {
        try {
            const data = {};
            PRODUCTS.forEach(product => {
                if (product.uploadedImage) {
                    data[product.id] = product.uploadedImage;
                }
            });
            localStorage.setItem(this.storageKey, JSON.stringify(data));
        } catch (e) {
            console.warn('Failed to save images to storage:', e);
        }
    }

    uploadImage(productId, file) {
        return new Promise((resolve, reject) => {
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product) {
                reject(new Error('Product not found'));
                return;
            }

            if (!file.type.startsWith('image/')) {
                reject(new Error('Please upload an image file'));
                return;
            }

            if (file.size > 5 * 1024 * 1024) {
                reject(new Error('Image size must be less than 5MB'));
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                const imageData = e.target.result;
                product.uploadedImage = imageData;
                this.saveToStorage();
                resolve(imageData);
            };
            reader.onerror = () => {
                reject(new Error('Failed to read image file'));
            };
            reader.readAsDataURL(file);
        });
    }

    removeImage(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (product) {
            product.uploadedImage = null;
            this.saveToStorage();
        }
    }

    getImage(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        return product ? product.uploadedImage : null;
    }

    hasUploadedImage(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        return product ? !!product.uploadedImage : false;
    }

    clearAllImages() {
        PRODUCTS.forEach(product => {
            product.uploadedImage = null;
        });
        this.saveToStorage();
    }
}

// Create global instance
const imageStorage = new ImageStorage();

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function formatPrice(price) {
    if (price === 0) return "Contact for price";
    return "₹" + price.toLocaleString("en-IN");
}

function getStartingPrice(product) {
    if (!product || !product.variants || !product.variants.length) return null;
    const prices = product.variants.map(v => v.price).filter(p => p > 0);
    return prices.length ? Math.min(...prices) : null;
}

function getProductImage(product) {
    if (product.uploadedImage) return product.uploadedImage;
    return product.image || null;
}

function getProductById(id) {
    return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(category) {
    return PRODUCTS.filter(p => p.category === category);
}

function productIconSVG(icon) {
    return `<div class="product-icon-emoji" style="font-size:2.4rem;line-height:1;" aria-hidden="true">${icon || '📦'}</div>`;
}

// Real categories used across the catalog, mapped to a representative emoji.
const CATEGORY_ICONS = {
    "Antiseptics": "🧫",
    "Digestive Health": "🌿",
    "Disinfectants": "🧪",
    "Ear Care": "👂",
    "Hair Care": "💇",
    "Health Supplements": "💊",
    "Medical": "🩺",
    "Oral Care": "🦷",
    "Personal Care": "🧼",
    "Skin Care": "🧴",
    "Wound Care": "🩹"
};

function categoryIconSVG(iconOrKey) {
    const emoji = CATEGORY_ICONS[iconOrKey] || iconOrKey || "💊";
    return `<div class="cat-icon-emoji" style="font-size:2rem;line-height:1;" aria-hidden="true">${emoji}</div>`;
}

function renderGrid(container, products) {
    if (!container) return;
    if (!products || !products.length) {
        container.innerHTML = `<div class="no-results">No products found. Try a different search or filter.</div>`;
        return;
    }
    container.innerHTML = products.map(renderProductCard).join('');
}

// ============================================================
// RENDER FUNCTIONS
// ============================================================

function renderProductCard(product) {
    const startPrice = getStartingPrice(product);
    const imageSrc = getProductImage(product);
    
    return `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
            <div class="product-image-wrapper">
                ${imageSrc ? 
                    `<img src="${imageSrc}" alt="${product.name}" class="product-image" />` : 
                    `<div class="product-icon">${product.icon || '📦'}</div>`
                }
                <button class="upload-btn" onclick="openUploadModal('${product.id}')" title="Upload product image">
                    📷
                </button>
            </div>
            <span class="product-category">${product.category}</span>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description.substring(0, 80)}${product.description.length > 80 ? '...' : ''}</p>
            <div class="product-variants">
                ${product.variants.slice(0, 3).map(v => 
                    `<span class="variant-tag">${v.size}: ${formatPrice(v.price)}</span>`
                ).join('')}
                ${product.variants.length > 3 ? `<span class="variant-tag">+${product.variants.length - 3} more</span>` : ''}
            </div>
            <div class="product-footer">
                <span class="product-price">${startPrice ? formatPrice(startPrice) : 'Contact for price'}</span>
                <span class="stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${product.inStock ? '✅ In Stock' : '❌ Out of Stock'}
                </span>
            </div>
            <div class="product-actions">
                <button class="btn btn-primary" onclick="addToCart('${product.id}')">Add to Cart</button>
                <button class="btn btn-secondary" onclick="viewProduct('${product.id}')">View Details</button>
            </div>
        </div>
    `;
}

function renderProductGrid(products) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    if (!products || !products.length) {
        grid.innerHTML = `<div class="no-results">No products found. Try a different search or filter.</div>`;
        return;
    }
    
    grid.innerHTML = products.map(renderProductCard).join('');
}

// ============================================================
// FILTER FUNCTIONS
// ============================================================

function filterProducts(category, searchQuery) {
    let filtered = [...PRODUCTS];
    
    if (category && category !== 'All') {
        filtered = filtered.filter(p => p.category === category);
    }
    
    if (searchQuery && searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
    }
    
    return filtered;
}

// ============================================================
// UI FUNCTIONS
// ============================================================

function openUploadModal(productId) {
    const modal = document.getElementById('uploadModal');
    if (!modal) {
        alert('Upload modal not found. Please check your HTML.');
        return;
    }
    
    modal.style.display = 'flex';
    modal.dataset.productId = productId;
    
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
        const nameEl = document.getElementById('uploadProductName');
        if (nameEl) nameEl.textContent = product.name;
    }
    
    // Clear previous preview
    const preview = document.getElementById('uploadPreview');
    if (preview) {
        preview.style.display = 'none';
        preview.src = '';
    }
    const fileInput = document.getElementById('imageFileInput');
    if (fileInput) fileInput.value = '';
}

function closeUploadModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
        modal.style.display = 'none';
        modal.dataset.productId = '';
    }
}

async function handleImageUpload() {
    const fileInput = document.getElementById('imageFileInput');
    const modal = document.getElementById('uploadModal');
    const productId = modal ? modal.dataset.productId : null;
    
    if (!productId) {
        alert('Product ID not found');
        return;
    }
    
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select an image file');
        return;
    }
    
    try {
        const imageData = await imageStorage.uploadImage(productId, file);
        const preview = document.getElementById('uploadPreview');
        if (preview) {
            preview.src = imageData;
            preview.style.display = 'block';
        }
        
        // Re-render the product grid
        const category = document.getElementById('categoryFilter')?.value || 'All';
        const search = document.getElementById('searchInput')?.value || '';
        const filtered = filterProducts(category, search);
        renderProductGrid(filtered);
        
        alert('Image uploaded successfully!');
        fileInput.value = '';
    } catch (error) {
        alert('Upload failed: ' + error.message);
    }
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    let cart = JSON.parse(localStorage.getItem('adpl_cart') || '[]');
    const existing = cart.find(item => item.id === productId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    
    localStorage.setItem('adpl_cart', JSON.stringify(cart));
    updateCartBadge();
    alert(`${product.name} added to cart!`);
}

function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('adpl_cart') || '[]');
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cartBadge');
    if (badge) {
        badge.textContent = count > 0 ? count : '';
        badge.style.display = count > 0 ? 'inline' : 'none';
    }
}

// ============================================================
// CATEGORY FILTER UI
// ============================================================

function renderCategoryFilters() {
    const container = document.getElementById('categoryFilters');
    if (!container) return;
    
    const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
    
    container.innerHTML = categories.map(cat => 
        `<button class="category-btn ${cat === 'All' ? 'active' : ''}" 
                data-category="${cat}" 
                onclick="applyCategoryFilter('${cat}')">
            ${cat}
        </button>`
    ).join('');
}

function applyCategoryFilter(category) {
    // Update active state
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    // Update dropdown
    const categorySelect = document.getElementById('categoryFilter');
    if (categorySelect) {
        categorySelect.value = category;
    }
    
    // Filter products
    const search = document.getElementById('searchInput')?.value || '';
    const filtered = filterProducts(category, search);
    renderProductGrid(filtered);
    
    // Update count
    const countEl = document.getElementById('productCount');
    if (countEl) {
        countEl.textContent = `${filtered.length} products`;
    }
}

// ============================================================
// SEARCH FUNCTION
// ============================================================

function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const categorySelect = document.getElementById('categoryFilter');
    
    if (searchInput) {
        const search = searchInput.value || '';
        const category = categorySelect ? categorySelect.value : 'All';
        const filtered = filterProducts(category, search);
        renderProductGrid(filtered);
        
        const countEl = document.getElementById('productCount');
        if (countEl) {
            countEl.textContent = `${filtered.length} products`;
        }
        
        // Update category buttons active state
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });
    }
}

// ============================================================
// INITIALIZATION
// ============================================================

function initShop() {
    console.log('Initializing shop...');
    
    // Render category filters
    renderCategoryFilters();
    
    // Render all products initially
    renderProductGrid(PRODUCTS);
    
    // Update product count
    const countEl = document.getElementById('productCount');
    if (countEl) {
        countEl.textContent = `${PRODUCTS.length} products`;
    }
    
    // Update cart badge
    updateCartBadge();
    
    // Setup search with debounce
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Setup category filter dropdown
    const categorySelect = document.getElementById('categoryFilter');
    if (categorySelect) {
        categorySelect.addEventListener('change', handleSearch);
        // Populate dropdown
        const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
        categorySelect.innerHTML = categories.map(cat => 
            `<option value="${cat}">${cat}</option>`
        ).join('');
    }
    
    // Modal close on click outside
    const modal = document.getElementById('uploadModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) closeUploadModal();
        });
    }
    
    console.log('Shop initialized successfully!');
}

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', initShop);