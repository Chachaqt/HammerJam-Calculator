# 🔨 Clash of Clans - Upgrade Finish Time & Potion Calculator

A dedicated offline web app & calculator for tracking builder upgrades and laboratory research, with accurate Builder Potion (10x speed) and Research Potion (24x speed / 24 hrs bonus in 1 hr) simulations, Gold Pass boosts, live finish date estimators, and real-time audio completion alarms.

## 🚀 How to open in Visual Studio Code (VS Code):
1. Open **Visual Studio Code**.
2. Click **File** -> **Open Folder...** (or press `Ctrl + K`, `Ctrl + O`).
3. Select `D:\Projects\HammerJam-Calculator`.
4. If you have the **Live Server** extension installed in VS Code, simply right-click `index.html` and click **"Open with Live Server"**.

## 🌐 How to run directly:
- Just double-click `index.html` (or `start.bat`) in this folder. It will instantly launch in your default browser!

## ⚡ Features:
- **🔔 Completion Alarm Clock:**
  - Real-time audio chime/fanfare powered by Web Audio API (works 100% offline, zero audio file dependencies).
  - Native browser desktop notifications when upgrades finish (even when the tab is minimized or in the background).
  - One-click `🔔 Alarm: ON / OFF` toggle and a `🎵 Test` button in the header.
- **Dual Mode Switcher:**
  - 🔨 **Builder Upgrades:** Buildings, defenses, and heroes with **Builder Potions** (10x speed for 1 hour = 10h progress, 9h saved).
  - ⚗️ **Laboratory Research:** Troops, spells, and siege machines with **Research Potions** (24x speed for 1 hour = 24h / 1 full day bonus, 23h saved).
- **Exact Date/Time Finisher:** Calculates the exact calendar date, day of the week, and minute the upgrade completes.
- **Dynamic Presets:** Quick select durations tailored for both builders (10h, 11h 23m, 1d, 1d 14h, 2d 16h, 5d) and laboratory research (12h, 1d, 2d, 4d, 7d, 10d, 14d).
- **Gold Pass Boost (10%, 15%, 20%):** Automatically applies builder or research time reduction discounts.
- **Village JSON Importer & Profile:**
  - Automatically identifies player name, player tag (`#TAG`), Town Hall level, and active busy builders.
  - Full official mapping for Home Village defenses, heroes, pets, laboratory, and Builder Base structures (including Builder Gold Storage).
- **Saved Timers List with Filters:** Easily filter between `All`, `🔨 Builders`, `⚗️ Lab`, `🐾 Pets`, and `🛠️ Builder Base`, with individual potion steppers.
- **Auto-Save:** Saves all active countdown timers, village profile, and alarm preferences in `localStorage` across browser refreshes.
