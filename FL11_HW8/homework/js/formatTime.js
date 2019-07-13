function formatTime(a) {

 let hour = 60;
 let day = 24 * hour;

 if (a < hour) {
   return ('0 days 0 hours ' + a + ' minutes')
 } else if (a >= hour && a < day) {
   return ('0 days ' + Math.floor((a/hour)) + ' hours ' + (a%hour) + ' minutes')
 } else if (a >= day) {
  return (Math.floor(a/day)+' days ' + Math.floor((a - Math.floor(a/day)*day)/hour) + ' hours ' + (a%hour) + ' minutes')
 } 
}


formatTime(120); 
formatTime(59);
formatTime(3601); 