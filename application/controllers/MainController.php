<?php

namespace application\controllers;

use application\core\Controller;

class MainController extends Controller {

	public function indexAction() {
		echo 'Главная страница';
	}

	public function contactAction() {
		echo "Contocts";
	}
}
