// ===========================================
// REGION DATA CONFIGURATION
// ===========================================

const REGIONS = {
    'icewind-dale': {
        name: 'Ten-Towns',
        position: { top: '7.09%', left: '35.57%' },
        imagePath: 'Images/regions/icewind-dale.png',
        surfaceTruth: 'Auril the Frostmaiden has cursed the Northern lands with perpetual winter, known as the Everlasting Rime. With no heroes to stop her, she has used the winter chill destroyed Ten-Towns. She looks further south and moves to conquer Neverwinter.',
        placeholderColor: '#4A90E2', // Icy blue
        scryingTarget: { opacity: 78, blur: 5, brightness: 92, contrast: 135 },
        hiddenTruth: 'Far north, hidden within a glacier, lies an ancient and forgotten city. An item of immense power once lied buried within the depths, until Vecna made a deal with Auril. In exchange for the artifact, she would rule over the Icewind Dale and more.',
        decoderFragment: 'O',
        triviaQuestions: [
            {
                question: "What is the name of the mountain overlooking the dwarven valley in Icewind Dale?",
                choices: ["The Spine of the World", "Dougan's Hole", "Kelvin's Valley", "Kelvin's Cairn"],
                correctIndex: 3
            },
            {
                question: "Which famous drow ranger hails from Icewind Dale?",
                choices: ["Jarlaxle", "Drizzt Do'Urden", "Zaknafein", "Artemis Entreri"],
                correctIndex: 1
            },
            {
                question: "What is the largest lake in the Ten-Towns region?",
                choices: ["Lac Dinneshere", "Redwaters", "Maer Dualdon", "Shaengarne River"],
                correctIndex: 2
            }
        ]
    },
    'baldurs-gate': {
        name: "Baldur's Gate",
        position: { top: '64.18%', left: '52.19%' },
        imagePath: 'Images/regions/baldurs-gate.png',
        surfaceTruth: "Worshippers of Tiamat have worked for years in Baldur's Gate, amassing treasure and the five Dragon Masks. Having succeeded, they summoned the goddess to rule over the city. Baldur's Gate now lives in fear and servitude to the Dragon Queen.",
        placeholderColor: '#E74C3C', // Dragon red
        scryingTarget: { opacity: 25, blur: 14, brightness: 118, contrast: 68 },
        hiddenTruth: "Avernus held a powerful artifact Vecna was determined to acquire. He made a deal with Tiamat, promising her dominion over Baldur's Gate in exchange for this powerful relic.",
        decoderFragment: 'K',
        triviaQuestions: [
            {
                question: "What are the three major gates to enter Baldur's Gate?",
                choices: ["North Gate, South Gate, Sea Gate", "Wyrm's Crossing, Basilisk Gate, Black Dragon Gate", "Eastern Gate, Western Gate, Harbor Gate", "Basilisk Gate, Baldur's Gate, Black Dragon Gate"],
                correctIndex: 3
            },
            {
                question: "Which powerful mercenary group controls much of Baldur's Gate?",
                choices: ["The Harpers", "The Zhentarim", "The Flaming Fist", "The Lords' Alliance"],
                correctIndex: 2
            },
            {
                question: "What layer of the Nine Hells is connected to Baldur's Gate?",
                choices: ["Dis", "Avernus", "Minauros", "Phlegethos"],
                correctIndex: 1
            }
        ]
    },
    'anauroch': {
        name: 'Anauroch',
        position: { top: '42.05%', left: '76.29%' },
        imagePath: 'Images/regions/anauroch.png',
        surfaceTruth: 'Iymrith the Desert Doom, the ancient blue dragon, wreaks havoc across the Anauroch Desert. Having orchestrated a conflict between the Giants and small folk by breaking the Ordning, no one could stand in his way.',
        placeholderColor: '#F39C12', // Desert gold
        scryingTarget: { opacity: 92, blur: 2, brightness: 140, contrast: 95 },
        hiddenTruth: 'Beneath the endless sands of Anauroch lay the ruins of ancient Netheril, where a powerful artifact remained hidden for millennia. Vecna struck a deal with Iymrith, granting her dominion over the desert in exchange for this relic of the fallen empire.',
        decoderFragment: 'S',
        triviaQuestions: [
            {
                question: "What ancient empire once ruled over what is now the Anauroch Desert?",
                choices: ["Netheril", "Myth Drannor", "Ammarindar", "Jhaamdath"],
                correctIndex: 0
            },
            {
                question: "What powerful artifact is said to be hidden in the ruins of Anauroch?",
                choices: ["The Crown of Horns", "The Staff of the Magi", "The Nether Scrolls", "The Orb of Dragonkind"],
                correctIndex: 2
            },
            {
                question: "What is the name of the nomadic people who traverse the Anauroch Desert?",
                choices: ["The Tuigan", "The Rashemi", "The Uthgardt", "The Bedine"],
                correctIndex: 3
            }
        ]
    },
    'waterdeep': {
        name: 'Waterdeep',
        position: { top: '37.08%', left: '45.27%' },
        imagePath: 'Images/regions/waterdeep.png',
        surfaceTruth: "Waterdeep has been destroyed. Nobody could exact vengeance, emboldening the giants to stay. They settled in the ruins, calling the place 'Little Town' as they build a new stronghold for the fire giant King Snurre.",
        placeholderColor: '#3498DB', // Ocean blue
        scryingTarget: { opacity: 45, blur: 18, brightness: 75, contrast: 118 },
        hiddenTruth: "Deep beneath Waterdeep's Undermountain, the mad wizard Halaster guarded an artifact of immense power. Vecna orchestrated the giant attack, promising King Snurre dominion over the City of Splendors while he claimed what lay in the dungeon's deepest levels.",
        decoderFragment: 'I',
        triviaQuestions: [
            {
                question: "What is the name of the massive dungeon beneath Waterdeep?",
                choices: ["Undermountain", "Skullport", "The Yawning Portal", "The Deep Halls"],
                correctIndex: 0
            },
            {
                question: "Who is the Blackstaff of Waterdeep?",
                choices: ["Elminster", "Mordenkainen", "Vajra Safahr", "Laeral Silverhand"],
                correctIndex: 2
            },
            {
                question: "What is the ruling council of Waterdeep called?",
                choices: ["The Lords' Alliance", "The Council of Guilds", "The Harpers", "The Lords of Waterdeep"],
                correctIndex: 3
            }
        ]
    },
    'phandalin': {
        name: 'Phandalin',
        position: { top: '25.52%', left: '42.61%' },
        imagePath: 'Images/regions/phandalin.png',
        surfaceTruth: 'Mind flayers have slowly corrupted the town of Phandalin. With everyone dead or driven to madness, the mind flayers have summoned their allies and renamed the town to Absolution.',
        placeholderColor: '#9B59B6', // Psychic purple
        scryingTarget: { opacity: 62, blur: 9, brightness: 62, contrast: 82 },
        hiddenTruth: 'Hidden within the town or Phandalin and its surrounding area lay fragments of an ancient power. Mind flayers worked in secret to assemble this artifact, attracting the attention of Vecna. Making a deal with the mind flayers, he promised them continue rule over Phandalin in exchange for the assembled relic.',
        decoderFragment: 'L',
        triviaQuestions: [
            {
                question: "What is the name of the cave system near Phandalin that contains the Forge of Spells?",
                choices: ["Wave Echo Cave", "Cragmaw Cavern", "Thundertree Ruins", "Tresendar Manor"],
                correctIndex: 0
            },
            {
                question: "Which goblin tribe terrorized Phandalin?",
                choices: ["The Bloody Hand", "The Red Fangs", "The Shattered Spear", "The Cragmaw Tribe"],
                correctIndex: 3
            },
            {
                question: "What ancient pact gave Wave Echo Cave its name?",
                choices: ["The Sword Coast Alliance", "The Dragon Pact", "The Phandelver Pact", "The Neverwinter Treaty"],
                correctIndex: 2
            }
        ]
    },
    'daggerford': {
        name: 'Daggerford',
        position: { top: '41.09%', left: '48.46%' },
        imagePath: 'Images/regions/daggerford.png',
        surfaceTruth: "Szass Tam and the Red Wizards have invaded the Sword Coast. Despite a solid effort to hold them back, including a defected red wizard, Szass Tam prevailed using his secret base to continue sending reinforcements from across the realms. The red wizards have renamed Daggerford to New Thay, plotting their continued expansion across the Sword Coast.",
        placeholderColor: '#C0392B', // Thayan crimson
        scryingTarget: { opacity: 12, blur: 0, brightness: 128, contrast: 142 },
        hiddenTruth: "",
        decoderFragment: 'B',
        triviaQuestions: [
            {
                question: "What is the capital city of Thay?",
                choices: ["Bezantur", "Eltabbar", "Tyraturos", "Pyarados"],
                correctIndex: 1
            },
            {
                question: "What is the ruling council of Thay called?",
                choices: ["The Red Council", "The Thayan Lords", "The Zulkirs", "The Circle of Eight"],
                correctIndex: 2
            },
            {
                question: "What is the name of the massive dungeon beneath Thay used for terrible experiments?",
                choices: ["The Doomvault", "The Bloodstone Vault", "The Citadel of Screams", "The Necropolis"],
                correctIndex: 0
            }
        ]
    },
    'underdark': {
        name: 'The Underdark',
        position: { top: '35.61%', left: '8.21%' },
        imagePath: 'Images/regions/underdark.png',
        surfaceTruth: 'The Underdark, already a chaotic realm, has been plunged into deeper darkness. Demon lords have come through rifts with no adventurers strong enough to push them back. Demogorgon, Zuggtmoy, and Juiblex now divide the Underdark between them.',
        placeholderColor: '#2C3E50', // Deep shadow
        scryingTarget: { opacity: 88, blur: 11, brightness: 105, contrast: 58 },
        hiddenTruth: 'Deep within the Underdark, beneath the duergar city of Gracklstugh, derro reassembled an artifact of primordial darkness from before the Sundering. Vecna bargained with the demon lords, offering them free reign over the Underdark in exchange for retrieving this relic of the Abyss.',
        decoderFragment: 'E',
        triviaQuestions: [
            {
                question: "What large fungus creatures inhabit the Underdark?",
                choices: ["Sporelings", "Myconids", "Shriekers", "Violet Fungi"],
                correctIndex: 1
            },
            {
                question: "What duergar city is known as the City of Blades?",
                choices: ["Gracklstugh", "Dunspeirrin", "Shadowforge", "Underspires"],
                correctIndex: 0
            },
            {
                question: "What ancient drow city is known as the City of Spiders?",
                choices: ["Eryndlyn", "Ched Nasad", "V'elddrinnsshar", "Menzoberranzan"],
                correctIndex: 3
            }
        ]
    }
};

// Scrying puzzle target values (all regions use same difficulty)
// const SCRYING_TARGETS = {
//     opacity: 100,
//     blur: 0,
//     brightness: 110,
//     contrast: 120
// };

// Tolerance values for each slider type
const TOLERANCE = {
    opacity: 5,
    blur: 2,
    brightness: 8,
    contrast: 8
};

// ===========================================
// GAME STATE MANAGEMENT
// ===========================================

class GameState {
    constructor() {
        this.loadState();
    }

    loadState() {
        const saved = localStorage.getItem('vecna-truth-map-state');
        if (saved) {
            this.data = JSON.parse(saved);
            // Ensure completedHiddenTruths exists
            if (!this.data.completedHiddenTruths) {
                this.data.completedHiddenTruths = [];
            }
        } else {
            this.data = {
                completedRegions: [],
                completedHiddenTruths: []
            };
        }
    }

    saveState() {
        localStorage.setItem('vecna-truth-map-state', JSON.stringify(this.data));
    }

    isCompleted(regionId) {
        return this.data.completedRegions.includes(regionId);
    }

    completeRegion(regionId) {
        if (!this.isCompleted(regionId)) {
            this.data.completedRegions.push(regionId);
            this.saveState();
        }
    }
    
    isHiddenTruthCompleted(regionId) {
        return this.data.completedHiddenTruths && this.data.completedHiddenTruths.includes(regionId);
    }
    
    completeHiddenTruth(regionId) {
        if (!this.data.completedHiddenTruths) {
            this.data.completedHiddenTruths = [];
        }
        if (!this.isHiddenTruthCompleted(regionId)) {
            this.data.completedHiddenTruths.push(regionId);
            this.saveState();
            
            // Update orb visual
            const orb = document.querySelector(`.orb[data-region="${regionId}"]`);
            if (orb) {
                orb.classList.add('hidden-truth-complete');
            }
        }
    }
    
    areAllHiddenTruthsCompleted() {
        if (!this.data.completedHiddenTruths) {
            return false;
        }
        // Check if all 7 regions have completed hidden truths (green borders)
        const allRegions = Object.keys(REGIONS);
        return allRegions.length === 7 && 
               allRegions.every(regionId => this.data.completedHiddenTruths.includes(regionId));
    }

    reset() {
        this.data = { completedRegions: [], completedHiddenTruths: [] };
        this.saveState();
        location.reload();
    }
    
    completeAll() {
        this.data.completedRegions = Object.keys(REGIONS);
        this.saveState();
        location.reload();
    }
}

// ===========================================
// SCRYING MECHANICS
// ===========================================

class ScryingPuzzle {
    constructor(gameState) {
        this.gameState = gameState;
        this.currentRegion = null;
        
        // DOM elements
        this.modal = document.getElementById('scrying-modal');
        this.puzzleView = document.getElementById('scrying-puzzle');
        this.truthView = document.getElementById('surface-truth');
        this.regionImage = document.getElementById('region-image');
        this.regionTitle = document.getElementById('region-title');
        this.truthTitle = document.getElementById('truth-title');
        this.truthText = document.getElementById('truth-text');
        
        // Sliders
        this.opacitySlider = document.getElementById('opacity-slider');
        this.blurSlider = document.getElementById('blur-slider');
        this.brightnessSlider = document.getElementById('brightness-slider');
        this.contrastSlider = document.getElementById('contrast-slider');
        
        // Value displays
        this.opacityValue = document.getElementById('opacity-value');
        this.blurValue = document.getElementById('blur-value');
        this.brightnessValue = document.getElementById('brightness-value');
        this.contrastValue = document.getElementById('contrast-value');
        
        // Buttons
        this.completeButton = document.getElementById('complete-scrying');
        this.closeButton = document.getElementById('close-modal');
        this.researchButton = document.getElementById('research-further');
        
        this.initEventListeners();
    }

    initEventListeners() {
        // Slider inputs - update visual in real-time
        this.opacitySlider.addEventListener('input', () => this.updateImageFilters());
        this.blurSlider.addEventListener('input', () => this.updateImageFilters());
        this.brightnessSlider.addEventListener('input', () => this.updateImageFilters());
        this.contrastSlider.addEventListener('input', () => this.updateImageFilters());
        
        // Complete button
        this.completeButton.addEventListener('click', () => this.validateScrying());
        
        // Close button
        this.closeButton.addEventListener('click', () => this.closeModal());
        
        // Research Further button
        this.researchButton.addEventListener('click', () => this.openHiddenPuzzle());
    }

    openRegion(regionId) {
        this.currentRegion = regionId;
        const region = REGIONS[regionId];
        
        // Check if already completed - show truth directly
        if (this.gameState.isCompleted(regionId)) {
            this.showSurfaceTruth();
        } else {
            this.showScryingPuzzle();
        }
        
        this.modal.classList.remove('hidden');
    }

    showScryingPuzzle() {
        const region = REGIONS[this.currentRegion];
        
        // Update title
        this.regionTitle.textContent = `Scrying ${region.name}`;
        
        // Load region image (or show placeholder)
        this.loadRegionImage(region);
        
        // Reset sliders to initial values
        this.opacitySlider.value = 50;
        this.blurSlider.value = 10;
        this.brightnessSlider.value = 100;
        this.contrastSlider.value = 100;
        
        this.updateImageFilters();
        
        // Show puzzle view
        this.puzzleView.classList.remove('hidden');
        this.truthView.classList.add('hidden');
    }

    showSurfaceTruth() {
        const region = REGIONS[this.currentRegion];
        
        this.truthTitle.textContent = region.name;
        this.truthText.textContent = region.surfaceTruth;
        
        // Display the cleared region image
        const truthImage = document.getElementById('truth-image');
        const img = new Image();
        img.onload = () => {
            truthImage.src = region.imagePath;
            truthImage.style.backgroundColor = '';
            truthImage.style.filter = 'none'; // Clear any filters
            truthImage.style.boxShadow = 'none'; // Remove glow
        };
        img.onerror = () => {
            // Use placeholder gradient
            truthImage.src = '';
            truthImage.style.backgroundColor = region.placeholderColor;
            truthImage.style.background = `linear-gradient(135deg, ${region.placeholderColor} 0%, ${this.adjustBrightness(region.placeholderColor, -30)} 100%)`;
            truthImage.style.filter = 'none';
            truthImage.style.boxShadow = 'none';
        };
        img.src = region.imagePath;
        
        // Hide puzzle, show truth
        this.puzzleView.classList.add('hidden');
        this.truthView.classList.remove('hidden');
    }

    loadRegionImage(region) {
        // Try to load actual image, fall back to placeholder
        const img = new Image();
        img.onload = () => {
            this.regionImage.src = region.imagePath;
            this.regionImage.style.backgroundColor = '';
        };
        img.onerror = () => {
            // Use placeholder gradient
            this.regionImage.src = '';
            this.regionImage.style.backgroundColor = region.placeholderColor;
            this.regionImage.style.background = `linear-gradient(135deg, ${region.placeholderColor} 0%, ${this.adjustBrightness(region.placeholderColor, -30)} 100%)`;
        };
        img.src = region.imagePath;
    }

    adjustBrightness(color, percent) {
        // Simple brightness adjuster for gradients
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255))
            .toString(16).slice(1);
    }

    updateImageFilters() {
        const opacity = this.opacitySlider.value;
        const blur = this.blurSlider.value;
        const brightness = this.brightnessSlider.value;
        const contrast = this.contrastSlider.value;
        
        // Update value displays
        this.opacityValue.textContent = opacity;
        this.blurValue.textContent = blur;
        this.brightnessValue.textContent = brightness;
        this.contrastValue.textContent = contrast;
        
        // Apply CSS filters to region image
        this.regionImage.style.filter = `
            opacity(${opacity}%)
            blur(${blur}px)
            brightness(${brightness}%)
            contrast(${contrast}%)
        `;
        
        // Calculate how close we are to target (0-100 scale)
        const region = REGIONS[this.currentRegion];
        const targets = region.scryingTarget;
        
        const opacityDelta = Math.abs(parseInt(opacity) - targets.opacity);
        const blurDelta = Math.abs(parseInt(blur) - targets.blur);
        const brightnessDelta = Math.abs(parseInt(brightness) - targets.brightness);
        const contrastDelta = Math.abs(parseInt(contrast) - targets.contrast);
        
        // Average distance from targets (normalized)
        const totalError = (opacityDelta + blurDelta + brightnessDelta + contrastDelta) / 4;
        const avgTolerance = (TOLERANCE.opacity + TOLERANCE.blur + TOLERANCE.brightness + TOLERANCE.contrast) / 4;
        
        // Visual feedback on image border - green when close, red when far
        if (totalError <= avgTolerance) {
            // Very close - green glow
            this.regionImage.style.boxShadow = '0 0 30px rgba(46, 204, 113, 0.8)';
        } else if (totalError <= avgTolerance * 2) {
            // Getting close - yellow glow
            this.regionImage.style.boxShadow = '0 0 30px rgba(241, 196, 15, 0.6)';
        } else if (totalError <= avgTolerance * 4) {
            // Still far - orange glow
            this.regionImage.style.boxShadow = '0 0 30px rgba(230, 126, 34, 0.5)';
        } else {
            // Very far - red glow
            this.regionImage.style.boxShadow = '0 0 30px rgba(231, 76, 60, 0.4)';
        }
    }

    validateScrying() {
        const opacity = parseInt(this.opacitySlider.value);
        const blur = parseInt(this.blurSlider.value);
        const brightness = parseInt(this.brightnessSlider.value);
        const contrast = parseInt(this.contrastSlider.value);
        
        const region = REGIONS[this.currentRegion];
        const targets = region.scryingTarget;
        
        const isValid = 
            Math.abs(opacity - targets.opacity) <= TOLERANCE.opacity &&
            Math.abs(blur - targets.blur) <= TOLERANCE.blur &&
            Math.abs(brightness - targets.brightness) <= TOLERANCE.brightness &&
            Math.abs(contrast - targets.contrast) <= TOLERANCE.contrast;
        
        if (isValid) {
            this.onScryingSuccess();
        } else {
            this.onScryingFailure();
        }
    }

    onScryingSuccess() {
        // Mark region as completed
        this.gameState.completeRegion(this.currentRegion);
        
        // Update orb visual on map - replace with region image
        const orb = document.querySelector(`.orb[data-region="${this.currentRegion}"]`);
        const region = REGIONS[this.currentRegion];
        if (orb) {
            orb.classList.remove('locked');
            orb.classList.add('completed');
            
            // Replace orb image with region image
            const img = orb.querySelector('img');
            if (img) {
                const regionImg = new Image();
                regionImg.onload = () => {
                    img.src = region.imagePath;
                    img.style.borderRadius = '4px';
                };
                regionImg.onerror = () => {
                    // Keep orb if image fails to load
                };
                regionImg.src = region.imagePath;
            }
        }
        
        // Show success animation and surface truth
        this.regionImage.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            this.showSurfaceTruth();
        }, 500);
    }

    onScryingFailure() {
        // Visual feedback for failure
        this.completeButton.textContent = 'Not Quite... Try Again';
        this.completeButton.style.backgroundColor = '#E74C3C';
        
        setTimeout(() => {
            this.completeButton.textContent = 'Complete Scrying';
            this.completeButton.style.backgroundColor = '';
        }, 1500);
    }

    closeModal() {
        this.modal.classList.add('hidden');
        this.currentRegion = null;
    }
    
    openHiddenPuzzle() {
        // Close scrying modal and open hidden puzzle
        this.modal.classList.add('hidden');
        if (window.hiddenPuzzle) {
            window.hiddenPuzzle.open(this.currentRegion);
        }
    }
}

// ===========================================
// HIDDEN PUZZLE MECHANICS
// ===========================================

class HiddenPuzzle {
    constructor(gameState) {
        this.gameState = gameState;
        this.currentRegion = null;
        this.modal = document.getElementById('hidden-puzzle-modal');
        this.title = document.getElementById('hidden-puzzle-title');
        this.content = document.getElementById('hidden-puzzle-content');
        this.closeButton = document.getElementById('close-hidden-puzzle');
        this.userAnswers = [];
        
        this.initEventListeners();
    }
    
    initEventListeners() {
        this.closeButton.addEventListener('click', () => this.close());
    }
    
    open(regionId) {
        this.currentRegion = regionId;
        const region = REGIONS[regionId];
        this.userAnswers = [];
        
        this.title.textContent = `Hidden Truth: ${region.name}`;
        
        // Skip trivia if already completed
        if (this.gameState.isHiddenTruthCompleted(regionId)) {
            this.showSuccess(region, true);
        } else {
            // Load trivia quiz
            this.loadTrivia(regionId);
        }
        
        this.modal.classList.remove('hidden');
    }
    
    close() {
        this.modal.classList.add('hidden');
        this.currentRegion = null;
        this.userAnswers = [];
    }
    
    loadTrivia(regionId) {
        const region = REGIONS[regionId];
        
        if (!region.triviaQuestions) {
            this.content.innerHTML = '<p>Trivia not yet configured for this region.</p>';
            return;
        }
        
        let html = `
            <div class="trivia-intro">
                <p style="font-style: italic; font-size: 18px; margin-bottom: 30px; color: #6bb6ff;">
                    "To learn something forgotten, you must prove you know that which is."
                </p>
            </div>
            <div class="trivia-questions">
        `;
        
        region.triviaQuestions.forEach((q, index) => {
            html += `
                <div class="trivia-question" data-question="${index}">
                    <h3>Question ${index + 1}</h3>
                    <p class="question-text">${q.question}</p>
                    <div class="trivia-choices">
            `;
            
            q.choices.forEach((choice, choiceIndex) => {
                html += `
                    <label class="trivia-choice">
                        <input type="radio" name="question-${index}" value="${choiceIndex}">
                        <span>${choice}</span>
                    </label>
                `;
            });
            
            html += `
                    </div>
                </div>
            `;
        });
        
        html += `
            </div>
            <button class="action-button" id="submit-trivia">Submit Answers</button>
        `;
        
        this.content.innerHTML = html;
        
        // Add submit handler
        document.getElementById('submit-trivia').addEventListener('click', () => this.checkAnswers());
    }
    
    checkAnswers() {
        const region = REGIONS[this.currentRegion];
        let wrongCount = 0;
        
        region.triviaQuestions.forEach((q, index) => {
            const selected = document.querySelector(`input[name="question-${index}"]:checked`);
            if (!selected || parseInt(selected.value) !== q.correctIndex) {
                wrongCount++;
            }
        });
        
        if (wrongCount === 0) {
            this.showSuccess(region);
        } else {
            this.showFailure(wrongCount);
        }
    }
    
    showSuccess(region, skipCompletion = false) {
        // Mark hidden truth as completed (only if not already completed)
        if (!skipCompletion) {
            this.gameState.completeHiddenTruth(this.currentRegion);
        }
        
        this.content.innerHTML = `
            <div class="trivia-result success">
                <h3 style="color: #2ecc71;">You have proved your knowledge.</h3>
                <p style="font-style: italic; color: #6bb6ff;">That which was forgotten, is now known.</p>
                <div class="hidden-truth-reveal">
                    <p>${region.hiddenTruth}</p>
                    <div class="decoder-fragment">
                        <img src="Images/symbols/${region.decoderFragment}.png" alt="${region.decoderFragment}" class="fragment-symbol">
                    </div>
                </div>
            </div>
        `;
    }
    
    showFailure(wrongCount) {
        this.content.innerHTML = `
            <div class="trivia-result failure">
                <h3 style="color: #e74c3c;">Knowledge Incomplete</h3>
                <p>You got ${wrongCount} question${wrongCount > 1 ? 's' : ''} wrong.</p>
                <p>The hidden truth remains obscured.</p>
                <button class="action-button" id="retry-trivia">Try Again</button>
            </div>
        `;
        
        document.getElementById('retry-trivia').addEventListener('click', () => {
            this.loadTrivia(this.currentRegion);
        });
    }
}

// ===========================================
// ZOOM AND PAN FUNCTIONALITY
// ===========================================

class MapZoom {
    constructor() {
        this.mapWrapper = document.getElementById('map-wrapper');
        this.mapContainer = document.getElementById('map-container');
        this.zoomLevel = 1;
        this.minZoom = 0.5;
        this.maxZoom = 3;
        this.zoomStep = 0.2;
        
        this.panX = 0;
        this.panY = 0;
        this.isPanning = false;
        this.startX = 0;
        this.startY = 0;
        this.rafId = null;
        
        this.initZoomControls();
        this.initPanControls();
        this.initMouseWheel();
    }
    
    initZoomControls() {
        document.getElementById('zoom-in').addEventListener('click', () => {
            this.zoom(this.zoomStep);
        });
        
        document.getElementById('zoom-out').addEventListener('click', () => {
            this.zoom(-this.zoomStep);
        });
        
        document.getElementById('zoom-reset').addEventListener('click', () => {
            this.reset();
        });
    }
    
    initPanControls() {
        this.mapContainer.addEventListener('mousedown', (e) => {
            // Don't pan if clicking on an orb or modal
            if (e.target.closest('.orb') || e.target.closest('.modal')) return;
            
            // Only start panning on left mouse button
            if (e.button !== 0) return;
            
            this.isPanning = true;
            this.startX = e.clientX - this.panX;
            this.startY = e.clientY - this.panY;
            this.mapContainer.style.cursor = 'grabbing';
            e.preventDefault();
        });
        
        this.mapContainer.addEventListener('mousemove', (e) => {
            if (!this.isPanning) return;
            
            e.preventDefault();
            
            // Store the new pan position
            const newPanX = e.clientX - this.startX;
            const newPanY = e.clientY - this.startY;
            
            // Only update if values changed and no pending animation frame
            if ((newPanX !== this.panX || newPanY !== this.panY) && !this.rafId) {
                this.rafId = requestAnimationFrame(() => {
                    this.panX = newPanX;
                    this.panY = newPanY;
                    this.updateTransform();
                    this.rafId = null;
                });
            }
        });
        
        const stopPanning = () => {
            if (this.isPanning) {
                this.isPanning = false;
                this.mapContainer.style.cursor = '';
                if (this.rafId) {
                    cancelAnimationFrame(this.rafId);
                    this.rafId = null;
                }
            }
        };
        
        document.addEventListener('mouseup', stopPanning);
        document.addEventListener('mouseleave', stopPanning);
        this.mapContainer.addEventListener('mouseleave', stopPanning);
    }
    
    initMouseWheel() {
        this.mapContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -this.zoomStep : this.zoomStep;
            this.zoom(delta);
        }, { passive: false });
    }
    
    zoom(delta) {
        const newZoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.zoomLevel + delta));
        
        if (newZoom !== this.zoomLevel) {
            this.zoomLevel = newZoom;
            this.updateTransform();
        }
    }
    
    reset() {
        this.zoomLevel = 1;
        this.panX = 0;
        this.panY = 0;
        this.updateTransform();
    }
    
    updateTransform() {
        this.mapWrapper.style.transform = `translate(${this.panX}px, ${this.panY}px) scale(${this.zoomLevel})`;
    }
}

// ===========================================
// FINAL PUZZLE
// ===========================================

class FinalPuzzle {
    constructor() {
        this.modal = document.getElementById('final-puzzle-modal');
        this.closeBtn = document.getElementById('close-final-puzzle');
        this.symbolsPool = document.getElementById('symbols-pool');
        this.dropZones = document.getElementById('drop-zones');
        this.checkBtn = document.getElementById('check-solution');
        this.finalTruthReveal = document.getElementById('final-truth-reveal');
        this.finalTruthContent = document.getElementById('final-truth-content');
        
        this.solution = ['O', 'B', 'E', 'L', 'I', 'S', 'K'];
        this.requiredRotations = {
            'O': 0,
            'B': 0,
            'E': 270,  // Needs to be rotated 3 times (90° each)
            'L': 180,  // Needs to be rotated 2 times
            'I': 0,
            'S': 0,
            'K': 0
        };
        this.currentOrder = [];
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.closeBtn.addEventListener('click', () => this.close());
        this.checkBtn.addEventListener('click', () => this.checkSolution());
        
        // Close on outside click
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });
    }
    
    open() {
        this.modal.classList.remove('hidden');
        this.modal.style.display = 'flex';
        this.finalTruthReveal.style.display = 'none';
        this.currentOrder = [];
        this.loadSymbols();
    }
    
    close() {
        this.modal.classList.add('hidden');
        this.modal.style.display = 'none';
    }
    
    loadSymbols() {
        // Clear existing symbols and drop zones
        this.symbolsPool.innerHTML = '';
        const zones = this.dropZones.querySelectorAll('.drop-zone');
        zones.forEach(zone => {
            zone.innerHTML = '';
            zone.classList.remove('filled');
        });
        
        // Randomize symbol order
        const symbols = [...this.solution];
        this.shuffleArray(symbols);
        
        // Create draggable symbols
        symbols.forEach(letter => {
            const img = document.createElement('img');
            img.src = `Images/symbols/${letter}.png`;
            img.classList.add('draggable-symbol');
            img.setAttribute('draggable', 'true');
            img.dataset.letter = letter;
            img.dataset.rotation = '0';
            
            // Drag events for symbols
            img.addEventListener('dragstart', (e) => {
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/plain', letter);
                img.classList.add('dragging');
            });
            
            img.addEventListener('dragend', () => {
                img.classList.remove('dragging');
            });
            
            // Click to rotate
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                let rotation = parseInt(img.dataset.rotation) || 0;
                rotation = (rotation + 90) % 360;
                img.dataset.rotation = rotation;
                img.style.transform = `rotate(${rotation}deg)`;
            });
            
            this.symbolsPool.appendChild(img);
        });
        
        // Setup drop zones
        zones.forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                zone.classList.add('drag-over');
            });
            
            zone.addEventListener('dragleave', () => {
                zone.classList.remove('drag-over');
            });
            
            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                zone.classList.remove('drag-over');
                
                const letter = e.dataTransfer.getData('text/plain');
                const draggedElement = document.querySelector(`.draggable-symbol[data-letter="${letter}"].dragging`);
                
                if (!draggedElement) return;
                
                // If zone already has a symbol, return it to pool
                const existingSymbol = zone.querySelector('.draggable-symbol');
                if (existingSymbol) {
                    this.symbolsPool.appendChild(existingSymbol);
                }
                
                // Move dragged symbol to zone
                zone.appendChild(draggedElement);
                zone.classList.add('filled');
            });
        });
        
        // Make symbols in pool droppable back
        this.symbolsPool.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });
        
        this.symbolsPool.addEventListener('drop', (e) => {
            e.preventDefault();
            const letter = e.dataTransfer.getData('text/plain');
            const draggedElement = document.querySelector(`.draggable-symbol[data-letter="${letter}"].dragging`);
            
            if (draggedElement && draggedElement.parentElement !== this.symbolsPool) {
                // Remove from drop zone
                const zone = draggedElement.parentElement;
                if (zone.classList.contains('drop-zone')) {
                    zone.classList.remove('filled');
                }
                this.symbolsPool.appendChild(draggedElement);
            }
        });
    }
    
    checkSolution() {
        // Get current order from drop zones
        const zones = this.dropZones.querySelectorAll('.drop-zone');
        this.currentOrder = [];
        
        zones.forEach(zone => {
            const symbol = zone.querySelector('.draggable-symbol');
            if (symbol) {
                this.currentOrder.push({
                    letter: symbol.dataset.letter,
                    rotation: parseInt(symbol.dataset.rotation) || 0
                });
            } else {
                this.currentOrder.push(null);
            }
        });
        
        // Check if all positions are filled
        if (this.currentOrder.includes(null)) {
            alert('Please fill all positions with symbols!');
            return;
        }
        
        // Check if solution is correct (both letter and rotation)
        const isCorrect = this.currentOrder.every((item, index) => {
            const expectedLetter = this.solution[index];
            const expectedRotation = this.requiredRotations[expectedLetter];
            return item.letter === expectedLetter && item.rotation === expectedRotation;
        });
        
        if (isCorrect) {
            this.showFinalTruth();
        } else {
            this.showIncorrect();
        }
    }
    
    showIncorrect() {
        // Add shake animation to all symbols
        const symbols = this.dropZones.querySelectorAll('.draggable-symbol');
        symbols.forEach(symbol => {
            symbol.classList.add('shake');
        });
        
        // Remove shake class and reset after animation
        setTimeout(() => {
            symbols.forEach(symbol => {
                symbol.classList.remove('shake');
            });
            
            // Move symbols back to pool and randomize
            symbols.forEach(symbol => {
                this.symbolsPool.appendChild(symbol);
            });
            
            // Clear drop zones
            const zones = this.dropZones.querySelectorAll('.drop-zone');
            zones.forEach(zone => {
                zone.classList.remove('filled');
            });
            
            // Shuffle symbols in pool
            const poolSymbols = Array.from(this.symbolsPool.children);
            this.shuffleArray(poolSymbols);
            poolSymbols.forEach(symbol => this.symbolsPool.appendChild(symbol));
        }, 500);
    }
    
    showFinalTruth() {
        // Hide puzzle elements
        document.querySelector('#final-puzzle-container h2').style.display = 'none';
        document.querySelector('.final-puzzle-instructions').style.display = 'none';
        this.symbolsPool.style.display = 'none';
        this.dropZones.style.display = 'none';
        this.checkBtn.style.display = 'none';
        
        // Show final truth
        this.finalTruthReveal.style.display = 'block';
        this.finalTruthContent.innerHTML = `
            <p>The symbols align, revealing their ancient message: <strong>OBELISK</strong></p>
            <p style="margin-top: 20px;">Vecna learned of the great power the Netherese once wielded, rivaling even that of the Weavers. He learned that remnants of that power still existed, fragments of an ancient obelisk, scattered across the Sword Coast. This obelisk, if reassembled, held the key to rewriting reality itself.</p>
            <p style="margin-top: 15px;">Through cunning bargains with dark entities—Tiamat, Szass Tam, demon lords, and more—Vecna gathered each fragment. In exchange for dominion over regions of the Sword Coast, these powers unknowingly aided in his ultimate goal.</p>
            <p style="margin-top: 15px;">After assembling the fragments, he used its power to wipe all knowledge of the Netherese, the Weavers, and himself from everyone.</p>
            <p style="margin-top: 15px;">With no one left to stop him, or even know of him and his power, he began the arduous ritual to rewrite all of reality, remake time, and reforge all of existence in his image.</p>
            <p style="margin-top: 20px; color: #ff0000ff; font-weight: bold;">No one else remembers the truth. No one else can stand against him. You are the last chance for all of existence—and time is running out.</p>
            <p style="margin-top: 10px; color: #ff0000ff; font-weight: bold;">(This counts as a secret learned)</p>
        `;
    }
    
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

// ===========================================
// INITIALIZATION
// ===========================================

document.addEventListener('DOMContentLoaded', () => {
    const gameState = new GameState();
    const scryingPuzzle = new ScryingPuzzle(gameState);
    const mapZoom = new MapZoom();
    const hiddenPuzzle = new HiddenPuzzle(gameState);
    
    // Make hiddenPuzzle globally accessible
    window.hiddenPuzzle = hiddenPuzzle;
    
    // Position orbs on map based on REGIONS config
    const orbs = document.querySelectorAll('.orb');
    
    orbs.forEach(orb => {
        const regionId = orb.getAttribute('data-region');
        const region = REGIONS[regionId];
        
        if (region) {
            // Set position as percentage - will scale automatically with parent
            orb.style.left = region.position.left;
            orb.style.top = region.position.top;
            
            // Offset to center the orb on the position
            orb.style.marginLeft = '-17.5px'; // Half of 35px width
            orb.style.marginTop = '-17.5px'; // Half of 35px height
            
            // Set initial state
            if (gameState.isCompleted(regionId)) {
                orb.classList.remove('locked');
                orb.classList.add('completed');
                
                // Replace orb image with region image for completed regions
                const img = orb.querySelector('img');
                if (img) {
                    const regionImg = new Image();
                    regionImg.onload = () => {
                        img.src = region.imagePath;
                        img.style.borderRadius = '4px';
                    };
                    regionImg.onerror = () => {
                        // Keep orb if image fails to load
                    };
                    regionImg.src = region.imagePath;
                }
                
                // Check if hidden truth is also completed
                if (gameState.isHiddenTruthCompleted(regionId)) {
                    orb.classList.add('hidden-truth-complete');
                }
            }
            
            // Click handler
            orb.addEventListener('click', () => {
                scryingPuzzle.openRegion(regionId);
            });
        }
    });
    
    // Final puzzle button
    const assembleTruthBtn = document.getElementById('assemble-truth-btn');
    const finalPuzzle = new FinalPuzzle();
    
    assembleTruthBtn.addEventListener('click', () => {
        finalPuzzle.open();
    });
    
    // Check if all hidden truths are completed to show final button
    function updateFinalPuzzleButton() {
        if (gameState.areAllHiddenTruthsCompleted()) {
            assembleTruthBtn.style.display = 'block';
        } else {
            assembleTruthBtn.style.display = 'none';
        }
    }
    
    // Call initially and whenever state changes
    updateFinalPuzzleButton();
    
    // Override completeHiddenTruth to update button visibility
    const originalCompleteHiddenTruth = gameState.completeHiddenTruth.bind(gameState);
    gameState.completeHiddenTruth = function(regionId) {
        originalCompleteHiddenTruth(regionId);
        updateFinalPuzzleButton();
    };
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Press 'R' key to reset all progress
        if (e.key === 'r' || e.key === 'R') {
            if (confirm('Reset all progress?')) {
                gameState.reset();
                updateFinalPuzzleButton();
            }
        }
    });
});
