<?php
/*Regular Expressions Perl-Compatible*/


class PCre {


	public $Dmat = [];
	public $Emat = [];

	public function email($str) {
 		if(preg_match_all('#^([a-zA-Z0-9-.]+)@([a-z]+)\.([a-z]{2,4})$#', $str, $mat)) {
 			$this->Emat = $mat;
		}
	}

	public function domain($str) {
		if(preg_match_all('#^([a-z0-9]+)\.([a-z]{2,4}$)#', $str, $mat)) {
			$this->Dmat = $mat;
		}
	}

	


}

$e = '234fd234sdf@gsg.sew';
$x = 'don.ss';
$reg = new PCre;
$reg->domain($x);
echo '<pre>';

var_dump($reg->Dmat);
