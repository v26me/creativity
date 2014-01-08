<!DOCTYPE html>
<html>
<head>
	<title>Творческий поиск. Эксперимент</title>
	<meta charset="utf-8">
	<script src="jquery.js"></script>	
	<script src="d3.js" charset="utf-8"></script>	
	<script src="game.js"></script>		
	<link rel="stylesheet" href="bootstrap.min.css">  
	<link rel="stylesheet" href="font-awesome/css/font-awesome.css">  
	<link rel="stylesheet" href="game.css">  
</head>
<body>	
	<div class="container">
		<div class="intro hide">
			<div class="jumbotron">
				<h1>Творческий поиск</h1>
				<p>
				Спасибо за то, что согласились принять участие в исследовании.
				</p>
				 <p>В ходе эксперимента вы будете рисовать фигурки. Каждая фигурка состоит из десяти связанных между собой квадратов. Вы начинаете с чистого листа и можете добавлять по одному квадрату за раз. После того как фигурка будет нарисована, вы можете сохранить ее, если она вам понравилась или начать рисовать заново.
				 </p>
				 <p>Ваша задача — попробовать нарисовать что-нибудь интересное или симпатичное. На последнем этапе эксперимента вам будет предложено выбрать фигурки, которые вам больше всего нравятся.</p><p>Вы можете закончить эксперимент в любой момент времени, но мы просим вас потратить на него хотя бы 5 минут.
				</p>
				<p class="centered"><button type="button" class="go-next btn btn-success btn-lg">Начать эксперимент</button></p>
			</div>
		</div>

		<div class="perso hide">
			<h2>Пожалуйста, расскажите немного о себе</h2>
			<form id="person" role="form">
			    <div class="form-group">
			    	<label for="formName">Имя или псевдоним</label>
			    	<input type="text" name="name" class="form-control" id="formName" />
			  	</div>
			  	<div class="form-group">
				    <label for="formAge">Возраст</label>
				    <input type="text" name="age" class="form-control" id="formAge" />
		        </div>			  			 	
				<div class="form-group">
					<label>Пол</label>
					<div class="radio">
					    <label>
						<input type="radio" name="sex" id="formFemale" value="0" checked>
						Женский
						</label>
					</div>
					<div class="radio">				  
					    <label>
					    	<input type="radio" name="sex" id="formMale" value="1">
					    	Мужский
					    </label>
					</div>
				</div>
			    <button type="button" class="btn btn-success go-next">Продолжить</button>
			</form>
		</div>

		<div class="main hide">
			<div class="row">
				<div class="game col-md-8">			
					<div id="tip" class="alert alert-info"><strong>Подсказка</strong> Начните со светло-зеленого квадрата в центре</div>	
					<div class="grid">
					</div>
				</div>
				<div class="col-md-4">
					<div class="panel panel-default">
						<div class="panel-heading">Меню эксперимента</div>
						<div class="panel-body">
							<p>
								Осталось квадратов: <span id="sq_left">10</span>
							</p>
							<p class="panel-buttons">
								<button type="button" disabled="disabled" class="btn btn-sm btn-success btn-save">Сохранить фигурку</button>
								<button type="button" disabled="disabled" class="btn btn-sm btn-info btn-again">Начать заново</button>
							</p>
							<p>
								
							</p>
							<hr />
							<p>
								Время эксперимента: <span id="time_pass">00:00<span>
							</p>
							<p>
								<button type="button" class="btn btn-sm btn-warning go-next">Закончить эксперимент</button>
							</p>
							<hr />
							Сохраненные фигурки
							<div class="saved">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="gallery hide">
			<h1 class="centered">Выберите фигурки, которые вам больше всего нравятся</h1>
			<div class="selected">
			</div>
			<p class="centered">
				<button type="button" class="btn btn-success btn-lg go-next">Сохранить выбор</button>
			</p>
		</div>

		<div class="thanks hide">
			<h1 class="centered">Большое спасибо за участие в эксперименте! <i class="fa fa-heart"></i></h1>
		</div>
	</div>
</body>
<html>