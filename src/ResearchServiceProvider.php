<?php

namespace Spork\Research;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Spork\Core\Spork;

class ResearchServiceProvider extends ServiceProvider
{
    public function register()
    {
        Spork::addFeature('research', 'BeakerIcon', '/research', 'tool');

        if (config('spork.research.enabled')) {
            Route::prefix('api')->group(__DIR__.'/../routes/api.php');
        }
    }
}
