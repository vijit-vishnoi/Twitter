import User from '../models/user.js';
import CrudRepository from './crud-repository.js';

class LikeRepository extends CrudRepository{
    constructor(){
        super(User);
    }
}

export default LikeRepository;