# Infrastructure Clicker (InfraClicker)

An incremental clicker game where players accumulate currency by clicking and purchasing automated upgrades. As players earn currency, they unlock more powerful "generators" and other upgrades that increase cashflow over time. However, the game becomes more complex for the player to manage over time. The app manages the shop inventory, player currency states, and various generators / upgrades that are active.

### Item Management
* Type of items managed: Purchaseable Generators/Upgrades
* Expected Item Fields: `id`, `name`, `category`, `description`, `baseCost`, `baseOutput`, `costMultiplier`

### Project Deployment

- GitHub Repository: https://github.com/Burlingamer/citc2375-semester-project/
- Live Site: https://citc2375-iburlingame-project.onrender.com/
- Project Topic: A progression-based clicker game with resource management.

## Planned Data Model
Expected fields for every Infrastructure item:
- 'id', 'name', 'category', 'description', 'level', 'baseCost', 'unitYield', 'cycleTime', 'costMultiplier', 'all-time yield'