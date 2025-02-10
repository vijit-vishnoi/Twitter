class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        try{
            const result=await this.model.create(data);
            return result;
        } catch(error){
            console.log("Something 1 went wrong in crud repo");
            throw error;
        }
    }

    async destroy(id){
        try{
            const result=await this.model.findByIdAndDelete(id);
            return result;
        } catch(error){
            console.log("Something 2 went wrong in crud repo");
            throw error;
        }
    }
    async get(id){
        try{
            const result=await this.model.findById(id);
            return result;
        } catch(error){
            console.log("Something 3 went wrong in crud repo");
            throw error;
        }
    }
    async getAll(){
        try{
            const result=await this.model.find({});
            return result;
        } catch(error){
            console.log("Something 4 went wrong in crud repo");
            throw error;
        }
    }
    async update(id,data){
        try{
            const result=await this.model.findByIdAndUpdate(id,data,{new:true});
            return result;
        } catch(error){
            console.log("Something 5 went wrong in crud repo");
            throw error;
        }
    }
}

export default CrudRepository