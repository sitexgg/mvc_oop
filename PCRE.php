<?php
/*Regular Expressions Perl-Compatible*/
/*Регулярные Выражение Perl-Совместмые*/

class PCre {


	public function email($str) {
 		echo preg_match('#^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,4}$#', $str);
	}

	public function domain($str) {
		echo preg_match_all('#[a-z]+\.([a-z]{2,4})#', 'domain.net');
	}



}

$reg = new PCre;
