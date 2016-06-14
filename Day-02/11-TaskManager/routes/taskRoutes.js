var express = require('express');
var router = express.Router();

var taskRepository = [
	{id : 1, name : "Watch a movie", isCompleted : false},
	{id : 2, name : "Visit punjab", isCompleted : false},
	{id : 3, name : "Fix that bug", isCompleted : true}
];

router.get('/', function(req, res, next){
	//res.json(taskRepository);
	res.render('tasks/index', {list : taskRepository});
});

router.get('/new', function(req, res, next){
	res.render('tasks/new');
});

router.post('/new', function(req, res, next){
	var newTaskName = req.body.newTaskName;
	var newTaskId = taskRepository.reduce(function(result, task){
		return result.id > task.id ? result : task;
	}).id + 1;
	var newTask = {
		id : newTaskId,
		name : newTaskName,
		isCompleted : false
	};
	taskRepository.push(newTask);
	res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
	var taskId = parseInt(req.params.id, 10);
	var task = taskRepository.filter(function(t){
		return t.id === taskId;
	})[0];
	if (task){
		task.isCompleted = !task.isCompleted;
	}
	res.redirect('/tasks');
})

module.exports = router;