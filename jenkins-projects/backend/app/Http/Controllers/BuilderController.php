<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Services\BuildService as Service;

class BuilderController extends Controller
{
    private $service;
    public function __construct(Service $service)
    {
        $this->service = $service;

    }
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function formatXml()
    {
        $builder = file_get_contents('build.xml');
        $xmlObject = new \SimpleXMLElement($builder);
        $path = $xmlObject->xpath("/project/target[@name='pdepend']/exec//*[@path]");
        collect($path)->first()->attributes()->path = "\${basedir}/teste";
        $xml = $this->service->generateXml([]);
        return ['build' => $xml];
        dd($path);
        return response()->json(['xml' => $builder]);
    }

    public function createXml(Request $request)
    {
        $xml = $this->service->generateXml($request);
        return ['build' => $xml];
        return response()->json(['data' => $request->all()]);
    }


}
