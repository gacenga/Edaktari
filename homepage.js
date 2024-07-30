let docChoice=confirm("Do you need Dr.GPT consultation services");
if(docChoice){
   let diSease= prompt("where are you ailing?");
   if(diSease){
         let ailMent=diSease.trim().toLowerCase();
         if(ailMent=="pneumonia"||ailMent=="ear infection"||ailMent=="chest infection"||ailMent=="sti"){
            let presCription=Math.round(Math.random()*3+1);
            let meDicine=
            presCription===1?"Augmentin"
            :presCription===2?"Amoxicillin"
            :"Azithromycin";
            alert (meDicine);
         }else {if(ailMent=="headache"||ailMent=="backache"||ailMent=="toothache"){
                let presCription=Math.round(Math.random()*3+1);
                let meDicine=
                presCription===1?"panadol extra"
                :presCription===2?"mara moja"
                :"aspirin";
                alert (meDicine);
         }else{
            alert("Please call 0746952822 to make an appointment with the doctor")
         }
        }
   }else{
    alert("Sorry,seems like you forgot to input ailment")
   }}else{
    alert("okay,I wish good health")
}
