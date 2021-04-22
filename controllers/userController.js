let fs = require('fs');

const controller = {
    register: (req, res) => {
        return res.render('register');
    },

	create: (req, res) => {

		let userNew = {
		name : req.body.name,
	    userName : req.body.userName,
	    fecha : req.body.fecha,
	    domicilio : req.body.domicilio,
		password : req.body.password,
		role : "admin",
		image : "img-cafetera-moulinex.jpg"
		}	
		
	    let tareas = JSON.parse(fs.readFileSync('./data/userDataBase.json', 'utf-8'));
	    tareas.push(userNew);
		
		let tareasNuevas = JSON.stringify(tareas);
		fs.writeFile('./data/userDataBase.json', tareasNuevas, function(err){
			if(err){
				console.log('Ha ocurrido un error al guardar el archivo : '+err.message);
			}
			console.log('El archivo fue guardado correctamente');
			res.redirect('/login');
		});
	},
	login: (req, res) => {
		console.log('login cabron')
		res.render('login');
	},

	list: (req, res) => {
		res.send('list de user');
	},

	search: (req, res) => {
		res.send('search de user');
	},
	
	// Update - Form to edit
	edit: (req, res) => {
		let idUser = req.params.id;
		let tareas = JSON.parse(fs.readFileSync('./data/userDataBase.json', 'utf-8'));
		let userSearch = tareas.find(user => user.id == idUser);
	    res.render('userEdit',{userSearch: userSearch});
	},
	// Update - Method to update
	update: (req, res) => {
		let tareas = JSON.parse(fs.readFileSync('./data/userDataBase.json', 'utf-8'));
		tareas.forEach(element => {
			if(element.id == req.body.id){
				element.name = req.body.name;
				element.lastName = req.body-lastName;
			}
						
		});
		res.render('login');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		res.send('delete user');
	}
};

module.exports = controller;