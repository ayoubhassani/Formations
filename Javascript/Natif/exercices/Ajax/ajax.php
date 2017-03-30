<?php
//echo '<p>Helllo Word !</p><p>Welcom to my Ajax Document</p>';
//$teste = [['name'=> 'Gasquez','prenom'=>'Christophe'],
//    ['name'=>'Gaucher','prenom'=>'Olivier']];
//echo json_encode($teste);

if(isset($_REQUEST["company"])){
    $company = $_REQUEST["company"];
    $users = [];
    if($company=="EDF"){
        $users = [];
        $users["0"] ="ayoub";
        $users["1"] ="david";
        $users["2"] ="Cryspi";
        $users["3"] ="Eric";
    }
    if($company=="FTEF TFE"){
        $users = [];
        $users["0"] ="Fred";
        $users["1"] ="Edouard";
        $users["2"] ="Jean";
        $users["3"] ="Marc";
    }
    if($company=="LA POSTE"){
        $users = [];
        $users["0"] ="Victor";
        $users["1"] ="François";
        $users["2"] ="Abdel";
        $users["3"] ="Hector";
    }
    if($company=="CARREFOUR"){
        $users = [];
        $users["0"] ="Synthia";
        $users["1"] ="Lea";
        $users["2"] ="Anna";
        $users["3"] ="Élisa";
    }
    echo json_encode($users);
}else
{
    $companies=[];
    $companies["0"]="EDF";
    $companies["1"]="FTEF TFE";
    $companies["3"]="LA POSTE";
    $companies["4"]="CARREFOUR";
    echo json_encode($companies);


}
//echo '<p>Fin Ajax</p>';
?>