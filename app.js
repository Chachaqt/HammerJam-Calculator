// Clash of Clans - Supercell Official Game Asset & JSON Export Mapping
const SUPERCELL_IDS = {
    // Defenses & Infrastructure (Home Village)
    1000000: "⛺ Army Camp",
    1000001: "🏛️ Town Hall",
    1000002: "🧪 Elixir Collector",
    1000003: "🧪 Elixir Storage",
    1000004: "🪙 Gold Mine",
    1000005: "🪙 Gold Storage",
    1000006: "⚔️ Barracks",
    1000007: "⚗️ Laboratory",
    1000008: "💣 Cannon",
    1000009: "🏹 Archer Tower",
    1000010: "🧱 Wall",
    1000011: "🧙 Wizard Tower",
    1000012: "🚀 Air Defense",
    1000013: "💣 Mortar",
    1000014: "🏰 Clan Castle",
    1000015: "🔨 Builder's Hut",
    1000016: "⚡ Hidden Tesla",
    1000017: "🧪 Spell Factory",
    1000018: "💀 Dark Barracks",
    1000019: "⚡ Hidden Tesla",
    1000020: "🧪 Spell Factory",
    1000021: "🏹 X-Bow",
    1000022: "💨 Air Sweeper",
    1000023: "🛢️ Dark Elixir Drill",
    1000024: "🛢️ Dark Elixir Storage",
    1000025: "🦅 Eagle Artillery",
    1000026: "💀 Dark Barracks",
    1000027: "🔥 Inferno Tower",
    1000028: "💨 Air Sweeper",
    1000029: "🧪 Dark Spell Factory",
    1000031: "🦅 Eagle Artillery",
    1000032: "💣 Bomb Tower",
    1000033: "🔮 Spell Tower",
    1000034: "🗿 Monolith",
    1000059: "🪵 Workshop",
    1000067: "🎯 Scattershot",
    1000068: "🐾 Pet House",
    1000070: "⚒️ Blacksmith",
    1000071: "👑 Hero Hall",
    1000072: "🔮 Spell Tower",
    1000077: "🗿 Monolith",
    1000079: "⚙️ Multi-Gear Tower",
    1000084: "🏹 Multi-Archer Tower",
    1000085: "💣 Ricochet Cannon",
    1000089: "🔥 Firespitter",
    1000097: "🎨 Crafting Station",
    1000098: "🪵 Logger",
    1000099: "🎯 Longshot",
    1000100: "🔨 Smasher",
    1000101: "🪵 Logger",
    1000102: "🎯 Longshot",
    1000103: "🔨 Smasher",
    28000007: "🪵 Logger",
    28000008: "🎯 Longshot",
    28000009: "🔨 Smasher",
    80000000: "🪵 Logger",
    80000001: "🎯 Longshot",
    80000002: "🔨 Smasher",

    // Builder Base Buildings & Defenses (Accurate game CSV rows)
    1000034: "🏛️ Builder Hall",
    1000035: "🧪 Builder Elixir Collector",
    1000036: "🧪 Builder Elixir Storage",
    1000037: "🪙 Builder Gold Mine",
    1000038: "🪙 Builder Gold Storage",
    1000039: "⏰ Clock Tower",
    1000040: "⚔️ Builder Barracks",
    1000041: "💣 Double Cannon",
    1000042: "⛺ Builder Army Camp",
    1000043: "⚡ Hidden Tesla (BB)",
    1000044: "💣 Cannon (BB)",
    1000045: "💣 Multi Mortar",
    1000046: "🔬 Star Laboratory",
    1000047: "🔨 Master Builder Hut",
    1000048: "🏹 Archer Tower (BB)",
    1000049: "⛺ Reinforcement Camp",
    1000050: "🚀 Firecrackers",
    1000051: "🪨 Guard Post",
    1000052: "⚡ Mega Tesla",
    1000053: "🤖 Battle Machine",
    1000054: "🎈 Air Bombs (BB)",
    1000055: "🔨 Crusher",
    1000056: "🔥 Roaster",
    1000057: "💣 Giant Cannon",
    1000058: "💎 Gem Mine",
    1000063: "🌋 Lava Launcher",
    1000078: "🏛️ O.T.T.O's Outpost",
    1000080: "🚁 Battle Copter",
    1000081: "🏹 X-Bow (BB)",
    1000093: "👷 Builder's Apprentice",

    // Traps (Home Village)
    12000000: "💣 Bomb",
    12000001: "🌀 Spring Trap",
    12000002: "💣 Giant Bomb",
    12000005: "🎈 Air Bomb",
    12000006: "🚀 Seeking Air Mine",
    12000008: "💀 Skeleton Trap",
    12000016: "🌪️ Tornado Trap",
    12000020: "💥 Giga Bomb",

    // Heroes (Home Village & Builder Base)
    28000000: "👑 Barbarian King",
    28000001: "🏹 Archer Queen",
    28000002: "🧙‍♂️ Grand Warden",
    28000003: "🤖 Battle Machine",
    28000004: "🛡️ Royal Champion",
    28000005: "🚁 Battle Copter",
    28000006: "🐉 Minion Prince",

    // Pets (Pet House)
    73000000: "🐶 L.A.S.S.I",
    73000001: "🦉 Electro Owl",
    73000002: "🦬 Mighty Yak",
    73000003: "🦄 Unicorn",
    73000004: "🦅 Phoenix",
    73000007: "🦎 Poison Lizard",
    73000008: "🦔 Diggy",
    73000009: "❄️ Frosty",
    73000010: "🦊 Spirit Fox",
    73000011: "🪼 Angry Jelly",
    73000016: "🦨 Sneezy",

    // Laboratory: Troops
    4000000: "⚔️ Barbarian",
    4000001: "🏹 Archer",
    4000002: "💰 Goblin",
    4000003: "🥊 Giant",
    4000004: "💣 Wall Breaker",
    4000005: "🎈 Balloon",
    4000006: "🧙 Wizard",
    4000007: "👼 Healer",
    4000008: "🐲 Dragon",
    4000009: "🤖 P.E.K.K.A",
    4000010: "🦇 Minion",
    4000011: "🐗 Hog Rider",
    4000012: "🪓 Valkyrie",
    4000013: "🗿 Golem",
    4000014: "🧙‍♀️ Witch",
    4000015: "🧙‍♀️ Witch",
    4000017: "🌋 Lava Hound",
    4000022: "🎳 Bowler",
    4000023: "👶 Baby Dragon",
    4000024: "⛏️ Miner",
    4000053: "❄️ Yeti",
    4000058: "❄️ Ice Golem",
    4000059: "⚡ Electro Dragon",
    4000065: "🐉 Dragon Rider",
    4000082: "🎯 Headhunter",
    4000095: "🥊 Electro Titan",
    4000097: "🧙‍♂️ Apprentice Warden",
    4000110: "🌱 Root Rider",
    4000123: "🌿 Druid",
    4000132: "☄️ Thrower",
    4000150: "🔥 Furnace",

    // Laboratory: Siege Machines
    4000051: "🚜 Wall Wrecker",
    4000052: "🎈 Battle Blimp",
    4000062: "🗿 Stone Slammer",
    4000075: "⛺ Siege Barracks",
    4000087: "🪵 Log Launcher",
    4000091: "🔥 Flame Flinger",
    4000092: "🔩 Battle Drill",
    4000135: "🚀 Troop Launcher",

    // Laboratory: Spells
    26000000: "⚡ Lightning Spell",
    26000001: "💛 Healing Spell",
    26000002: "🔥 Rage Spell",
    26000003: "💨 Jump Spell",
    26000005: "❄️ Freeze Spell",
    26000009: "🧪 Poison Spell",
    26000010: "🌍 Earthquake Spell",
    26000011: "💨 Haste Spell",
    26000016: "👥 Clone Spell",
    26000017: "💀 Skeleton Spell",
    26000028: "🦇 Bat Spell",
    26000035: "👻 Invisibility Spell",
    26000053: "🔄 Recall Spell",
    26000070: "🌿 Overgrowth Spell",
    26000098: "✨ Revive Spell",
    26000109: "🧊 Ice Block Spell"
};

// Preset Durations
const BUILDER_PRESETS = [
    { label: '10 hrs', d: 0, h: 10, m: 0 },
    { label: '11h 23m', d: 0, h: 11, m: 23 },
    { label: '1 Day (24h)', d: 1, h: 0, m: 0 },
    { label: '1d 14h', d: 1, h: 14, m: 0 },
    { label: '2d 16h', d: 2, h: 16, m: 0 },
    { label: '5 Days', d: 5, h: 0, m: 0 }
];

const LAB_PRESETS = [
    { label: '12 hrs', d: 0, h: 12, m: 0 },
    { label: '1 Day (24h)', d: 1, h: 0, m: 0 },
    { label: '2 Days', d: 2, h: 0, m: 0 },
    { label: '4 Days', d: 4, h: 0, m: 0 },
    { label: '7 Days', d: 7, h: 0, m: 0 },
    { label: '10 Days', d: 10, h: 0, m: 0 },
    { label: '14 Days', d: 14, h: 0, m: 0 }
];

// State
let currentMode = 'builder'; // 'builder' | 'lab'
let currentSavedFilter = 'all'; // 'all' | 'builder' | 'lab' | 'pet' | 'builder_base'
let selectedPotions = 1;
let savedUpgrades = [];
let villageProfile = null;
let alarmEnabled = true;

// Multi-Account Management State
let accounts = [];
let activeAccountId = null;
const ACCOUNTS_STORAGE_KEY = 'COC_MULTI_ACCOUNTS_DATA';
const ACTIVE_ACCOUNT_KEY = 'COC_ACTIVE_ACCOUNT_ID';
const STORAGE_KEY = 'COC_CALCULATOR_SAVED_TIMERS';
const PROFILE_STORAGE_KEY = 'COC_VILLAGE_PROFILE';
const ALARM_STORAGE_KEY = 'COC_ALARM_ENABLED';

// DOM Elements
const tabBuilder = document.getElementById('tabBuilder');
const tabLab = document.getElementById('tabLab');
const startTimeInput = document.getElementById('startTimeInput');
const setNowBtn = document.getElementById('setNowBtn');
const durDays = document.getElementById('durDays');
const durHours = document.getElementById('durHours');
const durMins = document.getElementById('durMins');
const quickPresetsContainer = document.getElementById('quickPresetsContainer');
const potionStepTitle = document.getElementById('potionStepTitle');
const potionSelectorRow = document.getElementById('potionSelectorRow');
const potionInfoNote = document.getElementById('potionInfoNote');
const goldPassLabel = document.getElementById('goldPassLabel');
const goldPassSelect = document.getElementById('goldPassSelect');
const customPotions = document.getElementById('customPotions');
const resultTitle = document.getElementById('resultTitle');
const finishTimeLarge = document.getElementById('finishTimeLarge');
const finishDateSub = document.getElementById('finishDateSub');
const actualRealTime = document.getElementById('actualRealTime');
const timeSavedLabel = document.getElementById('timeSavedLabel');
const timeSavedVal = document.getElementById('timeSavedVal');
const currentStatusVal = document.getElementById('currentStatusVal');
const saveToHistoryBtn = document.getElementById('saveToHistoryBtn');
const savedListContainer = document.getElementById('savedListContainer');
const savedCount = document.getElementById('savedCount');
const filterAllCount = document.getElementById('filterAllCount');
const filterBuilderCount = document.getElementById('filterBuilderCount');
const filterLabCount = document.getElementById('filterLabCount');
const filterPetCount = document.getElementById('filterPetCount');
const filterBBCount = document.getElementById('filterBBCount');
const clearSavedBtn = document.getElementById('clearSavedBtn');

// Alarm Elements
const alarmToggleBtn = document.getElementById('alarmToggleBtn');
const testAlarmBtn = document.getElementById('testAlarmBtn');

// Village Profile Elements
const villageProfileBar = document.getElementById('villageProfileBar');
const villageThBadge = document.getElementById('villageThBadge');
const villagePlayerName = document.getElementById('villagePlayerName');
const villagePlayerTag = document.getElementById('villagePlayerTag');
const villageBuildersStatus = document.getElementById('villageBuildersStatus');
const villageLabStatus = document.getElementById('villageLabStatus');

// Multi-Account Elements
const accountsTabsRow = document.getElementById('accountsTabsRow');
const accountsCount = document.getElementById('accountsCount');

// JSON Modal Elements
const openImportJsonBtn = document.getElementById('openImportJsonBtn');
const quickImportBtn = document.getElementById('quickImportBtn');
const jsonModalOverlay = document.getElementById('jsonModalOverlay');
const closeJsonModalBtn = document.getElementById('closeJsonModalBtn');
const jsonInputTextarea = document.getElementById('jsonInputTextarea');
const parseJsonBtn = document.getElementById('parseJsonBtn');
const jsonTargetAccountSelect = document.getElementById('jsonTargetAccountSelect');
const jsonAccountNameInput = document.getElementById('jsonAccountNameInput');

// Initialize
function init() {
    loadAlarmSetting();
    loadAccountsFromStorage();
    setupEventListeners();
    updateAlarmUI();
    renderAccountsNav();
    renderVillageProfileUI();
    updatePotionCountdownTick();
    renderSavedList();

    // Check finished upgrade alarms every 4 seconds across all accounts
    setInterval(() => {
        checkUpgradeAlarms();
    }, 4000);

    // Live active potion countdown tick every second
    setInterval(() => {
        updatePotionCountdownTick();
    }, 1000);

    // Auto-refresh countdown every 10s
    setInterval(() => {
        renderSavedList(false);
    }, 10000);
}

// Mode Switcher: Builder vs Laboratory
window.switchMode = function(mode) {
    if (currentMode === mode) return;
    currentMode = mode;
    updateModeUI();
    renderPresets();
    calculateFinishTime();
};

function updateModeUI() {
    if (tabBuilder) {
        tabBuilder.className = 'mode-tab' + (currentMode === 'builder' ? ' active-builder' : '');
    }
    if (tabLab) {
        tabLab.className = 'mode-tab' + (currentMode === 'lab' ? ' active-lab' : '');
    }

    if (currentMode === 'builder') {
        if (potionStepTitle) potionStepTitle.textContent = "How many Builder Potions will you use?";
        if (potionInfoNote) {
            potionInfoNote.className = "potion-info-note";
            potionInfoNote.innerHTML = '<span>⚡ <strong>1 Builder Potion</strong> speeds up building by <strong>10x for 1 hour</strong> (completes 10h of work, saving 9 hours).</span>';
        }
        if (goldPassLabel) goldPassLabel.textContent = "🎖️ Gold Pass Builder Boost (Optional):";
        if (resultTitle) resultTitle.textContent = "🎯 EXACT BUILDER FINISH TIME:";
        if (timeSavedLabel) timeSavedLabel.textContent = "Time Saved by Builder Potion:";
    } else {
        if (potionStepTitle) potionStepTitle.textContent = "How many Research Potions will you use?";
        if (potionInfoNote) {
            potionInfoNote.className = "potion-info-note lab-mode";
            potionInfoNote.innerHTML = '<span>⚗️ <strong>1 Research Potion</strong> speeds up research by <strong>24x for 1 hour</strong> (completes 24h of progress in 1h, saving 23 hours!).</span>';
        }
        if (goldPassLabel) goldPassLabel.textContent = "🎖️ Gold Pass Research Boost (Optional):";
        if (resultTitle) resultTitle.textContent = "🎯 EXACT RESEARCH FINISH TIME:";
        if (timeSavedLabel) timeSavedLabel.textContent = "Time Saved by Research Potion:";
    }

    updatePotionButtons();
}

function updatePotionButtons() {
    const potionBtns = document.querySelectorAll('.potion-count-btn');
    potionBtns.forEach(btn => {
        const count = parseInt(btn.dataset.potions, 10);
        if (count === 0) {
            btn.textContent = "0 Potions";
        } else {
            const icon = (currentMode === 'lab') ? '⚗️' : '🧪';
            btn.textContent = `${icon} ${count} Potion${count > 1 ? 's' : ''}`;
        }
    });
}

// Alarm System: Audio Synthesizer (Web Audio API)
let audioCtxInstance = null;
function getAudioContext() {
    if (!audioCtxInstance) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) audioCtxInstance = new AudioCtx();
    }
    if (audioCtxInstance && audioCtxInstance.state === 'suspended') {
        audioCtxInstance.resume();
    }
    return audioCtxInstance;
}

function playAlarmSound() {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        // Victory fanfare / alarm chime notes (C5, E5, G5, C6)
        const notes = [
            { freq: 523.25, time: 0, dur: 0.14 },
            { freq: 659.25, time: 0.14, dur: 0.14 },
            { freq: 783.99, time: 0.28, dur: 0.18 },
            { freq: 1046.50, time: 0.46, dur: 0.50 }
        ];

        [0, 0.75].forEach(delay => {
            notes.forEach(n => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();

                osc.type = 'triangle'; // Warm chime harmonic
                osc.frequency.setValueAtTime(n.freq, ctx.currentTime + delay + n.time);

                gain.gain.setValueAtTime(0, ctx.currentTime + delay + n.time);
                gain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + delay + n.time + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + n.time + n.dur);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start(ctx.currentTime + delay + n.time);
                osc.stop(ctx.currentTime + delay + n.time + n.dur);
            });
        });
    } catch (e) {
        console.error("Audio playback error:", e);
    }
}

function showDesktopNotification(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
        try {
            new Notification(title, {
                body: body,
                icon: 'favicon-32x32.png',
                tag: 'coc-upgrade-alarm'
            });
        } catch (e) {}
    }
}

window.toggleAlarm = function() {
    alarmEnabled = !alarmEnabled;
    saveAlarmSetting();
    updateAlarmUI();

    if (alarmEnabled) {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
        showToast("🔔 Completion Alarm turned ON! You'll be alerted when upgrades finish.");
    } else {
        showToast("🔕 Alarm turned OFF (Muted).");
    }
};

window.testAlarm = function() {
    playAlarmSound();
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
    showDesktopNotification("🔔 Upgrade Complete! (Test)", "Your Clash of Clans upgrade alarm is working perfectly!");
    showToast("🎵 Playing alarm chime... Ding-Ding-Ding-DIIING! 🔔");
};

function loadAlarmSetting() {
    const saved = localStorage.getItem(ALARM_STORAGE_KEY);
    if (saved !== null) {
        alarmEnabled = saved === 'true';
    } else {
        alarmEnabled = true;
    }
}

function saveAlarmSetting() {
    localStorage.setItem(ALARM_STORAGE_KEY, alarmEnabled.toString());
}

function updateAlarmUI() {
    if (!alarmToggleBtn) return;
    if (alarmEnabled) {
        alarmToggleBtn.className = 'btn btn-alarm';
        alarmToggleBtn.innerHTML = '🔔 Alarm: ON';
        alarmToggleBtn.title = 'Alarm is ACTIVE. You will hear an alert chime & see a notification when an upgrade finishes.';
    } else {
        alarmToggleBtn.className = 'btn btn-alarm disabled';
        alarmToggleBtn.innerHTML = '🔕 Alarm: OFF';
        alarmToggleBtn.title = 'Alarm is MUTED. Click to turn ON.';
    }
}

/**
 * Compute real-world minutes taken with potions
 */
function computeRealMinutesWithPotions(totalUpgradeMinutes, potionCount, type = 'builder') {
    if (totalUpgradeMinutes <= 0) return 0;
    let realTimeMinutesTaken = 0;
    let upgradeMinutesRemaining = totalUpgradeMinutes;

    const speedMultiplier = (type === 'lab' || type === 'pet') ? 24 : 10;
    const progressPerPotion = 60 * speedMultiplier;

    for (let i = 0; i < potionCount; i++) {
        if (upgradeMinutesRemaining <= 0) break;
        if (upgradeMinutesRemaining <= progressPerPotion) {
            realTimeMinutesTaken += upgradeMinutesRemaining / speedMultiplier;
            upgradeMinutesRemaining = 0;
            break;
        } else {
            upgradeMinutesRemaining -= progressPerPotion;
            realTimeMinutesTaken += 60;
        }
    }

    if (upgradeMinutesRemaining > 0) {
        realTimeMinutesTaken += upgradeMinutesRemaining;
    }

    return realTimeMinutesTaken;
}

/**
 * Calculate the exact finish timestamp in milliseconds for any upgrade item
 * Correctly accounts for active Village Potion Boosts (10x for builders, 24x for lab, 24x for pets)
 */
function getUpgradeFinishMs(item, now = Date.now(), specificAcc = null) {
    if (!item) return now;
    const itemCat = item.category || (item.type === 'lab' ? 'lab' : 'builder');
    const isLab = (itemCat === 'lab' || item.type === 'lab') && itemCat !== 'pet';
    const isPet = itemCat === 'pet';
    const isBuilder = (itemCat === 'builder' || item.type === 'builder');
    const baseMins = item.baseMinutes || 0;
    const startMs = item.startMs || now;

    // Check active village-wide boost on target account (NEVER bleed into another account)
    const acc = specificAcc || getActiveAccount();
    const activeBoosts = acc ? (acc.activeBoosts || {}) : {};
    let boostStartMs = null;
    let boostEndMs = null;
    let speedMult = 1;

    if (isBuilder && activeBoosts.builderPotionEndMs && activeBoosts.builderPotionEndMs > startMs) {
        boostStartMs = activeBoosts.builderPotionStartMs || (activeBoosts.builderPotionEndMs - 3600000);
        boostEndMs = activeBoosts.builderPotionEndMs;
        speedMult = 10;
    } else if (isLab && activeBoosts.labPotionEndMs && activeBoosts.labPotionEndMs > startMs) {
        boostStartMs = activeBoosts.labPotionStartMs || (activeBoosts.labPotionEndMs - 3600000);
        boostEndMs = activeBoosts.labPotionEndMs;
        speedMult = 24;
    } else if (isPet && activeBoosts.petPotionEndMs && activeBoosts.petPotionEndMs > startMs) {
        boostStartMs = activeBoosts.petPotionStartMs || (activeBoosts.petPotionEndMs - 3600000);
        boostEndMs = activeBoosts.petPotionEndMs;
        speedMult = 24;
    }

    if (boostEndMs && speedMult > 1) {
        const b1 = Math.max(startMs, boostStartMs);
        const b2 = boostEndMs;
        if (b2 > b1) {
            // Phase 1: before boost starts
            const p1RealMins = Math.max(0, (b1 - startMs) / 60000);
            if (baseMins <= p1RealMins) {
                return startMs + Math.round(baseMins * 60000);
            }

            // Phase 2: during boost
            const remWork2 = baseMins - p1RealMins;
            const p2RealMins = (b2 - b1) / 60000;
            const maxWork2 = p2RealMins * speedMult;
            if (remWork2 <= maxWork2) {
                const p2Taken = remWork2 / speedMult;
                return b1 + Math.round(p2Taken * 60000);
            }

            // Phase 3: after boost ends (continues at normal 1x speed)
            const remWork3 = remWork2 - maxWork2;
            return b2 + Math.round(remWork3 * 60000);
        }
    }

    // Individual item potion simulation (fallback for manual calculator)
    const potions = item.potions || 0;
    if (potions > 0) {
        const potionTime = (item.potionAppliedMs && item.potionAppliedMs > startMs) ? item.potionAppliedMs : startMs;
        const elapsedBeforePotionMins = Math.max(0, (potionTime - startMs) / (60 * 1000));
        const workRemainingAtPotion = Math.max(0, baseMins - elapsedBeforePotionMins);
        const realMinutesFromPotion = computeRealMinutesWithPotions(workRemainingAtPotion, potions, (isLab || isPet) ? 'lab' : 'builder');
        return potionTime + Math.round(realMinutesFromPotion * 60 * 1000);
    }

    return startMs + Math.round(baseMins * 60 * 1000);
}

/**
 * Calculate the remaining in-game work in minutes for an item at a specific target time
 */
function getUpgradeRemainingWorkMinutes(item, targetMs = Date.now(), specificAcc = null) {
    if (!item) return 0;
    const baseMins = item.baseMinutes || 0;
    const startMs = item.startMs || targetMs;
    if (targetMs <= startMs) return baseMins;

    const itemCat = item.category || (item.type === 'lab' ? 'lab' : 'builder');
    const isLab = (itemCat === 'lab' || item.type === 'lab') && itemCat !== 'pet';
    const isPet = itemCat === 'pet';
    const isBuilder = (itemCat === 'builder' || item.type === 'builder');

    const acc = specificAcc || getActiveAccount();
    const activeBoosts = acc ? (acc.activeBoosts || {}) : {};
    let boostStartMs = null;
    let boostEndMs = null;
    let speedMult = 1;

    if (isBuilder && activeBoosts.builderPotionEndMs && activeBoosts.builderPotionEndMs > startMs) {
        boostStartMs = activeBoosts.builderPotionStartMs || (activeBoosts.builderPotionEndMs - 3600000);
        boostEndMs = activeBoosts.builderPotionEndMs;
        speedMult = 10;
    } else if (isLab && activeBoosts.labPotionEndMs && activeBoosts.labPotionEndMs > startMs) {
        boostStartMs = activeBoosts.labPotionStartMs || (activeBoosts.labPotionEndMs - 3600000);
        boostEndMs = activeBoosts.labPotionEndMs;
        speedMult = 24;
    } else if (isPet && activeBoosts.petPotionEndMs && activeBoosts.petPotionEndMs > startMs) {
        boostStartMs = activeBoosts.petPotionStartMs || (activeBoosts.petPotionEndMs - 3600000);
        boostEndMs = activeBoosts.petPotionEndMs;
        speedMult = 24;
    }

    let workDone = 0;
    if (boostEndMs && speedMult > 1) {
        const b1 = Math.max(startMs, boostStartMs);
        const b2 = boostEndMs;
        
        // Interval 1: before boost @ 1x
        if (targetMs > startMs && b1 > startMs) {
            const int1End = Math.min(targetMs, b1);
            workDone += Math.max(0, (int1End - startMs) / 60000);
        }
        
        // Interval 2: during boost @ speedMult
        if (targetMs > b1 && b2 > b1) {
            const int2Start = Math.max(startMs, b1);
            const int2End = Math.min(targetMs, b2);
            if (int2End > int2Start) {
                workDone += Math.max(0, (int2End - int2Start) / 60000) * speedMult;
            }
        }
        
        // Interval 3: after boost @ 1x
        if (targetMs > b2) {
            const int3Start = Math.max(startMs, b2);
            if (targetMs > int3Start) {
                workDone += Math.max(0, (targetMs - int3Start) / 60000);
            }
        }
    } else {
        workDone = (targetMs - startMs) / 60000;
    }

    return Math.max(0, Math.round(baseMins - workDone));
}

/**
 * Advance all active upgrades to now so past boosted progress is never lost when changing boosts
 */
function advanceUpgradesToNow(acc, now = Date.now()) {
    if (!acc || !acc.upgrades) return;
    acc.upgrades.forEach(u => {
        const remWork = getUpgradeRemainingWorkMinutes(u, now, acc);
        u.baseMinutes = remWork;
        u.startMs = now;
    });
}

function formatRemainingSeconds(totalSecs) {
    if (totalSecs <= 0) return "0s";
    const d = Math.floor(totalSecs / 86400);
    const h = Math.floor((totalSecs % 86400) / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = Math.floor(totalSecs % 60);

    if (d > 0) return `${d}d ${h}h ${m}m ${s}s`;
    if (h > 0) return `${h}h ${m}m ${s}s`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
}

function formatMinsToDh(totalMins, includeSecs = false) {
    if (totalMins <= 0) return includeSecs ? "0s" : "0m";
    if (includeSecs) {
        const totalSecs = Math.max(0, Math.round(totalMins * 60));
        return formatRemainingSeconds(totalSecs);
    }
    const d = Math.floor(totalMins / 1440);
    const h = Math.floor((totalMins % 1440) / 60);
    const m = Math.floor(totalMins % 60);
    if (d > 0) return `${d}d ${h}h`;
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m`;
}

function parseDurationStringToMinutes(str) {
    if (!str) return 0;
    let days = 0, hours = 0, mins = 0, secs = 0;
    const dMatch = str.match(/(\d+)\s*d/i);
    const hMatch = str.match(/(\d+)\s*h/i);
    const mMatch = str.match(/(\d+)\s*m/i);
    const sMatch = str.match(/(\d+)\s*s/i);
    if (dMatch) days = parseInt(dMatch[1], 10) || 0;
    if (hMatch) hours = parseInt(hMatch[1], 10) || 0;
    if (mMatch) mins = parseInt(mMatch[1], 10) || 0;
    if (sMatch) secs = parseInt(sMatch[1], 10) || 0;
    if (!dMatch && !hMatch && !mMatch && !sMatch) {
        if (str.includes(':')) {
            const parts = str.split(':').map(p => parseInt(p.trim(), 10) || 0);
            if (parts.length === 2) {
                hours = parts[0];
                mins = parts[1];
            } else if (parts.length === 3) {
                hours = parts[0];
                mins = parts[1];
                secs = parts[2];
            } else if (parts.length === 4) {
                days = parts[0];
                hours = parts[1];
                mins = parts[2];
                secs = parts[3];
            }
        } else {
            const num = parseInt(str, 10);
            if (!isNaN(num)) hours = num;
        }
    }
    return (days * 24 + hours) * 60 + mins + (secs / 60);
}

window.editUpgradeTime = function(id) {
    const acc = getActiveAccount();
    if (!acc || !acc.upgrades) return;
    const item = acc.upgrades.find(u => u.id === id);
    if (!item) return;

    const now = Date.now();
    const currentWorkMins = getUpgradeRemainingWorkMinutes(item, now, acc);
    const totalSecs = Math.max(0, Math.round(currentWorkMins * 60));
    const defaultVal = formatRemainingSeconds(totalSecs);

    const input = prompt(
        `Enter remaining in-game work for "${item.name}" (matching your Clash of Clans sidebar):\nExamples: "18h 59m 30s", "1d 9h 15m", "45m 10s"`,
        defaultVal
    );
    if (!input || !input.trim()) return;

    const parsedMins = parseDurationStringToMinutes(input.trim());
    if (parsedMins <= 0) {
        alert("Invalid duration. Please enter format like '18h 59m 30s' or '1d 9h'.");
        return;
    }

    item.baseMinutes = parsedMins;
    item.startMs = now;
    item.alarmFired = false;
    saveStorage();
    renderSavedList(false);
    showToast(`⏱️ Updated "${item.name}" to ${input.trim()} in-game work!`);
};

window.applyApprenticeBoost = function(id) {
    const acc = getActiveAccount();
    if (!acc || !acc.upgrades) return;
    const item = acc.upgrades.find(u => u.id === id);
    if (!item) return;

    const hoursStr = prompt(
        `👷 Apply Builder's Apprentice boost to "${item.name}":\n\nEnter hours shaved off by your Apprentice (e.g. 1 to 8 hours depending on your Apprentice level):`,
        "4"
    );
    if (!hoursStr || !hoursStr.trim()) return;

    const hours = parseFloat(hoursStr.trim());
    if (isNaN(hours) || hours <= 0) {
        alert("Please enter a valid number of hours (e.g. 4 or 6).");
        return;
    }

    const now = Date.now();
    const currentWorkMins = getUpgradeRemainingWorkMinutes(item, now, acc);
    const newWorkMins = Math.max(0, currentWorkMins - Math.round(hours * 60));

    item.baseMinutes = newWorkMins;
    item.startMs = now;
    item.alarmFired = false;
    saveStorage();
    renderSavedList(false);
    showToast(`👷 Applied Apprentice boost (-${hours}h) to "${item.name}"!`);
};

// Periodic alarm watcher across ALL user accounts
function checkUpgradeAlarms() {
    if (!accounts || accounts.length === 0) return;

    const now = Date.now();
    let firedAny = false;

    accounts.forEach(acc => {
        (acc.upgrades || []).forEach(item => {
            // Pass specific account so potion boosts never cross-bleed between villages!
            const finishMs = getUpgradeFinishMs(item, now, acc);

            if (now >= finishMs) {
                if (!item.alarmFired) {
                    item.alarmFired = true;
                    firedAny = true;

                    if (alarmEnabled) {
                        showUpgradeAlarmNotification(acc, item);
                    }
                }
            }
        });
    });

    if (firedAny) {
        saveStorage();
        renderAccountsNav();
        renderSavedList(false);
    }
}

// Rich Cross-Account Alarm Notification with Direct Switch Action
function showUpgradeAlarmNotification(acc, item) {
    const accName = acc.name || 'Account';
    const accId = acc.id;

    // 1. Audio Alarm Siren
    playAlarmSound();

    // 2. Desktop Notification (works even if browser is minimized)
    showDesktopNotification(`🎉 UPGRADE DONE: [${accName}]`, `${item.name} has finished! Tap to view.`);

    // 3. Rich In-App Alarm Toast with Direct Switch Button
    let container = document.getElementById('cocAlarmToastsContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'cocAlarmToastsContainer';
        container.className = 'coc-alarm-toasts-container';
        document.body.appendChild(container);
    }

    const toastCard = document.createElement('div');
    toastCard.className = 'coc-alarm-toast-card';
    toastCard.innerHTML = `
        <div class="alarm-toast-icon">🔔</div>
        <div class="alarm-toast-content">
            <div class="alarm-toast-badge">🎉 UPGRADE COMPLETED</div>
            <div class="alarm-toast-title">Village: <strong>[${escapeHTML(accName)}]</strong></div>
            <div class="alarm-toast-item">${escapeHTML(item.name)} is finished!</div>
        </div>
        <div class="alarm-toast-actions">
            <button type="button" class="btn btn-sm btn-coc-green alarm-switch-btn" onclick="switchAccountAndDismiss('${accId}', this)">
                👉 Switch to ${escapeHTML(accName)}
            </button>
            <button type="button" class="alarm-toast-close" onclick="this.closest('.coc-alarm-toast-card').remove()">✕</button>
        </div>
    `;

    container.appendChild(toastCard);

    // Auto dismiss after 15 seconds
    setTimeout(() => {
        if (toastCard && toastCard.parentNode) {
            toastCard.classList.add('fade-out');
            setTimeout(() => toastCard.remove(), 400);
        }
    }, 15000);
}

window.switchAccountAndDismiss = function(accId, btnEl) {
    if (btnEl && btnEl.closest('.coc-alarm-toast-card')) {
        btnEl.closest('.coc-alarm-toast-card').remove();
    }
    switchAccount(accId);
};

// Render dynamic duration presets
function renderPresets() {
    if (!quickPresetsContainer) return;
    const presets = (currentMode === 'lab') ? LAB_PRESETS : BUILDER_PRESETS;
    quickPresetsContainer.innerHTML = `<span class="preset-label">Quick select:</span>`;

    presets.forEach(p => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'preset-btn';
        btn.dataset.d = p.d;
        btn.dataset.h = p.h;
        btn.dataset.m = p.m;
        btn.textContent = p.label;
        btn.addEventListener('click', () => {
            durDays.value = p.d;
            durHours.value = p.h;
            durMins.value = p.m;
            calculateFinishTime();
        });
        quickPresetsContainer.appendChild(btn);
    });
}

// Set Start Time to current local time
function setStartTimeToNow() {
    if (!startTimeInput) return;
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    startTimeInput.value = `${year}-${month}-${day}T${hours}:${mins}`;
}

// Event Listeners
function setupEventListeners() {
    if (setNowBtn) {
        setNowBtn.addEventListener('click', () => {
            setStartTimeToNow();
            calculateFinishTime();
        });
    }

    [startTimeInput, durDays, durHours, durMins, goldPassSelect].forEach(el => {
        if (el) el.addEventListener('input', calculateFinishTime);
    });

    const potionBtns = document.querySelectorAll('.potion-count-btn');
    potionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            potionBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedPotions = parseInt(btn.dataset.potions, 10);
            if (customPotions) customPotions.value = '';
            calculateFinishTime();
        });
    });

    if (customPotions) {
        customPotions.addEventListener('input', () => {
            const val = parseInt(customPotions.value, 10);
            if (!isNaN(val) && val >= 0) {
                potionBtns.forEach(b => b.classList.remove('active'));
                selectedPotions = val;
                calculateFinishTime();
            }
        });
    }

    if (saveToHistoryBtn) saveToHistoryBtn.addEventListener('click', saveCurrentCalculation);

    if (clearSavedBtn) {
        clearSavedBtn.addEventListener('click', () => {
            const acc = getActiveAccount();
            const accName = acc ? acc.name : "this account";
            if (confirm(`Clear all saved ongoing upgrades for "${accName}"?`)) {
                savedUpgrades = [];
                villageProfile = null;
                if (acc) {
                    acc.upgrades = [];
                    acc.profile = null;
                }
                saveStorage();
                renderAccountsNav();
                renderSavedList();
                renderVillageProfileUI();
                showToast(`Cleared active timers for "${accName}".`);
            }
        });
    }

    // Modal Triggers
    if (openImportJsonBtn) openImportJsonBtn.onclick = openJsonModal;
    if (quickImportBtn) quickImportBtn.onclick = openJsonModal;
    if (closeJsonModalBtn) closeJsonModalBtn.onclick = closeJsonModal;
    if (jsonModalOverlay) {
        jsonModalOverlay.onclick = (e) => {
            if (e.target === jsonModalOverlay) closeJsonModal();
        };
    }

    const manualModal = document.getElementById('manualTimerModalOverlay');
    if (manualModal) {
        manualModal.onclick = (e) => {
            if (e.target === manualModal) closeManualTimerModal();
        };
    }

    if (parseJsonBtn) {
        parseJsonBtn.onclick = handleParseVillageJson;
    }
}

window.openManualTimerModal = function() {
    const modal = document.getElementById('manualTimerModalOverlay');
    if (modal) modal.classList.remove('hidden');
    const nameInput = document.getElementById('manualNameInput');
    if (nameInput) {
        nameInput.value = '';
        nameInput.focus();
    }
};

window.closeManualTimerModal = function() {
    const modal = document.getElementById('manualTimerModalOverlay');
    if (modal) modal.classList.add('hidden');
};

window.saveManualModalTimer = function() {
    const nameInput = document.getElementById('manualNameInput');
    const catSelect = document.getElementById('manualCategorySelect');
    const dInput = document.getElementById('manualDays');
    const hInput = document.getElementById('manualHours');
    const mInput = document.getElementById('manualMins');

    const name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : "Custom Upgrade";
    const category = catSelect ? catSelect.value : "builder";
    const type = (category === 'lab') ? 'lab' : 'builder';

    const d = parseInt(dInput ? dInput.value : 0, 10) || 0;
    const h = parseInt(hInput ? hInput.value : 0, 10) || 0;
    const m = parseInt(mInput ? mInput.value : 0, 10) || 0;
    const totalMinutes = (d * 24 + h) * 60 + m;

    if (totalMinutes <= 0) {
        alert("Please enter a duration greater than 0 minutes!");
        return;
    }

    savedUpgrades.unshift({
        id: 'save_' + Date.now(),
        name: name,
        category: category,
        type: type,
        baseMinutes: totalMinutes,
        potions: 0,
        startMs: Date.now(),
        alarmFired: false
    });

    saveStorage();
    renderAccountsNav();
    renderVillageProfileUI();
    renderSavedList();
    closeManualTimerModal();
    showToast(`📌 Added "${name}" (${d}d ${h}h ${m}m) to ongoing upgrades!`);
};

function openJsonModal() {
    if (jsonModalOverlay) {
        jsonModalOverlay.classList.remove('hidden');
        populateJsonAccountDropdown();
        const acc = getActiveAccount();
        const nameInput = document.getElementById('jsonAccountNameInput');
        if (nameInput) {
            nameInput.value = (acc && !acc.name.startsWith("Chief (") && !acc.name.startsWith("Account ")) ? acc.name : '';
        }
        if (jsonInputTextarea) {
            jsonInputTextarea.focus();
        }
    }
}

function closeJsonModal() {
    if (jsonModalOverlay) jsonModalOverlay.classList.add('hidden');
}

// Calculate Finish Time
function calculateFinishTime() {
    if (!startTimeInput || !durDays || !durHours || !durMins) return;
    const startVal = startTimeInput.value;
    if (!startVal) return;
    const startDate = new Date(startVal);
    const startMs = startDate.getTime();

    const d = parseInt(durDays.value, 10) || 0;
    const h = parseInt(durHours.value, 10) || 0;
    const m = parseInt(durMins.value, 10) || 0;
    let totalUpgradeMinutes = (d * 24 + h) * 60 + m;

    if (totalUpgradeMinutes <= 0) {
        finishTimeLarge.textContent = "--:-- --";
        finishDateSub.textContent = "Please enter upgrade duration";
        actualRealTime.textContent = "--";
        timeSavedVal.textContent = "--";
        currentStatusVal.textContent = "--";
        return;
    }

    const boostPercent = parseFloat(goldPassSelect.value) / 100;
    if (boostPercent > 0) {
        totalUpgradeMinutes = totalUpgradeMinutes * (1 - boostPercent);
    }

    const realTimeMinutesTaken = computeRealMinutesWithPotions(totalUpgradeMinutes, selectedPotions, currentMode);
    const finishMs = startMs + Math.round(realTimeMinutesTaken * 60 * 1000);
    const finishDate = new Date(finishMs);

    const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
    finishTimeLarge.textContent = finishDate.toLocaleTimeString([], timeOptions);

    const now = new Date();
    const isToday = finishDate.toDateString() === now.toDateString();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const isTomorrow = finishDate.toDateString() === tomorrow.toDateString();

    let dayPrefix = finishDate.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
    if (isToday) dayPrefix = "Today (" + dayPrefix + ")";
    else if (isTomorrow) dayPrefix = "Tomorrow (" + dayPrefix + ")";
    finishDateSub.textContent = dayPrefix;

    const realH = Math.floor(realTimeMinutesTaken / 60);
    const realM = Math.round(realTimeMinutesTaken % 60);
    actualRealTime.textContent = `${realH} hr ${realM} min`;

    const timeSavedMins = totalUpgradeMinutes - realTimeMinutesTaken;
    if (timeSavedMins > 0) {
        const savedH = Math.floor(timeSavedMins / 60);
        const savedM = Math.round(timeSavedMins % 60);
        const speedText = currentMode === 'lab' ? '24x speed' : '10x speed';
        timeSavedVal.textContent = `${savedH} hrs ${savedM} min (${speedText})`;
    } else {
        timeSavedVal.textContent = "0 min (No Potions)";
    }

    const nowMs = Date.now();
    if (nowMs >= finishMs) {
        currentStatusVal.textContent = "Completed! 🎉";
        currentStatusVal.style.color = "var(--accent-green)";
    } else {
        const remMs = finishMs - nowMs;
        const remH = Math.floor(remMs / 3600000);
        const remM = Math.floor((remMs % 3600000) / 60000);
        currentStatusVal.textContent = `${remH}h ${remM}m remaining`;
        currentStatusVal.style.color = "#fff";
    }
}

// Robust Clash of Clans Village Data Parser with Multi-Account Destination
function handleParseVillageJson() {
    const inputEl = document.getElementById('jsonInputTextarea') || jsonInputTextarea;
    const raw = (inputEl && inputEl.value) ? inputEl.value.trim() : '';
    if (!raw) {
        alert("Please paste the JSON text copied from Clash of Clans!");
        return;
    }

    try {
        let cleanRaw = raw;
        if (cleanRaw.charCodeAt(0) === 0xFEFF) cleanRaw = cleanRaw.slice(1);
        
        const data = JSON.parse(cleanRaw);
        const extractedUpgrades = [];
        const nowMs = Date.now();

        // Target Account & Player Name
        const targetSelect = document.getElementById('jsonTargetAccountSelect');
        const targetChoice = targetSelect ? targetSelect.value : activeAccountId;
        const nameInput = document.getElementById('jsonAccountNameInput');
        const enteredName = nameInput ? nameInput.value.trim() : '';

        // 1. Extract Village Profile Info
        let profile = extractVillageProfile(data);
        if (enteredName) {
            if (profile) profile.name = enteredName;
            else profile = { name: enteredName, tag: data.tag || "#COC", th: 16 };
        }

        // Calculate time delta if export timestamp is present (handles seconds or milliseconds)
        let timestampDeltaSeconds = 0;
        let exportEpochSecs = null;
        if (typeof data.timestamp === 'number' && data.timestamp > 0) {
            exportEpochSecs = data.timestamp > 1e11 ? Math.floor(data.timestamp / 1000) : data.timestamp;
        } else if (typeof data.time === 'number' && data.time > 1e9) {
            exportEpochSecs = data.time > 1e11 ? Math.floor(data.time / 1000) : data.time;
        } else if (typeof data.export_time === 'number' && data.export_time > 0) {
            exportEpochSecs = data.export_time > 1e11 ? Math.floor(data.export_time / 1000) : data.export_time;
        }

        if (exportEpochSecs) {
            const currentEpochSecs = Math.floor(nowMs / 1000);
            if (currentEpochSecs > exportEpochSecs) {
                timestampDeltaSeconds = Math.min(86400 * 7, currentEpochSecs - exportEpochSecs);
            }
        }

        // Helper to extract timer from an object (supports all Supercell timer properties)
        function getTimerSeconds(obj, parentKey = '') {
            if (!obj || typeof obj !== 'object') return null;
            if (typeof obj.timer === 'number') return obj.timer;
            if (typeof obj.timer_s === 'number') return obj.timer_s;
            if (typeof obj.construction_time === 'number') return obj.construction_time;
            if (typeof obj.upgrade_time_left === 'number') return obj.upgrade_time_left;
            if (typeof obj.remaining === 'number') return obj.remaining;
            if (typeof obj.time_left === 'number') return obj.time_left;
            if (typeof obj.upgrade_time === 'number') return obj.upgrade_time;
            if (typeof obj.t === 'number') return obj.t;
            if (typeof obj.time === 'number') return obj.time;
            if (typeof obj.duration === 'number' && (obj.upgrading || obj.status === 'upgrading')) return obj.duration;
            return null;
        }

        const processedObjects = new Set();

        // Helper to process an item
        function processUpgradeItem(obj, parentKey, categoryHint) {
            if (!obj || typeof obj !== 'object' || processedObjects.has(obj)) return false;
            const rawTimer = getTimerSeconds(obj, parentKey);
            if (rawTimer === null || rawTimer <= 0) return false;

            const remainingSeconds = Math.max(1, rawTimer - timestampDeltaSeconds);
            // Preserve exact second precision from Supercell JSON as fractional minutes
            const totalMinutes = Math.max(1 / 60, remainingSeconds / 60);
            const { name, category, type } = identifySupercellObject(obj, parentKey, categoryHint);

            extractedUpgrades.push({
                id: 'imp_' + Math.random().toString(36).substring(2, 9),
                name: name,
                category: category, // 'builder' (home), 'lab', 'pet', 'builder_base'
                type: type,         // 'builder' or 'lab' for potion math
                baseMinutes: totalMinutes,
                potions: 0,
                startMs: nowMs,
                alarmFired: false
            });
            processedObjects.add(obj);
            return true;
        }

        // 1. Structured Known Lists parsing (including Guardians, Heroes, Crafting, Defenses)
        const knownLists = [
            { key: 'buildings', cat: 'builder' },
            { key: 'guardians', cat: 'builder' },
            { key: 'guardian', cat: 'builder' },
            { key: 'heroes', cat: 'builder' },
            { key: 'characters', cat: 'builder' },
            { key: 'defenses', cat: 'builder' },
            { key: 'traps', cat: 'builder' },
            { key: 'crafting', cat: 'builder' },
            { key: 'crafts', cat: 'builder' },
            { key: 'crafting_stations', cat: 'builder' },
            { key: 'units', cat: 'lab' },
            { key: 'spells', cat: 'lab' },
            { key: 'pets', cat: 'pet' },
            { key: 'buildings2', cat: 'builder_base' },
            { key: 'heroes2', cat: 'builder_base' },
            { key: 'units2', cat: 'builder_base' },
            { key: 'traps2', cat: 'builder_base' }
        ];

        knownLists.forEach(({ key, cat }) => {
            if (Array.isArray(data[key])) {
                data[key].forEach(item => {
                    if (item && typeof item === 'object') {
                        processUpgradeItem(item, key, cat);
                    }
                });
            } else if (data[key] && typeof data[key] === 'object') {
                processUpgradeItem(data[key], key, cat);
            }
        });

        // 2. Universal Deep Scan of ALL remaining arrays and nested objects in data
        // Guarantees that Town Hall Guardians (Logger, Longshot, Smasher) or any newly added defenses are never missed!
        function deepScanAll(curr, path = '', visited = new Set()) {
            if (!curr || typeof curr !== 'object' || visited.has(curr)) return;
            visited.add(curr);

            if (processedObjects.has(curr)) return;

            let cat = 'builder';
            const lowerPath = path.toLowerCase();
            if (lowerPath.includes('2') || lowerPath.includes('bb')) cat = 'builder_base';
            else if (lowerPath.includes('pet')) cat = 'pet';
            else if (lowerPath.includes('unit') || lowerPath.includes('spell') || lowerPath.includes('lab') || lowerPath.includes('research')) cat = 'lab';

            if (processUpgradeItem(curr, path, cat)) {
                return;
            }

            if (Array.isArray(curr)) {
                curr.forEach((item, idx) => deepScanAll(item, `${path}[${idx}]`, visited));
            } else {
                Object.keys(curr).forEach(k => {
                    deepScanAll(curr[k], path ? `${path}.${k}` : k, visited);
                });
            }
        }

        deepScanAll(data);

        if (extractedUpgrades.length === 0) {
            showToast("⚠️ No ongoing upgrade timers found in this JSON export!", true);
            return;
        }

        // Sort: Closest to finish time first (chronological order, top to bottom)
        extractedUpgrades.sort((a, b) => {
            return getUpgradeFinishMs(a, nowMs) - getUpgradeFinishMs(b, nowMs);
        });

        // Handle Player / Account Name
        let finalPlayerName = enteredName;
        if (!finalPlayerName) {
            const currentAcc = (targetChoice !== '__NEW__') ? accounts.find(a => a.id === targetChoice) : null;
            const currentAccName = currentAcc?.name || '';
            const isGeneric = !currentAccName || currentAccName.startsWith('Chief (') || currentAccName.startsWith('Account ');

            if (isGeneric) {
                const promptName = prompt(
                    `Supercell's JSON export only includes your tag (${profile?.tag || '#TAG'}), not your player name.\n\nEnter your in-game Player / Village Name:`,
                    ''
                );
                if (promptName && promptName.trim()) {
                    finalPlayerName = promptName.trim();
                }
            } else {
                finalPlayerName = currentAccName;
            }
        }

        if (finalPlayerName) {
            if (profile) profile.name = finalPlayerName;
        }

        // Save into target account
        if (targetChoice === '__NEW__') {
            const newAccId = 'acc_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
            const accName = finalPlayerName || (profile && !profile.name.startsWith('Chief (') ? profile.name : `Account ${accounts.length + 1}`);
            if (profile) profile.name = accName;

            const newAcc = {
                id: newAccId,
                name: accName,
                tag: profile?.tag || '#COC',
                th: profile?.th || 16,
                profile: profile,
                upgrades: extractedUpgrades
            };
            accounts.push(newAcc);
            activeAccountId = newAccId;
        } else {
            activeAccountId = targetChoice;
            const targetAcc = getActiveAccount();
            if (targetAcc) {
                if (finalPlayerName) {
                    targetAcc.name = finalPlayerName;
                    if (profile) profile.name = finalPlayerName;
                } else if (targetAcc.name && !targetAcc.name.startsWith("Chief (") && !targetAcc.name.startsWith("Account ")) {
                    if (profile) profile.name = targetAcc.name;
                } else if (profile && !profile.name.startsWith("Chief (")) {
                    targetAcc.name = profile.name;
                }
                targetAcc.upgrades = extractedUpgrades;
                targetAcc.profile = profile;
                if (profile?.tag) targetAcc.tag = profile.tag;
                if (profile?.th) targetAcc.th = profile.th;
            }
        }

        syncActiveAccountState();
        saveStorage();
        renderAccountsNav();
        renderVillageProfileUI();
        renderSavedList();
        closeJsonModal();

        const homeCount = savedUpgrades.filter(u => u.category === 'builder').length;
        const curAcc = getActiveAccount();
        showToast(`🎉 Loaded ${curAcc.name}! (${homeCount} Active Home Builders)`);
    } catch (err) {
        showToast("⚠️ Failed to parse JSON: " + err.message, true);
    }
}

// Extract Player / Village Profile
function extractVillageProfile(data) {
    if (!data || typeof data !== 'object') return null;

    let name = data.name || data.player_name || data.userName || data.village_name || data.nick || null;
    let tag = data.tag || data.playerTag || data.player_tag || null;
    let th = data.townHallLevel || data.th || data.townHall || null;

    if (!th && Array.isArray(data.buildings)) {
        const thObj = data.buildings.find(b => b.data === 1000001);
        if (thObj && thObj.lvl !== undefined) {
            th = thObj.lvl + 1;
        }
    }

    if (!name && tag) {
        name = `Chief (${tag})`;
    } else if (!name) {
        name = "My Village";
    }

    return {
        name: name,
        tag: tag || "#COC-BASE",
        th: th || 16
    };
}

// Multi-Account Switcher & Management Functions
window.switchAccount = function(accId) {
    if (activeAccountId === accId) return;
    activeAccountId = accId;
    localStorage.setItem(ACTIVE_ACCOUNT_KEY, activeAccountId);
    syncActiveAccountState();
    renderAccountsNav();
    renderVillageProfileUI();
    updatePotionCountdownTick();
    renderSavedList();
    const cur = getActiveAccount();
    showToast(`Switched to: ${cur ? cur.name : 'Account'}`);
};

window.createNewAccountPrompt = function() {
    const defaultName = `Account ${accounts.length + 1}`;
    const name = prompt("Enter a name for the new Clash of Clans account:", defaultName);
    if (!name || !name.trim()) return;

    const newAccId = 'acc_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
    const newAccount = {
        id: newAccId,
        name: name.trim(),
        tag: '#COC-TAG',
        th: 16,
        profile: {
            name: name.trim(),
            tag: '#COC-TAG',
            th: 16
        },
        upgrades: []
    };

    accounts.push(newAccount);
    activeAccountId = newAccId;
    syncActiveAccountState();
    saveStorage();
    renderAccountsNav();
    renderVillageProfileUI();
    renderSavedList();
    showToast(`✨ Created account "${name.trim()}"!`);
};

window.renameCurrentAccount = function() {
    const acc = getActiveAccount();
    if (!acc) return;
    const currentName = acc.name || (villageProfile ? villageProfile.name : "My Account");
    const initialInput = (currentName && !currentName.startsWith("Chief (") && !currentName.startsWith("Account ")) ? currentName : "";
    const newName = prompt(`Enter player name for account (${acc.tag || 'Village'}):`, initialInput);
    if (!newName || !newName.trim()) return;

    acc.name = newName.trim();
    if (acc.profile) acc.profile.name = newName.trim();
    if (villageProfile) villageProfile.name = newName.trim();
    saveStorage();
    renderAccountsNav();
    renderVillageProfileUI();
    showToast(`Account renamed to: ${newName.trim()}`);
};

window.editVillageName = function() {
    renameCurrentAccount();
};

window.deleteCurrentAccount = function() {
    if (accounts.length <= 1) {
        alert("You must keep at least 1 account! You can rename it or clear its timers instead.");
        return;
    }
    const acc = getActiveAccount();
    if (!acc) return;
    if (confirm(`Are you sure you want to delete "${acc.name}" and all its saved timers?`)) {
        accounts = accounts.filter(a => a.id !== activeAccountId);
        activeAccountId = accounts[0].id;
        syncActiveAccountState();
        saveStorage();
        renderAccountsNav();
        renderVillageProfileUI();
        renderSavedList();
        showToast(`Deleted account "${acc.name}". Switched to "${accounts[0].name}".`);
    }
};

function renderAccountsNav() {
    const navRow = document.getElementById('accountsTabsRow');
    const countEl = document.getElementById('accountsCount');
    if (countEl) countEl.textContent = accounts.length;
    if (!navRow) return;

    const now = Date.now();
    navRow.innerHTML = '';
    accounts.forEach(acc => {
        const isActive = acc.id === activeAccountId;
        const busyBuilders = (acc.upgrades || []).filter(u => (u.category || u.type || 'builder') === 'builder').length;
        const thNum = acc.th || (acc.profile && acc.profile.th) || 16;
        const doneCount = (acc.upgrades || []).filter(u => getUpgradeFinishMs(u, now, acc) <= now).length;
        
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `account-tab-btn ${isActive ? 'active' : ''}`;
        btn.onclick = () => switchAccount(acc.id);
        btn.innerHTML = `
            <span class="account-tab-th">TH${thNum}</span>
            <span>${escapeHTML(acc.name)}</span>
            <span class="account-tab-builders" title="${busyBuilders} active builder upgrades">🔨 ${busyBuilders}</span>
            ${doneCount > 0 ? `<span class="account-tab-done-badge" title="${doneCount} upgrade(s) completed!">🎉 ${doneCount} DONE</span>` : ''}
        `;
        navRow.appendChild(btn);
    });

    populateJsonAccountDropdown();
}

function populateJsonAccountDropdown() {
    const sel = document.getElementById('jsonTargetAccountSelect');
    if (!sel) return;
    sel.innerHTML = '';

    accounts.forEach(acc => {
        const opt = document.createElement('option');
        opt.value = acc.id;
        opt.textContent = `Update "${acc.name}" (${acc.tag || 'No tag'})`;
        if (acc.id === activeAccountId) opt.selected = true;
        sel.appendChild(opt);
    });

    const newOpt = document.createElement('option');
    newOpt.value = '__NEW__';
    newOpt.textContent = '➕ Create as New Account';
    sel.appendChild(newOpt);
}

function renderVillageProfileUI() {
    if (!villageProfileBar) return;

    if (!villageProfile) {
        villageProfileBar.classList.add('hidden');
        return;
    }

    villageProfileBar.classList.remove('hidden');

    if (villageThBadge) {
        villageThBadge.textContent = `TH ${villageProfile.th || 16}`;
    }

    if (villagePlayerName) {
        villagePlayerName.innerHTML = `${escapeHTML(villageProfile.name || 'Chief Player')} <span style="font-size:0.75rem; opacity:0.7;">✏️</span>`;
    }

    if (villagePlayerTag) {
        villagePlayerTag.textContent = `${villageProfile.tag || '#VILLAGE'} • Home Base`;
    }

    const homeBuildersBusy = savedUpgrades.filter(u => u.category === 'builder').length;
    const labActive = savedUpgrades.filter(u => u.category === 'lab').length;

    if (villageBuildersStatus) {
        villageBuildersStatus.innerHTML = `
            <span>🔨 ${homeBuildersBusy} Busy Builders</span>
            <small>${labActive > 0 ? '⚗️ Laboratory Active' : '⚗️ Lab Free'}</small>
        `;
    }
}

// In-app Toast message
function showToast(msg, isError = false) {
    let toast = document.getElementById('cocToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'cocToast';
        toast.className = 'coc-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.background = isError ? 'rgba(231, 76, 60, 0.95)' : 'rgba(46, 204, 113, 0.95)';
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 4500);
}

/**
 * Supercell ID & Key Identifier
 */
function identifySupercellObject(obj, key, categoryHint = 'builder') {
    const dataId = obj.data !== undefined ? obj.data : (obj.id !== undefined ? obj.id : null);
    const keyContext = (key || '').toLowerCase();

    // Determine category
    let category = categoryHint; // 'builder', 'lab', 'pet', 'builder_base'
    if (keyContext.includes('2')) category = 'builder_base';
    else if (keyContext.includes('pet')) category = 'pet';
    else if (keyContext.includes('unit') || keyContext.includes('spell') || keyContext.includes('lab') || keyContext.includes('research')) category = 'lab';
    else if (keyContext.includes('building') || keyContext.includes('hero') || keyContext.includes('trap')) category = 'builder';

    // Check specific dataId ranges
    if (dataId !== null && dataId !== undefined) {
        if (dataId >= 73000000 && dataId < 74000000) {
            category = 'pet';
        } else if ((dataId >= 4000000 && dataId < 5000000) || (dataId >= 26000000 && dataId < 27000000)) {
            category = 'lab';
        } else if (dataId >= 28000000 && dataId < 29000000) {
            category = (dataId === 28000003 || dataId === 28000005) ? 'builder_base' : 'builder';
        } else if (dataId >= 1000034 && dataId <= 1000069 && dataId !== 1000059 && dataId !== 1000067 && dataId !== 1000068) {
            category = 'builder_base';
        }
    }

    // Format level string (lvl is current level before upgrade, so it is upgrading to lvl + 1)
    let lvlSuffix = '';
    if (typeof obj.lvl === 'number') {
        lvlSuffix = ` (Lvl ${obj.lvl} ➔ ${obj.lvl + 1})`;
    }

    // 0. Explicit Town Hall Guardians & Special Defenses (TH17 & TH18)
    const rawObjString = (
        (obj.name || '') + ' ' +
        (obj.id || '') + ' ' +
        (obj.type || '') + ' ' +
        (obj.guardian || '') + ' ' +
        (obj.code || '') + ' ' +
        keyContext
    ).toLowerCase();

    if (rawObjString.includes('logger')) {
        return {
            name: "🪵 Logger" + lvlSuffix,
            category: 'builder',
            type: 'builder'
        };
    }
    if (rawObjString.includes('longshot')) {
        return {
            name: "🎯 Longshot" + lvlSuffix,
            category: 'builder',
            type: 'builder'
        };
    }
    if (rawObjString.includes('smasher')) {
        return {
            name: "🔨 Smasher" + lvlSuffix,
            category: 'builder',
            type: 'builder'
        };
    }
    if (rawObjString.includes('guardian')) {
        return {
            name: "🛡️ Guardian" + lvlSuffix,
            category: 'builder',
            type: 'builder'
        };
    }

    // 1. Direct match in official dictionary
    if (dataId && SUPERCELL_IDS[dataId]) {
        let displayName = SUPERCELL_IDS[dataId];
        if (category === 'builder_base' && !displayName.includes('(BB)') && !displayName.includes('[Builder Base]')) {
            displayName += ' [Builder Base]';
        }
        return {
            name: displayName + lvlSuffix,
            category: category,
            type: (category === 'lab' || category === 'pet') ? 'lab' : 'builder'
        };
    }

    // 2. Heroes fallback
    if (keyContext.includes('hero')) {
        const heroNames = ["👑 Barbarian King", "🏹 Archer Queen", "🧙‍♂️ Grand Warden", "🛡️ Royal Champion", "🐉 Minion Prince"];
        const match = keyContext.match(/\d+/);
        const idx = match ? parseInt(match[0], 10) : 0;
        return {
            name: heroNames[idx % heroNames.length] + lvlSuffix,
            category: 'builder',
            type: 'builder'
        };
    }

    // 3. String name from object if provided
    if (obj.name && typeof obj.name === 'string') {
        return {
            name: cleanString(obj.name) + lvlSuffix,
            category: category,
            type: (category === 'lab' || category === 'pet') ? 'lab' : 'builder'
        };
    }

    // 4. Pet fallback
    if (category === 'pet' || keyContext.includes('pet')) {
        return {
            name: "🐾 Pet Upgrade" + lvlSuffix,
            category: 'pet',
            type: 'lab'
        };
    }

    // 5. Laboratory research fallback
    if (category === 'lab' || keyContext.includes('lab') || keyContext.includes('unit') || keyContext.includes('spell')) {
        return {
            name: "⚗️ Laboratory Research" + lvlSuffix,
            category: 'lab',
            type: 'lab'
        };
    }

    // 6. Builder Base fallback
    if (category === 'builder_base') {
        return {
            name: "🛠️ Builder Base Upgrade" + lvlSuffix,
            category: 'builder_base',
            type: 'builder'
        };
    }

    // 7. Generic Village Building
    return {
        name: `🛡️ Defense Building` + lvlSuffix,
        category: 'builder',
        type: 'builder'
    };
}

function cleanString(str) {
    return str.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim();
}

// Custom Potion Manipulation per Upgrade
window.adjustPotionForUpgrade = function(id, delta) {
    const item = savedUpgrades.find(u => u.id === id);
    if (!item) return;
    const oldPotions = item.potions || 0;
    const newPotions = Math.max(0, oldPotions + delta);
    if (newPotions === oldPotions) return;

    const now = Date.now();
    if (oldPotions === 0 && newPotions > 0) {
        item.potionAppliedMs = now;
    } else if (newPotions === 0) {
        item.potionAppliedMs = null;
    }
    item.potions = newPotions;
    item.alarmFired = false;
    saveStorage();
    renderSavedList(false);
};

// Global Potion Adjustment to specific category
window.applyPotionToAll = function(targetCategory = 'all', potionDelta = 1) {
    if (savedUpgrades.length === 0) {
        showToast("No active timers to boost!", true);
        return;
    }

    const now = Date.now();
    let modifiedCount = 0;
    savedUpgrades.forEach(u => {
        const itemCat = u.category || (u.type === 'lab' ? 'lab' : 'builder');
        if (targetCategory === 'all' || itemCat === targetCategory || (targetCategory === 'builder' && itemCat === 'builder')) {
            const oldPotions = u.potions || 0;
            const newPotions = Math.max(0, oldPotions + potionDelta);
            if (newPotions !== oldPotions) {
                if (oldPotions === 0 && newPotions > 0) {
                    u.potionAppliedMs = now;
                } else if (newPotions === 0) {
                    u.potionAppliedMs = null;
                }
                u.potions = newPotions;
                u.alarmFired = false;
                modifiedCount++;
            }
        }
    });

    saveStorage();
    renderSavedList(false);

    if (targetCategory === 'lab') {
        showToast(`⚗️ Added +${potionDelta} Research Potion to laboratory!`);
    } else if (targetCategory === 'builder') {
        showToast(`🧪 Added +${potionDelta} Builder Potion to Home Village builders!`);
    } else {
        showToast(`⚡ Added +${potionDelta} potion to all upgrades!`);
    }
};

// Reset all potion simulations back to 0 (matches game time)
window.resetAllPotions = function() {
    let resetCount = 0;
    const now = Date.now();
    const acc = getActiveAccount();

    if (acc) {
        advanceUpgradesToNow(acc, now);
        if (acc.activeBoosts) {
            if (acc.activeBoosts.builderPotionEndMs || acc.activeBoosts.labPotionEndMs || acc.activeBoosts.petPotionEndMs) {
                resetCount++;
            }
            acc.activeBoosts.builderPotionEndMs = null;
            acc.activeBoosts.builderPotionStartMs = null;
            acc.activeBoosts.labPotionEndMs = null;
            acc.activeBoosts.labPotionStartMs = null;
            acc.activeBoosts.petPotionEndMs = null;
            acc.activeBoosts.petPotionStartMs = null;
        }
    }

    savedUpgrades.forEach(u => {
        if ((u.potions || 0) > 0) {
            u.potions = 0;
            u.potionAppliedMs = null;
            u.alarmFired = false;
            resetCount++;
        }
    });

    saveStorage();
    updatePotionCountdownTick();
    renderSavedList(false);

    showToast(`↺ All active potion boosts cleared! Timers restored to match in-game time.`);
};

// Flexible time string parser (supports "40m 4s", "40m", "40", "1h 20m", etc.)
function parseTimeStringToSeconds(input) {
    if (!input) return 0;
    const clean = input.toString().trim().toLowerCase();
    if (!clean) return 0;

    // Check if plain number (assume minutes, e.g. "40" -> 2400s)
    if (/^\d+(\.\d+)?$/.test(clean)) {
        return Math.round(parseFloat(clean) * 60);
    }

    let totalSeconds = 0;
    const dayMatch = clean.match(/(\d+)\s*(?:d|day|days)/);
    const hourMatch = clean.match(/(\d+)\s*(?:h|hr|hrs|hour|hours)/);
    const minMatch = clean.match(/(\d+)\s*(?:m|min|mins|minute|minutes)/);
    const secMatch = clean.match(/(\d+)\s*(?:s|sec|secs|second|seconds)/);

    if (dayMatch) totalSeconds += parseInt(dayMatch[1], 10) * 86400;
    if (hourMatch) totalSeconds += parseInt(hourMatch[1], 10) * 3600;
    if (minMatch) totalSeconds += parseInt(minMatch[1], 10) * 60;
    if (secMatch) totalSeconds += parseInt(secMatch[1], 10);

    return totalSeconds;
}

let currentEditingPotionType = 'builder';

window.openEditPotionTimeModal = function(type = 'builder') {
    currentEditingPotionType = type;
    const modal = document.getElementById('potionEditModalOverlay');
    const titleEl = document.getElementById('potionModalTitle');
    const inputEl = document.getElementById('potionTimeInput');

    if (titleEl) {
        if (type === 'builder') {
            titleEl.textContent = '🧪 Set Builder Potion Remaining Time';
        } else if (type === 'pet') {
            titleEl.textContent = '🐾 Set Pet Potion Remaining Time';
        } else {
            titleEl.textContent = '⚗️ Set Research Potion Remaining Time';
        }
    }

    const acc = getActiveAccount();
    const activeBoosts = acc ? (acc.activeBoosts || {}) : {};
    let endMs = activeBoosts.builderPotionEndMs;
    if (type === 'pet') endMs = activeBoosts.petPotionEndMs;
    else if (type === 'lab') endMs = activeBoosts.labPotionEndMs;
    const now = Date.now();

    if (endMs && endMs > now) {
        const remSecs = Math.round((endMs - now) / 1000);
        const remM = Math.floor(remSecs / 60);
        const remS = remSecs % 60;
        if (inputEl) inputEl.value = `${remM}m ${remS}s`;
    } else {
        if (inputEl) inputEl.value = '40m 4s'; // Friendly default matching in-game screenshot
    }

    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
        setTimeout(() => { if (inputEl) { inputEl.focus(); inputEl.select(); } }, 50);
    }
};

window.closePotionEditModal = function() {
    const modal = document.getElementById('potionEditModalOverlay');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
};

window.setPresetPotionTime = function(presetStr) {
    const inputEl = document.getElementById('potionTimeInput');
    if (inputEl) inputEl.value = presetStr;
    saveEditedPotionTime();
};

window.saveEditedPotionTime = function() {
    const inputEl = document.getElementById('potionTimeInput');
    const val = inputEl ? inputEl.value.trim() : '';
    const totalSecs = parseTimeStringToSeconds(val);

    const acc = getActiveAccount();
    if (!acc) return;
    if (!acc.activeBoosts) acc.activeBoosts = {};

    const now = Date.now();
    // Advance all upgrades to lock in past boosted progress before changing boost
    advanceUpgradesToNow(acc, now);

    if (totalSecs <= 0) {
        if (currentEditingPotionType === 'builder') {
            acc.activeBoosts.builderPotionEndMs = null;
            acc.activeBoosts.builderPotionStartMs = null;
            showToast("🧪 Builder Potion stopped (Normal 1x speed)");
        } else if (currentEditingPotionType === 'pet') {
            acc.activeBoosts.petPotionEndMs = null;
            acc.activeBoosts.petPotionStartMs = null;
            showToast("🐾 Pet Potion stopped (Normal 1x speed)");
        } else {
            acc.activeBoosts.labPotionEndMs = null;
            acc.activeBoosts.labPotionStartMs = null;
            showToast("⚗️ Research Potion stopped (Normal 1x speed)");
        }
    } else {
        const endMs = now + totalSecs * 1000;
        const m = Math.floor(totalSecs / 60);
        const s = totalSecs % 60;
        if (currentEditingPotionType === 'builder') {
            acc.activeBoosts.builderPotionStartMs = now;
            acc.activeBoosts.builderPotionEndMs = endMs;
            acc.activeBoosts.alarmFiredBuilder = false;
            showToast(`🧪 Builder Potion set to ${m}m ${s}s! All builders running at 10x.`);
        } else if (currentEditingPotionType === 'pet') {
            acc.activeBoosts.petPotionStartMs = now;
            acc.activeBoosts.petPotionEndMs = endMs;
            acc.activeBoosts.alarmFiredPet = false;
            showToast(`🐾 Pet Potion set to ${m}m ${s}s! Pet upgrades running at 24x.`);
        } else {
            acc.activeBoosts.labPotionStartMs = now;
            acc.activeBoosts.labPotionEndMs = endMs;
            acc.activeBoosts.alarmFiredLab = false;
            showToast(`⚗️ Research Potion set to ${m}m ${s}s! Lab running at 24x.`);
        }
    }

    saveStorage();
    closePotionEditModal();
    updatePotionCountdownTick();
    renderSavedList(false);
};

window.quickAddPotionBoost = function(type = 'builder', minutes = 60) {
    const acc = getActiveAccount();
    if (!acc) return;
    if (!acc.activeBoosts) acc.activeBoosts = {};

    const now = Date.now();
    // Advance all upgrades to lock in past boosted progress
    advanceUpgradesToNow(acc, now);

    let currentEndMs = acc.activeBoosts.builderPotionEndMs;
    if (type === 'pet') currentEndMs = acc.activeBoosts.petPotionEndMs;
    else if (type === 'lab') currentEndMs = acc.activeBoosts.labPotionEndMs;

    const baseStart = (currentEndMs && currentEndMs > now) ? currentEndMs : now;
    const newEndMs = baseStart + minutes * 60 * 1000;

    if (type === 'builder') {
        if (!acc.activeBoosts.builderPotionStartMs || !currentEndMs || currentEndMs <= now) {
            acc.activeBoosts.builderPotionStartMs = now;
        }
        acc.activeBoosts.builderPotionEndMs = newEndMs;
        acc.activeBoosts.alarmFiredBuilder = false;
        showToast("🧪 Added +1h Builder Potion (10x boost)");
    } else if (type === 'pet') {
        if (!acc.activeBoosts.petPotionStartMs || !currentEndMs || currentEndMs <= now) {
            acc.activeBoosts.petPotionStartMs = now;
        }
        acc.activeBoosts.petPotionEndMs = newEndMs;
        acc.activeBoosts.alarmFiredPet = false;
        showToast("🐾 Added +1h Pet Potion (24x boost)");
    } else {
        if (!acc.activeBoosts.labPotionStartMs || !currentEndMs || currentEndMs <= now) {
            acc.activeBoosts.labPotionStartMs = now;
        }
        acc.activeBoosts.labPotionEndMs = newEndMs;
        acc.activeBoosts.alarmFiredLab = false;
        showToast("⚗️ Added +1h Research Potion (24x boost)");
    }

    saveStorage();
    updatePotionCountdownTick();
    renderSavedList(false);
};

window.stopPotionBoost = function(type = 'builder') {
    const acc = getActiveAccount();
    if (!acc || !acc.activeBoosts) return;
    const now = Date.now();
    advanceUpgradesToNow(acc, now);

    if (type === 'builder') {
        acc.activeBoosts.builderPotionEndMs = null;
        acc.activeBoosts.builderPotionStartMs = null;
        showToast("🧪 Builder Potion stopped (Back to 1x)");
    } else if (type === 'pet') {
        acc.activeBoosts.petPotionEndMs = null;
        acc.activeBoosts.petPotionStartMs = null;
        showToast("🐾 Pet Potion stopped (Back to 1x)");
    } else {
        acc.activeBoosts.labPotionEndMs = null;
        acc.activeBoosts.labPotionStartMs = null;
        showToast("⚗️ Research Potion stopped (Back to 1x)");
    }
    saveStorage();
    updatePotionCountdownTick();
    renderSavedList(false);
};

function updatePotionCountdownTick() {
    const acc = getActiveAccount();
    const activeBoosts = acc ? (acc.activeBoosts || {}) : {};
    const now = Date.now();

    // 1. Builder Potion Box
    const builderBox = document.getElementById('builderBoostBox');
    const builderPill = document.getElementById('builderBoostPill');
    const builderTimerLine = document.getElementById('builderBoostTimerLine');
    const stopBuilderBtn = document.getElementById('stopBuilderBoostBtn');

    if (builderBox && builderPill && builderTimerLine) {
        if (activeBoosts.builderPotionEndMs && activeBoosts.builderPotionEndMs > now) {
            const remSecs = Math.floor((activeBoosts.builderPotionEndMs - now) / 1000);
            const m = Math.floor(remSecs / 60);
            const s = remSecs % 60;
            const sPad = s < 10 ? '0' + s : s;
            const endDate = new Date(activeBoosts.builderPotionEndMs);
            const endStr = endDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });

            builderBox.classList.add('boost-active');
            builderPill.className = 'boost-status-pill active';
            builderPill.textContent = `${m}m ${sPad}s (10x)`;
            builderTimerLine.className = 'boost-timer-line active-time';
            builderTimerLine.innerHTML = `⏱️ <strong>${m}m ${sPad}s remaining</strong> • Ends at ${endStr}`;
            if (stopBuilderBtn) stopBuilderBtn.style.display = 'inline-block';
        } else {
            builderBox.classList.remove('boost-active');
            builderPill.className = 'boost-status-pill';
            builderPill.textContent = '0m (Inactive)';
            builderTimerLine.className = 'boost-timer-line';
            builderTimerLine.textContent = 'Inactive • Builders running at normal 1x';
            if (stopBuilderBtn) stopBuilderBtn.style.display = 'none';

            if (activeBoosts.builderPotionEndMs && !activeBoosts.alarmFiredBuilder) {
                activeBoosts.alarmFiredBuilder = true;
                advanceUpgradesToNow(acc, activeBoosts.builderPotionEndMs);
                if (alarmEnabled) {
                    showDesktopNotification("🧪 Builder Potion Ended", "Your 10x builder boost has ended. Builders back to 1x speed.");
                    showToast("🧪 Builder Potion ended (Back to 1x speed)");
                }
                saveStorage();
                renderSavedList(false);
            }
        }
    }

    // 2. Lab Potion Box
    const labBox = document.getElementById('labBoostBox');
    const labPill = document.getElementById('labBoostPill');
    const labTimerLine = document.getElementById('labBoostTimerLine');
    const stopLabBtn = document.getElementById('stopLabBoostBtn');

    if (labBox && labPill && labTimerLine) {
        if (activeBoosts.labPotionEndMs && activeBoosts.labPotionEndMs > now) {
            const remSecs = Math.floor((activeBoosts.labPotionEndMs - now) / 1000);
            const m = Math.floor(remSecs / 60);
            const s = remSecs % 60;
            const sPad = s < 10 ? '0' + s : s;
            const endDate = new Date(activeBoosts.labPotionEndMs);
            const endStr = endDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });

            labBox.classList.add('boost-active', 'lab-active');
            labPill.className = 'boost-status-pill active lab-pill';
            labPill.textContent = `${m}m ${sPad}s (24x)`;
            labTimerLine.className = 'boost-timer-line active-time';
            labTimerLine.innerHTML = `⏱️ <strong>${m}m ${sPad}s remaining</strong> • Ends at ${endStr}`;
            if (stopLabBtn) stopLabBtn.style.display = 'inline-block';
        } else {
            labBox.classList.remove('boost-active', 'lab-active');
            labPill.className = 'boost-status-pill';
            labPill.textContent = '0m (Inactive)';
            labTimerLine.className = 'boost-timer-line';
            labTimerLine.textContent = 'Inactive • Lab running at normal 1x';
            if (stopLabBtn) stopLabBtn.style.display = 'none';

            if (activeBoosts.labPotionEndMs && !activeBoosts.alarmFiredLab) {
                activeBoosts.alarmFiredLab = true;
                advanceUpgradesToNow(acc, activeBoosts.labPotionEndMs);
                if (alarmEnabled) {
                    showDesktopNotification("⚗️ Research Potion Ended", "Your 24x research boost has ended. Lab back to 1x speed.");
                    showToast("⚗️ Research Potion ended (Back to 1x speed)");
                }
                saveStorage();
                renderSavedList(false);
            }
        }
    }

    // 3. Pet Potion Box
    const petBox = document.getElementById('petBoostBox');
    const petPill = document.getElementById('petBoostPill');
    const petTimerLine = document.getElementById('petBoostTimerLine');
    const stopPetBtn = document.getElementById('stopPetBoostBtn');

    if (petBox && petPill && petTimerLine) {
        if (activeBoosts.petPotionEndMs && activeBoosts.petPotionEndMs > now) {
            const remSecs = Math.floor((activeBoosts.petPotionEndMs - now) / 1000);
            const m = Math.floor(remSecs / 60);
            const s = remSecs % 60;
            const sPad = s < 10 ? '0' + s : s;
            const endDate = new Date(activeBoosts.petPotionEndMs);
            const endStr = endDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });

            petBox.classList.add('boost-active', 'pet-active');
            petPill.className = 'boost-status-pill active pet-pill';
            petPill.textContent = `${m}m ${sPad}s (24x)`;
            petTimerLine.className = 'boost-timer-line active-time';
            petTimerLine.innerHTML = `⏱️ <strong>${m}m ${sPad}s remaining</strong> • Ends at ${endStr}`;
            if (stopPetBtn) stopPetBtn.style.display = 'inline-block';
        } else {
            petBox.classList.remove('boost-active', 'pet-active');
            petPill.className = 'boost-status-pill';
            petPill.textContent = '0m (Inactive)';
            petTimerLine.className = 'boost-timer-line';
            petTimerLine.textContent = 'Inactive • Pets running at normal 1x';
            if (stopPetBtn) stopPetBtn.style.display = 'none';

            if (activeBoosts.petPotionEndMs && !activeBoosts.alarmFiredPet) {
                activeBoosts.alarmFiredPet = true;
                advanceUpgradesToNow(acc, activeBoosts.petPotionEndMs);
                if (alarmEnabled) {
                    showDesktopNotification("🐾 Pet Potion Ended", "Your 24x pet boost has ended. Pets back to 1x speed.");
                    showToast("🐾 Pet Potion ended (Back to 1x speed)");
                }
                saveStorage();
                renderSavedList(false);
            }
        }
    }

    // Live update all upgrade card countdowns every second
    updateUpgradeLiveCardsTick();
}

function updateUpgradeLiveCardsTick() {
    const acc = getActiveAccount();
    if (!acc || !acc.upgrades || acc.upgrades.length === 0) return;
    const now = Date.now();
    const activeBoosts = acc.activeBoosts || {};

    acc.upgrades.forEach(item => {
        const itemCat = item.category || (item.type === 'lab' ? 'lab' : 'builder');
        const isLab = (itemCat === 'lab' || item.type === 'lab') && itemCat !== 'pet';
        const isPet = itemCat === 'pet';

        const finishMs = getUpgradeFinishMs(item, now, acc);
        const remTotalMs = Math.max(0, finishMs - now);
        const remSecs = Math.floor(remTotalMs / 1000);
        const remLabel = remTotalMs <= 0 ? "DONE! 🎉" : formatRemainingSeconds(remSecs);

        const cardEl = document.querySelector(`.saved-item[data-id="${item.id}"]`);
        if (cardEl) {
            const remBadge = cardEl.querySelector('.saved-orig-badge');
            if (remBadge) {
                remBadge.innerHTML = `⏱️ ${remLabel} ✏️`;
                if (remTotalMs <= 0) {
                    remBadge.style.background = '#2ecc71';
                    remBadge.style.color = '#12151c';
                    remBadge.style.fontWeight = '900';
                }
            }

            const inGameBadgeEl = cardEl.querySelector('.in-game-work-badge');
            if (inGameBadgeEl) {
                const inGameWorkMins = getUpgradeRemainingWorkMinutes(item, now, acc);
                inGameBadgeEl.textContent = `🎮 In Game: ${formatMinsToDh(inGameWorkMins, true)}`;
            }

            const boostTagEl = cardEl.querySelector('.potion-active-tag.live-boost-tag');
            if (boostTagEl) {
                let boostSecs = 0;
                let boostMult = 10;
                if (itemCat === 'builder' && activeBoosts.builderPotionEndMs && activeBoosts.builderPotionEndMs > now) {
                    boostSecs = Math.max(0, Math.floor((activeBoosts.builderPotionEndMs - now) / 1000));
                    boostMult = 10;
                } else if (isLab && activeBoosts.labPotionEndMs && activeBoosts.labPotionEndMs > now) {
                    boostSecs = Math.max(0, Math.floor((activeBoosts.labPotionEndMs - now) / 1000));
                    boostMult = 24;
                } else if (isPet && activeBoosts.petPotionEndMs && activeBoosts.petPotionEndMs > now) {
                    boostSecs = Math.max(0, Math.floor((activeBoosts.petPotionEndMs - now) / 1000));
                    boostMult = 24;
                }
                if (boostSecs > 0) {
                    const bM = Math.floor(boostSecs / 60);
                    const bS = boostSecs % 60;
                    const bSPad = bS < 10 ? '0' + bS : bS;
                    boostTagEl.textContent = `⚡ ${boostMult}x Boost (${bM}m ${bSPad}s left)`;
                }
            }
        }
    });
}

// Filter Saved Upgrades List
window.setSavedFilter = function(filter) {
    currentSavedFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    renderSavedList(false);
};

// Rename item
window.renameUpgrade = function(id) {
    const item = savedUpgrades.find(u => u.id === id);
    if (!item) return;
    const newName = prompt("Rename upgrade:", item.name);
    if (newName && newName.trim()) {
        item.name = newName.trim();
        saveStorage();
        renderSavedList(false);
    }
};

// Render Saved Upgrades with live individual potion calculations
function renderSavedList(rebuild = true) {
    const totalCount = savedUpgrades.length;
    const homeBuilderCount = savedUpgrades.filter(u => (u.category || u.type || 'builder') === 'builder').length;
    const labCount = savedUpgrades.filter(u => u.category === 'lab' || (u.type === 'lab' && u.category !== 'pet')).length;
    const petCount = savedUpgrades.filter(u => u.category === 'pet').length;
    const bbCount = savedUpgrades.filter(u => u.category === 'builder_base').length;

    if (savedCount) savedCount.textContent = totalCount;
    if (filterAllCount) filterAllCount.textContent = totalCount;
    if (filterBuilderCount) filterBuilderCount.textContent = homeBuilderCount;
    if (filterLabCount) filterLabCount.textContent = labCount;
    if (filterPetCount) filterPetCount.textContent = petCount;
    if (filterBBCount) filterBBCount.textContent = bbCount;

    savedListContainer.innerHTML = '';

    const filteredItems = savedUpgrades.filter(item => {
        const itemCat = item.category || (item.type === 'lab' ? 'lab' : 'builder');
        if (currentSavedFilter === 'builder') return itemCat === 'builder';
        if (currentSavedFilter === 'lab') return itemCat === 'lab';
        if (currentSavedFilter === 'pet') return itemCat === 'pet';
        if (currentSavedFilter === 'builder_base') return itemCat === 'builder_base';
        return true;
    });

    if (filteredItems.length === 0) {
        let filterName = "upgrades";
        if (currentSavedFilter === 'builder') filterName = "Home Village builder upgrades";
        else if (currentSavedFilter === 'lab') filterName = "laboratory research";
        else if (currentSavedFilter === 'pet') filterName = "pet upgrades";
        else if (currentSavedFilter === 'builder_base') filterName = "Builder Base upgrades";

        const emptyMsg = totalCount === 0
            ? "No saved timers yet. Import village JSON or calculate on the left!"
            : `No active ${filterName} in your list.`;
        savedListContainer.innerHTML = `
            <div style="text-align: center; padding: 24px; color: #64748b; font-size: 0.9rem;">
                ${emptyMsg}
            </div>
        `;
        return;
    }

    const now = Date.now();

    // Check if any timers have active potion boost simulations
    const activeBoostedCount = savedUpgrades.filter(u => (u.potions || 0) > 0).length;
    if (activeBoostedCount > 0) {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'potion-active-alert-box';
        alertDiv.innerHTML = `
            <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-size:1.3rem;">⚡</span>
                <div>
                    <strong>Potion Simulation Active (${activeBoostedCount} timer${activeBoostedCount > 1 ? 's' : ''} boosted):</strong>
                    <div style="font-size: 0.8rem; opacity: 0.88;">Timers are running 10x/24x faster than in-game. If you didn't use a potion in Clash of Clans:</div>
                </div>
            </div>
            <button type="button" onclick="resetAllPotions()" class="btn btn-warning btn-sm" style="white-space: nowrap;">
                ↺ Reset to Match Game
            </button>
        `;
        savedListContainer.appendChild(alertDiv);
    }

    // Sort items so the closest to finish is ALWAYS at the top (chronological order, top to bottom)
    filteredItems.sort((a, b) => {
        return getUpgradeFinishMs(a, now) - getUpgradeFinishMs(b, now);
    });

    filteredItems.forEach(item => {
        const itemCat = item.category || (item.type === 'lab' ? 'lab' : 'builder');
        const isLab = (itemCat === 'lab' || item.type === 'lab') && itemCat !== 'pet';
        const isPet = itemCat === 'pet';
        const potions = item.potions || 0;
        const finishMs = getUpgradeFinishMs(item, now);
        const finishDate = new Date(finishMs);

        const timeStr = finishDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
        const dateStr = finishDate.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });

        // Calculate remaining from right now
        const remTotalMs = Math.max(0, finishMs - now);
        const remSecs = Math.floor(remTotalMs / 1000);
        let remLabel = remTotalMs <= 0 ? "DONE! 🎉" : formatRemainingSeconds(remSecs);

        const acc = getActiveAccount();
        const activeBoosts = acc ? (acc.activeBoosts || {}) : {};
        const inGameWorkMins = getUpgradeRemainingWorkMinutes(item, now, acc);
        const isBoosted = (itemCat === 'builder' && activeBoosts.builderPotionEndMs && activeBoosts.builderPotionEndMs > now) ||
                          (isLab && activeBoosts.labPotionEndMs && activeBoosts.labPotionEndMs > now) ||
                          (isPet && activeBoosts.petPotionEndMs && activeBoosts.petPotionEndMs > now) ||
                          potions > 0;
        let inGameBadge = '';
        if (isBoosted && remTotalMs > 0) {
            inGameBadge = `<span class="in-game-work-badge" onclick="editUpgradeTime('${item.id}')" title="Work remaining shown in Clash of Clans sidebar. Click to edit.">🎮 In Game: ${formatMinsToDh(inGameWorkMins, true)}</span>`;
        }

        // Badges and potion labels based on category
        let badgeClass = 'badge-builder';
        let badgeText = '🔨 BUILDER';
        let potionTagText = `🧪 ${potions} Builder Potion${potions > 1 ? 's' : ''}`;
        let potionBtnIcon = '🧪';
        let potionBtnClass = 'btn-potion';

        if (itemCat === 'lab') {
            badgeClass = 'badge-lab';
            badgeText = '⚗️ LAB';
            potionTagText = `⚗️ ${potions} Research Potion${potions > 1 ? 's' : ''}`;
            potionBtnIcon = '⚗️';
            potionBtnClass = 'btn-potion-lab';
        } else if (itemCat === 'pet') {
            badgeClass = 'badge-pet';
            badgeText = '🐾 PET';
            potionTagText = `🐾 ${potions} Pet Potion${potions > 1 ? 's' : ''}`;
            potionBtnIcon = '🐾';
            potionBtnClass = 'btn-potion-pet';
        } else if (itemCat === 'builder_base') {
            badgeClass = 'badge-bb';
            badgeText = '🛠️ BUILDER BASE';
            potionTagText = `⏰ ${potions} Boost Applied`;
            potionBtnIcon = '🛠️';
            potionBtnClass = 'btn-potion';
        }

        let activeVillageBoostTag = '';
        if (itemCat === 'builder' && activeBoosts.builderPotionEndMs && activeBoosts.builderPotionEndMs > now) {
            const bRemSecs = Math.max(0, Math.floor((activeBoosts.builderPotionEndMs - now) / 1000));
            const bRemM = Math.floor(bRemSecs / 60);
            const bRemS = bRemSecs % 60;
            const bPad = bRemS < 10 ? '0' + bRemS : bRemS;
            activeVillageBoostTag = `<span class="potion-active-tag live-boost-tag" style="background: rgba(168, 85, 247, 0.2); border-color: #a855f7; color: #d8b4fe;">⚡ 10x Boost (${bRemM}m ${bPad}s left)</span>`;
        } else if (isLab && activeBoosts.labPotionEndMs && activeBoosts.labPotionEndMs > now) {
            const lRemSecs = Math.max(0, Math.floor((activeBoosts.labPotionEndMs - now) / 1000));
            const lRemM = Math.floor(lRemSecs / 60);
            const lRemS = lRemSecs % 60;
            const lPad = lRemS < 10 ? '0' + lRemS : lRemS;
            activeVillageBoostTag = `<span class="potion-active-tag potion-lab live-boost-tag">⚡ 24x Boost (${lRemM}m ${lPad}s left)</span>`;
        } else if (isPet && activeBoosts.petPotionEndMs && activeBoosts.petPotionEndMs > now) {
            const pRemSecs = Math.max(0, Math.floor((activeBoosts.petPotionEndMs - now) / 1000));
            const pRemM = Math.floor(pRemSecs / 60);
            const pRemS = pRemSecs % 60;
            const pPad = pRemS < 10 ? '0' + pRemS : pRemS;
            activeVillageBoostTag = `<span class="potion-active-tag potion-pet live-boost-tag">🐾 24x Pet Boost (${pRemM}m ${pPad}s left)</span>`;
        }

        const div = document.createElement('div');
        div.className = 'saved-item';
        div.dataset.id = item.id;
        div.innerHTML = `
            <div class="saved-left">
                <div class="saved-title-row">
                    <span class="badge-type ${badgeClass}">
                        ${badgeText}
                    </span>
                    <span class="saved-name" onclick="renameUpgrade('${item.id}')" title="Click to rename" style="cursor: pointer;">
                        ${escapeHTML(item.name)} ✏️
                    </span>
                    ${inGameBadge}
                    <span class="saved-orig-badge" onclick="editUpgradeTime('${item.id}')" title="Real-world time remaining. Click to edit to match Clash of Clans" style="cursor: pointer; ${remTotalMs <= 0 ? 'background: #2ecc71; color: #12151c; font-weight: 900;' : ''}">⏱️ ${remLabel} ✏️</span>
                </div>
                <div class="saved-finish-info">
                    🎯 Finishes: <strong>${timeStr}</strong> • ${dateStr}
                    ${activeVillageBoostTag}
                    ${potions > 0 ? `<span class="potion-active-tag ${isLab ? 'potion-lab' : ''}">${potionTagText}</span>` : ''}
                    ${remTotalMs <= 0 ? `<span class="potion-active-tag" style="background: rgba(46, 204, 113, 0.2); border-color: #2ecc71; color: #2ecc71;">🔔 Completed</span>` : ''}
                </div>
            </div>
            <div class="saved-controls">
                <div class="potion-stepper">
                    ${(itemCat === 'builder') ? `
                        <button type="button" class="btn btn-sm btn-apprentice" 
                            onclick="applyApprenticeBoost('${item.id}')" 
                            title="Apply Builder's Apprentice (-hours boost)">
                            👷
                        </button>
                    ` : ''}
                    <button type="button" class="btn btn-sm ${potionBtnClass}" 
                        onclick="adjustPotionForUpgrade('${item.id}', 1)" 
                        title="${isPet ? 'Add 1 Pet Potion (+24h pet progress)' : (isLab ? 'Add 1 Research Potion (+24h lab progress)' : 'Add 1 Builder Potion (+10h progress)')}">
                        +${potionBtnIcon}
                    </button>
                    ${potions > 0 ? `
                        <button type="button" class="btn btn-sm btn-secondary" 
                            onclick="adjustPotionForUpgrade('${item.id}', -1)" 
                            title="Remove 1 Potion">
                            -${potionBtnIcon}
                        </button>
                    ` : ''}
                </div>
                <button type="button" class="btn btn-sm btn-danger" onclick="deleteSaved('${item.id}')" title="Delete">✕</button>
            </div>
        `;
        savedListContainer.appendChild(div);
    });
}

window.deleteSaved = function(id) {
    savedUpgrades = savedUpgrades.filter(item => item.id !== id);
    saveStorage();
    renderAccountsNav();
    renderVillageProfileUI();
    renderSavedList();
};

// Save calculation from the left form
function saveCurrentCalculation() {
    const d = parseInt(durDays.value, 10) || 0;
    const h = parseInt(durHours.value, 10) || 0;
    const m = parseInt(durMins.value, 10) || 0;
    const totalMins = (d * 24 + h) * 60 + m;

    if (totalMins <= 0) {
        alert("Please enter a valid upgrade duration!");
        return;
    }

    const defaultName = (currentMode === 'lab') ? "⚗️ Electro Dragon Lvl 6" : "⚡ Hidden Tesla";
    const promptMsg = (currentMode === 'lab') 
        ? "Name this Laboratory research (e.g. Electro Dragon, Freeze Spell):" 
        : "Name this Builder upgrade (e.g. Hidden Tesla, Archer Queen):";

    const name = prompt(promptMsg, defaultName);
    if (!name) return;

    savedUpgrades.unshift({
        id: 'save_' + Date.now(),
        name: name.trim(),
        category: (currentMode === 'lab') ? 'lab' : 'builder',
        type: currentMode,
        baseMinutes: totalMins,
        potions: selectedPotions,
        startMs: new Date(startTimeInput.value).getTime() || Date.now(),
        alarmFired: false
    });

    saveStorage();
    renderAccountsNav();
    renderVillageProfileUI();
    renderSavedList();
    showToast(`📌 Saved "${name.trim()}" to ongoing timers!`);
}

function saveStorage() {
    const acc = getActiveAccount();
    if (acc) {
        acc.upgrades = savedUpgrades;
        acc.profile = villageProfile;
        if (villageProfile && villageProfile.name) acc.name = villageProfile.name;
        if (villageProfile && villageProfile.tag) acc.tag = villageProfile.tag;
        if (villageProfile && villageProfile.th) acc.th = villageProfile.th;
    }
    try {
        localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
        localStorage.setItem(ACTIVE_ACCOUNT_KEY, activeAccountId);
        // Legacy storage keys for backwards compatibility
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedUpgrades));
        if (villageProfile) {
            localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(villageProfile));
        }
    } catch(e) {}
}

function loadAccountsFromStorage() {
    try {
        const savedAccs = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
        if (savedAccs) {
            accounts = JSON.parse(savedAccs);
        }
    } catch (e) {
        accounts = [];
    }

    if (!Array.isArray(accounts) || accounts.length === 0) {
        let legacyUpgrades = [];
        let legacyProfile = null;
        try {
            const legUp = localStorage.getItem(STORAGE_KEY);
            if (legUp) legacyUpgrades = JSON.parse(legUp);
            const legProf = localStorage.getItem(PROFILE_STORAGE_KEY);
            if (legProf) legacyProfile = JSON.parse(legProf);
        } catch(e) {}

        const initialName = (legacyProfile && legacyProfile.name && !legacyProfile.name.startsWith("Chief (#")) 
            ? legacyProfile.name 
            : "Account 1";
        const initialTag = legacyProfile?.tag || "#GRPGOYJPG";
        const initialTh = legacyProfile?.th || 13;

        accounts = [{
            id: 'acc_1',
            name: initialName,
            tag: initialTag,
            th: initialTh,
            profile: legacyProfile || { name: initialName, tag: initialTag, th: initialTh },
            upgrades: legacyUpgrades || []
        }];
    }

    const savedActiveId = localStorage.getItem(ACTIVE_ACCOUNT_KEY);
    if (savedActiveId && accounts.some(a => a.id === savedActiveId)) {
        activeAccountId = savedActiveId;
    } else {
        activeAccountId = accounts[0].id;
    }

    syncActiveAccountState();
}

function syncActiveAccountState() {
    const acc = getActiveAccount();
    if (acc) {
        savedUpgrades = acc.upgrades || [];
        villageProfile = acc.profile || { name: acc.name, tag: acc.tag, th: acc.th };
    } else {
        savedUpgrades = [];
        villageProfile = null;
    }
}

function getActiveAccount() {
    return accounts.find(a => a.id === activeAccountId) || accounts[0];
}

function loadSavedFromStorage() {
    loadAccountsFromStorage();
}

function saveVillageProfile() {
    saveStorage();
}

function loadVillageProfile() {
    // Handled in loadAccountsFromStorage
}

function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

// Run on page load
window.addEventListener('DOMContentLoaded', init);
