const {sum,div,sub,mult,}=require("./OperacoesAritimeticas");

describe ("Conjunto de testes operações aritiméticas",()=>{
    it ("Somando 1+2 deve retornar 3",()=>{
        //cenário
        const esperado=3;
    
        //execução
        const resultado=sum(1,2);
    
        //validação
        expect(resultado).toBe(esperado);
    });
    it ("subtraindo 2-2 deve retornar 0",()=>{
         //cenário
         const esperado=0;
     
         //execução
         const resultado=sub(2,2);
     
         //validação
         expect(resultado).toBe(esperado);
     });
     it ("multiplicando 2*2 deve retornar 4",()=>{
        //cenário
        const esperado=4;
    
        //execução
        const resultado=mult(2,2);
    
        //validação
        expect(resultado).toBe(esperado);
    });
    it ("dividindo 10/2 deve retornar 5",()=>{
        //cenário
        const esperado=5;
    
        //execução
        const resultado=div(10,2);
    
        //validação
        expect(resultado).toBe(esperado);
    });

 })
