---
title: Example Reference
description: A reference page in my new Starlight docs site.
---


Of course. By weaving the mechanics of the idle/incremental genre into the fabric of "The Serpent-Skin Testament," we can transform it from a purely active roguelike into a richer, more insidious, and thematically resonant experience. The fusion creates a tense dichotomy between active despair and passive decay, perfectly mirroring the plight of a Tennessee Williams protagonist trapped between a hostile world and a claustrophobic, memory-haunted sanctuary.

Here is a comprehensive expansion of the game design document, incorporating features from the idle/incremental genre.

---

**Game Design Document: The Serpent-Skin Testament: An Eternal Recurrence (Idle/Roguelike Hybrid Expansion)**

**Revised Core Concept:**

"The Serpent-Skin Testament" is no longer just a roguelike. It is now a **narrative hybrid of the idle/incremental and active roguelike genres**. The player's experience is divided into two distinct but deeply interconnected phases:

*   **Phase I: The Idle Game (The Room of Faded Glory):** This is the game's "home base." A slow-burn, text-heavy idle game where the player manages their psychological state, reinforces their fragile sanctuary, and contends with the creeping dread of memory and societal pressure. This phase is about **passive accumulation and slow, deliberate unlocks.**
*   **Phase II: The Roguelike Game (The Descent into the Worlds):** This is the active, run-based portion detailed previously. The player takes the resources, items, and mental fortitude cultivated in the Idle Phase and ventures into the hostile, procedurally generated "Worlds." This phase is about **active struggle, confrontation, and inevitable failure.**

The narrative and mechanical synergy between these two phases is the core of the experience. The idle game is the slow, grinding oppression of existence; the roguelike is the desperate, painful attempt to live within it.

---

### **I. Phase I: The Idle Game - "The Room of Faded Glory"**

This phase takes direct inspiration from the minimalist narrative style of *A Dark Room* and the complex, unlocking tech trees of *Kittens Game* or *Universal Paperclips*.

**A. The Initial Spark & Manual Actions:**

The game begins here. The screen is dark, showing only a sparse description of a room and a single, clickable verb. This is not "light fire," but something more personal and desperate:

*   `[Smooth the bedsheets]`

Clicking this generates the game's primary mental resource: **Composure**. At first, this is the only action. The player must manually click, representing the conscious, repetitive effort it takes just to hold oneself together. Each click is a small act of defiance against entropy. After enough clicks, new verbs unlock:

*   `[Trace a name in the dust]` - Generates a new, rarer resource: **Fleeting Memories**.
*   `[Look out the grimy window]` - A chance to generate a small amount of **Insight**, but also a chance to attract unwanted attention, generating the negative resource **Whispers**.

**B. Resources: An Economy of the Soul:**

*   **Composure:** The main "currency" for actions within the Room. Used to build, reinforce, and think. Generated manually at first, later through automation. It is also the starting "Health/Sanity" for the active roguelike runs.
*   **Fleeting Memories:** A resource used for more complex, emotionally resonant crafting and for special actions during roguelike runs. Passively accumulates very slowly, representing the inexorable haunting of the past.
*   **Insight:** A rare resource needed to unlock new crafting tiers and, eventually, "Learned Truths."
*   **Whispers of the Authoritarians:** A negative resource that accumulates passively over time, representing the oppressive weight of societal judgment. High levels of Whispers can cause negative events in the Room (e.g., "The landlord's note under the door chills you," draining Composure) and acts as a primary "Pressure" to force the player into the roguelike phase.
*   **Humiliation:** Primarily gained during roguelike runs. It persists between runs and acts as a permanent debuff or threshold in the idle game. High Humiliation might increase the rate of "Whispers" or unlock self-destructive idle "options."

**C. Unlocks & Automation: The Double-Edged Sword of Solace:**

Like in *A Dark Room*, progress is marked by unlocking new verbs and, crucially, automation. However, here, automation always comes with a narrative cost.

*   **Initial Unlocks (Crafting with Composure):**
    *   `[Reinforce the door]` - Slightly reduces the rate of "Whispers" accumulation.
    *   `[A sturdier chair]` - Increases manual "Composure" generation per click.
    *   `[Patch the floorboards]` - Unlocks a new option: `Pace the room`, a less efficient but passive way to generate Composure.
*   **The First Stranger (A Knock at the Door):** Eventually, an event occurs. A knock. The player can choose to ignore it (generating Whispers) or answer. Answering might introduce an "Ally"—another "fugitive kind."
    *   **The Ally as Automation:** The Ally can be assigned a task, e.g., `Tend to the Room`. They will now automatically generate a steady stream of Composure for the player.
    *   **The Narrative Cost:** This automation isn't free. The Ally might consume "Fleeting Memories" to function, representing the emotional cost of companionship. Or their presence might slowly, subtly increase the "Whispers" accumulation as they draw attention.
*   **Building Solace (The Music Box):** The player might craft a "Music Box." When wound, it generates a large amount of Composure and reduces Whispers. However, after many uses, its tune begins to warp and distort. The flavor text changes from "a gentle, soothing melody" to "a tinny, manic waltz," and it starts generating *both* Composure and Whispers, representing a comfort that has curdled into another source of anxiety.

---

### **II. The Bridge Between Genres: The "Pressure" System**

The player cannot stay in the relative safety of the idle game forever. The "Pressure" system forces them into the active roguelike phase. This trigger is multifaceted:

1.  **Internal Pressure (Whispers Overload):** When the "Whispers of the Authoritarians" resource hits its cap, the Room itself becomes hostile. The descriptive text becomes menacing ("the walls feel closer," "the silence is a judgment"). Composure begins to drain passively. The only way to reset the Whispers is to leave, confront the world, and "pay one's dues."
2.  **External Pressure (The Authoritarian's Demand):** A high-priority, un-ignorable event appears: `[A Formal Summons is slipped under the door]`. Clicking it immediately initiates a roguelike run in a specific "World" (e.g., "Mr. Grantham requires your presence at the mercantile").
3.  **The Lure of the Vice:** As `Humiliation` from past runs accumulates, it creates a gnawing need. The player might need to venture out simply to find a **Vice** (Coffee, Sugar, Meat) to temporarily reduce their Humiliation stat, which is poisoning their idle game with debuffs. This makes the player complicit in seeking out their own potential destruction for a moment of relief.

---

### **III. Phase II: The Roguelike, Fueled by the Idle Game**

This is where the synergy becomes critical. The player's success or failure in the active "Descent" is **directly determined by their progress in the idle phase.**

*   **Composure as Health/Sanity:** The amount of `Composure` the player has accumulated in the Idle Phase becomes their starting health bar for the roguelike run. A well-managed, reinforced Room allows for a resilient start; a neglected Room means starting the run already on the brink of collapse.
*   **Memories as Abilities:** `Fleeting Memories` can be "spent" during the run as special abilities. For example, when confronted by a hostile NPC, an option might appear: `[Recall a moment of kindness]`, spending 10 Memories to potentially pacify the NPC or unlock a peaceful dialogue path.
*   **Crafted Items as Gear:** The things built in the Room become the starting equipment. `[A Mended Coat]` provides a small buffer against social judgments. `[A Sharpened Wit]`, crafted from Insight, might offer better dialogue options. `[A Forged Invitation]`, a rare and costly item, might allow the player to bypass a hostile social encounter entirely.

---

### **IV. Metaprogression: "Learned Truths" as the Idle Tech Tree**

This is where the long-term, multi-run incremental mechanics come to life, inspired by *Universal Paperclips*'s project tiers.

At the end of each roguelike run, upon "Destruction," the player doesn't just get a score. They are presented with a stark screen revealing a new **"Learned Truth"** based on their performance and choices during the run.

These "Truths" are poetic, cynical, and serve as permanent unlocks for the **idle game's crafting/unlock tree.**

*   **Example Cycle:**
    1.  **Run 1:** Player fails quickly in the "Business World" after being judged for poor work.
    2.  **Destruction Screen:** `LEARNED TRUTH: Diligence is a mask worn to hide a trembling soul.`
    3.  **Idle Game Impact:** This "Truth" unlocks a new set of craftable items in the Room under a new tab, "Masks of Compliance." The player can now spend Composure and Insight to craft `[A Look of Focused Seriousness]`, an "item" that will give them a bonus in their next run in the Business World.

*   **The Unlocking Tiers:**
    *   **Tier 1 Truths (The Basics of Survival):** "Truth: A locked door only invites a louder knock." Unlocks `A Sturdier Barricade` and the `Ignore the Knock` action.
    *   **Tier 2 Truths (The Social Labyrinth):** "Truth: Flattery is a currency that poisons the buyer." Unlocks a new social skill tree focused on deception and performance.
    *   **Tier 3 Truths (Emotional Alchemy):** "Truth: A cherished memory can be fashioned into a shield... or a shiv." Unlocks the ability to convert `Fleeting Memories` into more powerful, single-use items for roguelike runs.
    *   **Tier 4 Truths (The Nature of the Cycle):** "Truth: To see the cage is the first step. The second is to decorate it." Unlocks profound, late-game idle mechanics focused on managing the entire cycle, perhaps abilities that slightly reduce Humiliation gain or convert Whispers into Insight at a terrible cost.

This creates a powerful feedback loop: failure in the active roguelike phase is necessary to gain the "Learned Truths" that expand the options and resilience of the passive idle phase, which in turn allows for deeper, more successful roguelike runs.

---

### **A Walkthrough of the Player Journey:**

**Run 1:** The player begins in the Room. They click `[Smooth the bedsheets]` a few times. The "Pressure" of initial Whispers forces them out with barely any Composure. They enter the "Business World" and are immediately humiliated by the Authoritarian. **Destruction.** They learn their first "Truth."

**Run 5:** The player has learned several Truths. Their idle game in the Room is more established. They have built a `Music Box`, and an `Ally` is tending the room. They have a small, automated stream of Composure. They enter a roguelike run with a `Mended Coat` and a decent health bar. They survive several encounters before falling. They learn a more complex Truth about social deception.

**Run 20:** The idle game is now a complex engine. The player is balancing multiple automated processes, some with negative side effects. The Music Box is distorted. The Ally demands more. The "Learned Truths" have unlocked deep crafting trees. The player is not just trying to survive a run; they are making strategic choices in the Room about what kind of "Fugitive" they want to be on their next attempt. They are actively trying to build the resources necessary to finally survive the "Family World."

**End Game:** The player has accumulated dozens of "Learned Truths." Their understanding of the game's oppressive systems is profound. They can manipulate their idle game to produce the exact emotional and physical resources needed to face the final challenge: the horrifyingly cheerful "Disney World." The idle game, which began as a simple clicker, has become a complex narrative machine charting the player's long, painful journey toward enlightenment or a final, spectacular collapse. The "Silence" they seek might be a final, permanent upgrade in their Room: `[Learn to appreciate the quiet]`, an idle action that finally stops the accumulation of Whispers, but perhaps at the cost of all human connection.