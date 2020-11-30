describe("Maior e Menor", function() {

    //Primeiro teste
    it("deve funcionar para números em ordem não sequencial",function(){
        let algoritmo = new MaiorEMenor();
        algoritmo.encontra([5,15,7,9]);

        //Expectativas
        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    //Segundo Teste
    it("deve funcionar para números em ordem decrescente", function(){
        let algoritmo = new MaiorEMenor();
        algoritmo.encontra([9,8,7,6]);

        //Expectativas
        expect(algoritmo.pegaMaior()).toEqual(9);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });

    //Terceiro Teste
    it("deve funcionar para números em ordem crescente", function(){
        let algoritmo = new MaiorEMenor();
        algoritmo.encontra([6,20,70,200]);

        //Expectativas
        expect(algoritmo.pegaMaior()).toEqual(200);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });

    //Último Teste
    it("deve funcionar para vetor de 1 caracter", function(){
        let algoritmo = new MaiorEMenor();
        algoritmo.encontra([6]);

        //Expectativas
        expect(algoritmo.pegaMaior()).toEqual(6);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });
});