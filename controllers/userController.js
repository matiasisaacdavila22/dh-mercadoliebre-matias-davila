const jsonDatabase = require('../model/jsonDataBase.json');
const model = jsonDatabase('userDataBase');

const controller = {
    register: (req, res) => {
        return res.render('user/register');
    },

	create: (req, res) => {

		let userNew = {
		name : req.body.name,
	    userName : req.body.userName,
	    fecha : req.body.fecha,
	    domicilio : req.body.domicilio,
		password : req.body.password,
		perfil : req.body.perfil,
		categorias: req.body.categorias,
		file : req.body.photo
		}	
		
		model.create(userNew);
		return res.render('user/login');

	},
	login: (req, res) => {
		res.render('user/login');
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
		tareas = tareas.filter(user => {
			 return	user.id != req.body.id;					
		});
		let userUpdate = {
			id: req.body.id,
			name : req.body.name,
			userName : req.body.userName,
			fecha : req.body.fecha,
			domicilio : req.body.domicilio,
			password : req.body.password,
			perfil : req.body.perfil,
			categorias: req.body.categorias,
			file : req.body.photo
			}	
		   tareas.push(userUpdate);
           let tareaUpdate = JSON.stringify(tareas);
		fs.writeFile('./data/userDataBase.json', tareaUpdate, function(err){
			if(err){
				console.log('Ha ocurrido un error al guardar el archivo : '+err.message);
			}
			console.log('El archivo fue guardado correctamente');
			res.redirect('/');
		});

	},

	delete : (req, res) => {
		let tareas = JSON.parse(fs.readFileSync('./data/userDataBase.json', 'utf-8'));
		tareas = tareas.filter(user => {
			 return	user.id != req.params.id;					
		});
		let TareasUpdate = JSON.stringify(tareas);
		fs.writeFile('./data/userDataBase.json', TareasUpdate, function(err){
			if(err){
				console.log('Ha ocurrido un error al guardar el archivo : '+err.message);
			}
			console.log('El archivo fue guardado correctamente');
			res.redirect('/');
		});
	}
};

module.exports = controller;