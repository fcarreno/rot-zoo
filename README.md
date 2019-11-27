# rot-zoo


### SIMPLE ZOO COMMAND LINE UTILITY:
#### Gets an animal along with a phrase and responds in specific animal language.


### Accepts three parameters
* `specie`: [LION|DUCK|TIGER|CustomValue]
* `phrase`: [STRING]
* `customSound`: [STRING] (only works for custom species)

### SETUP & RUN

1. Clone the repo
2. `npm install` (install dependencies)
3. `node zoo.js --specie=[specie] --phrase=[phrase]`
   Example: `node zoo.js --specie=LION --phrase="I'm the lion of the jungle!"`

NOTE: at least on Windows, when parameter values include spaces, they need to be wrapped in double quotes (`"`)