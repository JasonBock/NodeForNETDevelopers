///<reference path='./Scripts/typings/moment/moment.d.ts' />

export module Person{
	export module TypeScript {
		export class Person {
			private _birthDate: Date;
			private _name: string;

			constructor(birthDate: Date, name: string) {
				this._birthDate = birthDate;
				this._name = name;
			}

			public toString(): string {
				return this._name + ", " + this._birthDate;
			}

			public get birthDate(): Date {
				return this._birthDate;
			}

			public get name(): string {
				return this._name;
			}
		}
	}
}

