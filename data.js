const productsInfo = [
    {
     id: 1,
     name: "La Mr. Pit",
     description: "Solo para expertos",
     price: 350,
     category: "pizzas",
     cardImg: "./assets/Photo Menu-1.png",
    },
    {
     id: 2,
     name: "¡Q'Jamone!",
     description:"c/ jamón crudo",
     price: 350 ,
    category: "pizzas" ,
    cardImg:"./assets/pizza-especial.jpg",
    }, 
    {
        id: 3,
        name: "Napo",
        description:"¡BASTA!",
        price: 380,
        category: "pizzas" ,
       cardImg: "./assets/napo.jpg",   
       },
    {
        id: 4,
        name: "Fugazzeta",
        description:"¡Eterna!" ,
        price: 450,
       category: "pizzas" ,
       cardImg: "./assets/fuga.jpg",  
       },
    {
        
    
        id: 5,
        name: "La Hasbulla",
        description:"En honor al 1" ,
        price: 990,
        category: "pizzas" ,
        cardImg: "./assets/hambugpizza.WEBP", 
       },
    {
        id: 6,
        name: "Leo Messi",
        description:"¡De pié señores" ,
        price: 10,
        category: "pizzas" ,
        cardImg: "./assets/pizza leo.jpg",    
       },
    {
        id: 7,
        name: "Cheeseburger",
        description:"Con queso cheddar",
        price: 300,
        category: "hamburguesas" ,
        cardImg:  "./assets/cheese.jpg" ,  
       },
       {
        id:8,
        name: "Hamburguesa c/ papas",
        description:"Viene con papas grandes" ,
        price: 600,
        category: "hamburguesas" ,
        cardImg:" ./assets/burger-papas.jpg" , 
       },
       {
        id: 9,
        name: "Hamburguesa Doble",
        description:"Doble medallón de carne" ,
        price: 450,
        category: "hamburguesas" ,
        cardImg:" ./assets/burger2.jfif" , 
       
       },
       {
        id: 10,
        name: "Salchipapas",
        description:"Papas con salchi",
        price: 350,
        category: "guarniciones" ,
        cardImg:" ./assets/salchi.jpg" , 
        
       },
       {
        id: 11,
        name: "Papas Provenzal",
        description:"Papas fritas con provenzal" ,
        price: 360,
        category: "guarniciones" ,
        cardImg:" ./assets/papas-provenzal.jpg" ,
        
       
       },
       {
        id: 12,
        name: "Papas con Cheddar",
        description:"bañadas en cheddar papu" ,
        price: 452,
        category: "guarniciones" ,
        cardImg:" ./assets/papas-cheddar.jfif" ,
       },
       {
        id:13 ,
        name: "Bastonsitos ",
        description:"rellenitos de queso" ,
        price: 250,
        category: "individuales" ,
        cardImg:" ./assets/bastones.jpg" ,
        
       },
       {
        id: 14,
        name: "Empanadas",
        description:"carne",
        price: 250,
       category: "individuales" ,
       cardImg:" ./assets/empanada.jpg" ,
       
       },
       {
        id: 15,
        name: "nachos",
        description:"nachos con guacamole" ,
        price: 250,
        category: "individuales" ,
        cardImg:" ./assets/doritos.jpg" ,
        
       },
       {
        id: 16,
        name: "Wrap veggie",
        description:" vegetales y champiñones" ,
        price: 450,
        category: "wraps" ,
        cardImg:" ./assets/wrap-veggie.jpg" ,
       
       },
       {
        id: 17,
        name: "Wrap de Pollo",
        description:"pollo y vegetales.",
        price: 450,
        category: "wraps" ,
        cardImg:" ./assets/wrap-pollo.jfif" ,
        
       },
       {
        id: 18,
        name: "Wrap de carne",
        description:"carne y vegetales" ,
        price: 480,
        category: "wraps" ,
        cardImg:" ./assets/wrap-carne.jpg" ,

       },
       {
        id: 19,
        name: "Taco",
        description:" veggie, carne o pollo" ,
        price: 500,
        category: "comida-mexicana",
        cardImg:" ./assets/tacos-mexicanos.jpg" ,

       },
       {
        id: 20,
        name: "Quesadilla",
        description:"Tortilla rellena de queso",
        price: 550,
        category: "comida-mexicana" ,
        cardImg:" ./assets/quesadillas.jpg" ,

       },
       {
        id: 21,
        name: "Nachos con queso",
        description:" bañados en queso cheddar",
        price: 450,
        category: "comida-mexicana" ,
        cardImg:" ./assets/nachos-queso.jpg" ,
       },
       {
        id: 22,
        name: "Batido de oreo",
        description:"helado de vainilla y galleta oreo",
        price: 450,
        category: "bebidas" ,
        cardImg:" ./assets/batido-oreo.jpg" ,
       },
       {
        id: 23,
        name: "Batido con dulce de leche",
        description:"Batido de vainilla y D&D",
        price: 450,
        category: "bebidas" ,
        cardImg:" ./assets/batido-dulce.jpg" ,

       },
       {
        id:24,
        name: "Batido de chocolate",
        description:"Batido con helado de chocolate" ,
        price: 450,
        category: "bebidas" ,
        cardImg:" ./assets/batido-choco.webp" ,
        
       },
    ]

function splitProduct(tamaño){
        let chunk=[];
        for(let i = 0; i < productsData.length ; i +=tamaño){
        chunk.push(productsData.slice(i , i +tamaño))
        }
        return chunk;   
    }
// const allProducts={
//       productList : splitProduct(6),
//       next : 1,
//       limit : splitProduct(6).length
//     }
    