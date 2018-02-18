<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Category;

class CategoryController extends Controller { 
	public function categories() {
		$ob = new \StdClass; 

		$ob->records = Category::all();

		return json_encode($ob);
	}
}
