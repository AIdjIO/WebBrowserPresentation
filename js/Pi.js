function pi(n){
    
        var a0=6-4*Math.sqrt(2);
        var y0=Math.sqrt(2)-1;
        var i = 0;
        var yn;
        var an;

    while (i<n){

        yn = (1-(1-(y0**4))**(1/4))/(1+(1-y0**4)**(1/4));
        an = (1+yn)**4*a0-2**(2*i+3)*yn*(1+yn+yn**2);

        y0 = yn;
        a0 = an;
       
        
        i+=1;
        a = [n,y0,parseFloat(1/a0).toPrecision(60)];
    }
return(a);
}