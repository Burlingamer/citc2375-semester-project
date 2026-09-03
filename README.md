# Infrastructure Clicker (InfraClicker)

An incremental clicker game where players accumulate currency by clicking and purchasing automated upgrades. As players earn currency, they unlock more powerful "generators" and other upgrades that increase cashflow over time. However, the game becomes more complex for the player to manage over time. The app manages the shop inventory, player currency states, and various generators / upgrades that are active.

### Item Management
* Type of items managed: Purchaseable Generators/Upgrades
* Expected Item Fields: `id`, `name`, `category`, `description`, `baseCost`, `baseOutput`, `costMultiplier`

### Project Deployment

- GitHub Repository: https://github.com/Burlingamer/citc2375-semester-project/
- Live Site: https://citc2375-iburlingame-project.onrender.com/
- Project Topic: A progression-based clicker game with resource management.

### Planned Data Model
* Expected fields for every Infrastructure item:
- `id`: Unique identifier for each item
- `name`: Internal name for item
- `category`: Infrastructure item category, ex. generator or consumable
- `description`: Brief description of the item
- `level`: The item's level in the game, determining its other stats
- `baseCost`: The starting cost of the item for the player to acquire it
- `unitYield`: The yield of the item at any given time
- `cycleTime`: The interval at which the item applies its unitYield
- `costMultiplier`: The cost multiplier for each subsequent upgrade of the item
- `all-time yield`: The total unit yield of the item during the lifetime of the game
* Some fields may change or others could be added.

## Project Progress
### Week 3
- Created a simple, universal stylesheet for the entire website.
- Overall increased visual appeal of the website
- Made Infrastructure items have dynamic sizing and inline behavior
- Tweaked project description
