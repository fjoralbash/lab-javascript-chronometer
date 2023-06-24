class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliseconds = 0;
  }

  // start(callback) {
  //   this.intervalId = setInterval(() =>
  //   {this.currentTime++;
  //     if (callback) callback();
  //   console.log(this.currentTime);
  //   }, 1000);
  // }

start(callback) {
 this.intervalId = setInterval(() => {

  if (callback) { // si el método start recibe la función callback tenemos que ejecutar la función callback
   callback();
   }

  this.milliseconds++; // cada 10 milisegundos sumamos un número a milliseconds

  if(this.milliseconds === 99){ //si los miliseconds son igual a 99 (pq no queremos que los milliseconds lleguen a 100);
  this.currentTime++; // mientras la condición suceda sumamos un número a currentTime
   this.milliseconds = 0; // reseteamos los milliseconds para que se produzca todo el rato un bucle.
   }
   }, 10);
 }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime%60;
  }


  computeTwoDigitNumber(value) {
    return ('0'+value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;  
    this.milliseconds = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(this.milliseconds); 
    return `${minutes}:${seconds}:${milliseconds}`;

    // return `${minutes}:${seconds}`;
    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
