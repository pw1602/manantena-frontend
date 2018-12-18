export class Player {
    constructor (
        public id: number = 1,
        public name: string = "Example Player",
        public sex: string = "Male",
        public level: number = 1,
        public town: string = "Example Town",
        public guild: string = "Example Guild",
        public house: string = "Example House",
        public created: string = "00/00/0000",
        public lastlogin: string = "00/00/0000",
        public status: string = "Premium Account",
        public skills: number[] = [10, 10, 10, 10, 10, 10, 10, 10]
    ) {};
}
