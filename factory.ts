import Ritsu = require('core/ritsu');
export = Factory;
class Factory {

  name: string;
  _map: any;

  constructor(public name:string){
    this.name = name;
    this._map = {
      'Ritsu' : function(){
        return new Ritsu();
      },
    };
  }

  get() {
    var class_name = this.name.charAt(0).toUpperCase() + this.name.substr(1);
    console.log(class_name);
    console.log(this._map);
  }
}
