<?php

namespace App\Services;

class BuildService
{
    private $xmlObject;

    public function __construct()
    {
        $builder = file_get_contents('build.xml');
        $this->xmlObject = new \SimpleXMLElement($builder);
    }

    public function generateXml($request)
    {
        foreach (['pdepend' => 'app'] as $key => $value) {
            switch ($key) {
                case 'pdepend':
                    $this->pdepend($value);
                    break;

                default:
                    # code...
                    break;
            }
        }
        return $this->xmlObject->asXML();
    }

    private function pdepend($value)
    {
        $path = $this->xmlObject->xpath("/project/target[@name='pdepend']/exec//*[@path]");
        collect($path)->first()->attributes()->path = '${basedir}/' . $value;
    }
}
