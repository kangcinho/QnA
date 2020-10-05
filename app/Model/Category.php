<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name', 'slug', 'user_id'];

    public function question(){
        return $this->hasMany('App\Model\Question', 'category_id', 'id');
    }

    public function user(){
        return $this->belongsTo('App\Model\User', 'user_id');
    }

    public function getRouteKeyName(){
        return 'slug';
    }
}
