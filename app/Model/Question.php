<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    
    public function user(){
        return $this->belongsTo('App\Model\User', 'id', 'user_id');
    }

    public function reply(){
        return $this->hasMany('App\Model\Reply', 'question_id', 'id');
    }

    public function category(){
        return $this->belongsTo('App\Model\Category', 'id', 'category_id');
    }
}
