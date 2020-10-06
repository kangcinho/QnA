<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = ['title', 'slug', 'body', 'category_id', 'user_id'];

    public function getRouteKeyName(){
        return 'slug';
    }

    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }

    public function reply(){
        return $this->hasMany('App\Model\Reply', 'question_id', 'id');
    }

    public function category(){
        return $this->belongsTo('App\Model\Category', 'category_id');
    }
}
