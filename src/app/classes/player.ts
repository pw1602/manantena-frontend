export class Player {
    constructor (
        public id: number,
        public name: string,
		public level: number,
		public vocation: number,
		public health: number,
		public healthmax: number,
		public experience: number,
		public lookbody: number,
		public lookfeet: number,
		public lookhead: number,
		public looklegs: number,
		public looktype: number,
		public lookaddons: number,
		public maglevel: number,
		public mana: number,
		public manamax: number,
		public town_id: number,
		public sex: number,
		public lastlogin: string,
		public stamina: number,
		public skill_fist: number,
		public skill_club: number,
		public skill_sword: number,
		public skill_axe: number,
		public skill_dist: number,
		public skill_shielding: number,
		public skill_fishing: number,
		public house: string,
		public deaths: string,
		public outfit: string
		//public online: number,
		//public marriage: number,
		//public description: string,
        //public guild: string = "Example Guild",
        //public created: string = "00/00/0000",
        //public status: string = "Premium Account",
	) {};
	
	setPlayerData(data) {
		this.id = data[0].id;
		this.name = data[0].name;
		this.level = data[0].level;
		this.vocation = data[0].vocation;
		this.health = data[0].health;
		this.healthmax = data[0].healthmax;
		this.experience = data[0].experience;
		this.lookbody = data[0].lookbody;
		this.lookfeet = data[0].lookfeet;
		this.lookhead = data[0].lookhead;
		this.looklegs = data[0].looklegs;
		this.looktype = data[0].looktype;
		this.lookaddons = data[0].lookaddons;
		this.mana = data[0].mana;
		this.manamax = data[0].manamax;
		this.town_id = data[0].town_id;
		this.sex = data[0].sex;
		this.lastlogin = new Date(data[0].lastlogin).toLocaleString();
		this.stamina = data[0].stamina;
		this.house = data[0].house;
		this.deaths = data[0].deaths;
		/*this.online = data[0].online;
		this.marriage = data[0].marriage;
		this.description = data[0].description;

		data.forEach(data => {
			this.skills[0] = data.maglevel;
			this.skills[data.skillid + 1] = data.value;
		});*/
	}

	getNextLevelExperience(): number {
		return ((50 * Math.pow(this.level, 3)) / 3) - (100 * Math.pow(this.level, 2)) + (850 * this.level / 3) - 200;
	}
}
