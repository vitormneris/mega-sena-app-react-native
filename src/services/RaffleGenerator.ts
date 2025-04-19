export class RaffleGenerator {
    private drawnNumbers: number[];

    public constructor() {
        this.drawnNumbers = [];
    }

    public generateNumbers() {
        const min: number = 1;
        const max: number = 60;
        this.drawnNumbers = [];

        while (this.drawnNumbers.length < 6) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

            if (!this.drawnNumbers.includes(randomNumber)) {
                this.drawnNumbers.push(randomNumber);
            }
        }
    }

    public getNumbers(): number[] {
        return this.drawnNumbers;
    }
}
