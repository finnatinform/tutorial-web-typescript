// dont reference a module, import it
import {Animal} from './animal' ;
import Zoo = require('./zoo');
class Lion extends Animal{

}

Zoo.welcomeGuests();