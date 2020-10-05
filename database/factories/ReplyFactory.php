<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Reply;
use Faker\Generator as Faker;
use App\Model\Question;
use App\Model\User;
$factory->define(Reply::class, function (Faker $faker) {
    return [
        'body' => $faker->word,
        'question_id' => function(){
            return Question::all()->random();
        },
        'user_id' => function(){
            return User::all()->random();
        }
    ];
});
