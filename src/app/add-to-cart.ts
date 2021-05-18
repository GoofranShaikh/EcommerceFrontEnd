export class AddToCart {

        id:number;
        Name:string;
        get_absolute_url:string;
        description:string;
         price:number;
         get_image:string;
         get_thumbnail:string;
         qty:number
         isBoolean:boolean

        constructor(id:number,Name:string, get_absolute_url:string,description:string,price:number,get_image:string, get_thumbnail:string,qty=2, isBoolean:false){
                this.id=id
                this.Name=Name
                this.get_absolute_url=get_absolute_url
                this.description=description
                this.price=price
                this.get_image=get_image
                this.get_thumbnail=get_thumbnail
                this.qty=qty
                this.isBoolean=isBoolean
        }


}
