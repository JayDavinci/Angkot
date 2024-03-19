<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Juragan angkot</title>
</head>
<script>
   var penumpang = [];
   var tambahpenumpang = function(namapenumpang, penumpang){
      if (penumpang.length == 0){
         penumpang.push(namapenumpang);
         return penumpang; 
      }
      else{
         for(var i = 0; i < penumpang.length; i++){
            if (penumpang [i] == undefined){
               penumpang [i] = namapenumpang;
               return penumpang;
            }
            else if(penumpang [i] == namapenumpang){
               console.log(namapenumpang + 'Sudah ada didalam angkot')
               return penumpang
            }
            else if (i == penumpang.length - 1){
               penumpang.push(namapenumpang);
               return penumpang;
            }
         }
      }
      
   }
   var turunpenumpang = function(namapenumpang, penumpang){
      if (penumpang.length == 0){
         console.log('Angkot Kosong');
         return penumpang;
      }
      else{ 
         for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namapenumpang){
               penumpang[i] = undefined;
               // return penumpang;
            }
            else if(i == penumpang.length - 1){
               console.log(namapenumpang + 'Tidak ada didalam Angkot');
               // return penumpang;
            }

         }
         // console.log("Tidak ada penumpang yang sesuai");
         return penumpang;
      }
   }

</script>
<body>
   
</body>
</html>
