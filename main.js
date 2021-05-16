// /**
//  * MILESTONE 1 CREARE UN ARRAY DI OGGETTI ; OGNI OGGETTO SARA' UN GATTO
//  * NOME COLORE ETA' SESSO
//  */

//array di oggetti gatto
var gatti = [
{nome:'romeo',sesso:'maschio',colore:'red',eta:2,},
{nome:'guendalina',sesso:'femmina',colore:'lime',eta:3},
{nome:'arcibaldo',sesso:'maschio',colore:'blue',eta:5},
{nome:'luky',sesso:'maschio',colore:'white',eta:8},
{nome:'nerina',sesso:'femmina',colore:'black',eta:1},
{nome:'orfeo',sesso:'maschio',colore:'orange',eta:6},
{nome:'felix',sesso:'femmina',colore:'lightblue',eta:7},
{nome:'gino',sesso:'maschio',colore:'azure',eta:1},
{nome:'rodrigo',sesso:'maschio',colore:'purple',eta:2},
{nome:'selina',sesso:'femmina',colore:'pink',eta:3},

];



let maschi = [], femmine =[];

gatti.forEach((gatto)=>{
  gatto.fiocco ='fas fa-ribbon'
if(gatto.sesso ==='maschio'){
  gatto.coloreFiocco = 'darkblue';
  maschi.push(gatto)
} else {
  femmine.push(gatto)
  gatto.coloreFiocco = 'pink'
}
});
console.log(maschi,femmine);


gatti.forEach((gatto)=>{
  if ((gatto.eta < 5)&&(gatto.sesso =='maschio')) {
    gatto.coloreFiocco = 'lightblue'
  } else if ((gatto.eta < 5)&&(gatto.sesso=='femmina')){
    gatto.coloreFiocco ='#e7547f'
  }
})



gatti.forEach((gatto)=>{
document.getElementById('container').insertAdjacentHTML('beforeend',
`
<div class="gatto">
<i class="${gatto.fiocco}" style="color: ${gatto.coloreFiocco};filter:opacity(${gatto.eta * 5 }%)"></i>
<i class="fas fa-cat" style='color:${gatto.colore}'></i>
<h3>${gatto.nome}</h3> 
</div>
`
)
});























// const gattiMaschi = gatti.filter((gatto)=>{
//   return gatto.sesso ==='maschio'
// })
// console.log(gattiMaschi);
// const gattiFemmine = gatti.filter((gatto)=>{
//   return gatto.sesso ==='femmina'
// });

// console.log(gattiFemmine);






