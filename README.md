# Infrastructure Clicker (iClicker)

An incremental clicker game where players accumulate currency by clicking and purchasing automated upgrades. As players earn currency, they unlock more powerful "generators" and other upgrades that increase cashflow over time. However, the game becomes more complex for the player to manage over time. The app manages the shop inventory, player currency states, and various generators / upgrades that are active.

### Item Management
* Type of items managed: Purchaseable Generators/Upgrades
* Expected Item Fields: `id`, `name`, `category`, `description`, `baseCost`, `baseOutput`, `costMultiplier`