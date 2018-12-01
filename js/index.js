

const car =(name, model, owner, year, phone, image) => ({
	name, model, owner, year, phone, image
});

const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('Ford', 'focus', 'Max', 2013, '+374 93 56 14 25', 'img/ford.jpg'),
    car('Merceders', 'benz', 'John', 2017, '+374 94 51 74 25', 'img/merc.jpg'),
    car('Porshe', 'panamera', 'Mike', 2018, '+374 13 46 74 75', 'img/porshe.jpg')
]

new Vue({
	el:'#app',
	data: {
		cars: cars,
		car: cars[0],
		logs: [],
		selectedCarIndex: 0,
		phoneVisibility: false,
		search: '',
		modalVisibility: false

	},

	methods:{
		selectCar:function (index) {
		  this.car = cars[index]
		  this.selectedCarIndex = index
		},
		newOrder(){
          this.modalVisibility = false
          this.logs.push(
          	  log(`Succses order: ${this.car.name} - ${this.car.model}`, 'ok')
          	)
		},

		canselOrder(){
          this.modalVisibility = false
          this.logs.push(
          	  log(`Canselled order: ${this.car.name} - ${this.car.model}`, 'cnl')
          	)
		}
	},

	computed:{
		phoneBtnText() {
			return this.phoneVisibility ? 'Hide phone' : 'Show phone'
		},

		filteredCars() {
			return this.cars.filter(car =>{
				return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
			})
             
		}
	},

	filters: {
		date(value){
          return value.toLocaleString()
		}
	}
})